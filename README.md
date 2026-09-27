# Al-Fateem Academy

Website for Al-Fateem Academy, a learning community. Visitors can browse courses, see the academy's projects and services, read client reviews and get in touch. All content comes from a Laravel API, so the academy updates the site from its admin panel instead of editing code.

Backend and admin panel: [laravel-backend-react](https://github.com/zainulabideen5/laravel-backend-react)

## Pages

| Page | Content |
|---|---|
| Home | Hero, intro video, services, featured courses, recent projects, stats charts, client reviews |
| Courses | All courses, with a detail page for each one |
| Services | Everything the academy offers |
| Portfolio | Projects, with a detail page for each one |
| About | About the academy, with a typing animation |
| Contact | Contact form that sends the message to the backend |
| Privacy, Terms, Refund | Policy pages |

## Features

- Content loaded from the REST API with Axios
- Loading states while data is fetched
- Animated counters and charts (React CountUp, Recharts)
- Review slider (React Slick)
- Video player for the intro video
- Responsive layout with React Bootstrap

## Tech stack

- React (Create React App)
- React Router
- React Bootstrap and Bootstrap
- Axios
- Recharts, React Slick, React CountUp, Video React
- Font Awesome

## Getting started

Start the [backend](https://github.com/zainulabideen5/laravel-backend-react) first, then point the frontend at it in `src/RestAPI/AppUrl.jsx`:

```js
static BaseURL = "http://localhost:8000/api";
```

Then:

```bash
npm install
npm start
```

The site opens at `http://localhost:3000`. For a production build:

```bash
npm run build
```

## Project structure

```
src/
  pages/       one component per route
  components/  sections used across pages
  router/      route definitions
  RestAPI/     API URLs and the Axios client
```

---

Built by [Zain Ul Abideen](https://github.com/zainulabideen5)
