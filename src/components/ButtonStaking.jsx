import React from "react";

const ButtonStaking = ({ handleClick, disabledOption, btnText }) => {
  return (
    <button
      className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded disabled:opacity-25 disabled:cursor-not-allowed"
      onClick={handleClick}
      disabled={disabledOption}
    >
      {btnText}
    </button>
  );
};

export default ButtonStaking;
