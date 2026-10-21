const pptxgen = require('pptxgenjs');

const pptx = new pptxgen();
pptx.layout = 'LAYOUT_16x9';

// Slide definition
const slide = pptx.addSlide();
slide.background = { color: 'F8FAFC' };

// Header Bar
slide.addShape(pptx.ShapeType.rect, {
  x: 0.5,
  y: 0.35,
  w: 12.33,
  h: 1.15,
  fill: { color: 'FFFFFF' },
  line: { color: 'E2E8F0', width: 1 }
});

// Title & Subtitle
slide.addText('CampusEats – Skip the Lunch Queue (UIU Smart Canteen)', {
  x: 0.7,
  y: 0.45,
  w: 8.5,
  h: 0.45,
  fontSize: 20,
  fontFace: 'Calibri',
  bold: true,
  color: '1E293B'
});

slide.addText('Sprint 1 & 2 Progress Update (2-Week Milestone) | Course: DBMS Lab (CSE) | Live Demo: campus-eats-gamma.vercel.app', {
  x: 0.7,
  y: 0.95,
  w: 8.5,
  h: 0.35,
  fontSize: 10.5,
  fontFace: 'Calibri',
  color: 'EA580C',
  bold: true
});

// Team Badge
slide.addText('Team: Fokir Mostakim Billa Sobuj (Lead), Reduan, Tahmid, Rafiu, Farjana\nCourse Faculty: Md. Golam Hossain', {
  x: 8.5,
  y: 0.45,
  w: 4.1,
  h: 0.9,
  fontSize: 9.5,
  fontFace: 'Calibri',
  color: '64748B',
  align: 'right'
});

// -------------------------------------------------------------
// BOX 1: PROGRESS MADE SO FAR (Week 1 & Week 2 ONLY)
// -------------------------------------------------------------
slide.addShape(pptx.ShapeType.roundRect, {
  x: 0.5,
  y: 1.65,
  w: 3.95,
  h: 5.35,
  rectRadius: 0.1,
  fill: { color: 'FFFFFF' },
  line: { color: '10B981', width: 2 }
});

slide.addShape(pptx.ShapeType.roundRect, {
  x: 0.5,
  y: 1.65,
  w: 3.95,
  h: 0.55,
  rectRadius: 0.1,
  fill: { color: 'ECFDF5' },
  line: { color: '10B981', width: 0.5 }
});

slide.addText('1. Progress Made (Week 1 & 2)', {
  x: 0.65,
  y: 1.75,
  w: 3.65,
  h: 0.35,
  fontSize: 13,
  fontFace: 'Calibri',
  bold: true,
  color: '065F46'
});

slide.addText([
  { text: '✓ Week 1: Database & Authentication:\n', options: { bold: true, color: '0F172A', fontSize: 10 } },
  { text: '  • Relational schema designed & hosted on Railway MySQL.\n  • Populated with 139+ authentic UIU canteen dishes across 3 active cafeterias (Khan\'s, Olympia, Neptune).\n  • User Registration & Login with Bcrypt password hashing (10 salt rounds) and JWT verification.\n\n', options: { color: '334155', fontSize: 9 } },
  
  { text: '✓ Week 2: Ordering, Compare & Reviews:\n', options: { bold: true, color: '0F172A', fontSize: 10 } },
  { text: '  • Interactive Food Cart with dynamic daily spending limit guardrails for students.\n  • Pre-order scheduling with custom requested pickup time.\n  • Cross-Canteen Food Comparison Tray: Side-by-side comparison of price, prep-time & ratings.\n  • Dish Review & Star Rating system linked with user orders.\n\n', options: { color: '334155', fontSize: 9 } },
  
  { text: '✓ Live Cloud Deployment:\n', options: { bold: true, color: '0F172A', fontSize: 10 } },
  { text: '  • Frontend deployed on Vercel & Backend API live on Render.', options: { color: '334155', fontSize: 9 } }
], {
  x: 0.65,
  y: 2.3,
  w: 3.65,
  h: 4.55,
  fontFace: 'Calibri',
  paraSpaceAfter: 3
});

// -------------------------------------------------------------
// BOX 2: BLOCKERS & RESOLUTIONS (Encountered in Sprint 1 & 2)
// -------------------------------------------------------------
slide.addShape(pptx.ShapeType.roundRect, {
  x: 4.69,
  y: 1.65,
  w: 3.95,
  h: 5.35,
  rectRadius: 0.1,
  fill: { color: 'FFFFFF' },
  line: { color: 'F59E0B', width: 2 }
});

