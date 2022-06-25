import Navbar from '../navbar/Navbar';
import headerStyle from './header.module.scss';


const Header = () => {
  return (
    <header>
        <Navbar/>
        <h1 className={headerStyle.title}>POPULAR TOUR PLACES</h1>
    </header>
  )
}

export default Header