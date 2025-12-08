---
name: "Bug Report"
about: Report a bug in the project
title: "Navbar does not stay fixed during scroll"
labels: bug
assignees: "Thanushree"
---

## Bug Description
The navbar moves up with the page and does not remain fixed at the top when scrolling.

## Location
- File: components/Navbar.jsx
- Component: Navbar
- Page/Route: All pages

## Steps to Reproduce
1. Open the website on http://localhost:3000
2. Scroll down on any page
3. Observe that the navbar disappears instead of staying fixed

## Additional Context
The original SOSC website has a fixed navbar. Need to match that behavior.

---
name: "Bug Report"
about: Report a bug in the project
title: "Incorrect routing for Blogs and Events buttons"
labels: bug
assignees: "Thanushree"
---

## Bug Description
Clicking the Blogs button opens the Events page, and clicking the Events button opens the Blogs page.

## Location
- File: components/Navbar.jsx
- Component: Navbar
- Page/Route: Navigation

## Steps to Reproduce
1. Start the website using `npm run dev`
2. Click on the Blogs link
3. Observe that Events page loads instead of Blogs

## Additional Context
-


---
name: "Bug Report"
about: Report a bug in the project
title: "Team Page error due to missing data source"
labels: bug
assignees: "Thanushree"
---

## Bug Description
Team page shows error because data  is missing or incorrect.

## Location
- File: app/team/page.jsx
- Component: ---
- Page/Route: /team

## Steps to Reproduce
1. Run the project
2. Open /team route
3. Observe the console error about missing team data

## Additional Context
Check if a JSON file or API is supposed to provide team member information.

---
name: "Bug Report"
about: Report a bug in the project
title: "Incorrect layout order on Home Page"
labels: bug
assignees: "Thanushree"
---

## Bug Description
The sections on the Home Page appear in the wrong order compared to the original SOSC website.NavBar and footer are misplaced causing the layout to look inconsistent and confusing.

## Location
- File: app/page.jsx 
- Component: HomePage sections
- Page/Route: /

## Steps to Reproduce
1. Run the project using `npm run dev`
2. Open the Home Page at http://localhost:3000
3. Compare section order with the original site (https://sosc.org.in/)
4. Observe incorrect ordering of components

## Additional Context
Comapred and made it same as Original website.

