function Container({ children }) {
  return (
    <div className=" h-[90%] w-[80%] mx-auto rounded-md text-gray-600 bg-greenLight lg:w-[95%]">
      {children}
    </div>
  );
}

export default Container;
