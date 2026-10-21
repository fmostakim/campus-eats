const fs = require('fs');
const path = require('path');

// Let's use powershell or a small script to inspect slides text
// Or we can extract the zip contents of pptx since pptx is a zip archive
const AdmZip = require('adm-zip');

try {
  const zip = new AdmZip(path.join(__dirname, 'CampusEats_Proposal.pptx'));
  const zipEntries = zip.getEntries();
  
  const slideEntries = zipEntries.filter(entry => entry.entryName.startsWith('ppt/slides/slide') && entry.entryName.endsWith('.xml'));
  
  console.log(`Found ${slideEntries.length} slides.`);
  
  slideEntries.sort((a, b) => {
    const numA = parseInt(a.entryName.match(/\d+/)[0]);
    const numB = parseInt(b.entryName.match(/\d+/)[0]);
    return numA - numB;
  });

  slideEntries.forEach((entry, idx) => {
    const content = entry.getData().toString('utf8');
    // Extract text inside <a:t>...</a:t>
    const matches = content.match(/<a:t>([^<]+)<\/a:t>/g);
    if (matches) {
      const text = matches.map(m => m.replace(/<\/?a:t>/g, '')).join(' ');
      console.log(`--- Slide ${idx + 1} ---`);
      console.log(text);
    }
  });
} catch (e) {
  console.error('Error reading pptx:', e.message);
}
