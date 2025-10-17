import "./App.css";
import { useState } from "react";
import backgroundImg from "./assets/leo-card.png";
import MastercartLogo from "./assets/mastercard-og-image.png";
import ChipImg from "./assets/pngtree-sim-card-chip-icon-call-digital-vector-png-image_40148238-removebg-preview.png";

function App() {
  const [isFlipped, setIsFlipped] = useState(false);
  return (
    <>
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
            <spa n>
              This card is issued by Unibank CB OJSC pursant to licence by
              Mastercard
            </spa>
            <div className="magnetic-stripe"></div>
            <h4>5411 2489 1234 4321</h4>
            <div className="card-back-content">
              <div className="date">
                <span>05/29</span>
                <small>EXP</small>
              </div>
              <div className="cvc">
                <span>123</span>
                <small>CVC</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
