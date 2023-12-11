import { Icon } from "@iconify/react";

const birthYear = 1986;
const myAge = new Date().getFullYear() - birthYear;

function Biodata() {
  return (
    <div className=" w-full flex items-center justify-normal space-x-10">
      <div>
        <img src="/images/green.png" alt="abe" className=" h-auto w-24" />
      </div>
      <div>
        <p>Muhammad Akbar </p>
        <div className="flex items-center space-x-2">
          <span>Indonesian</span>
          <Icon icon="twemoji:flag-indonesia" height="1rem" />
        </div>
        <p>{myAge} years old</p>
        <div className="flex items-center space-x-2">
          <Icon icon="mdi:hand-wave" height="1rem" color="#57534e" />
          <span className="italic">
            hello there, I`m an autodidact full-stack web developer.
          </span>
        </div>
      </div>
    </div>
  );
}

export default Biodata;
