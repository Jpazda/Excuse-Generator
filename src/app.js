/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  //write your code here
  document.querySelector("#button").addEventListener("click", () => {
    document.querySelector("#excuse").innerHTML = generateExcuse();
  });
  console.log("Hello John from the console ");
};
let generateExcuse = () => {
  let pronoun = ["A", "The"];
  let subject = ["jogger", "Tiger", "dog", "brother", "driver", "comedian"];
  let action = ["ate my", "threw my", "took my", "stole my"];
  let possession = ["homework", "shoes", "clothes", "car", "food", "computer"];
  let where = [
    "on the street!",
    "in my house!",
    "in my backyard!",
    "on the highway!"
  ];

  let pronounIndex = Math.floor(Math.random() * pronoun.length);
  let subjectIndex = Math.floor(Math.random() * subject.length);
  let actionIndex = Math.floor(Math.random() * action.length);
  let possessionIndex = Math.floor(Math.random() * possession.length);
  let whereIndex = Math.floor(Math.random() * where.length);

  return (
    pronoun[pronounIndex] +
    " " +
    subject[subjectIndex] +
    " " +
    action[actionIndex] +
    " " +
    possession[possessionIndex] +
    " " +
    where[whereIndex]
  );
};
