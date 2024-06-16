function JobExperience() {
  return (
    <div className=" w-full">
      <p className=" font-semibold mb-1">Job Experiences:</p>
      <div className=" space-y-2">
        <div className="flex items-center space-x-4 sm:space-x-0 sm:space-y-1 sm:flex-col sm:items-start">
          <div>
            <a href="https://babagasi.com" target="_blank" rel="noreferrer">
              <img
                src="/images/baka.png"
                alt=""
                className="h-auto w-8 rounded-md sm:w-6"
              />
            </a>
          </div>
          <div className=" text-sm">
            <p className=" font-semibold">Junior Developer</p>
            <p>Baka &#x2022; April 2022 - present</p>
            <p>
              Responsibility: Planning, designing, developing, and deploying the
              web application for Baka.
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-4 sm:space-x-0 sm:space-y-1 sm:flex-col sm:items-start">
          <div>
            <a href="https://celexport.com" target="_blank" rel="noreferrer">
              <img
                src="/images/celexport.jpeg"
                alt=""
                className="h-auto w-8 rounded-md sm:w-6"
              />
            </a>
          </div>
          <div className=" text-sm">
            <p className=" font-semibold">Entry Level</p>
            <p>Celexport &#x2022; Februari 2021 - Februari 2022</p>
            <p>
              Responsibility: Planning, designing, developing, and deploying the
              landing page for Celexport.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobExperience;
