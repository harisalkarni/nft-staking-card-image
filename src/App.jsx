import { useState } from "react";
import "./App.css";
import { data } from "./dummyData";
import CardComponent from "./components/CardComponent";
import CancelStakingComponent from "./components/CancelStakingComponent";
import ButtonStaking from "./components/buttonStaking";
import midnightFlower from "./assets/midnightFlower.png";

function App() {
  const [timer60, setTimer60] = useState(5);
  const [timer90, setTimer90] = useState(10);
  const [timer120, setTimer120] = useState(15);
  const [start60, setStart60] = useState(false);
  const [start90, setStart90] = useState(false);
  const [start120, setStart120] = useState(false);
  const [walletBalance, setWalletBalance] = useState(100);

  let startTimer;

  const handleTimer60 = () => {
    setStart60(true);
    startTimer = setInterval(() => {
      setTimer60((prevTimer) => {
        if (prevTimer > 0) {
          return prevTimer - 1;
        } else {
          setStart60(false);
          setWalletBalance(walletBalance + 10);
          clearInterval(startTimer);
          setTimer60(5);
        }
      });
    }, 1000);
  };

  const handleTimer90 = () => {
    setStart90(true);
    startTimer = setInterval(() => {
      setTimer90((prevTimer) => {
        if (prevTimer > 0) {
          return prevTimer - 1;
        } else {
          setStart90(false);
          setWalletBalance(walletBalance + 20);
          clearInterval(startTimer);
          setTimer90(10);
        }
      });
    }, 1000);
  };

  const handleTimer120 = () => {
    setStart120(true);
    startTimer = setInterval(() => {
      setTimer120((prevTimer) => {
        if (prevTimer > 0) {
          return prevTimer - 1;
        } else {
          setStart120(false);
          setWalletBalance(walletBalance + 30);
          clearInterval(startTimer);
          setTimer120(15);
        }
      });
    }, 1000);
  };

  console.log(walletBalance);
  console.log(start60);

  const handleCancel = () => {
    clearInterval(startTimer);
    setStart60(false);
    setStart90(false);
    setStart120(false);
    setTimer60(5);
    setTimer90(10);
    setTimer120(15);
    setWalletBalance((prevAmount) => prevAmount - 5);
  };

  return (
    <>
      <h1 className="font-bold text-lg mb-5">Your Balance: {walletBalance}C</h1>

      <CardComponent
        title={data[0].title}
        type={data[0].type}
        imgUrl={midnightFlower}
      />

      <h3 className="my-7">Staking Options:</h3>

      <div className="flex items-center justify-center gap-10">
        <ButtonStaking
          btnText="60 Second"
          handleClick={handleTimer60}
          disabledOption={start90 || start120 || start60 ? true : false}
        />
        <ButtonStaking
          btnText="90 Second"
          handleClick={handleTimer90}
          disabledOption={start90 || start120 || start60 ? true : false}
        />
        <ButtonStaking
          btnText="120 Second"
          handleClick={handleTimer120}
          disabledOption={start90 || start120 || start60 ? true : false}
        />
      </div>

      {/* Cancel Staking Component */}

      {start60 && (
        <CancelStakingComponent
          timeRemaining={timer60}
          handleCancel={handleCancel}
        />
      )}

      {start90 && (
        <CancelStakingComponent
          timeRemaining={timer90}
          handleCancel={handleCancel}
        />
      )}

      {start120 && (
        <CancelStakingComponent
          timeRemaining={timer120}
          handleCancel={handleCancel}
        />
      )}
    </>
  );
}

export default App;
