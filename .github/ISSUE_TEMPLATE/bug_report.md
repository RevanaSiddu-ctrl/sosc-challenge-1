---
name: "Bug Report"
about: Report a bug in the project
title: "404 Error on Local Development (Missing Homepage File)"
labels: bug
assignees: ""
---

## Bug Description
The project shows a **404 Not Found** page immediately after running the development server. The expected homepage does not load because the `page.js` file (required by Next.js App Router) is missing from the `/app` directory.

## Location
- **Folder:** `/app`
- **Missing File:** `page.js`
- **Framework Impacted:** Next.js App Router

## Steps to Reproduce
1. Clone the repository and install dependencies using `npm install`.
2. Run the project using `npm run dev`.
3. Open `http://localhost:3000` → Browser displays a **404 page** instead of the website homepage.

## Expected Behavior
The homepage should load correctly when starting the development server.

## Additional Context
Creating a `page.js` file in the `/app` directory resolves the issue and restores expected routing behavior.



name: "Bug Report"
about: Report a bug in the project
title: "React Rendering Warning on Team Page (Incorrect Key Usage & Missing Team Data)"
labels: bug
assignees: ""
Bug Description

While rendering the Team page, React displayed a warning related to the usage of the key property. The issue occurred because the key prop was being destructured and used inside the CardC component, which violates React’s rules since key is a reserved internal value used only at the mapping level.

Additionally, the page was failing to display the list correctly initially due to missing JSON data, causing broken rendering behavior until a proper structure was added.

Location

Page: /app/team/page.js

Component: /components/CardC.jsx

Issue Type: React list rendering + missing required dataset

Steps to Reproduce

Run the application using npm run dev.

Navigate to /team.

Open the browser developer console.

Observe the React warning:
"Warning: Each child in a list should have a unique 'key' prop."

Expected Behavior

The Team page should render all members without console warnings, and the mapped components should receive a proper unique key only at the .map() level — not inside child components.

Additional Context

The issue was resolved by:

Removing key from the CardC component props.

Passing the key only during the .map() render.

Adding a complete and structured teamData JSON array to support proper rendering.
