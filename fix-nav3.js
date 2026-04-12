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
  /\{title !== "Reach out" && \(\n\s*<span className="absolute -bottom-1 left-0 w-0 h-\[1\.5px\] bg-current transition-all duration-300 group-hover\/nav:w-full" \/>\n\s*\)\}\n\s*<\/button>/g,
  `{title !== "Reach out" && (\n                      <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-current transition-all duration-300 group-hover/nav:w-full" />\n                    )}\n                  </Link>`
);

fs.writeFileSync('src/components/Navbar.tsx', code);
