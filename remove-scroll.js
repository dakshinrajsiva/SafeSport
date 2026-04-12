const fs = require('fs');
let code = fs.readFileSync('src/components/Navbar.tsx', 'utf8');

// Remove scrollToSection
code = code.replace(
  /  const scrollToSection = useCallback\(\(sectionId: string\) => \{[\s\S]*?    \}, 100\);\n  \}\), \[isMenuOpen, pathname, router\]\);\n/g,
  ''
);

fs.writeFileSync('src/components/Navbar.tsx', code);
