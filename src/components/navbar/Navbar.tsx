import './navbar.scss'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="logo">
        <h1>Dashboard</h1>
      </div>
      <div className="icons">
        <div className="searchBar">
          <input type="text" className='searchBar__input' placeholder='Search...'/>
        </div>
        <div className="date"></div>
        <div className="notification"></div>
        <div className="userProfile"></div>
      </div>
    </div>
  )
}

export default Navbar
