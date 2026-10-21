const PptxGenJS = require('pptxgenjs');
const pptx = new PptxGenJS();

// ─── Theme Colors ───────────────────────────────────────────────
const ORANGE   = 'F97316';
const DARK     = '1E1B18';
const WHITE    = 'FFFFFF';
const LIGHT_BG = 'FFF7ED';
const GRAY     = '6B7280';
const GREEN    = '16A34A';
const RED      = 'DC2626';
const BLUE     = '2563EB';
const DARK_ORANGE = 'EA580C';

pptx.layout = 'LAYOUT_WIDE'; // 13.33 x 7.5 inches

// ═══════════════════════════════════════════════════════════════
// SLIDE 1 — TITLE / PRODUCT LINE
// ═══════════════════════════════════════════════════════════════
{
  const s = pptx.addSlide();
  s.background = { color: DARK };

  // Orange accent bar top
  s.addShape(pptx.ShapeType.rect, { x: 0, y: 0, w: 13.33, h: 0.12, fill: { color: ORANGE } });

  // Logo circle
  s.addShape(pptx.ShapeType.ellipse, { x: 0.5, y: 0.4, w: 1.1, h: 1.1, fill: { color: ORANGE } });
  s.addText('🍴', { x: 0.5, y: 0.48, w: 1.1, h: 0.9, fontSize: 30, align: 'center' });

  // Title
  s.addText('CampusEats', {
    x: 1.8, y: 0.35, w: 8, h: 0.85,
    fontSize: 52, bold: true, color: WHITE, fontFace: 'Segoe UI'
  });
  s.addText('FAST PICKUP · SMART DINING', {
    x: 1.82, y: 1.18, w: 8, h: 0.4,
    fontSize: 14, color: ORANGE, bold: true, charSpacing: 3
  });

  // Tagline
  s.addText('Skip the counter rush. Order ahead.', {
    x: 0.5, y: 2.0, w: 12.33, h: 0.6,
    fontSize: 26, color: 'F3F4F6', italic: true, align: 'center'
  });

  // 3-column product line cards
  const cards = [
    { icon: '🧑‍🎓', title: 'Student Portal', desc: 'Browse menus, preorder\nwith pickup time, track\norders in real-time' },
    { icon: '👨‍🍳', title: 'Kitchen Board', desc: 'Live order queue for\nstaff — accept, prepare\n& mark ready' },
    { icon: '📊', title: 'Admin Dashboard', desc: 'Menu management,\nsales analytics &\nstaff control' },
  ];
  cards.forEach((c, i) => {
    const x = 0.5 + i * 4.28;
    s.addShape(pptx.ShapeType.roundRect, { x, y: 2.9, w: 4.0, h: 2.5, rectRadius: 0.18, fill: { color: '2D2926' }, line: { color: ORANGE, width: 1.5 } });
    s.addText(c.icon, { x, y: 3.0, w: 4.0, h: 0.6, fontSize: 26, align: 'center' });
    s.addText(c.title, { x, y: 3.6, w: 4.0, h: 0.4, fontSize: 16, bold: true, color: ORANGE, align: 'center' });
    s.addText(c.desc, { x, y: 4.05, w: 4.0, h: 1.1, fontSize: 11.5, color: 'D1D5DB', align: 'center' });
  });

  // Bottom info
  s.addText('UIU — DBMS Lab Project  |  Team: Mostakim · Rafiu · Farjana · Tahmid · Reduan', {
    x: 0.5, y: 6.85, w: 12.33, h: 0.35,
    fontSize: 11, color: GRAY, align: 'center'
  });
  s.addText('Live: campus-eats-gamma.vercel.app', {
    x: 0.5, y: 7.15, w: 12.33, h: 0.25,
    fontSize: 10, color: ORANGE, align: 'center'
  });

  // Orange bar bottom
  s.addShape(pptx.ShapeType.rect, { x: 0, y: 7.38, w: 13.33, h: 0.12, fill: { color: ORANGE } });
}

