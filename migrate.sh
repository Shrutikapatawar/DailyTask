#!/bin/bash
rm -rf /Users/ravikiran/Downloads/homenew/src/app/services/components
mkdir -p /Users/ravikiran/Downloads/homenew/src/components/services

cd /Users/ravikiran/Downloads/homenew/services/components || exit 1

if [ -f "Navbar.tsx" ]; then mv Navbar.tsx /Users/ravikiran/Downloads/homenew/src/components/services/0-ServicesPage-Navbar.tsx; fi
if [ -f "Hero.tsx" ]; then mv Hero.tsx /Users/ravikiran/Downloads/homenew/src/components/services/1-ServicesPage-HeroSection.tsx; fi
if [ -f "SectionDivider.tsx" ]; then mv SectionDivider.tsx /Users/ravikiran/Downloads/homenew/src/components/services/2-ServicesPage-SectionDivider.tsx; fi
if [ -f "ServicesSection.tsx" ]; then mv ServicesSection.tsx /Users/ravikiran/Downloads/homenew/src/components/services/3-ServicesPage-ServicesList.tsx; fi
if [ -f "ProcessSection.tsx" ]; then mv ProcessSection.tsx /Users/ravikiran/Downloads/homenew/src/components/services/4-ServicesPage-ProcessSection.tsx; fi
if [ -f "SectorsSection.tsx" ]; then mv SectorsSection.tsx /Users/ravikiran/Downloads/homenew/src/components/services/5-ServicesPage-SectorsSection.tsx; fi
if [ -f "CTASection.tsx" ]; then mv CTASection.tsx /Users/ravikiran/Downloads/homenew/src/components/services/6-ServicesPage-CallToAction.tsx; fi
if [ -f "Footer.tsx" ]; then mv Footer.tsx /Users/ravikiran/Downloads/homenew/src/components/services/7-ServicesPage-Footer.tsx; fi
if [ -f "contact.tsx" ]; then mv contact.tsx /Users/ravikiran/Downloads/homenew/src/components/services/8-ServicesPage-Contact.tsx; fi
if [ -f "AIPage.tsx" ]; then mv AIPage.tsx /Users/ravikiran/Downloads/homenew/src/components/services/9-ServicesPage-AIPage.tsx; fi
if [ -f "DarkModeToggle.tsx" ]; then mv DarkModeToggle.tsx /Users/ravikiran/Downloads/homenew/src/components/services/10-ServicesPage-DarkModeToggle.tsx; fi

echo "Migration complete!"
