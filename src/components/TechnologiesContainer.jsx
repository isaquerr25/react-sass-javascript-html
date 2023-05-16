import {
  DiHtml5,
  DiCss3,
  DiJsBadge,
  DiNodejsSmall,
  DiMysql,
  DiReact,
  DiSass
} from "react-icons/di";

import "../styles/components/technologiescontainer.sass";

const technologies = [
  { id: "html", name: "HTML5", icon: <DiHtml5 />, 
  
    description: `
      I use this powerful markup language to build robust, semantic 
      and accessible structures. With HTML5, we create modern and 
      optimized web pages, ensuring an engaging and user-friendly experience.
    ` },

  { id: "css", name: "Sass", icon: <DiSass />,
    description: `
          Sass to streamline our styling workflow. With features like variables, 
          mixins, and nesting, we can write CSS styles in a more efficient, reusable, 
          and modular way, resulting in consistent, elegant designs.
    ` },
  { id: "js", name: "JavaScript", icon: <DiJsBadge />, description: `
      I use the JavaScript programming language to add interactivity and dynamism 
      to our web applications. With its DOM manipulation capabilities and support 
      for libraries and frameworks, we create rich and responsive user experiences.
  ` },
  { id: "react", name: "React", icon: <DiReact /> , description: `
      I leverage the powerful React JavaScript framework to build reactive and scalable 
      user interfaces. With its component-based architecture, we can create complex web 
      applications, offering a fluid and fast user experience.
` }
];

const TechnologiesContainer = () => {
  return (
    <section className="technologies-container">
      <h2>Technologies I used these projects</h2>
      <div className="technologies-grid">
        {technologies.map((tech) => (
          <div className="technology-card" id={tech.id} key={tech.id}>
            {tech.icon}
            <div className="technology-info">
              <h3>{tech.name}</h3>
              <p>{tech.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechnologiesContainer;
