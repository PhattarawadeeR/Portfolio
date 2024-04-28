import React from "react";

function About() {
  return (
    <section id="About">
      {" "}
      <div className="flex flex-col max-w-[1040px] mx-auto">
        <div className="border-b w-full">
          <div className="flex items-center">
            <div className="text-[38px] mr-[20px]">👩🏻</div>
            <div className="text-[16px] sm:text-[20px] font-bold text-grey-02">
              About
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-col md:flex-row mt-[30px] md:mt-[50px] md:gap-[20px]">
            <div className="flex flex-col w-full md:w-1/2">
              <h2 className="mb-[15px] text-[14px] sm:text-[18px] font-medium text-grey-01">
                My Story
              </h2>
              <div>
                <p className="text-[12px] sm:text-[14px] md:text-[16px] text-grey-02">
                  My journey into web development has been both demanding and
                  exciting. The logical problem-solving aspect of chemistry has
                  given me a strong foundation for tackling intricate coding
                  tasks. As I delve deeper into HTML, CSS, JavaScript, and
                  various frameworks, I find myself increasingly captivated by
                  the boundless potential to innovate and create user-focused
                  solutions.
                  <br></br>
                  <br></br>
                  Embracing the ever-changing nature of the tech industry, I am
                  dedicated to ongoing learning and professional development. By
                  participating in coding bootcamps, contributing to open-source
                  projects, and networking with experienced developers, I am
                  sharpening my skills and staying current with the latest
                  trends and technologies.
                </p>
              </div>
            </div>
            <div className="flex flex-col w-full md:w-1/2 px-0 md:px-[70px] mt-[30px] md:mt-0">
              <h2 className="mb-[15px] text-[14px] sm:text-[18px] font-medium text-grey-01">
                My Education
              </h2>
              <div>
                <div className="text-[12px] sm:text-[14px] md:text-[16px] font-bold text-grey-02">
                  Chulalongkorn University
                </div>
                <div className="mb-[25px] text-[12px] sm:text-[14px] md:text-[16px] text-grey-01">
                  Faculty of Science
                </div>
                <div className="mb-[25px] text-[12px] sm:text-[14px] md:text-[16px]">
                  <div className="text-grey-01">August 2020 - July 2023</div>
                  <div className="text-grey-02">
                    Master of Petrochemistry and Polymer Science
                  </div>
                </div>
                <div className="text-[12px] sm:text-[14px] md:text-[16px]">
                  <div className="text-grey-01">August 2016 - June 2020</div>
                  <div className="text-grey-02">
                    Bachelor of Chemistry, Faculty of Science
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mb-[100px]">
            <h2 className="mb-[15px] text-[14px] sm:text-[18px] font-medium text-grey-01 mt-[30px] md:mt-[50px]">
              My Skillsets
            </h2>
            <div className="">
              <div className="flex flex-row">
                <div className="w-[298px] p-[25px] mr-[52px] rounded-2xl border-2 border-grey">
                  <h3 className="mb-[15px] text-[16px] sm:text-[18px] font-medium text-grey-02">
                    User Interface
                  </h3>
                  <p className="text-[14px] text-grey-01">
                    With an eagle-eyed attention to detail, I strive for
                    pixel-perfect finalized designs.
                  </p>
                </div>
                <div className="w-[298px] p-[25px] mr-[52px] rounded-2xl border-2 border-grey">
                  <h3 className="mb-[15px] text-[16px] sm:text-[18px] font-medium text-grey-02">
                    User Experience
                  </h3>
                  <p className="text-[14px] text-grey-01">
                    Solving the right problem is crucial. I work to minimize
                    assumption-based decisions and uncover the user's core pain
                    points.
                  </p>
                </div>
                <div className="w-[298px] p-[25px] rounded-2xl border-2 border-grey">
                  <h3 className="mb-[15px] text-[16px] sm:text-[18px] font-medium text-grey-02">
                    Project Management
                  </h3>
                  <p className="text-[14px] text-grey-01">
                    I begin by clearly defining the problem, identifying the
                    project scope, curating requirement documentation, and
                    estimating the potential ROI.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-row gap-6 mt-[25px] flex-wrap justify-center">
              <img
                className="w-[60px] h-[60px] md:w-[80px] md:h-[80px] sm:w-[70px] sm:h-[70px] aspect-square"
                src="/assets/HTML.png"
              />
              <img
                className="w-[60px] h-[60px] md:w-[80px] md:h-[80px] sm:w-[70px] sm:h-[70px] aspect-square"
                src="/assets/CSS.png"
              />
              <img
                className="w-[60px] h-[60px] md:w-[80px] md:h-[80px] sm:w-[70px] sm:h-[70px] aspect-square"
                src="/assets/javascript.png"
              />
              <img
                className="w-[60px] h-[60px] md:w-[80px] md:h-[80px] sm:w-[70px] sm:h-[70px] aspect-square"
                src="/assets/typescript.png"
              />
              <img
                className="w-[60px] h-[60px] md:w-[80px] md:h-[80px] sm:w-[70px] sm:h-[70px] object-contain"
                src="/assets/react.png"
              />
              <img
                className="w-[60px] h-[60px] md:w-[80px] md:h-[80px] sm:w-[70px] sm:h-[70px] object-contain"
                src="/assets/tailwind.png"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
