import { useState } from "react";

function Navbar() {
  const [activeLink, setActiveLink] = useState("home");
  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };
  return (
    <div className="container">
      <nav className="navbar  navbar-light bg-dark shadow p-3 mb-5 ">
        <a
          className="navbar-brand ms-5 "
          href="#"
          style={{
            color: "white",
            textShadow: "#FC0 1px 0 10px",
            fontSize: "30px",
          }}
        >
          {" "}
          Hery Dev
        </a>
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <button className=" btn btn-success me-5 ">
              <a
                onClick={() => onUpdateActiveLink("home")}
                href="#"
                className={
                  activeLink === "home" ? "navbar-link-active" : "navbar-link"
                }
              >
                {" "}
                Home
              </a>
            </button>
            <button className=" btn btn-success me-5 ">
              <a
                onClick={() => onUpdateActiveLink("skills")}
                href="#"
                className={
                  activeLink === "skill" ? "navbar-link-active" : "navbar-link"
                }
              >
                {" "}
                Skills
              </a>
            </button>
            <button className=" btn btn-success me-5 ">
              <a
                onClick={() => onUpdateActiveLink("Project")}
                href="#"
                className={
                  activeLink === "project"
                    ? "navbar-link-active"
                    : "navbar-link"
                }
              >
                {" "}
                Project
              </a>
            </button>{" "}
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
