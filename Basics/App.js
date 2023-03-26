//React element is just a plain javascript object

/* 
    Parcel does all of this 
    HMR- hot module replacement
    File watcher algorithm - C++
    Building 
    MINIFY
    Cleaning our Code
    Dev and Production build
    Super Fast build algorithm 
    Image optimization
    Caching while development
    Compression - rewriting code
    Compatible with older versions of browser
    HTTPS on dev

    */

import React from "react";
import ReactDOM from "react-dom/client";
// const heading1 = React.createElement("h1", {} , "Heading1")
// const heading2 = React.createElement("h1", null , "Heading2")

const heading1 = React.createElement(
  "h1",
  {
    id: "title",
    key: "h1",
  },
  "Hell"
);

const heading2 = React.createElement(
  "h2",
  {
    id: "title2",
    key: "h2",
  },
  "Hello"
);

console.log(heading2);

const container = React.createElement("div", { id: "container" }, [
  heading1,
  heading2,
]);
//Root is the place where react runs
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);
