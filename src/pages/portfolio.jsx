import "./style/pages.css"

export function portfolio() {
  return (
    <div className="portfolio">
      <h1>Portfolio</h1>

      <div className="project">
        <h3>Makeup Catalogue</h3>
        <a id="link" href="https://github.com/RhettRoseman/laughable-lamb.git"></a>
      </div>

      <div className="project">
        <h3>Bookshelf</h3>
        <a id="link" href="https://github.com/Zlyda1993/effective-octo-robot.git"></a>
      </div>
      <div className="project">
        <h3>Rental Car</h3>
        <a id="link" href="https://github.com/sjohn294/thelastheist.git"></a>
      </div>
    </div>
  );
};

export default portfolio;