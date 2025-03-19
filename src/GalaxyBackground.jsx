// src/GalaxyBackground.jsx

import React from "react";
import Particles from "react-tsparticles";

const GalaxyBackground = () => {
  return (
    <Particles
      id="tsparticles"
      options={{
        background: {
          color: { value: "#121212" },
        },
        fullScreen: {
          enable: true, // Particles fill the screen
          zIndex: -1,   // Place behind your content
        },
        fpsLimit: 60,
        interactivity: {
          events: {
            resize: true,
          },
        },
        particles: {
          color: { value: "#ffffff" },
          move: {
            enable: true,
            speed: 0.3,
            direction: "none",
            outModes: {
              default: "out",
            },
          },
          number: {
            density: { enable: true, area: 800 },
            value: 100,
          },
          opacity: { value: 0.7 },
          shape: { type: "circle" },
          size: {
            random: true,
            value: 2,
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default GalaxyBackground;
