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
    <div className=" w-full py-2 px-6 flex justify-around">
      <LeftSide />
      <RightSide />
    </div>
  );
}

function LeftSide() {
  return (
    <div className="flex flex-col space-y-4 ">
      <Biodata />
      <GeneralEducation />
      <TechEducation />
      <JobExperience />
      <LanguageSpoken />
      <Contact />
    </div>
  );
}

function RightSide() {
  return (
    <div className=" flex flex-col space-y-4">
      <Courses />
      <LanguageProgramming />
      <div className="flex items-center space-x-2">
        <Frontend />
        <Backend />
      </div>
      <Database />
    </div>
  );
}

export default Profile;
