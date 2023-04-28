import React, {useState} from "react";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BsCodeSlash } from "react-icons/bs";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";

const Header = () => {
  const [activeNav, setActiveNav] = useState('#')

  return (
    <header>
      <nav className="nav">
        <a href="#" onClick={() => setActiveNav("#")} className={activeNav === '#' ? 'active' : ''}>
          <AiOutlineHome />
        </a>
        <a href="#about" onClick={() => setActiveNav("#about")} className={activeNav === '#about' ? 'active' : ''}>
          <AiOutlineUser />
        </a>
        <a href="#skills" onClick={() => setActiveNav("#skills")} className={activeNav === '#skills' ? 'active' : ''}>
          <BsCodeSlash />
        </a>
        <a href="#projects" onClick={() => setActiveNav("#projects")} className={activeNav === '#projects' ? 'active' : ''}>
          <AiOutlineFundProjectionScreen />
        </a>
        <a href="#cloud-projects" onClick={() => setActiveNav("#cloud-projects")} className={activeNav === '#cloud-projects' ? 'active' : ''}>
          <AiOutlineCloudUpload />
        </a>
        <a href="#contact" onClick={() => setActiveNav("#contact")} className={activeNav === '#contact' ? 'active' : ''}>
          <AiOutlineMail />
        </a>
      </nav>
    </header>
  );
};

export default Header;
