import "./stylesheets/main-content.scss";

function Content({headerComponents, bodyComponents}) {  
  return (
    <div className="main-content">
      <header className="content-header">
        {headerComponents}
      </header>
      <section className="content-body">
          {bodyComponents}
        </section>
    </div>
  );
}

export default Content;
