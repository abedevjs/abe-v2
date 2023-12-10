import { courses } from "../../public/data/courses";
import UnorderedList from "./UnorderedList";

function Courses() {
  return (
    <div className=" w-full">
      <span className=" font-semibold">Courses:</span>
      <UnorderedList lists={courses} />
      {/* <ul className=" list-disc list-inside ">
        <li>
          Udemy - The Ultimate React Course 2024: React, Redux & More (2023)
        </li>
        <li>
          Udemy - Tailwind CSS From Scratch | Learn By Building Projects(2023)
        </li>
        <li>
          Udemy - Complete Angular Developer in 2023: Zero to Mastery (2022)
        </li>
        <li>Udemy - The Modern Angular Bootcamp (2022)</li>
        <li>Udemy - React | The Complete Guide (2022)</li>

        <li>
          Udemy - Node.js, Express, MongoDB & More: The Complete Bootcamp (2021)
        </li>
        <li>
          Udemy - The Complete JavaScript Course: From Zero to Expert! (2020)
        </li>
        <li>
          Udemy - Advanced CSS and Sass: Flexbox, Grid, Animations and More
          (2020)
        </li>
        <li>
          Udemy - Build Responsive Real-World Websites with HTML and CSS (2020)
        </li>
      </ul> */}
    </div>
  );
}

export default Courses;
