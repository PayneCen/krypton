import "./projects.css";
function Projects(props) {
  const { url, image, title } = props.myproject;
  return (
    <a href={url} target="_blank" className="project">
      <img src={image} alt="project" className="project-image" />
      <p className="project-title">
        <span className="code">&lt; </span>
        {title}
        <span className="code"> &#47;&gt;</span>
      </p>
    </a>
  );
}

export default Projects;
