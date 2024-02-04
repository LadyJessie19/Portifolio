import {
  StyledImgLeftSide,
  StyledImgRightSide,
} from "../../styles/ReusableStyles";

import SquareDecor from "./SquareDecor";
import DotsDecor from "./DotsDecor";

type SizeRenderDecor = "small" | "medium" | "large" | "big";
const Decorations = ({ size }: { size: SizeRenderDecor }) => {
  return (
    <>
      <StyledImgLeftSide>
        {size === "small" && <DotsDecor />}
        {size === "medium" && (
          <>
            <DotsDecor />
            <SquareDecor type="Small" />
            <SquareDecor type="Large" translate={true} />
          </>
        )}
        {size === "large" && (
          <>
            <DotsDecor />
            <SquareDecor type="Small" />
            <SquareDecor type="Large" translate={true} />
            <DotsDecor />
            <SquareDecor type="Large" translate={true} />
          </>
        )}
        {size === "big" && (
          <>
            <DotsDecor />
            <SquareDecor type="Small" />
            <SquareDecor type="Large" translate={true} />
            <DotsDecor />
            <SquareDecor type="Large" translate={true} />
            <SquareDecor type="Small" />
            <DotsDecor />
          </>
        )}
      </StyledImgLeftSide>

      <StyledImgRightSide>
        {size === "small" && <SquareDecor type="Large" />}
        {size === "medium" && (
          <>
            <SquareDecor type="Large" />
            <DotsDecor />
            <DotsDecor />
          </>
        )}
        {size === "large" && (
          <>
            <SquareDecor type="Large" />
            <DotsDecor />
            <DotsDecor />
            <SquareDecor type="Small" />
            <SquareDecor type="Large" />
          </>
        )}
        {size === "big" && (
          <>
            <SquareDecor type="Large" />
            <DotsDecor />
            <DotsDecor />
            <SquareDecor type="Small" />
            <SquareDecor type="Large" />
            <DotsDecor />
            <SquareDecor type="Small" />
          </>
        )}
      </StyledImgRightSide>
    </>
  );
};

export default Decorations;
