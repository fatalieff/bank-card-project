import "./App.css";
import { useState } from "react";
import backgroundImg from "./assets/leo-card.png";
import MastercartLogo from "./assets/mastercard-og-image.png";
import ChipImg from "./assets/pngtree-sim-card-chip-icon-call-digital-vector-png-image_40148238-removebg-preview.png";

function App() {
  //HOOKLAR
  const [isFlipped, setIsFlipped] = useState(false);
  const [cardNumber, setCardNumber] = useState("");
  const [cvv, setCvv] = useState("");
  const [date, setDate] = useState("");

  ///Handle Hissesi
  const handleDateChange = (e) => {
    let value = e.target.value.replace(/\D/g, "");
    if (value.length > 4) value = value.slice(0, 4);
    if (value.length > 2) {
      value = value.slice(0, 2) + "/" + value.slice(2);
    }
    setDate(value);
  };

  const handleNumberChange = (e) => {
    const value = e.target.value.replace(/\D/g, "");
    if (value.length <= 16) {
      setCardNumber(value);
    }
  };

  const handleCvvChange = (e) => {
    const value = e.target.value.replace(/\D/g, "");
    if (value.length <= 3) {
      setCvv(value);
    }
  };
  return (
    <div className="container">
      <div className="card-container" onClick={() => setIsFlipped(!isFlipped)}>
        <div className={`card ${isFlipped ? "is-flipped" : ""}`}>
          <div className="card-front card-face">
            <img src={backgroundImg} alt="" />
            <div className="mastercard-logo-container">
              <img src={MastercartLogo} alt="" />
            </div>
            <div className="chip-img">
              <img src={ChipImg} alt="" />
            </div>
          </div>
          <div className="card-back card-face">
            <span>
              This card is issued by Unibank CB OJSC pursant to licence by
              Mastercard
            </span>
            <div className="magnetic-stripe"></div>
            <h4>
              {cardNumber
                ? cardNumber.replace(/(\d{4})/g, "$1 ").trim()
                : "#### #### #### ####"}
            </h4>
            <div className="card-back-content">
              <div className="date">
                <span>{date || "MM/YY"}</span>
                <small>EXP</small>
              </div>
              <div className="cvc">
                <span>{cvv || "###"}</span>
                <small>CVC</small>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="input-group">
        <div className="textInputWrapper">
          <input
            onFocus={() => setIsFlipped(true)}
            type="text"
            placeholder="Card Number"
            value={cardNumber}
            onChange={handleNumberChange}
            className="textInput"
          />
        </div>
        <div className="textInputWrapper">
          <input
            onFocus={() => setIsFlipped(true)}
            type="text"
            placeholder="Date"
            value={date}
            onChange={handleDateChange}
            className="textInput"
          />
        </div>
        <div className="textInputWrapper">
          <input
            onFocus={() => setIsFlipped(true)}
            type="text"
            placeholder="CVC"
            value={cvv}
            onChange={handleCvvChange}
            className="textInput"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
