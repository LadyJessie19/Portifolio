import Quotes from "../../assets/Quotes.svg";
import { useLanguage } from "../../contexts/LanguageProvider";
import { StyledQuote } from "../../styles/ReusableStyles";

const Quote = () => {
  const { language } = useLanguage() || { language: "EN-US" };
  return (
    <>
      <StyledQuote>
        <div className="inner-quote">
          <div className="phrase-quote">
            <img className="begin-quote" src={Quotes} alt="quotes" />
            {language === "EN-US" ? (
              <p>The best way to predict the future is to create it.</p>
            ) : (
              <p> A melhor maneira de prever o futuro é criando-o.</p>
            )}
            <img className="end-quote" src={Quotes} alt="quotes" />
          </div>
          <div className="phrase-quote behind-quote">
            <p>- Abraham Lincoln</p>
          </div>
        </div>
      </StyledQuote>
    </>
  );
};

export default Quote;
