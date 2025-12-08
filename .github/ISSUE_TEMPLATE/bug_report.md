---
name: "Bug Report"
about: When the user scrolls, the navbar moves up and disappears instead of remaining visible at the top.
title: "Navbar component movement"
labels: bug
assignees: "Rishan"
---

## Bug Description
The Navbar component does not stay fixed at the top of the page.
When the user scrolls, the navbar moves up and disappears instead of remaining visible at the top.

##  Location
- File:all pages are affected
- Component: navbar
- Page/Route:all

## Steps to Reproduce
1. Open the application in a browser.
2. Scroll down the page.
3. Observe that the navbar scrolls away and is no longer visible.

## Expected Behavior
The navbar should stay fixed at the top of the page while scrolling.

## Actual Behavior
The navbar scrolls away and disappears from view.


---
name: "Bug Report"
about: Report a bug in the project
title: "Navbar and Footer Position Issue"
labels: bug
assignees: "rishan"
---

## Bug Description
On the Home page, the *NavBar appears at the bottom, and the **Footer appears at the top*.  
Their positions are reversed, unlike other pages where they display correctly.

## Location
- File: page.js  
- Components Affected: NavBar, Footer  
- Route:* /

## Steps to Reproduce
1. Open the Home page.
2. Observe the position of the NavBar and Footer.
3. Their positions are swapped (NavBar at bottom, Footer at top).

## Expected Behavior
- NavBar should always appear at the *top* of the page.
- Footer should always appear at the *bottom*.

## Actual Behavior
- NavBar appears at the *bottom*.
- Footer appears at the *top*.













---
name: "Bug Report"
about: bug in the code
title: "Team page throws error due to missing data source connection"
labels: bug
assignees: "rishan"
---

## Bug Description
The Team page currently displays an error while loading.  
It cannot access the required team member data, causing the “Community Members” section to fail during rendering and preventing the list from displaying.

## Location
- File: /team/page.js
- Component: team
- Page/Route: /team/page.js

## Steps to Reproduce
1. Navigate to the /team page.
2. Wait for the members section to load.
3. Observe the error shown on the screen.
4. The team list does not render.
5. The folder structure imported must be correct

## Additional Context
The error is related to how the Team page retrieves data from /data/members.  
The page must correctly access the team data to load the list successfully.


---
name: "Bug Report"
about: bug in buttons/routing
title: "Incorrect routing for Blogs and Events buttons in Navbar"
labels: bug
assignees: "rishan"
---

## Bug Description
The routing for the Blogs* and *Events* buttons in the Navbar is incorrect.  
- Clicking Blogs* opens the *Events* page.  
- Clicking Events* opens the *Blogs* page.  

Each button should navigate to its correct route.

## Location
- File: /components/NavBar.jsx  
- Component: NavBar  
- Routes:
  - Blogs → /blogs/page.js
  - Events → /events/page.js

## Steps to Reproduce
1. Open the website.  
2. Click on the Blogs button.  
   - It incorrectly navigates to the Events page.  
3. Click on the Events button.  
   - It incorrectly navigates to the *Blogs* page.

## Additional Context
The issue is caused by incorrect routing logic inside *NavBar.jsx*.  
Update the links to ensure each button points to its intended page.




