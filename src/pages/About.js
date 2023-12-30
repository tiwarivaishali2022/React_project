import React from "react";
import MultiplePizzas from "../assets/multiplePizzas.jpeg";
import "../styles/About.css";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${MultiplePizzas})` }}
      ></div>
      <div className="aboutBottom">
        <h1> ABOUT US</h1>
        <p>
          Pizza, dish of Italian origin consisting of a flattened disk of bread
          dough topped with some combination of olive oil, oregano, tomato,
          olives, mozzarella or other cheese, and many other ingredients, baked
          quickly—usually, in a commercial setting, using a wood-fired oven
          heated to a very high temperature—and served hot. Uncover the
          chemistry behind the delicious taste of pizza Uncover the chemistry
          behind the delicious taste of pizza Discover the science of why pizza
          tastes good.See all videos for this article One of the simplest and
          most traditional pizzas is the Margherita, which is topped with
          tomatoes or tomato sauce, mozzarella, and basil. Popular legend
          relates that it was named for Queen Margherita, wife of Umberto I, who
          was said to have liked its mild fresh flavour and to have also noted
          that its topping colours—green, white, and red—were those of the
          Italian flag. Slices of lemon pie topped with meringue. Britannica
          Quiz Baking and Baked Goods Quiz pizza pizza Neapolitan pizza
          Margherita. Italy has many variations of pizza. The Neapolitan pizza,
          or Naples-style pizza, is made specifically with buffalo mozzarella
          (produced from the milk of Italian Mediterranean buffalo) or fior di
          latte (mozzarella produced from the milk of prized Agerolese cows) and
          with San Marzano tomatoes or pomodorino vesuviano (a variety of grape
          tomato grown in Naples). 
        </p>
      </div>
    </div>
  );
}

export default About;
