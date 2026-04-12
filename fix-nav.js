const fs = require('fs');
let code = fs.readFileSync('src/components/Navbar.tsx', 'utf8');

// Replace tile grid buttons with Links
code = code.replace(
  /<button\s+key=\{item\.title\}\s+onClick=\{\(\) => scrollToSection\(item\.sectionId\)\}/g,
  `<Link\n                    href={item.sectionId === 'faqs' ? '/#faqs' : \`/\${item.sectionId}\`}\n                    key={item.title}\n                    onClick={() => setIsMenuOpen(false)}`
);

// Replace closing button tag in tile grid
code = code.replace(
  /<\/p>\n\s*<\/div>\n\s*\{?\/\* Spotlight Hover Circle.*?\/>\n\s*<\/button>/gs,
  (match) => match.replace('</button>', '</Link>')
);

// Replace quick links buttons with Links
code = code.replace(
  /<button\s+onClick=\{\(\) => scrollToSection\(item\.sectionId\)\}/g,
  `<Link\n                    href={item.sectionId === 'faqs' ? '/#faqs' : \`/\${item.sectionId}\`}\n                    onClick={() => setIsMenuOpen(false)}`
);

// Replace closing button tag in quick links
code = code.replace(
  /<\/span>\n\s*\)\}\n\s*<\/button>/g,
  `</span>\n                    )}\n                  </Link>`
);

fs.writeFileSync('src/components/Navbar.tsx', code);
