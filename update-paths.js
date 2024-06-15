const fs = require('fs');
const path = require('path');

// Define the base directory for the HTML files
const baseDir = __dirname; // Use the current directory

// List of HTML files to update
const htmlFiles = [
  'index.html',
  'about.html',
  'contact.html',
  'privacy-policy.html',
  'terms-of-service.html',
  '404.html',
  '500.html'
].map(file => path.join(baseDir, file));

// Replacements to apply to the HTML files
const replacements = [
  { search: /\/_next\/static\//g, replace: 'static/' },
  { search: /\/_next\/image\?url=%2Fimages%2F/g, replace: 'static/media/' },
  { search: /\/_next\/static\/chunks\//g, replace: 'static/chunks/' },
  { search: /\/_next\/static\/css\//g, replace: 'static/css/' },
  { search: /\/_next\/static\/media\//g, replace: 'static/media/' }
];

// Update each HTML file
htmlFiles.forEach(file => {
  if (fs.existsSync(file)) {
    let data = fs.readFileSync(file, 'utf8');
    replacements.forEach(replacement => {
      data = data.replace(replacement.search, replacement.replace);
    });
    fs.writeFileSync(file, data, 'utf8');
    console.log(`Updated paths in ${file}`);
  } else {
    console.error(`File not found: ${file}`);
  }
});
