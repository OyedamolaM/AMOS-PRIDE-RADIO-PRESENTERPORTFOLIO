# React + Vite

## Google Analytics

Set `VITE_GA_MEASUREMENT_ID` to your Google Analytics 4 measurement ID before building or deploying.

```env
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

The app sends the default page view plus custom `media_play` and `contact_click` events.

## Vercel Analytics

Vercel Analytics is installed through `@vercel/analytics` and mounted in the React entry point. It starts collecting visits automatically after the project is deployed on Vercel with Web Analytics enabled.

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
