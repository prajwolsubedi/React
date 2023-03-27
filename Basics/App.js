//React element is just a plain javascript object

import React from "react";
import ReactDOM from "react-dom/client";

//using createElement()
const container = React.createElement(
  "div",
  {},
  React.createElement("ul", {}, [
    React.createElement("li", {key:"1"}, "I"),
    React.createElement("li", {key:"2"}, "Love"),
    React.createElement("li", {key:"3"}, "Elon Musk"),
  ])
);

//using jsx
const container2 = (
  <div>
    <ul>
      <li key={1}>I</li>
      <li key={2}>Love</li>
      <li key={3}>Elon Musk</li>
    </ul>
  </div>
);
console.log(container);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);
