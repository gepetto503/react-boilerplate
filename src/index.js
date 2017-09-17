//3 arguments to a react element: type of element (ex: h1), props (none in these cases) and children (ex: 'hello, world' is considered a child of the h1 element)

//greeting and clock are created and then passed into app, then the render method renders app, which in turn renders greeting and clock?
var greeting = React.createElement('h1', {}, 'Hello, World!');
//third argument in clock is enclosed in back ticks, not quotes, because it is a template literal, meaning you can interpolate a js expression in the string
var clock = React.createElement('h2', {}, `It is ${new Date().toLocaleTimeString()}`);
var app = React.createElement('div', {}, greeting, clock);


//call the react dom library imported at the top of our html page, then call its .render method
ReactDOM.render(
  //first is what we render
  app, //
  //second is where we render it
  document.getElementById('react-app-root')//react app root, the id of the div in our html file
);
