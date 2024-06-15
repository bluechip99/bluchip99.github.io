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
  { search: /href="\/static\//g, replace: 'href="static/' },
  { search: /src="\/static\//g, replace: 'src="static/' },
  { search: /src="\/chunks\//g, replace: 'src="chunks/' },
  { search: /src="\/_next\/static\/chunks\//g, replace: 'src="static/chunks/' },
  { search: /src="\/_next\/static\/media\//g, replace: 'src="static/media/' }
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
