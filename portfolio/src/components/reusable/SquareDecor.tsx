import ImgSmall from "../../assets/SquareSmall.svg"
import ImgLarge from "../../assets/SquareLarge.svg"
type ImgType = 'Large' | 'Small'

interface IProps {
  type: ImgType
}

const SquareDecor = ({type}:IProps) => {
  return (
    <>
      <img src={type === 'Small' ? ImgSmall : ImgLarge} alt="SquareDecor" />
    </>
  )
}

export default SquareDecor