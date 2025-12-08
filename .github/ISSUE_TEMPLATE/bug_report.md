---
name: "Bug Report"
about: Report a bug in the project
title: "Navbar and Footer Position Issue"
labels: bug
assignees: "vikas"
---

## Bug Description
On the Home page, the **NavBar appears at the bottom**, and the **Footer appears at the top**.  
Their positions are reversed, unlike other pages where they display correctly.

## Location
- **File:** home/page.js  
- **Components Affected:** NavBar, Footer  
- **Route:** /

## Steps to Reproduce
1. Open the Home page.
2. Observe the position of the NavBar and Footer.
3. Their positions are swapped (NavBar at bottom, Footer at top).

## Expected Behavior
- NavBar should always appear at the **top** of the page.
- Footer should always appear at the **bottom**.

## Actual Behavior
- NavBar appears at the **bottom**.
- Footer appears at the **top**.

## Additional Context
Issue occurs **only** on the Home page.  
Other pages render NavBar and Footer correctly.













---
name: "Bug Report"
about: Report a bug in the project
title: "Team page throws error due to missing data source connection"
labels: bug
assignees: "vikas"
---

## Bug Description
The Team page currently displays an error while loading.  
It cannot access the required team member data, causing the “Community Members” section to fail during rendering and preventing the list from displaying.

## Location
- **File:** /team/page.js
- **Component:** Team
- **Page/Route:** /team

## Steps to Reproduce
1. Navigate to the `/team` page.
2. Wait for the members section to load.
3. Observe the error shown on the screen.
4. The team list does not render.

## Additional Context
The error is related to how the Team page retrieves data from `/data/members`.  
The page must correctly access the team data to load the list successfully.


---
name: "Bug Report"
about: Report a bug in the project
title: "Incorrect routing for Blogs and Events buttons in Navbar"
labels: bug
assignees: "vikas"
---

## Bug Description
The routing for the **Blogs** and **Events** buttons in the Navbar is incorrect.  
- Clicking **Blogs** opens the **Events** page.  
- Clicking **Events** opens the **Blogs** page.  

Each button should navigate to its correct route.

## Location
- **File:** /components/NavBar.jsx  
- **Component:** NavBar  
- **Routes:**
  - Blogs → `/blogs/page.js`
  - Events → `/events/page.js`

## Steps to Reproduce
1. Open the website.  
2. Click on the **Blogs** button.  
   - It incorrectly navigates to the **Events** page.  
3. Click on the **Events** button.  
   - It incorrectly navigates to the **Blogs** page.

## Additional Context
The issue is caused by incorrect routing logic inside **NavBar.jsx**.  
Update the links to ensure each button points to its intended page.


---
name: "Bug Report"
about: Report a bug in the project
title: "Navbar is not fixed at the top while scrolling"
labels: bug
assignees: "vikas"
---

## Bug Description
The Navbar component does not stay fixed at the top of the page.  
When the user scrolls, the navbar moves upward and disappears instead of remaining visible at the top.

## Location
- **File:** /components/NavBar.jsx  
- **Component:** NavBar  
- **Pages Affected:** All pages using the navbar (e.g., /blogs, /team, /events, /home)

## Steps to Reproduce
1. Open the website in a browser.  
2. Scroll down on any page.  
3. Observe that the Navbar scrolls away instead of staying fixed at the top.

## Additional Context
The Navbar should remain visible at all times during scrolling.  
A UI fix is required so the navbar stays positioned at the top, likely by applying `position: fixed` or equivalent Tailwind classes.



