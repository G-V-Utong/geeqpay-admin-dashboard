import './menu.scss';
import'../../styles/global.scss';
import { useState } from 'react';

const Menu = (
  // props: {onClick: () => void}
  ) => {

  const [ showNav, setShowNav ] = useState(false);
  const showSidebar = () => setShowNav(!showNav)

  return (
    <>
      <div 
    // onClick={props.onClick}
    >
      <img src="/public/VectorDashboard-logo.svg" alt="logo" onClick={showSidebar} />
    </div>

    <div className={showNav ? 'menuContainer active' : 'menuContainer'}>
      
    </div>
    </>
  )
}

export default Menu
