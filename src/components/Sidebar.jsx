import SocialNetworkContainer from "./SocialNetworkContainer";
import InformationContainer from "./InformationContainer";

import Avatar from "../img/eu.jpg";

import "../styles/components/sidebar.sass";

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Matheus Battisti" />
      <p className="title">Desenveloper</p>
      <SocialNetworkContainer />
      <InformationContainer />
      <a href="/ISAQUE-CV.pdf" className="btn">
        Download CVs
      </a>
    </aside>
  );
};

export default Sidebar;
