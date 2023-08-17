import { Link } from "react-router-dom"
import { StyledNavBar } from "../../styles/ReusableStyles"
import Dropdown from "../../assets/Dropdown.svg"

const NavBar = () => {
  return (
    <>
      <StyledNavBar>
        <Link to='/'><div><span>#</span>home</div></Link>
        <Link to='/projects'><div><span>#</span>works</div></Link>
        <Link to='/about'><div><span>#</span>about-me</div></Link>
        <Link to='/contact'><div><span>#</span>contacts</div></Link>
        <div>EN <img src={Dropdown}/></div>
      </StyledNavBar>
    </>
  )
}

export default NavBar