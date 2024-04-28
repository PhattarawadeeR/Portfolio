import React from "react";

function Home() {
  return (
    <section id="Home">
      {" "}
      <div className="w-full my-[100px]">
        <div className="flex max-w-[1040px] items-center mx-auto gap-[20px]">
          <div className="">
            <div className="text-[38px] mb-[20px]">👋🏻</div>
            <div className="flex flex-col mr-[20px]">
              <h1 className="mb-[20px] text-[30px] sm:text-[40px] font-bold text-grey-02">
                Hello, I am Phattarawadee Roongsritong
              </h1>
              <p className="text-[14px] sm:text-[20px] text-grey-01 mb-[20px]">
                I am a passionate front-end developer with a talent for crafting
                captivating and user-friendly websites. My portfolio showcases a
                diverse range of projects, including dynamic e-commerce
                platforms, informative business websites, and interactive
                portfolio sites. My fervor for web development is only surpassed
                by my fondness for cats and cinema.
              </p>
              <div className="flex flex-row gap-6">
                <a
                  className="w-10 h-10"
                  href="https://github.com/PhattarawadeeR"
                >
                  <img src="/assets/github-mark.png" />
                </a>
                <a className="w-10 h-10" href="">
                  <img src="/assets/linkedin.png" />
                </a>
              </div>
            </div>
          </div>
          <img
            className="max-w-[495px] aspect-square rounded-2xl md:block hidden"
            src="/assets/photo.webp"
          />
        </div>
      </div>
    </section>
  );
}

export default Home;
