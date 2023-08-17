import { StyledMainButton } from '../../styles/ReusableStyles'
import { Link } from "react-router-dom";

interface IProps {
  text:string,
  path?:string,
  action?: () => any,
  link?:string
}

const MainButton = ({text, path, action, link}:IProps) => {
  return (
    <>
      {link ? <StyledMainButton>
                <a href={link} target="_blank">{text}</a>
              </StyledMainButton>
        : 
        <StyledMainButton onClick={action}>
          <Link to={path}>{text}</Link>
        </StyledMainButton>
        }
    </>
  )
}

export default MainButton