import { useState } from "react";

function Navigation() {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const nav = {
    display: "flex",
    justifyContent: "flex-end",
    margin: "0.5rem",
    height: "1rem",
  };

  const ul = {
    listStyleType: "none",
  };

  const li = {
    display: "inline-block",
    margin: "5px",
  };

  const a = {
    textDecoration: "none",
    fontSize: "18px",
    color: isHovered ? "purple" : "#FAF0E6",
    fontFamily: "Pacifico, cursive",
    transition: "color 0.3s ease, border-bottom-color 0.3s ease",
    borderBottom: isHovered ? "2px solid purple" : "2px solid transparent",
  };

  return (
    <>
      <nav style={nav}>
        <ul style={ul}>
          <li style={li}>
            <a
              style={a}
              href="/groceryList"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              Next Feature =&gt;
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navigation;
