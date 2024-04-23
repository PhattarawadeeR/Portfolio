import React from "react";

function Home() {
  return (
    <div className="w-full my-[100px]">
      <div className="flex max-w-[1040px] items-center mx-auto gap-[20px]">
        <div className="">
          <div className="text-[38px] mb-[20px]">👋🏻</div>
          <div className="flex flex-col mr-[20px]">
            <h1 className="mb-[30px]">
              Hello, I am Phattarawadee Roongsritong
            </h1>
            <p>
              I am a passionate front-end developer with a talent for crafting
              captivating and user-friendly websites. My portfolio showcases a
              diverse range of projects, including dynamic e-commerce platforms,
              informative business websites, and interactive portfolio sites. My
              fervor for web development is only surpassed by my fondness for
              cats and cinema.
            </p>
            <div className="flex flex-row gap-6">
              <a
                className="w-10 h-10 mt-[20px]"
                href="https://github.com/PhattarawadeeR"
              >
                <img src="../src/assets/github-mark.png" />
              </a>
              <a className="w-10 h-10 mt-[20px]" href="">
                <img src="../src/assets/linkedin.png" />
              </a>
            </div>
          </div>
        </div>
        <img
          className="max-w-[495px] aspect-square rounded-2xl"
          src="../src/assets/photo.webp"
        />
      </div>
    </div>
  );
}

export default Home;
