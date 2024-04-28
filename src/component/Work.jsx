import { defaults } from "autoprefixer";
import React from "react";

function Work() {
  return (
    <section id="Work">
      <div className="flex flex-col max-w-[1040px] mx-auto">
        <div className="border-b w-full">
          <div className="flex items-center">
            <div className="text-[38px] mr-[20px]">💻</div>
            <div className="text-[16px] sm:text-[20px] font-bold text-grey-02">
              Selected Work
            </div>
          </div>
        </div>
        <div className="mt-[50px] mb-[100px]">
          <div className="">
            <div className="flex flex-col">
              <div className="max-w-full rounded-2xl bg-lime-50 mb-[50px]">
                <div className="flex flex-col md:flex-row m-10 gap-5">
                  <div className="flex flex-col">
                    <h3 className="mb-[15px] text-[16px] sm:text-[18px] font-black text-grey-02">
                      E-Commerce Website
                    </h3>
                    <p className="text-[14px] sm:text-[16px] text-grey-02">
                      The project focuses on developing a responsive,
                      user-friendly website optimized for all devices. It
                      features robust e-commerce capabilities to support secure
                      and efficient transactions, enhancing customer interaction
                      and satisfaction.
                    </p>
                  </div>
                  <a
                    className="object-cover w-full flex justify-center mt-[20px] md:mt-0"
                    href="https://mp3-final-project-rosy.vercel.app/"
                  >
                    <img
                      className="rounded-xl"
                      src="/assets/e-commerce-web.png"
                    />
                  </a>
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-[50px]">
                <div className="max-w-full md:max-w-[495px] rounded-2xl bg-pink-50">
                  <div className="flex flex-col m-10 gap-5">
                    <div className="">
                      <h3 className="mb-[15px] text-[16px] sm:text-[18px] font-black text-grey-02">
                        React App
                      </h3>
                      <p className="text-[14px] sm:text-[16px] text-grey-02">
                        The React app I developed utilizes hooks to effectively
                        call APIs and leverages the Context API for state
                        management. This setup ensures seamless data handling
                        and state sharing across components, enhancing the app's
                        overall functionality and user experience.
                      </p>
                    </div>
                    <a
                      className="object-cover w-full flex justify-center mt-[20px]"
                      href="https://react-app-tau-five.vercel.app/"
                    >
                      <img className="rounded-xl" src="/assets/react-app.png" />
                    </a>
                  </div>
                </div>
                <div className="max-w-full md:max-w-[495px] rounded-2xl bg-indigo-50">
                  <div className="flex flex-col m-10 gap-5">
                    <div className="">
                      <h3 className="mb-[15px] text-[16px] sm:text-[18px] font-black text-grey-02">
                        My Store
                      </h3>
                      <p className="text-[14px] sm:text-[16px] text-grey-02">
                        I created a static website using HTML and CSS, focusing
                        on simplicity and speed. The site features a clean,
                        intuitive design, ensuring easy navigation and a
                        pleasant user experience without the need for complex
                        functionality.
                      </p>
                    </div>
                    <a
                      className="object-cover w-full flex justify-center mt-[20px]"
                      href="https://my-store-bay-rho.vercel.app/"
                    >
                      <img className="rounded-xl" src="/assets/my-store.png" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Work;
