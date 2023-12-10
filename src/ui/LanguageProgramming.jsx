import { Icon } from "@iconify/react";
import { Tooltip } from "react-tooltip";

function LanguageProgramming() {
  return (
    <div className=" w-full">
      <p className=" font-semibold mb-1">Language Programming:</p>
      <div className="flex items-center space-x-2">
        <Icon
          icon="vscode-icons:file-type-html"
          height="2rem"
          data-tooltip-id="HTML"
          data-tooltip-content="HTML"
          data-tooltip-place="top"
        />
        <Icon
          icon="devicon:css3"
          height="2rem"
          data-tooltip-id="CSS"
          data-tooltip-content="CSS"
          data-tooltip-place="top"
        />
        <Icon
          icon="devicon:javascript"
          height="1.8rem"
          data-tooltip-id="JavaScript"
          data-tooltip-content="JavaScript"
          data-tooltip-place="top"
        />
        <Icon
          icon="devicon:typescript"
          height="1.8rem"
          data-tooltip-id="TypeScript"
          data-tooltip-content="TypeScript"
          data-tooltip-place="top"
        />
        <Tooltip id="HTML" />
        <Tooltip id="CSS" />
        <Tooltip id="JavaScript" />
        <Tooltip id="TypeScript" />
      </div>
    </div>
  );
}

export default LanguageProgramming;
