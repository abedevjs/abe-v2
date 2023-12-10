import Biodata from "./Biodata";
import Contact from "./Contact";
import Courses from "./Courses";
import GeneralEducation from "./GeneralEducation";
import JobExperience from "./JobExperience";
import LanguageProgramming from "./LanguageProgramming";
import LanguageSpoken from "./LanguageSpoken";
import TechEducation from "./TechEducation";
import Frontend from "./Frontend";
import Backend from "./Backend";
import Database from "./Database";

function Profile() {
  return (
    <div className="flex justify-between">
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
