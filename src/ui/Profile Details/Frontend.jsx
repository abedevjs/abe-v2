import { Icon } from "@iconify/react";
import { Tooltip } from "react-tooltip";

function Frontend() {
  return (
    <div className=" w-full">
      <p className=" font-semibold mb-1">Frontend Tech Stacks:</p>
      <div className="flex items-center space-x-2">
        <Icon
          icon="devicon:sass"
          // height="2rem"
          className=" w-8 h-8 sm:w-6 sm:h-6"
          data-tooltip-id="Sass"
          data-tooltip-content="Sass SCSS"
          data-tooltip-place="top"
        />
        <Icon
          icon="devicon:tailwindcss"
          // height="2rem"
          className=" w-8 h-8 sm:w-6 sm:h-6"
          data-tooltip-id="Tailwind"
          data-tooltip-content="Tailwind CSS"
          data-tooltip-place="top"
        />
        {/* <Icon
          icon="vscode-icons:file-type-styled"
          // height="2rem"
          className=" w-8 h-8 sm:w-6 sm:h-6"
          data-tooltip-id="Styled"
          data-tooltip-content="Styled Component"
          data-tooltip-place="top"
        /> */}
        {/* <Icon
          icon="logos:material-ui"
          // height="2rem"
          className=" w-8 h-8 sm:w-6 sm:h-6"
          data-tooltip-id="Material UI"
          data-tooltip-content="Material UI"
          data-tooltip-place="top"
        /> */}
        <Icon
          icon="devicon:framermotion"
          // height="2rem"
          className=" w-8 h-8 sm:w-6 sm:h-6"
          data-tooltip-id="Framer Motion"
          data-tooltip-content="Framer Motion"
          data-tooltip-place="top"
        />
        <Icon
          icon="devicon:react"
          // height="2rem"
          className=" w-8 h-8 sm:w-6 sm:h-6"
          data-tooltip-id="React"
          data-tooltip-content="React"
          data-tooltip-place="top"
        />
        {/* <Icon
          icon="devicon:angular"
          // height="2rem"
          className=" w-8 h-8 sm:w-6 sm:h-6"
          data-tooltip-id="Angular"
          data-tooltip-content="Angular"
          data-tooltip-place="top"
        /> */}
        <Icon
          icon="devicon:nextjs"
          // height="2rem"
          className=" w-8 h-8 sm:w-6 sm:h-6"
          data-tooltip-id="NextJs"
          data-tooltip-content="NextJs"
          data-tooltip-place="top"
        />

        <Tooltip id="Sass" />
        <Tooltip id="Tailwind" />
        <Tooltip id="Framer Motion" />
        {/* <Tooltip id="Styled" /> */}
        {/* <Tooltip id="Material UI" /> */}
        <Tooltip id="React" />
        {/* <Tooltip id="Angular" /> */}
        <Tooltip id="NextJs" />
      </div>
    </div>
  );
}

export default Frontend;
