import "./menu.scss";
import "../../styles/global.scss";
import { useState } from "react";
import { SidebarData, SettingsData } from "../sidebarData/SidebarData";
import { Link } from "react-router-dom";
import { ReactComponent as DashboardIcon } from "../../images/categorydashboard-menu.svg";
// import { ReactComponent as TrendsIcon } from "!@svgr/webpack!../../../public/trend-up.svg";
// import { ReactComponent as UsersIcon } from "!@svgr/webpack!../../../public/profile-2user.svg";
// import { ReactComponent as ProductsIcon } from "!@svgr/webpack!../../../public/box.svg";
// import { ReactComponent as InformaticsIcon } from "!@svgr/webpack!../../../public/info-circle.svg";

interface IconComponents {
  Dashboard: JSX.Element;
  Trends: JSX.Element;
  Users: JSX.Element;
  Products: JSX.Element;
  Informatics: JSX.Element;
  
}


const Menu = () =>  {
  // const iconComponents = {
  //   Dashboard: <DashboardIcon />,
  //   // Trends: <TrendsIcon />,
  //   // Users: <UsersIcon />,
  //   // Products: <ProductsIcon />,
  //   // Informatics: <InformaticsIcon />,
  // };
    
    const [showNav, setShowNav] = useState(false);
    const showSidebar = () => setShowNav(!showNav);

    return (
      <>
        <div className="sidebar">
          <div className="logo">
            <img
              src="/VectorDashboard-logo.svg"
              alt="logo"
              onClick={showSidebar}
              width={40}
            />
          </div>

          <div className="sidebarNavContainer">
          <div className="sidebarNav">
          <nav className={showNav ? "menuContainer active" : "menuContainer"}>
            <ul>
              {SidebarData.map((item, index) => {
                // const IconComponent = iconComponents[item.title as keyof IconComponents];
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
                      {/* {IconComponent} */}
                      {/* <DashboardIcon/> */}
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
          <nav className={showNav ? "menuContainer active" : "menuContainer"}>
            <ul>
              {SettingsData.map((item, index) => {
                // const IconComponent = iconComponents[item.title as keyof IconComponents];
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
                      {/* {IconComponent} */}
                      {/* <DashboardIcon/> */}
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
          </div>
        </div>
      </>
    );
  };

export default Menu;
