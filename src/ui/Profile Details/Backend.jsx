import { Icon } from "@iconify/react";
import { Tooltip } from "react-tooltip";

function Backend() {
  return (
    <div className=" w-full">
      <p className=" font-semibold mb-1">Backend Tech Stacks:</p>
      <div className="flex items-center space-x-2">
        <Icon
          icon="devicon:express"
          // height="2rem"
          className=" w-8 h-8 sm:w-6 sm:h-6"
          data-tooltip-id="Express"
          data-tooltip-content="Express"
          data-tooltip-place="top"
        />
        <Icon
          icon="logos:nodejs-icon"
          // height="2rem"
          className=" w-8 h-8 sm:w-6 sm:h-6"
          data-tooltip-id="NodeJS"
          data-tooltip-content="NodeJS"
          data-tooltip-place="top"
        />
        <Tooltip id="Express" />
        <Tooltip id="NodeJS" />
      </div>
    </div>
  );
}

export default Backend;
