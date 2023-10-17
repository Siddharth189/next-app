import React from "react";
import { TbCalendarStats } from "react-icons/tb";
import { HiOutlineUserCircle } from "react-icons/hi";
import { LuSettings } from "react-icons/lu";
import { FiPieChart } from "react-icons/fi";
import { BsTags } from "react-icons/bs";
const Board = () => {
  return (
    <div className="board">
      <h1
        style={{
          fontFamily: "Montserrat",
          fontSize: "36px",
          fontWeight: "700",
        }}
      >
        Board.
      </h1>
      <div className="board-link">
        <div className="baord-link-above">
          <p style={{ fontWeight: "700" }}>
            <FiPieChart style={{ marginRight: "10px" }} />
            Dashboard
          </p>
          <p>
            <BsTags style={{ marginRight: "10px" }} />
            Transactions
          </p>
          <p>
            <TbCalendarStats style={{ marginRight: "10px" }} />
            Schedules
          </p>
          <p>
            <HiOutlineUserCircle style={{ marginRight: "10px" }} />
            Users
          </p>
          <p>
            <LuSettings style={{ marginRight: "10px" }} />
            Settings
          </p>
        </div>
        <div>
          <p>Help</p>
          <p>contact Us</p>
        </div>
      </div>
    </div>
  );
};

export default Board;
