import React, { useState } from "react";
import AddProfile from "./AddProfile";
import Popup from "reactjs-popup";

const Profile = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="profile card-2">
      <Popup
        trigger={
          <button
            className="profile-btn"
            onClick={() => {
              setIsOpen(~isOpen);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="52"
              height="52"
              viewBox="0 0 52 52"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M26 10.0049C26.8835 10.0049 27.5997 10.7211 27.5997 11.6046L27.5997 24.7097L40.7048 24.7096C41.5883 24.7096 42.3045 25.4258 42.3045 26.3093C42.3045 27.1927 41.5883 27.9089 40.7048 27.9089L27.5998 27.909L27.5998 41.0139C27.5998 41.8974 26.8836 42.6136 26.0002 42.6136C25.1167 42.6136 24.4005 41.8974 24.4005 41.0139L24.4004 27.909L11.2953 27.9089C10.4119 27.9089 9.69567 27.1927 9.69568 26.3092C9.69568 25.4258 10.4119 24.7096 11.2953 24.7096L24.4004 24.7097L24.4003 11.6046C24.4003 10.7211 25.1165 10.0049 26 10.0049Z"
                fill="#999CA0"
              />
            </svg>
          </button>
        }
        modal
        nested
      >
        {(close) => (
          <div className="modal">
            <AddProfile fun={close} />
          </div>
        )}
      </Popup>
      <p>Add Profile</p>
    </div>
  );
};

export default Profile;
