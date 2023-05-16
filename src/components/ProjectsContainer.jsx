import {
  DiGithubAlt
} from "react-icons/di";
const ProjectsContainer = () => {
  return (
    <section className="projects-container">
      <h2>Project</h2>
      <p>
      If you're looking for a technology partner for your success, don't miss the opportunity to check out my portfolio on GitHub. 
      Click on the link below and find out how my skills can turn your ideas into reality!
      </p>
      <a href="https://github.com/isaquerr25" className="btn">
        <DiGithubAlt/> <span>See Projects</span>
      </a>
    </section>
  );
};

export default ProjectsContainer;
