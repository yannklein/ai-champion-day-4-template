import React from "react";
import ReactDOM from "react-dom/client";
import { ConvexProvider, ConvexReactClient } from "convex/react";
import App from "./App";
import "./tokens.css";
import "./app.css";

// VITE_CONVEX_URL is read while the app is BUILT, not while it runs, so it
// has to exist during the build. If it is missing, the line below throws and
// the page stays blank: that is the successful-build-white-page case you are
// warned about in Exercise 4.
const convex = new ConvexReactClient(import.meta.env.VITE_CONVEX_URL as string);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ConvexProvider client={convex}>
      <App />
    </ConvexProvider>
  </React.StrictMode>,
);
