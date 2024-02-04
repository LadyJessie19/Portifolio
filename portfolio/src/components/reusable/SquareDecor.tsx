import ImgSmall from "../../assets/SquareSmall.svg";
import ImgLarge from "../../assets/SquareLarge.svg";
type ImgType = "Large" | "Small";

interface IProps {
  type: ImgType;
  translate?: boolean;
}

const SquareDecor = ({ type, translate }: IProps) => {
  return (
    <>
      <img
        src={type === "Small" ? ImgSmall : ImgLarge}
        alt="SquareDecor"
        style={translate ? { transform: "rotate(180deg)" } : {}}
      />
    </>
  );
};

export default SquareDecor;
