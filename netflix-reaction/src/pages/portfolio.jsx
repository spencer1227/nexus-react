import "./style/pages.css"

export function portfolio() {
  return (
    <div className="portfolio">
      <h2>Portfolio</h2>

      <div className="project">
        <h3>Project 1</h3>
        <h6>Makeup App</h6>
        <a href="#">View Project</a>
      </div>

      <div className="project">
        <h3>Project 2</h3>
        <h6>Bookshelf</h6>
        <a href="#">View Project</a>
      </div>
      <div className="project">
        <h3>Project 3</h3>
       <h6>Full stack App</h6>
        <a href="#">View Project</a>
      </div>
    </div>
  );
};

export default portfolio;