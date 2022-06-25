import navbarStyle from './navbar.module.scss';


const Navbar = () => {
  return (
    <nav className={navbarStyle.navbarDiv}>
        <ul>
            <li>ABOUT AS</li>
            <li>FOR YOU</li>
            <li>SERVİCES</li>
            <li>BLOG</li>
            <li>VLOG</li>
            <li>CONTACT</li>
        </ul>
    </nav>
  )
}

export default Navbar