import React from "react";
import reven from "../../assests/images/reven.png";
import trans from "../../assests/images/trans.png";
import like from "../../assests/images/like.png";
import user from "../../assests/images/user.png";

const Card = ({ icon, iconColor, title, prefix, amount, change }) => {
  const image = require(`../../assests/images/${icon}.png`);

  let changeCol = "green";
  let bgCol = "#E9F9EB";
  let sign = "+";
  if (change < 0) {
    changeCol = "red";
    sign = "";
    bgCol = "#F2DFDD";
  }
  console.log(iconColor);
  return (
    <div className="card">
      <div>
        <img
          src={image}
          style={{
            padding: "10px",
            border: "1px, solid white",
            borderRadius: "50px",
            fontWeight: "bolder",
            backgroundColor: `${iconColor}`,
          }}
          alt="icon"
        />
      </div>
      <div>{title}</div>
      <div className="flex-between">
        <span className="amnt">
          {prefix}
          {String(amount).replace(/(.)(?=(\d{3})+$)/g, "$1,")}
        </span>
        <span
          className="chng"
          style={{ color: changeCol, backgroundColor: bgCol }}
        >
          {sign}
          {change}%
        </span>
      </div>
    </div>
  );
};

export default Card;
