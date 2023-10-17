import React, { useState } from "react";
import Board from "./Board";
import Chart from "./Chart";
import TopProduct from "./TopProduct";
import Profile from "./Profile";
import { FaSearch } from "react-icons/fa";
import { IoMdNotificationsOutline } from "react-icons/io";
import def from "../../assests/images/def.png";
import Card from "./Card";

const Dash = () => {
  const [searchText, setSearchText] = useState("");

  const cards = [
    {
      icon: "reven",
      iconColor: "#7FCD93",
      title: "Total Revenues",
      prefix: "$",
      amount: "2129430",
      change: "2.5",
    },
    {
      icon: "trans",
      iconColor: "#DEBF85",
      title: "Total Transactions",
      prefix: "",
      amount: "1520",
      change: "1.7",
    },
    {
      icon: "like",
      iconColor: "#ECA4A4",
      title: "Total Likes",
      prefix: "",
      amount: "9721",
      change: "-1.4",
    },
    {
      icon: "user",
      iconColor: "#A9B0E5",
      title: "Total Users",
      prefix: "",
      amount: "9721",
      change: "4.2",
    },
  ];
  return (
    <div className="dash-board flex-row">
      <Board />
      <div className="dash-right flex-column">
        <div className="header flex-row">
          <span>
            <h1>Dashboard</h1>
          </span>
          <span className="header-right">
            <input
              type="text"
              className="search-input"
              placeholder="Search..."
              value={searchText}
              onChange={(e) => {
                setSearchText(e.target.value);
              }}
            />
            <button className="search-btn" onClick={() => {}}>
              <FaSearch />
            </button>
            <span className="header-not">
              <IoMdNotificationsOutline />
            </span>
            <span className="header-profile">
              <img src={def} alt="profile-photo" />
            </span>
          </span>
        </div>

        <div className="card-container">
          {cards.map((cardItem) => {
            return <Card {...cardItem} />;
          })}
        </div>
        <Chart />
        <div className="flex-between">
          <TopProduct />
          <Profile />
        </div>
      </div>
    </div>
  );
};

export default Dash;
