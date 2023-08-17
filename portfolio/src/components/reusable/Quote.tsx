import Quotes from "../../assets/Quotes.svg";
import { StyledQuote } from "../../styles/ReusableStyles";

const Quote = () => {
  return (
    <>
      <StyledQuote>
        <div className="inner-quote">
          <img className="begin-quote" src={Quotes} alt="quotes" />
          <div className="phrase-quote">
            <p>The best way to predict the future is to create it.</p>
          </div>
          <img className="end-quote" src={Quotes} alt="quotes" />
          <div className="phrase-quote">
            <p>- Abraham Lincoln</p>
          </div>
        </div>
      </StyledQuote>
    </>
  );
};

export default Quote;
