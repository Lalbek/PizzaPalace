import React from "react";
import MultiplePizza from "../assets/multiplePizza.jpeg";
import "../styles/About.css";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${MultiplePizza})` }}
      ></div>

      <div className="aboutBottom">
        <h1>ABOUT US </h1>
        <p>
          Welcome to Lorenzo's Pizzeria, where passion for authentic flavors
          meets a commitment to quality. Our journey began with a simple goal:
          to serve the community the finest, handcrafted pizzas made with love.
          At Lorenzo's Pizzeria, we take pride in bringing the taste of Italy to
          your table. Our dedicated team of chefs uses only the freshest
          ingredients, ensuring each bite is a celebration of flavor and
          tradition. Discover the essence of true Italian hospitality at
          Lorenzo's Pizzeria. Family-owned and operated, our pizzeria is a labor
          of love, delivering a culinary experience that goes beyond just a
          meal. Step into the heart of Lorenzo's Pizzeria, where our recipes are
          more than just ingredients – they are a story. With a rich heritage of
          Italian culinary excellence, we invite you to savor the warmth and
          authenticity in every slice. At Lorenzo's Pizzeria, we believe in the
          magic of hand-tossed dough, the artistry of fresh toppings, and the
          joy of sharing a meal with loved ones. Come join us on a culinary
          journey that's steeped in tradition and flavor. Feel free to customize
          these sentences to better suit the unique story and atmosphere of
          Lorenzo's Pizzeria.
        </p>
      </div>
    </div>
  );
}

export default About;
