const title = React.createElement(
  "h1",
  {
    id: "title",
  },
  "Hello World in React!"
);

const subTitle = React.createElement(
  "h2",
  {
    id: "subTitle",
  },
  "React is a javascript library."
);

const container = React.createElement(
  "div",
  {
    id: "container",
  },
  [title, subTitle]
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(container);
