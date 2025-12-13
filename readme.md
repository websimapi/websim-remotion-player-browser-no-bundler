__DELETE_ME__

# Remotion Video – Full Browser Setup & Render Logic (Copy‑Paste Ready)

This project shows how to run a **Remotion video directly in the browser** using:

- Native ES modules
- An **import map** (no bundler / no Node.js required)
- The `@websim/remotion/player` wrapper around `@remotion/player`

Below is everything you need:

- The exact **file contents** (`index.html`, `main.jsx`, `composition.jsx`)
- A detailed breakdown of the **render logic** (springs, interpolation, layout, props)
- Notes on **customizing** titles, subtitles, and animation

You can copy each section into your own project as‑is.

---

## 1. `index.html` – Browser Entry + Import Map

This file:

- Sets up a full‑screen `<div id="app">` where React will mount.
- Defines an **import map** telling the browser where to load React, Remotion, and related libraries from CDNs.
- Loads `main.jsx` as a native ES module.

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Remotion Player (Browser, No Bundler)</title>

    <!-- Import map: tells the browser where to load React & Remotion from -->
    <script type="importmap">
      {
        "imports": {
          "react": "https://esm.sh/react@18.3.1?dev",
          "react-dom": "https://esm.sh/react-dom@18.3.1?dev",
          "react-dom/client": "https://esm.sh/react-dom@18.3.1/client?dev",
          "react/jsx-runtime": "https://esm.sh/react@18.3.1/jsx-runtime?dev",
          "react/jsx-dev-runtime": "https://esm.sh/react@18.3.1/jsx-dev-runtime?dev",
          "remotion": "https://esm.sh/remotion@4.0.350?external=react,react-dom&dev",
          "@remotion/player": "https://esm.sh/@remotion/player@4.0.350?external=react,react-dom&dev",
          "@remotion/gif": "https://esm.sh/@remotion/gif@4.0.350?external=react,react-dom,remotion&dev",
          "@remotion/transitions": "https://esm.sh/@remotion/transitions@4.0.350?external=react,react-dom,remotion&dev",
          "@websim/remotion/player": "https://esm.websim.com/@websim/remotion/player",
          "mediabunny": "https://esm.sh/mediabunny@1.19.1"
        }
      }
    </script>

    <style>
      html,
      body {
        margin: 0;
        padding: 0;
        height: 100%;
        width: 100%;
        overflow: hidden;
        background: #000;
      }

      #app {
        width: 100%;
        height: 100%;
      }
    </style>
  </head>

  <body>
    <div id="app"></div>
    <script type="module" src="./main.jsx"></script>
  </body>
</html>

