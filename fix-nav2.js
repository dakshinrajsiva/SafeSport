const fs = require('fs');
let code = fs.readFileSync('src/components/Navbar.tsx', 'utf8');

// Replace closing button tag in quick links
code = code.replace(
  /<\/span>\n\s*\)\}\n\s*<\/button>/g,
  `</span>\n                    )}\n                  </Link>`
);

fs.writeFileSync('src/components/Navbar.tsx', code);
