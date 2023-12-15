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

      <div className=" w-1/2 flex items-center justify-evenly">
        {/* TITLE */}
        <p className="  text-sm font-light">{`Slide ${current + 1} of ${
          portofolio.length
        } projects`}</p>
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
    </div>
  );
}

function CarouselContent({ obj }) {
  return (
    <div className="h-full w-full inline-flex items-center overflow-hidden">
      {/* IMAGE */}
      <div className=" ml-2 p-2 flex-1 rounded-md shadow-sm shadow-gray-600 bg-greenLight ">
        <img
          src={`/images/${obj.image}.png`}
          alt=""
          className="w-full h-auto p-2 rounded-md"
        />
      </div>
      {/* DATA */}
      <div className=" w-[50%] pl-8  flex flex-col justify-around space-y-12 whitespace-break-spaces">
        {/* Title and Link BOX */}
        <div className="  w-full flex justify-evenly">
          <span className=" font-semibold text-xl uppercase text-slate-700">
            {obj.title}
          </span>
          <a
            className="flex justify-center items-center space-x-1 px-2 text-sm text-slate-100 rounded-lg bg-red-500 opacity-100 duration-300 hover:opacity-80"
            href={obj.website}
            target="_blank"
            rel="noreferrer"
          >
            <span>Visit Website </span>
            <Icon icon="heroicons-outline:external-link" />
          </a>
        </div>
        {/* Description */}
        <p className=" w-full italic text-left ">{obj.description}</p>
        {/* Detail Pair BOX */}
        <div className=" space-y-1">
          <div className="flex items-center w-full">
            <p className=" w-[20%] font-light text-xs uppercase">Tech Stack:</p>
            <div className="flex-1 flex items-center space-x-2 text-xl">
              {obj.tech.map((el, i) => (
                <Icon key={i} icon={el} />
              ))}
            </div>
          </div>
          <div className="flex items-center w-full">
            <p className=" w-[20%] font-light text-xs uppercase ">Features:</p>
            <p className=" flex-1 text-sm">{obj.features}</p>
          </div>
          <div className="flex items-center w-full">
            <p className=" w-[20%] font-light text-xs uppercase">Type:</p>
            <p className=" text-sm">{obj.type}</p>
          </div>
          <div className="flex items-center w-full">
            <p className=" w-[20%] font-light text-xs uppercase">Published:</p>
            <p className=" text-sm">{obj.published}</p>
          </div>
          <div className="flex items-center w-full">
            <p className=" w-[20%] font-light text-xs uppercase">GIT Repo:</p>
            {obj.code ? (
              <a
                className="flex justify-center items-center space-x-1 px-2 text-sm text-slate-100 rounded-lg cursor-pointer bg-gray-600 opacity-100 duration-300 hover:opacity-80"
                href={obj.code}
                target="_blank"
                rel="noreferrer"
              >
                <span>View Code </span>
                <Icon icon="akar-icons:github-fill" />
              </a>
            ) : (
              "---"
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
