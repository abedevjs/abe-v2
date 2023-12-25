import Biodata from "./Profile Details/Biodata";
import Contact from "./Profile Details/Contact";
import Courses from "./Profile Details/Courses";
import GeneralEducation from "./Profile Details/GeneralEducation";
import JobExperience from "./Profile Details/JobExperience";
import LanguageProgramming from "./Profile Details/LanguageProgramming";
import LanguageSpoken from "./Profile Details/LanguageSpoken";
import TechEducation from "./Profile Details/TechEducation";
import Frontend from "./Profile Details/Frontend";
import Backend from "./Profile Details/Backend";
import Database from "./Profile Details/Database";

function Profile() {
  return (
    <div className=" w-full py-2 px-6 flex justify-around lg:flex-col lg:space-y-4">
      <LeftSide />
      <RightSide />
    </div>
  );
}

function LeftSide() {
  return (
    <div className="flex flex-col space-y-4 ">
      <Biodata />
      <Contact />
      <GeneralEducation />
      <TechEducation />
      <JobExperience />
      <LanguageSpoken />
    </div>
  );
}

function RightSide() {
  return (
    <div className=" flex flex-col space-y-4">
      <Courses />
      <LanguageProgramming />
      <div className="flex items-center space-x-2 sm:space-x-0 sm:flex-col sm:space-y-4">
        <Frontend />
        <Backend />
      </div>
      <Database />
    </div>
  );
}

export default Profile;
