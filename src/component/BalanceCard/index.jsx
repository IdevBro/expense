import React from "react";

const BalanceCard = ({ name, sum }) => {
  return (
    <div className="balanceCard">
      <p className="cardName">{name}</p>
      <p className={`cardSum ${name === "Balance" ? "balanceSumCard" : ""}`}>
        {sum}
      </p>
    </div>
  );
};

export default BalanceCard;
