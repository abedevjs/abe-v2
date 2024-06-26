import { Icon } from "@iconify/react";
import { Tooltip } from "react-tooltip";

function Database() {
  return (
    <div className=" w-full">
      <p className=" font-semibold mb-1">Databases:</p>
      <div className="flex items-center space-x-2">
        <Icon
          icon="devicon:mongoose"
          // height="2rem"
          className=" w-8 h-8 sm:w-6 sm:h-6"
          data-tooltip-id="Mongoose"
          data-tooltip-content="Mongoose"
          data-tooltip-place="top"
        />
        <Icon
          icon="devicon:mongodb"
          // height="2rem"
          className=" w-8 h-8 sm:w-6 sm:h-6"
          data-tooltip-id="MongoDB"
          data-tooltip-content="MongoDB"
          data-tooltip-place="top"
        />
        {/* <Icon
          icon="logos:firebase"
          // height="2rem"
          className=" w-8 h-8 sm:w-6 sm:h-6"
          data-tooltip-id="Firebase"
          data-tooltip-content="Firebase"
          data-tooltip-place="top"
        /> */}
        <Icon
          icon="devicon:supabase"
          // height="2rem"
          className=" w-8 h-8 sm:w-6 sm:h-6"
          data-tooltip-id="Supabase"
          data-tooltip-content="Supabase"
          data-tooltip-place="top"
        />
        <Tooltip id="Mongoose" />
        {/* <Tooltip id="Firebase" /> */}
        <Tooltip id="Supabase" />
        <Tooltip id="MongoDB" />
      </div>
    </div>
  );
}

export default Database;
