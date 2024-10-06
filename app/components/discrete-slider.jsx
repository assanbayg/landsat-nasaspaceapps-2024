"use client";

import { useEffect, useRef, useState } from "react";

import "./discrete-slider.css";

export const DiscreteSlider = ({ min = 0, max = 10, step = 1, onChange }) => {
  const [value, setValue] = useState(min);

  const minAudioRef = useRef(null);
  const maxAudioRef = useRef(null);

  useEffect(() => {
    // Load the sound effects (you can use your own sound file paths)
    minAudioRef.current = new Audio("/sounds/sad.wav");
    maxAudioRef.current = new Audio("/sounds/happy.wav");
  }, []);

  const handleSliderChange = (e) => {
    const newValue = Number(e.target.value);

    // Play sound if the slider reaches min or max value
    if (newValue === min) {
      minAudioRef.current.play();
    } else if (newValue === max) {
      maxAudioRef.current.play();
    }

    setValue(newValue);
    onChange(newValue);
  };

  const percentage = ((value - min) / (max - min)) * 100;

  return (
    <div className="w-48">
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={handleSliderChange}
        className="slider w-full cursor-pointer"
        style={{
          background: `linear-gradient(to right, #3b82f6 ${percentage}%, #e0e0e0 ${percentage}%)`,
        }}
      />
      <div className="mt-2 flex justify-between text-xs text-blue-500">
        {Array.from(
          { length: (max - min) / step + 1 },
          (_, i) => min + i * step,
        ).map((val) => (
          <span
            key={val}
            className={`w-4 text-center ${
              value === val ? "font-bold text-blue-500" : ""
            }`}
          >
            {val}
          </span>
        ))}
      </div>
    </div>
  );
};
