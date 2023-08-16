import { StyledMainButton } from '../../styles/Reusable'
import { Link } from "react-router-dom";

const MainButton = ({text, path, action}:any) => {
  return (
    <>
        <StyledMainButton onClick={action}>
            <Link to={path}>{text}</Link>
        </StyledMainButton>
    </>
  )
}

export default MainButton