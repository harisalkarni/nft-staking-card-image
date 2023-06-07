import React from "react";

const CancelStakingComponent = ({ timeRemaining, handleCancel }) => {
  return (
    <div className="mt-8">
      <p>You will get 5C pinalty if you cancel the staking process</p>
      <button
        onClick={handleCancel}
        className="bg-transparent mb-7 mt-2 hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded"
      >
        Cancel Staking
      </button>
      <h2 className="font-bold text-lg">
        Time remaining: {timeRemaining} seconds
      </h2>
    </div>
  );
};

export default CancelStakingComponent;
