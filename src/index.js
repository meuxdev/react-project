import React from "react";
import { createRoot } from "react-dom/client";

const container = document.getElementById("app");
const root = createRoot(container);

const Main = () => {
  return (
    <>
      <h1>React Avanzado en Platzi 🚀</h1>
    </>
  );
};

root.render(<Main />);
