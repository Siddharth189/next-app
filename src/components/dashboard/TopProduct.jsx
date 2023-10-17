import React from "react";
import Pichart from "./Pichart";

const TopProduct = () => {
  return (
    <div className="card-2">
      <div className="flex-between">
        <h1>Top Products</h1>
        <p
          style={{
            color: "var(--Secondary-Text, #858585)",
            fontFamily: "Montserrat",
            fontSize: "12px",
            fontWeight: "400",
          }}
        >
          21-01-2003
        </p>
      </div>
      <div className="product-card-below">
        <Pichart />
        <div>
          <div>
            <span
              className="colored-circle"
              style={{ backgroundColor: "#98D89E" }}
            />
            <span>Basic Tees</span>
            <p
              style={{
                marginLeft: "30px",
                color: "var(--Secondary-Text, #858585)",
                fontFamily: "Lato",
                fontSize: "12px",
                fontWeight: "400",
              }}
            >
              55%
            </p>
          </div>
          <div>
            <span
              className="colored-circle"
              style={{ backgroundColor: "#F6DC7D" }}
            />
            <span>Custom Short Pants</span>
            <p
              style={{
                marginLeft: "30px",
                color: "var(--Secondary-Text, #858585)",
                fontFamily: "Lato",
                fontSize: "12px",
                fontWeight: "400",
              }}
            >
              31%
            </p>
          </div>
          <div>
            <span
              className="colored-circle"
              style={{ backgroundColor: "#E9A0A0" }}
            />
            <span>Super Hoodies</span>
            <p
              style={{
                marginLeft: "30px",
                color: "var(--Secondary-Text, #858585)",
                fontFamily: "Lato",
                fontSize: "12px",
                fontWeight: "400",
              }}
            >
              14%
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopProduct;
