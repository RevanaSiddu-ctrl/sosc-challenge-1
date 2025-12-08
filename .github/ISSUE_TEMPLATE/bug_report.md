---
name: "Bug Report"
about: Report all known issues in the project
title: "List of All Issues in SOSC Challenge Project"
labels: bug
assignees: ""
---

##  Bug 1 — Navbar Not Fixed on Scroll
### Description  
The NavBar scrolls away with the page instead of staying fixed at the top.  
The original SOSC website uses a fixed top navigation bar.

### Location  
- File: `components/NavBar.jsx`
- Component: `NavBar`
- Page/Route: All pages using NavBar

### Steps to Reproduce  
1. Open any page (e.g., `/home`).  
2. Scroll down.  
3. NavBar disappears instead of staying fixed.

### Expected  
The NavBar should remain visible at the top during scrolling.


---

## 🐛 Bug 2 — Blogs & Events Navigation Routes Are Swapped
### Description  
The NavBar buttons for **Blogs** and **Events** navigate to the wrong pages.  
Blogs opens Events, and Events opens Blogs.

### Location  
- File: `components/NavBar.jsx`
- Component: `NavBar`
- Page/Route: When clicking NavBar links

### Steps to Reproduce  
1. Click the "Blogs" button.  
2. Page opens `/events`.  
3. Click the "Events" button.  
4. Page opens `/blogs`.

### Expected  
- Blogs → `/blogs`  
- Events → `/events`  


---

## 🐛 Bug 3 — Team Page Data Not Loading (Import Error)
### Description  
The Team page throws an error because it fails to import member data.  
Wrong path or incorrect export/import style.

### Location  
- File: `app/team/page.js`
- Component: Team list rendering
- Page/Route: `/team`

### Steps to Reproduce  
1. Open `/team`.  
2. Page fails to load / crashes / logs import error.  
3. Members list does not render.

### Expected  
Team page should load all members properly.


---

## 🐛 Bug 4 — NavBar and Footer Positions Reversed on Home Page
### Description  
On the Home page, the Footer appears at the top and the NavBar appears at the bottom.  
Component order is incorrect.

### Location  
- File: `app/home/page.js`
- Components: `NavBar`, `Footer`
- Page/Route: `/home`

### Steps to Reproduce  
1. Open `/home`.  
2. Observe the layout.  
3. Footer displays on top, NavBar at bottom.

### Expected  
- NavBar at the top  
- Footer at the bottom  
- Layout consistent with the original SOSC website

---

## 📎 Additional Context
These issues originate from incorrect component ordering, wrong import paths, and missing layout structure. Fixing them will align the clone website with the original SOSC design and behavior.
