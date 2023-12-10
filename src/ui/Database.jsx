import { Icon } from "@iconify/react";
import { Tooltip } from "react-tooltip";

function Database() {
  return (
    <div className=" w-full">
      <span className=" font-semibold mb-1">Database:</span>
      <div className="flex items-center space-x-2">
        <Icon
          icon="devicon:mongoose"
          height="2rem"
          data-tooltip-id="Mongoose"
          data-tooltip-content="Mongoose"
          data-tooltip-place="top"
        />
        <Icon
          icon="devicon:mongodb"
          height="2rem"
          data-tooltip-id="MongoDB"
          data-tooltip-content="MongoDB"
          data-tooltip-place="top"
        />
        <Icon
          icon="devicon:supabase"
          height="2rem"
          data-tooltip-id="Supabase"
          data-tooltip-content="Supabase"
          data-tooltip-place="top"
        />
        <Tooltip id="Mongoose" />
        <Tooltip id="Supabase" />
        <Tooltip id="MongoDB" />
      </div>
    </div>
  );
}

export default Database;
