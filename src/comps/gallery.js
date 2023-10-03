import React, { useState } from "react";

export default function Gallery() {
  const images = [
    "images/cover.jpg",
    "images/cover1.jpg",
    "images/cover2.jpg",
    "images/cover3.jpg",
  ];
  const [counter, setCounter] = useState(0);
  const add1 = () => {
    setCounter(counter + 1);
    if (counter + 1 >= 4) setCounter(0);
  };
  const back1 = () => {
    setCounter(counter - 1);
    if (counter - 1 <= 0) setCounter(3);
  };

  return (
    <div className="text-center">
      <img src={images[counter]} alt="kdle" width="400" />
      <br />
      <button onClick={back1}>back</button>
      <button onClick={add1}>next</button>
    </div>
  );
}