slide.addShape(pptx.ShapeType.roundRect, {
  x: 4.69,
  y: 1.65,
  w: 3.95,
  h: 0.55,
  rectRadius: 0.1,
  fill: { color: 'FFFBEB' },
  line: { color: 'F59E0B', width: 0.5 }
});

slide.addText('2. Blockers & Resolutions', {
  x: 4.84,
  y: 1.75,
  w: 3.65,
  h: 0.35,
  fontSize: 13,
  fontFace: 'Calibri',
  bold: true,
  color: '92400E'
});

slide.addText([
  { text: '• Remote Database Cloud Isolation:\n', options: { bold: true, color: '0F172A', fontSize: 10 } },
  { text: '  - Blocker: Railway private DNS was unreachable from external Render backend.\n  - Resolution: Enabled public TCP proxy endpoints and configured resilient connection pooling (mysql2/promise).\n\n', options: { color: '334155', fontSize: 9 } },
  
  { text: '• Cross-Origin & Environment Sync:\n', options: { bold: true, color: '0F172A', fontSize: 10 } },
  { text: '  - Blocker: Browser CORS policies blocked Vercel requests to Render API in production.\n  - Resolution: Configured dynamic CORS whitelist & injected VITE_API_URL environment build variables.\n\n', options: { color: '334155', fontSize: 9 } },
  
  { text: '• Cross-Canteen Query Latency:\n', options: { bold: true, color: '0F172A', fontSize: 10 } },
  { text: '  - Blocker: Comparing dishes across multiple canteens needed multiple table scans.\n  - Resolution: Indexed foreign keys and created an optimized comparison REST endpoint.', options: { color: '334155', fontSize: 9 } }
], {
  x: 4.84,
  y: 2.3,
  w: 3.65,
  h: 4.55,
  fontFace: 'Calibri',
  paraSpaceAfter: 3
});

// -------------------------------------------------------------
// BOX 3: REMAINING FEATURES (Roadmap for Week 3 & 4)
// -------------------------------------------------------------
slide.addShape(pptx.ShapeType.roundRect, {
  x: 8.88,
  y: 1.65,
  w: 3.95,
  h: 5.35,
  rectRadius: 0.1,
  fill: { color: 'FFFFFF' },
  line: { color: '3B82F6', width: 2 }
});

slide.addShape(pptx.ShapeType.roundRect, {
  x: 8.88,
  y: 1.65,
  w: 3.95,
  h: 0.55,
  rectRadius: 0.1,
  fill: { color: 'EFF6FF' },
  line: { color: '3B82F6', width: 0.5 }
});

slide.addText('3. Remaining Features (W3 & W4)', {
  x: 9.03,
  y: 1.75,
  w: 3.65,
  h: 0.35,
  fontSize: 13,
  fontFace: 'Calibri',
  bold: true,
  color: '1E40AF'
});

slide.addText([
  { text: '• Week 3 Milestone (Upcoming):\n', options: { bold: true, color: '0F172A', fontSize: 10 } },
  { text: '  - Kitchen Staff Portal: Live order display board for chefs to accept orders and mark "Food Ready".\n  - Estimated Wait Time calculation based on active kitchen load.\n  - Student Loyalty Points & discount redemption engine at checkout.\n\n', options: { color: '334155', fontSize: 9 } },
  
  { text: '• Week 4 Milestone (Upcoming):\n', options: { bold: true, color: '0F172A', fontSize: 10 } },
  { text: '  - Automated 30-min No-Show penalty & 3-strike account blocking system.\n  - Canteen Admin Sales Analytics & revenue charts.\n  - System Stress Testing & Final Viva Defense preparation.\n\n', options: { color: '334155', fontSize: 9 } },
  
  { text: '★ Faculty Feedback & Guidance:\n', options: { bold: true, color: '0F172A', fontSize: 10 } },
  { text: '  - Integrating any additional suggestions recommended today.', options: { color: '334155', fontSize: 9 } }
], {
  x: 9.03,
  y: 2.3,
  w: 3.65,
  h: 4.55,
  fontFace: 'Calibri',
  paraSpaceAfter: 3
});

const outputPath = 'CampusEats_2Week_Project_Update.pptx';
pptx.writeFile({ fileName: outputPath })
  .then(fileName => console.log(`Presentation updated successfully at: ${fileName}`))
  .catch(err => console.error('Error updating presentation:', err));
