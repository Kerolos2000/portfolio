// import MouseTrail from "@pjsalita/react-mouse-trail";

// export default function Test() {
//   const config = {
//     color: "#ff6d40",
//     idleAnimation: true,
//     idleAnimationCount: 10,
//     inverted: false,
//     size: 15,
//     trailCount: 50,
//   };

//   return (
//     <>
//       <MouseTrail {...config} />;
//     </>
//   );
// }

import React, { useEffect, useRef } from "react";
import {
  Polyline,
  Renderer,
  Transform,
  Geometry,
  Program,
  Mesh,
  Vec3,
  Vec2,
  Color,
} from "ogl";

const MouseTail = () => {
  const canvasRef = useRef(null);
  const sceneRef = useRef(null);
  const linesRef = useRef([]);

  useEffect(() => {
    const renderer = new Renderer({ dpr: 2, alpha: true }); // set alpha to true for transparent background
    const gl = renderer.gl;
    canvasRef.current.appendChild(gl.canvas);

    // Create the scene and store a reference to it
    const scene = new Transform();
    sceneRef.current = scene;

    const lines = [];

    function resize() {
      const { width, height } = canvasRef.current.getBoundingClientRect();
      renderer.setSize(width, height);

      // We call resize on the polylines to update their resolution uniforms
      lines.forEach((line) => line.polyline.resize());
    }
    window.addEventListener("resize", resize, false);

    // Just a helper function to make the code neater
    function random(a, b) {
      const alpha = Math.random();
      return a * (1 - alpha) + 0.5 * alpha;
    }

    // We're going to make a number of different coloured lines for fun.
    [
      "#ff6d40",
      "#ff6d40",
      "#ff6d40",
      "#ff6d40",
      "#ff6d40",
      "#ff6d40",
      "#ff6d40",
      "#ff6d40",
      "#ff6d40",
      "#ff6d40",
      "#ff6d40",
      "#ff6d40",
      "#ff6d40",
      "#ff6d40",
      "#ff6d40",
      "#ff6d40",
      "#ff6d40",
    ].forEach((color, i) => {
      // Store a few values for each lines' randomised spring movement
      const line = {
        spring: random(0.01, 0.05),
        friction: random(0.7, 0.95),
        mouseVelocity: new Vec3(),
        mouseOffset: new Vec3(random(-1, 1) * 0.002),
      };

      // Create an array of Vec3s (eg [[0, 0, 0], ...])
      const count = 50;

      const points = (line.points = []);
      for (let i = 0; i < count; i++) points.push(new Vec3());

      line.polyline = new Polyline(gl, {
        points,
        vertex: `
              attribute vec3 position;
              attribute vec3 next;
              attribute vec3 prev;
              attribute vec2 uv;
              attribute float side;

              uniform vec2 uResolution;
              uniform float uDPR;
              uniform float uThickness;

              vec4 getPosition() {
                  vec2 aspect = vec2(uResolution.x / uResolution.y, 1);
                  vec2 nextScreen = next.xy * aspect;
                  vec2 prevScreen = prev.xy * aspect;

                  vec2 tangent = normalize(nextScreen - prevScreen);
                  vec2 normal = vec2(-tangent.y, tangent.x);
                  normal /= aspect;
                  normal *= 1.0 - pow(abs(uv.y - 0.5) * 1.9, 2.0);

                  float pixelWidth = 1.0 / (uResolution.y / uDPR);
                  normal *= pixelWidth * uThickness;

                  // When the points are on top of each other, shrink the line to avoid artifacts.
                  float dist = length(nextScreen - prevScreen);
                  normal *= smoothstep(0.0, 0.02, dist);

                  vec4 current = vec4(position, 1);
                  current.xy -= normal * side;
                  return current;
              }

              void main() {
                  gl_Position = getPosition();
              }
            `,
        uniforms: {
          uColor: { value: new Color(color) },
          uThickness: { value: random(3, 3) },
        },
      });

      line.polyline.mesh.setParent(scene);

      lines.push(line);
    });

    // Call initial resize after creating the polylines
    resize();

    // Add handlers to get mouse position
    const mouse = new Vec3();
    if ("ontouchstart" in window) {
      window.addEventListener("touchstart", updateMouse, false);
      window.addEventListener("touchmove", updateMouse, false);
    } else {
      window.addEventListener("mousemove", updateMouse, false);
    }

    function updateMouse(e) {
      if (e.changedTouches && e.changedTouches.length) {
        e.x = e.changedTouches[0].pageX;
        e.y = e.changedTouches[0].pageY;
      }
      if (e.x === undefined) {
        e.x = e.pageX;
        e.y = e.pageY;
      }

      // Get mouse value in -1 to 1 range, with y flipped
      mouse.set(
        (e.x / gl.renderer.width) * 2 - 1,
        (e.y / gl.renderer.height) * -2 + 1,
        0
      );
    }

    const tmp = new Vec3();

    function update(t) {
      requestAnimationFrame(update);

      lines.forEach((line) => {
        // Update polyline input points
        for (let i = line.points.length - 1; i >= 0; i--) {
          if (!i) {
            // For the first point, spring ease it to the mouse position
            tmp
              .copy(mouse)
              .add(line.mouseOffset)
              .sub(line.points[i])
              .multiply(line.spring);
            line.mouseVelocity.add(tmp).multiply(line.friction);
            line.points[i].add(line.mouseVelocity);
          } else {
            // The rest of the points ease to the point in front of them, making a line
            line.points[i].lerp(line.points[i - 1], line.friction);
          }
        }

        // Update polyline
        line.polyline.updateGeometry();

        // Move the line mesh back to the start
        line.polyline.mesh.position.x =
          -gl.renderer.width / gl.renderer.dpr / 2;
      });

      renderer.render({ scene });
    }

    update(0);

    // Return a cleanup function to remove event listeners
    return () => {
      window.removeEventListener("resize", resize, false);
      if ("ontouchstart" in window) {
        window.removeEventListener("touchstart", updateMouse, false);
        window.removeEventListener("touchmove", updateMouse, false);
      } else {
        window.removeEventListener("mousemove", updateMouse, false);
      }
    };
  }, []);

  return (
    <div
      ref={canvasRef}
      style={{
        width: "100vw",
        height: "100vh",
        position: "absolute",
        top: "0",
        left: "0",
      }}
    />
  );
};

export default MouseTail;