// ═══════════════════════════════════════════════════════════════
// SLIDE 2 — MOTIVATION
// ═══════════════════════════════════════════════════════════════
{
  const s = pptx.addSlide();
  s.background = { color: WHITE };
  s.addShape(pptx.ShapeType.rect, { x: 0, y: 0, w: 13.33, h: 0.12, fill: { color: ORANGE } });

  s.addText('💡 Motivation', {
    x: 0.5, y: 0.25, w: 12.33, h: 0.6,
    fontSize: 30, bold: true, color: DARK
  });
  s.addShape(pptx.ShapeType.rect, { x: 0.5, y: 0.88, w: 2.2, h: 0.06, fill: { color: ORANGE } });

  // Problem side
  s.addText('The Problem at UIU Canteens', {
    x: 0.5, y: 1.15, w: 5.8, h: 0.4,
    fontSize: 16, bold: true, color: RED
  });

  const problems = [
    '😤  Long queues during lunch breaks (12-2 PM)',
    '⏱️  Students miss class time waiting for food',
    '❓  No way to know what is available before arrival',
    '💸  Impulse overspending with no budget awareness',
    '🤦  Staff overwhelmed by sudden rush - no prep time',
    '🚫  No accountability for order no-shows',
  ];
  problems.forEach((p, i) => {
    s.addText(p, {
      x: 0.5, y: 1.65 + i * 0.48, w: 5.8, h: 0.42,
      fontSize: 12.5, color: DARK
    });
  });

  // Arrow
  s.addText('→', { x: 6.55, y: 3.4, w: 0.6, h: 0.6, fontSize: 36, color: ORANGE, bold: true });

  // Solution side
  s.addShape(pptx.ShapeType.roundRect, {
    x: 7.3, y: 1.1, w: 5.5, h: 5.6, rectRadius: 0.2,
    fill: { color: 'FFF7ED' }, line: { color: ORANGE, width: 2 }
  });
  s.addText('CampusEats Solution', {
    x: 7.4, y: 1.2, w: 5.3, h: 0.4,
    fontSize: 16, bold: true, color: ORANGE, align: 'center'
  });

  const solutions = [
    ['Pre-order with pickup time', 'Students order ahead, kitchen prepares in advance'],
    ['Live menu visibility', 'See what's available from any canteen, anytime'],
    ['Daily budget guardrail', 'Set a spending limit, get blocked if exceeded'],
    ['Loyalty reward system', 'Earn points every ৳100 spent, redeem for discounts'],
    ['No-show penalty system', '3 strikes auto-block — enforces accountability'],
    ['Real-time order tracking', 'Socket.io push updates every status change'],
  ];
  solutions.forEach(([title, desc], i) => {
    s.addText('✅ ' + title, {
      x: 7.4, y: 1.75 + i * 0.8, w: 5.2, h: 0.3,
      fontSize: 12.5, bold: true, color: DARK
    });
    s.addText('    ' + desc, {
      x: 7.4, y: 2.05 + i * 0.8, w: 5.2, h: 0.3,
      fontSize: 10.5, color: GRAY
    });
  });

  s.addShape(pptx.ShapeType.rect, { x: 0, y: 7.38, w: 13.33, h: 0.12, fill: { color: ORANGE } });
}

// ═══════════════════════════════════════════════════════════════
// SLIDE 3 — HIGH LEVEL ARCHITECTURE DIAGRAM
// ═══════════════════════════════════════════════════════════════
{
  const s = pptx.addSlide();
  s.background = { color: '0F172A' };
  s.addShape(pptx.ShapeType.rect, { x: 0, y: 0, w: 13.33, h: 0.12, fill: { color: ORANGE } });

  s.addText('🏗️ High-Level Architecture', {
    x: 0.5, y: 0.2, w: 12.33, h: 0.55,
    fontSize: 28, bold: true, color: WHITE
  });

  // ── LAYER 1: Client (Users)
  const clientY = 1.05;
  const clients = [
    { icon: '🧑‍🎓', label: 'Student\nBrowser', col: 0 },
    { icon: '👨‍🍳', label: 'Kitchen\nStaff Browser', col: 1 },
    { icon: '📊', label: 'Admin\nBrowser', col: 2 },
  ];
  s.addText('CLIENT LAYER', { x: 0.5, y: clientY - 0.05, w: 12.33, h: 0.28, fontSize: 9, color: ORANGE, bold: true, charSpacing: 2 });
  clients.forEach(({ icon, label, col }) => {
    s.addShape(pptx.ShapeType.roundRect, { x: 0.6 + col * 4.15, y: clientY + 0.2, w: 3.6, h: 0.95, rectRadius: 0.12, fill: { color: '1E3A5F' }, line: { color: '3B82F6', width: 1.5 } });
    s.addText(icon + ' ' + label.replace('\n', ' — '), { x: 0.6 + col * 4.15, y: clientY + 0.38, w: 3.6, h: 0.55, fontSize: 12.5, color: WHITE, align: 'center', bold: true });
  });

  // Arrows down
  const arrowY = 2.35;
  s.addText('HTTP/REST (Axios)          HTTP/REST (Axios)          HTTP/REST (Axios)', {
    x: 0.5, y: arrowY, w: 12.33, h: 0.25, fontSize: 10, color: '94A3B8', align: 'center'
  });
  s.addText('↓                                    ↓                                    ↓', {
    x: 0.5, y: arrowY + 0.22, w: 12.33, h: 0.25, fontSize: 12, color: ORANGE, align: 'center'
  });

  // ── LAYER 2: Frontend
  const feY = 2.9;
  s.addText('FRONTEND LAYER (Vercel)', { x: 0.5, y: feY, w: 12.33, h: 0.28, fontSize: 9, color: ORANGE, bold: true, charSpacing: 2 });
  s.addShape(pptx.ShapeType.roundRect, { x: 0.5, y: feY + 0.25, w: 12.33, h: 0.8, rectRadius: 0.12, fill: { color: '1C2D1C' }, line: { color: GREEN, width: 1.5 } });
  s.addText('⚛️  React 18 + Vite  |  Tailwind CSS  |  React Router v6  |  Axios  |  Socket.io Client  |  Context API', {
    x: 0.5, y: feY + 0.47, w: 12.33, h: 0.38, fontSize: 12, color: WHITE, align: 'center', bold: true
  });

  // Arrow
  s.addText('↕  REST API (JSON)  +  WebSocket (Socket.io)', {
    x: 0.5, y: 4.15, w: 12.33, h: 0.3, fontSize: 10.5, color: '94A3B8', align: 'center'
  });

  // ── LAYER 3: Backend
  const beY = 4.52;
  s.addText('BACKEND LAYER (Render — Node.js)', { x: 0.5, y: beY, w: 12.33, h: 0.28, fontSize: 9, color: ORANGE, bold: true, charSpacing: 2 });

  const beBoxes = [
    { label: 'Express\nREST API', sub: '7 Route groups\n7 Controllers', x: 0.55, clr: '3B1F00' },
    { label: 'Auth\nMiddleware', sub: 'JWT verify\nRole guard', x: 3.5, clr: '1A1F3A' },
    { label: 'Socket.io\nServer', sub: 'Real-time\nPush events', x: 6.45, clr: '1A3A1F' },
    { label: 'node-cron\nScheduler', sub: 'No-show\nEvery 5 min', x: 9.4, clr: '3A1A1A' },
  ];
  beBoxes.forEach(({ label, sub, x, clr }) => {
    s.addShape(pptx.ShapeType.roundRect, { x, y: beY + 0.28, w: 2.75, h: 1.1, rectRadius: 0.12, fill: { color: clr }, line: { color: ORANGE, width: 1.2 } });
    s.addText(label, { x, y: beY + 0.35, w: 2.75, h: 0.45, fontSize: 12, color: WHITE, align: 'center', bold: true });
    s.addText(sub, { x, y: beY + 0.82, w: 2.75, h: 0.45, fontSize: 9.5, color: ORANGE, align: 'center' });
  });

  // Arrow
  s.addText('↕  mysql2 Connection Pool (max 10 connections)', {
    x: 0.5, y: 6.05, w: 12.33, h: 0.28, fontSize: 10.5, color: '94A3B8', align: 'center'
  });

  // ── LAYER 4: Database
  s.addShape(pptx.ShapeType.roundRect, { x: 0.5, y: 6.35, w: 12.33, h: 0.7, rectRadius: 0.12, fill: { color: '1A0A2E' }, line: { color: '7C3AED', width: 1.5 } });
  s.addText('🗄️  MySQL (Railway Cloud)  |  7 Tables: canteens · users · menu_items · orders · order_items · reviews · notifications', {
    x: 0.5, y: 6.52, w: 12.33, h: 0.38, fontSize: 11.5, color: WHITE, align: 'center', bold: true
  });

  s.addShape(pptx.ShapeType.rect, { x: 0, y: 7.38, w: 13.33, h: 0.12, fill: { color: ORANGE } });
}

// ═══════════════════════════════════════════════════════════════
// SLIDE 4 — CORE FUNCTIONALITIES
// ═══════════════════════════════════════════════════════════════
{
  const s = pptx.addSlide();
  s.background = { color: WHITE };
  s.addShape(pptx.ShapeType.rect, { x: 0, y: 0, w: 13.33, h: 0.12, fill: { color: ORANGE } });

  s.addText('⚙️ Core Functionalities', {
    x: 0.5, y: 0.22, w: 12.33, h: 0.55,
    fontSize: 28, bold: true, color: DARK
  });
  s.addShape(pptx.ShapeType.rect, { x: 0.5, y: 0.78, w: 2.5, h: 0.06, fill: { color: ORANGE } });

  const features = [
    {
      icon: '🔐', title: 'Authentication & Authorization',
      points: ['bcrypt hashed passwords (10 salt rounds)', 'JWT tokens (7-day expiry) stored in localStorage', 'Role-based access: user / kitchen_staff / local_admin / super_admin', 'Protected routes — unauthorized redirect to /login'],
      clr: '1E3A5F'
    },
    {
      icon: '🍔', title: 'Multi-Canteen Menu with Smart Filtering',
      points: ['139 real UIU dishes from Khan\'s, Olympia, Cafe Neptune', 'Filter by canteen, price range, min rating, search text', '3-table JOIN: menu_items + canteens + reviews in one query', 'Live avg_rating via AVG() + GROUP BY'],
      clr: '1A3A1A'
    },
    {
      icon: '📦', title: 'Pre-Order with 5-Layer Validation',
      points: ['Block check → Canteen open check → Stock check', 'Daily budget guardrail (SUM of today\'s orders)', 'Prep-time based pickup window (7AM–7PM only)', 'ACID Transaction: orders + order_items + loyalty update'],
      clr: '3B1F00'
    },
    {
      icon: '🔄', title: 'Order State Machine',
      points: ['pending → accepted → preparing → ready → picked_up', 'No backward or skip transitions allowed', 'Cancel only before "preparing" stage', 'no_show auto-triggered by cron if not picked up in 30 min'],
      clr: '3A1A1A'
    },
    {
      icon: '🔔', title: 'Real-Time Notifications',
      points: ['Socket.io rooms: user_{id} and canteen_{id}', 'Kitchen sees new orders instantly (no refresh)', 'Students get live status updates on every change', 'Stored in notifications table for history'],
      clr: '1A1F3A'
    },
    {
      icon: '⭐', title: 'Review System + Analytics',
      points: ['Reviews only allowed after status = \'picked_up\'', 'One review per user per item (UNIQUE constraint)', 'Admin analytics: revenue, peak hours, top-5 items', 'Uses SUM(), GROUP BY, HOUR(), ORDER BY DESC LIMIT 5'],
      clr: '1C1A3A'
    },
  ];

  features.forEach((f, i) => {
    const col = i % 2;
    const row = Math.floor(i / 2);
    const x = 0.4 + col * 6.5;
    const y = 1.0 + row * 2.1;
    s.addShape(pptx.ShapeType.roundRect, { x, y, w: 6.15, h: 1.95, rectRadius: 0.15, fill: { color: f.clr }, line: { color: ORANGE, width: 1.2 } });
    s.addText(f.icon + '  ' + f.title, { x: x + 0.15, y: y + 0.08, w: 5.85, h: 0.38, fontSize: 13, bold: true, color: WHITE });
    f.points.forEach((p, pi) => {
      s.addText('• ' + p, { x: x + 0.2, y: y + 0.5 + pi * 0.34, w: 5.75, h: 0.32, fontSize: 10.5, color: 'D1D5DB' });
    });
  });

  s.addShape(pptx.ShapeType.rect, { x: 0, y: 7.38, w: 13.33, h: 0.12, fill: { color: ORANGE } });
}

// ═══════════════════════════════════════════════════════════════
// SLIDE 5 — SCREENSHOTS / FEATURE SHOWCASE
// ═══════════════════════════════════════════════════════════════
{
  const s = pptx.addSlide();
  s.background = { color: '111827' };
  s.addShape(pptx.ShapeType.rect, { x: 0, y: 0, w: 13.33, h: 0.12, fill: { color: ORANGE } });

  s.addText('📸 Feature Showcase', {
    x: 0.5, y: 0.22, w: 12.33, h: 0.5,
    fontSize: 28, bold: true, color: WHITE
  });

  const screens = [
    { title: '🏠 Student Homepage', url: 'campus-eats-gamma.vercel.app', desc: '139 dishes, filter by price/rating/canteen, Compare button, Cart drawer', clr: '1E3A5F' },
    { title: '🛒 Cart + Pre-Order', url: '/cart → checkout', desc: 'Pickup time picker (7AM–7PM), budget check, loyalty redemption, Transaction', clr: '1A3A1A' },
    { title: '⚖️ Side-by-Side Compare', url: '/compare', desc: 'Price, prep time & rating comparison, sessionStorage persist, single endpoint', clr: '3B1F00' },
    { title: '👨‍🍳 Kitchen Board', url: '/kitchen', desc: 'Real-time order queue via Socket.io, Accept → Preparing → Ready actions', clr: '1A1F3A' },
    { title: '📊 Admin Analytics', url: '/admin → Analytics tab', desc: 'Revenue chart, peak hour heatmap, top-5 best sellers, penalty management', clr: '3A1A1A' },
    { title: '⭐ Review & Orders', url: '/orders', desc: 'Rate only picked-up items, star rating, comment — avg auto-updates on menu', clr: '1C1A3A' },
  ];

  screens.forEach((sc, i) => {
    const col = i % 3;
    const row = Math.floor(i / 3);
    const x = 0.38 + col * 4.35;
    const y = 0.95 + row * 2.95;

    s.addShape(pptx.ShapeType.roundRect, { x, y, w: 4.1, h: 2.75, rectRadius: 0.15, fill: { color: sc.clr }, line: { color: ORANGE, width: 1.5 } });

    // "Screen" mock
    s.addShape(pptx.ShapeType.roundRect, { x: x + 0.1, y: y + 0.08, w: 3.9, h: 1.55, rectRadius: 0.1, fill: { color: '0F172A' }, line: { color: '374151', width: 0.5 } });
    s.addText('[ ' + sc.url + ' ]', { x: x + 0.1, y: y + 0.55, w: 3.9, h: 0.55, fontSize: 10, color: ORANGE, align: 'center', italic: true });

    s.addText(sc.title, { x: x + 0.1, y: y + 1.7, w: 3.9, h: 0.35, fontSize: 12.5, bold: true, color: WHITE, align: 'center' });
    s.addText(sc.desc, { x: x + 0.12, y: y + 2.08, w: 3.86, h: 0.55, fontSize: 9.5, color: 'D1D5DB', align: 'center' });
  });

  s.addShape(pptx.ShapeType.rect, { x: 0, y: 7.38, w: 13.33, h: 0.12, fill: { color: ORANGE } });
}

// ═══════════════════════════════════════════════════════════════
// SLIDE 6 — ERD INITIAL vs FINAL
// ═══════════════════════════════════════════════════════════════
{
  const s = pptx.addSlide();
  s.background = { color: WHITE };
  s.addShape(pptx.ShapeType.rect, { x: 0, y: 0, w: 13.33, h: 0.12, fill: { color: ORANGE } });

  s.addText('🗂️ ERD: Initial Plan vs Final Implementation', {
    x: 0.5, y: 0.22, w: 12.33, h: 0.52,
    fontSize: 26, bold: true, color: DARK
  });
  s.addShape(pptx.ShapeType.rect, { x: 0.5, y: 0.75, w: 4.5, h: 0.05, fill: { color: ORANGE } });

  // Left - Initial
  s.addShape(pptx.ShapeType.roundRect, { x: 0.3, y: 0.9, w: 5.9, h: 6.3, rectRadius: 0.15, fill: { color: 'FEF2F2' }, line: { color: RED, width: 1.5 } });
  s.addText('📋 Initial ERD (from Proposal)', { x: 0.4, y: 1.0, w: 5.7, h: 0.4, fontSize: 15, bold: true, color: RED, align: 'center' });

  const initialTables = [
    ['users', 'id, name, email, password_hash, role, canteen_id'],
    ['canteens', 'id, name, location, is_open'],
    ['menu_items', 'id, canteen_id, name, price, image_url, is_available'],
    ['orders', 'id, user_id, canteen_id, total_amount, status, pickup_time'],
    ['order_items', 'id, order_id, menu_item_id, quantity, price_at_time'],
    ['reviews', 'id, user_id, menu_item_id, rating, comment'],
  ];
  initialTables.forEach(([tbl, cols], i) => {
    s.addShape(pptx.ShapeType.roundRect, { x: 0.45, y: 1.52 + i * 0.82, w: 5.6, h: 0.72, rectRadius: 0.1, fill: { color: WHITE }, line: { color: 'FCA5A5', width: 1 } });
    s.addText(tbl, { x: 0.55, y: 1.56 + i * 0.82, w: 1.5, h: 0.3, fontSize: 11, bold: true, color: RED });
    s.addText(cols, { x: 0.55, y: 1.86 + i * 0.82, w: 5.4, h: 0.28, fontSize: 9, color: GRAY });
  });

  // Right - Final
  s.addShape(pptx.ShapeType.roundRect, { x: 7.0, y: 0.9, w: 6.0, h: 6.3, rectRadius: 0.15, fill: { color: 'F0FDF4' }, line: { color: GREEN, width: 1.5 } });
  s.addText('✅ Final ERD (Implemented)', { x: 7.1, y: 1.0, w: 5.8, h: 0.4, fontSize: 15, bold: true, color: GREEN, align: 'center' });

  const finalTables = [
    ['users', 'id, name, email, password_hash, role, canteen_id', '+ daily_budget_limit, loyalty_points, penalty_flags, is_blocked'],
    ['canteens', 'id, name, location, is_open, created_at', '(same)'],
    ['menu_items', 'id, canteen_id, name, price, image_url, is_available', '+ est_prep_time_mins, description, was_available_before_close'],
    ['orders', 'id, user_id, canteen_id, total_amount, status', '+ points_redeemed, points_earned, requested_pickup_time'],
    ['order_items', 'id, order_id, menu_item_id, quantity, price_at_time', '(same)'],
    ['reviews', 'id, user_id, menu_item_id, rating, comment', '+ UNIQUE(user_id, menu_item_id) constraint'],
    ['notifications', '⭐ NEW TABLE — not in initial plan', 'id, user_id, title, message, is_read, created_at'],
  ];
  finalTables.forEach(([tbl, cols, extra], i) => {
    const isNew = tbl === 'notifications';
    s.addShape(pptx.ShapeType.roundRect, { x: 7.1, y: 1.52 + i * 0.7, w: 5.8, h: 0.62, rectRadius: 0.1, fill: { color: isNew ? 'ECFDF5' : WHITE }, line: { color: isNew ? GREEN : '86EFAC', width: isNew ? 1.5 : 1 } });
    s.addText(tbl, { x: 7.2, y: 1.55 + i * 0.7, w: 1.6, h: 0.26, fontSize: 10.5, bold: true, color: isNew ? GREEN : DARK });
    s.addText(cols, { x: 7.2, y: 1.8 + i * 0.7, w: 5.6, h: 0.2, fontSize: 8.5, color: GRAY });
    if (extra !== '(same)') {
      s.addText('🆕 ' + extra, { x: 7.2, y: 1.99 + i * 0.7, w: 5.6, h: 0.2, fontSize: 8, color: GREEN });
    }
  });

  // Middle divider label
  s.addText('VS', { x: 6.17, y: 3.7, w: 0.65, h: 0.6, fontSize: 20, bold: true, color: ORANGE, align: 'center' });

  s.addShape(pptx.ShapeType.rect, { x: 0, y: 7.38, w: 13.33, h: 0.12, fill: { color: ORANGE } });
}

// ═══════════════════════════════════════════════════════════════
// SLIDE 7 — CHALLENGES & LEARNINGS
// ═══════════════════════════════════════════════════════════════
{
  const s = pptx.addSlide();
  s.background = { color: '0F172A' };
  s.addShape(pptx.ShapeType.rect, { x: 0, y: 0, w: 13.33, h: 0.12, fill: { color: ORANGE } });

  s.addText('🚧 Challenges Faced & 🎓 Learnings Achieved', {
    x: 0.5, y: 0.2, w: 12.33, h: 0.55,
    fontSize: 24, bold: true, color: WHITE
  });

  const items = [
    {
      challenge: 'Remote DB Isolation\nRailway private DNS unreachable from Render (different cloud providers)',
      learning: 'Learned about TCP proxy configuration, cloud network boundaries, and how to use public endpoints with environment variables securely',
      icon: '🌐'
    },
    {
      challenge: 'CORS in Production\nVercel → Render cross-origin requests blocked by browser policy',
      learning: 'Deep understanding of CORS, preflight requests, and how to configure dynamic origin whitelisting in Express',
      icon: '🔒'
    },
    {
      challenge: 'Query Performance\nComparing dishes across canteens caused full-table scans (slow)',
      learning: 'Learned to add B-Tree indexes on Foreign Keys, write JOIN-optimized queries, and design a dedicated comparison endpoint',
      icon: '⚡'
    },
    {
      challenge: 'ACID Transactions\nPartial order inserts left database in inconsistent state during testing',
      learning: 'Implemented BEGIN/COMMIT/ROLLBACK pattern — understood why atomic transactions are essential for financial data integrity',
      icon: '🔄'
    },
    {
      challenge: 'Real-Time Without Polling\nInitially refreshed page to see order updates — poor UX',
      learning: 'Integrated Socket.io with room-based architecture — canteen_{id} and user_{id} rooms for targeted event delivery',
      icon: '📡'
    },
    {
      challenge: 'No-Show Enforcement\nManual admin checks were unreliable and time-consuming',
      learning: 'Built automated cron job (node-cron, every 5 min) — learned about background schedulers and penalty state machines',
      icon: '⏰'
    },
    {
      challenge: 'Star Icon Bug in CompareModal\nWhite screen crash when comparing 2 items (ReferenceError: Star)',
      learning: 'Root cause analysis with React error boundaries — learned to audit all imports and use version control to isolate regressions',
      icon: '🐛'
    },
  ];

  items.forEach((item, i) => {
    const col = i < 4 ? 0 : 1;
    const row = i < 4 ? i : i - 4;
    const x = col === 0 ? 0.35 : 6.85;
    const y = 0.98 + row * 1.6;
    const h = 1.45;

    s.addShape(pptx.ShapeType.roundRect, { x, y, w: 6.2, h, rectRadius: 0.14, fill: { color: '1E293B' }, line: { color: ORANGE, width: 1 } });
    s.addText(item.icon + '  Challenge:', { x: x + 0.15, y: y + 0.08, w: 5.9, h: 0.3, fontSize: 11, bold: true, color: RED });
    s.addText(item.challenge, { x: x + 0.18, y: y + 0.35, w: 5.85, h: 0.42, fontSize: 10, color: 'FCA5A5' });
    s.addText('💡  Learning:', { x: x + 0.15, y: y + 0.77, w: 5.9, h: 0.25, fontSize: 11, bold: true, color: GREEN });
    s.addText(item.learning, { x: x + 0.18, y: y + 1.0, w: 5.85, h: 0.38, fontSize: 9.5, color: '86EFAC' });
  });

  // The 7th item placed in column 1, row 3
  // already handled in loop above for i=6 → col=1, row=3 → y=0.98+3*1.6=5.78

  s.addShape(pptx.ShapeType.rect, { x: 0, y: 7.38, w: 13.33, h: 0.12, fill: { color: ORANGE } });
}

// ═══════════════════════════════════════════════════════════════
// SAVE
// ═══════════════════════════════════════════════════════════════
pptx.writeFile({ fileName: 'CampusEats_Final_Presentation.pptx' })
  .then(() => console.log('✅ CampusEats_Final_Presentation.pptx saved!'))
  .catch(err => console.error('❌ Error:', err));
