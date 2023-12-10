import { useState } from "react";
import Profile from "./Profile";
import Portfolio from "./Portfolio";

function Tab() {
  const [showTab, setShowTab] = useState(1);
  function handleToggle(e) {
    setShowTab(e);
  }

  console.log(showTab);
  return (
    <div className=" h-full w-full flex flex-col  rounded-md">
      <div className=" px-8 space-x-8">
        <button
          onClick={() => handleToggle(1)}
          className={`${
            showTab == 1 ? "bg-yellow-300 shadow-md" : "shadow-sm"
          } py-1  px-4 text-lg rounded-md -translate-y-1/2 duration-300 bg-greenLight  shadow-gray-600 hover:bg-yellow-300`}
        >
          Profile
        </button>
        <button
          onClick={() => handleToggle(2)}
          className={`${
            showTab == 2 ? "bg-yellow-300 shadow-md" : "shadow-sm"
          } py-1  px-4 text-lg rounded-md -translate-y-1/2 duration-300 bg-greenLight shadow-gray-600 hover:bg-yellow-300`}
        >
          Portfolio
        </button>
      </div>
      <TabContent showTab={showTab} />
    </div>
  );
}

function TabContent({ showTab }) {
  return (
    <div className=" py-2 px-8">
      {showTab == 1 && <Profile />}
      {showTab == 2 && <Portfolio />}
    </div>
  );
}

export default Tab;
