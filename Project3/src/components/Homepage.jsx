import React, { useState } from "react";

function Homepage() {
  const [color, setColor] = useState("olive");
  return (
    <>
      <div
        className="w-full h-screen flex flex-col min-h-screen"
        style={{ backgroundColor: color }}
      >
        <h1 className="text-3xl font-bold underline text-center mt-10 text-amber-50">
          Welcome to the Homepage!
        </h1>
        <div className="mt-auto flex flex-wrap justify-center gap-4 p-12">
          <button
            className="rounded-xl bg-red-700 text-white p-3"
            style={{ backgroundColor: "red" }}
            onClick={() => setColor("red")}
          >
            Red
          </button>
          <button
            className="rounded-xl bg-green-700 text-white p-3"
            style={{ backgroundColor: "green" }}
            onClick={() => setColor("green")}
          >
            Green
          </button>
          <button
            className="rounded-xl bg-blue-700 text-white p-3"
            style={{ backgroundColor: "blue" }}
            onClick={() => setColor("blue")}
          >
            Blue
          </button>
          <button
            className="rounded-xl bg-yellow-300 p-3"
            style={{ backgroundColor: "yellow" }}
            onClick={() => setColor("yellow")}
          >
            Yellow
          </button>
          <button
            className="rounded-xl bg-black text-white p-3"
            style={{ backgroundColor: "black" }}
            onClick={() => setColor("black")}
          >
            Black
          </button>
        </div>
      </div>
    </>
  );
}

export default Homepage;
