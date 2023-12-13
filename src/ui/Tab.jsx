import { useState } from "react";
import Profile from "./Profile";
import Portfolio from "./Portfolio";
import { tab } from "../../public/data/tab";

function Tab() {
  const [showTab, setShowTab] = useState(1);

  return (
    <div className=" h-full w-full flex flex-col  rounded-md">
      <TabButton tabObj={tab} showTab={showTab} setShowTab={setShowTab} />
      <TabContent showTab={showTab} />
    </div>
  );
}

function TabButton({ tabObj, showTab, setShowTab }) {
  return (
    <div className="px-8 space-x-8">
      {tabObj.map((data, i) => (
        <button
          key={i}
          onClick={() => setShowTab(i + 1)}
          className={`${
            showTab == i + 1 ? "bg-yellow-300 shadow-md" : "shadow-sm"
          } py-1  px-4 text-lg rounded-md -translate-y-1/2 duration-300 bg-greenLight  shadow-gray-600 hover:bg-yellow-300`}
        >
          {data.title}
        </button>
      ))}
    </div>
  );
}

function TabContent({ showTab }) {
  return (
    <div className=" flex items-center justify-between">
      {showTab == 1 && <Profile />}
      {showTab == 2 && <Portfolio />}
    </div>
  );
}

export default Tab;
