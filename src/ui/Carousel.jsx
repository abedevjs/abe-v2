import { useState } from "react";
import { Icon } from "@iconify/react";
import { portofolio } from "../../public/data/portofolio";

export default function Carousel() {
  let [current, setCurrent] = useState(0);

  let previousSlide = () => {
    if (current === 0) {
      setCurrent(portofolio.length - 1);
    } else {
      setCurrent(current - 1);
    }
  };

  let nextSlide = () => {
    if (current === portofolio.length - 1) {
      setCurrent(0);
    } else {
      setCurrent(current + 1);
    }
  };

  return (
    // CAROUSEL
    <div className=" h-full w-[73rem] flex flex-col justify-between items-center overflow-hidden">
      {/* TITLE */}
      <p className="  text-sm font-light">{`Slide ${current + 1} of ${
        portofolio.length
      } projects`}</p>

      {/* INNER */}
      <div
        className={` w-full h-[30rem] transition ease-out duration-300  whitespace-nowrap`}
        // style={{
        //   transform: `translateX(-${current * 100}%)`,
        // }}
        style={{ transform: `translate(-${current * 100}%)` }}
      >
        {/* ITEM */}
        {portofolio.map((el, i) => (
          <CarouselContent key={i} obj={el} w="100%" />
        ))}
      </div>

      {/* DOT */}
      {/* <div className="  flex justify-center gap-2 ">
        {portofolio.map((s, i) => {
          return (
            <div
              onClick={() => {
                setCurrent(i);
              }}
              key={"circle" + i}
              className={`rounded-full w-3 h-3 cursor-pointer  ${
                i == current ? "bg-white" : "bg-gray-500"
              }`}
            ></div>
          );
        })}
      </div> */}

      {/* ARROWS */}
      <div className="flex space-x-6 text-3xl z-10">
        {/* <button onClick={previousSlide}>&#8592;</button> */}
        <Icon
          onClick={previousSlide}
          className=" cursor-pointer"
          icon="fluent:arrow-left-12-filled"
        />
        <Icon
          onClick={nextSlide}
          className=" cursor-pointer"
          icon="fluent:arrow-right-12-filled"
        />
      </div>
    </div>
  );
}

function CarouselContent({ obj }) {
  return (
    <div className=" inline-flex items-center justify-around h-full ">
      {/* IMAGE */}
      <div className=" w-[40%] rounded-md shadow-md shadow-gray-600 bg-greenLight">
        <img
          src={`/images/${obj.image}.png`}
          alt=""
          className="w-full h-auto p-2 rounded-md"
        />
      </div>
      {/* DATA */}
      <div className=" space-y-12">
        {/* Title and Link BOX */}
        <div className=" w-full flex justify-evenly">
          <span className=" font-semibold text-xl uppercase text-slate-700">
            {obj.title}
          </span>
          <a
            className="flex justify-center items-center space-x-1 px-2 text-sm text-slate-100 rounded-lg bg-red-500 opacity-100 duration-300 hover:opacity-80"
            href={obj.website}
            target="_blank"
            rel="noreferrer"
          >
            <span>Visit Website</span>
            <Icon icon="heroicons-outline:external-link" />
          </a>
        </div>
        {/* Description */}
        <p className="italic">{obj.description}</p>
        {/* Detail Pair BOX */}
        <div>
          <div className="flex items-center w-full">
            <p className=" w-[20%] font-light text-xs uppercase">Tech Stack:</p>
            <div className="flex space-x-2 text-xl">
              {obj.tech.map((el, i) => (
                <Icon key={i} icon={el} />
              ))}
            </div>
          </div>
          <div className="flex items-center w-full">
            <p className=" w-[20%] font-light text-xs uppercase">Features:</p>
            <p>Long scroll, portofoliohow images</p>
          </div>

          <div className="flex items-center w-full">
            <p className=" w-[20%] font-light text-xs uppercase">Type:</p>
            <p>Side Project/Client Project</p>
          </div>
          <div className="flex items-center w-full">
            <p className=" w-[20%] font-light text-xs uppercase">Published:</p>
            <p>June, 2020</p>
          </div>
          <div className="flex items-center w-full">
            <p className=" w-[20%] font-light text-xs uppercase">GIT Repo:</p>
            <a
              className="flex justify-center items-center space-x-1 px-2 text-sm text-slate-100 rounded-lg bg-gray-600 opacity-100 duration-300 hover:opacity-80"
              href={obj.code}
              target="_blank"
              rel="noreferrer"
            >
              <span>View Code</span>
              <Icon icon="akar-icons:github-fill" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
