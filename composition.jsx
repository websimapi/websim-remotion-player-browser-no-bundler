import { jsxDEV } from "react/jsx-dev-runtime";
import React from "react";
import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig
} from "remotion";
const CenteredText = ({ children, size = 60, weight = 700, color = "#fff" }) => /* @__PURE__ */ jsxDEV(
  "div",
  {
    style: {
      fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      fontSize: size,
      fontWeight: weight,
      color,
      textAlign: "center",
      lineHeight: 1.2
    },
    children
  },
  void 0,
  false,
  {
    fileName: "<stdin>",
    lineNumber: 12,
    columnNumber: 3
  }
);
const MyComposition = ({ title, subtitle }) => {
  const frame = useCurrentFrame();
  const { fps, width, height } = useVideoConfig();
  const bgShift = interpolate(frame, [0, 120], [0, 80], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp"
  });
  const titleSpring = spring({
    fps,
    frame,
    config: {
      damping: 200,
      mass: 1.2,
      stiffness: 120
    }
  });
  const titleY = interpolate(titleSpring, [0, 1], [-80, 0]);
  const subtitleOpacity = interpolate(frame, [20, 80], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp"
  });
  const underlineProgress = frame % 60 / 60;
  const underlineWidth = interpolate(underlineProgress, [0, 1], [0.1, 0.95]);
  const pulse = spring({
    fps,
    frame: frame % (fps * 2),
    config: { damping: 15, stiffness: 80, mass: 0.5 }
  });
  const pulseScale = interpolate(pulse, [0, 1], [0.8, 1.2]);
  return /* @__PURE__ */ jsxDEV(
    AbsoluteFill,
    {
      style: {
        background: `linear-gradient(
          180deg,
          #151515 ${bgShift}%,
          #222 ${bgShift + 30}%,
          #111 100%
        )`,
        alignItems: "center",
        justifyContent: "center"
      },
      children: [
        /* @__PURE__ */ jsxDEV(
          "div",
          {
            style: {
              position: "absolute",
              top: 32,
              right: 32,
              width: 16,
              height: 16,
              borderRadius: "50%",
              background: "radial-gradient(circle at 30% 30%, #ffdf6c, #ff9f1c)",
              transform: `scale(${pulseScale})`,
              boxShadow: "0 0 16px rgba(255, 159, 28, 0.8)"
            }
          },
          void 0,
          false,
          {
            fileName: "<stdin>",
            lineNumber: 80,
            columnNumber: 7
          }
        ),
        /* @__PURE__ */ jsxDEV(
          "div",
          {
            style: {
              width: "80%",
              maxWidth: 420,
              transform: `translateY(${titleY}px)`
            },
            children: [
              /* @__PURE__ */ jsxDEV(CenteredText, { size: 54, children: title }, void 0, false, {
                fileName: "<stdin>",
                lineNumber: 102,
                columnNumber: 9
              }),
              /* @__PURE__ */ jsxDEV(
                "div",
                {
                  style: {
                    marginTop: 18,
                    height: 4,
                    borderRadius: 999,
                    backgroundColor: "#444",
                    overflow: "hidden"
                  },
                  children: /* @__PURE__ */ jsxDEV(
                    "div",
                    {
                      style: {
                        height: "100%",
                        width: `${underlineWidth * 100}%`,
                        borderRadius: 999,
                        background: "linear-gradient(90deg, #ff9f1c, #ffdf6c)",
                        boxShadow: "0 0 12px rgba(255,159,28,0.8)",
                        transition: "width 0.1s linear"
                      }
                    },
                    void 0,
                    false,
                    {
                      fileName: "<stdin>",
                      lineNumber: 114,
                      columnNumber: 11
                    }
                  )
                },
                void 0,
                false,
                {
                  fileName: "<stdin>",
                  lineNumber: 105,
                  columnNumber: 9
                }
              ),
              /* @__PURE__ */ jsxDEV(
                "div",
                {
                  style: {
                    marginTop: 28,
                    opacity: subtitleOpacity
                  },
                  children: /* @__PURE__ */ jsxDEV(CenteredText, { size: 32, weight: 400, color: "#ddd", children: subtitle }, void 0, false, {
                    fileName: "<stdin>",
                    lineNumber: 133,
                    columnNumber: 11
                  })
                },
                void 0,
                false,
                {
                  fileName: "<stdin>",
                  lineNumber: 127,
                  columnNumber: 9
                }
              )
            ]
          },
          void 0,
          true,
          {
            fileName: "<stdin>",
            lineNumber: 95,
            columnNumber: 7
          }
        ),
        /* @__PURE__ */ jsxDEV(
          "div",
          {
            style: {
              position: "absolute",
              bottom: height * 0.22,
              width: "100%",
              textAlign: "center",
              fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
              fontSize: 26,
              letterSpacing: 2,
              textTransform: "uppercase",
              color: "#888"
            },
            children: [
              "30fps \xB7 ",
              width,
              "\xD7",
              height
            ]
          },
          void 0,
          true,
          {
            fileName: "<stdin>",
            lineNumber: 140,
            columnNumber: 7
          }
        )
      ]
    },
    void 0,
    true,
    {
      fileName: "<stdin>",
      lineNumber: 67,
      columnNumber: 5
    }
  );
};
export {
  MyComposition
};
