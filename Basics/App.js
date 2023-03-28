//React element is just a plain javascript object

import React from "react";
import ReactDOM from "react-dom/client";

//React element
const container = <h1>Hello from React element</h1>;

//React Component
const ContainerFunction = () => {
  return (
    <>
      {container} 
      <h1>Hello from React Component </h1>
    </>
  );
};

console.log(container);
console.log(ContainerFunction);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<ContainerFunction />);
// root.render(container);
