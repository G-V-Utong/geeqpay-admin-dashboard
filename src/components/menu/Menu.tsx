import "./menu.scss";
import "../../styles/global.scss";
import { useState } from "react";
import { SidebarData } from "../sidebarData/SidebarData";
import { Link } from "react-router-dom";

const Menu = () =>
  // props: {onClick: () => void}
  {
    const [showNav, setShowNav] = useState(false);
    const showSidebar = () => setShowNav(!showNav);

    return (
      <>
        <div className="sidebar">
          <div className="logo">
            <img
              src="/public/VectorDashboard-logo.svg"
              alt="logo"
              onClick={showSidebar}
              width={40}
            />
          </div>

          <nav className={showNav ? "menuContainer active" : "menuContainer"}>
            <ul>
              {SidebarData.map((item, index) => {
                return (
                  <li
                    key={index}
                    className={
                      showNav ? `${item.cName} active` : `${item.cName}`
                    }
                  >
                    <Link
                      to={item.path}
                      className={showNav ? `itemList active` : `itemList`}
                    >
                      <img src={`${item.icon}`} alt={item.cName} />
                      <span
                        className={showNav ? "menuTitle active" : "menuTitle"}
                      >
                        {item.title}
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </>
    );
  };

export default Menu;
