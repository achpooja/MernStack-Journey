// using views we dont need to use send request and specifies root path of the page //

// In Node.jswith Express, "views" refer to the templates used to render dynamic HTML content.
// These templates are typically written in templating languages like EJS, Pug, or Handlebars.
//  The views are responsible for displaying the data passed from the server in a structured and visually appealing way.

// Creating View Templates: You create template files in a designated directory (usually named views).
// These templates contain HTML mixed with templating language syntax to dynamically insert data.

// Rendering Views: In your route handlers, you use the res.render() method to render a view and send it to the client.

// syntax for views  <%= message %> for display and  <% message %> to define

const express = require("express");

// express app //
const app = express();

// register view engine //
app.set("view engine", "ejs");

// listen for requests//

app.listen(3030);
app.get("/", (req, res) => {
  const blogs = [
    {
      title: "Yoshi finds seggs",
      snippet: "Lorem ipsum dolor sit amet, consectetur",
    },
    {
      title: "Mario finds stars",
      snippet: "Lorem ipsum dolor sit amet, consectetur",
    },
    {
      title: "How to defeat bowser",
      snippet: "Lorem ipsum dolor sit amet, consectetur",
    }
  ];
  res.render("index", { title: "Home", blogs });
  // res.send('<p>Home Page</p>')
});
app.get("/about", (req, res) => {
  res.render("about", { title: "About" });
  // res.send('<p>Home Page</p>')
});

app.get("/blogs/create", (req, res) => {
  res.render("create", { title: "Create" });
});

// 404 Page //

app.use((req, res) => {
  res.status(404).render("404", { title: "404" });
});
