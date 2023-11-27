const headding = React.createElement(
  "div",
  {
    id: "parrent",
  },
  React.createElement(
    "div",
    {
      id: "child",
    },
    [
      React.createElement("h1", {}, "hedding 1"),
      React.createElement("h2", {}, "hedding 2"),
    ]
  )
);
console.log(headding);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(headding);
