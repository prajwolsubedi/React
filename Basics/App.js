    //React element is just a plain javascript object

    const heading1 = React.createElement("h1", {} , "Heading1")
    const heading2 = React.createElement("h1", null , "Heading2")

    const container = React.createElement("div", {id:"container"}, [heading1,heading2])

    const heading = React.createElement(
      "h1",
      {
        id: "title",
      },
      "Hello from React inside HTML"
    );
    //Root is the place where react runs
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(container);