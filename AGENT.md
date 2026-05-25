# Agent Notes

## Project Overview

This repository is a property website built with React and Vite, with a Node/Express backend in `server/`.

- Frontend entry: `src/main.jsx`
- App routes: `src/App.jsx`
- Shared navigation: `src/components/Navbar.jsx`
- Main page components: `src/pages/`
- Backend API: `server/server.js`
- Backend models: `server/models/`
- Static assets: `public/` and `src/assets/`

## Common Commands

Run these from the repository root unless noted otherwise.

```powershell
npm run dev
npm run build
npm run lint
```

Backend commands are run from `server/`.

```powershell
npm start
```

## Development Notes

- The frontend uses React Router routes declared in `src/App.jsx`.
- Styling is mostly plain CSS files beside pages or in shared CSS files such as `src/index.css`, `src/Home.css`, and `src/Navbar.css`.
- The backend uses Express, Mongoose, Cloudinary uploads, Nodemailer, Twilio-related password reset logic, and admin/property models.
- Backend configuration depends on environment variables such as MongoDB, Cloudinary, email, Twilio, and admin credentials.
- Avoid committing secrets or `.env` values.
- Keep edits scoped and consistent with the existing JSX/CSS style.

## Cautions For Future Agents

- `server/server.js` currently defines `/admin-login` twice. Check behavior carefully before changing login flow.
- `server/server.js` listens on port `5000`, and `server/index.js` also mounts `server.js` and listens on port `5000`; avoid running both patterns without reviewing this.
- File uploads in `server/server.js` use a local `uploads/` directory before Cloudinary upload, so make sure the directory exists if testing that route.
- Installed dependencies are present in root `node_modules/` and `server/node_modules/`; do not inspect or edit them unless there is a specific dependency issue.

## Verification Preference

After frontend changes, run:

```powershell
npm run build
npm run lint
```

After backend changes, run the relevant server command from `server/` and manually verify the touched endpoint. There is no meaningful automated backend test script currently.
