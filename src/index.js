var heading = React.createElement('h1', {}, 'Help Queue');
var ticketLocation = React.createElement('h3', {}, '3a');
var ticketNames = React.createElement('h3', {}, 'Thato and Haley');
var ticketIssue = React.createElement('h3', {}, "Firebase won't save record");

// creates a div with the h1 element and the 3 h3 elements and their text
var app = React.createElement('div', {}, heading, ticketLocation, ticketNames, ticketIssue);


//call the react dom library imported at the top of our html page, then call its .render method
ReactDOM.render(
  //first is what we render
  app, //
  //second is where we render it
  document.getElementById('react-app-root')//react app root, the id of the div in our html file
);
