import { Icon } from "@iconify/react";
import { Tooltip } from "react-tooltip";

function Frontend() {
  return (
    <div className=" w-full">
      <p className=" font-semibold mb-1">Frontend Tech Stacks:</p>
      <div className="flex items-center space-x-2">
        <Icon
          icon="devicon:sass"
          height="2rem"
          data-tooltip-id="Sass"
          data-tooltip-content="Sass SCSS"
          data-tooltip-place="top"
        />
        <Icon
          icon="devicon:tailwindcss"
          height="2rem"
          data-tooltip-id="Tailwind"
          data-tooltip-content="Tailwind CSS"
          data-tooltip-place="top"
        />
        <Icon
          icon="vscode-icons:file-type-styled"
          height="2rem"
          data-tooltip-id="Styled"
          data-tooltip-content="Styled Component"
          data-tooltip-place="top"
        />
        <Icon
          icon="devicon:react"
          height="2rem"
          data-tooltip-id="React"
          data-tooltip-content="React"
          data-tooltip-place="top"
        />
        <Icon
          icon="devicon:angular"
          height="2rem"
          data-tooltip-id="Angular"
          data-tooltip-content="Angular"
          data-tooltip-place="top"
        />

        <Tooltip id="Sass" />
        <Tooltip id="Tailwind" />
        <Tooltip id="Styled" />
        <Tooltip id="React" />
        <Tooltip id="Angular" />
      </div>
    </div>
  );
}

export default Frontend;
