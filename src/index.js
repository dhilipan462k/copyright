//Create a react app from scratch.
//It should display 2 paragraph HTML elements.
//The paragraphs should say:
//Created by YOURNAME.
//Copyright CURRENTYEAR.
//E.g.
//Created by Angela Yu.
//Copyright 2019.
import React from "react";
import ReactDOM from "react-dom";

const name = "Dhilipan";
const year = new Date();
console.log(year);
// console.log(year.getFullYear());

ReactDOM.render(
  <div>
    <p> created by {name}</p>
    <p> copyright {year.getFullYear()}</p>
  </div>,
  document.getElementById("root")
);
