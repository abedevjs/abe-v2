import { Icon } from "@iconify/react";

function Contact() {
  return (
    <div className=" w-full">
      <p className=" font-semibold mb-1">Contact:</p>
      <div className=" flex items-center space-x-2">
        <a
          href="https://api.whatsapp.com/send/?phone=62887435477314&text=Hello+Akbar%21&type=phone_number&app_absent=0"
          target="_blank"
          rel="noreferrer"
        >
          <Icon
            icon="ri:whatsapp-fill"
            color="green"
            height="1.5rem"
            className=" duration-300 hover:scale-125"
          />
        </a>
        <a href="mailto:bilarasa@gmail.com" target="_blank" rel="noreferrer">
          <Icon
            icon="dashicons:email-alt"
            color="green"
            height="1.5rem"
            className=" duration-300 hover:scale-125"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/muhammad-akbar-1aa9962a1/"
          target="_blank"
          rel="noreferrer"
        >
          <Icon
            icon="mdi:linkedin"
            color="green"
            height="1.5rem"
            className=" duration-300 hover:scale-125"
          />
        </a>
        <a href="https://github.com/abedevjs" target="_blank" rel="noreferrer">
          <Icon
            icon="ri:github-fill"
            color="green"
            height="1.5rem"
            className=" duration-300 hover:scale-125"
          />
        </a>
      </div>
    </div>
  );
}

export default Contact;
