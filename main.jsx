import { jsxDEV } from "react/jsx-dev-runtime";
import React from "react";
import { createRoot } from "react-dom/client";
import { Player } from "@websim/remotion/player";
import { MyComposition } from "./composition.jsx";
createRoot(document.getElementById("app")).render(
  /* @__PURE__ */ jsxDEV(
    "div",
    {
      style: {
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#000"
      },
      children: /* @__PURE__ */ jsxDEV(
        Player,
        {
          component: MyComposition,
          durationInFrames: 360,
          fps: 30,
          compositionWidth: 540,
          compositionHeight: 960,
          loop: true,
          controls: true,
          autoplay: true,
          inputProps: { title: "Remotion in the Browser", subtitle: "No bundler required" },
          style: {
            maxWidth: "100%",
            maxHeight: "100%",
            boxShadow: "0 0 40px rgba(0,0,0,0.6)",
            borderRadius: 16,
            overflow: "hidden",
            backgroundColor: "#111"
          }
        },
        void 0,
        false,
        {
          fileName: "<stdin>",
          lineNumber: 18,
          columnNumber: 5
        }
      )
    },
    void 0,
    false,
    {
      fileName: "<stdin>",
      lineNumber: 8,
      columnNumber: 3
    }
  )
);
