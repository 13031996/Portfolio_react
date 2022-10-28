import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/blurrybg.png";
import IMG2 from "../../assets/sliderWithCard.png";
import IMG3 from "../../assets/todoapp_context.png";
import IMG4 from "../../assets/todo_redux.png";
import IMG5 from "../../assets/newsapp.png";
import IMG6 from "../../assets/inotebook.png";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Blurry Background Image",
    github: "https://github.com/13031996/Blurry-Background",
  },
  {
    id: 2,
    image: IMG2,
    title: "Slider with card",
    github: "https://github.com/13031996/Slider_with_card",
  },
  {
    id: 3,
    image: IMG3,
    title: "Todo App with Context API",
    github: "https://github.com/13031996/Todo-List-by-React-Context-API",
  },
  {
    id: 4,
    image: IMG4,
    title: "Todo App with REdux",
    github: "https://github.com/13031996/Todo-App-By-Redux",
  },
  {
    id: 5,
    image: IMG5,
    title: "News Application",
    github: "https://github.com/13031996/NewsApp",
  },
  {
    id: 6,
    image: IMG6,
    title: "iNotebook to keep notes",
    github: "https://github.com/13031996/iNotebook",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        {data.map(({ id, image, title, github }) => {
          return (
            <article key={id} className="portfolio_item">
              <div className="portfolio_item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <a
                href={github}
                className="btn btn-primary"
                rel="noreferrer"
                target="_blank"
              >
                Github
              </a>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
