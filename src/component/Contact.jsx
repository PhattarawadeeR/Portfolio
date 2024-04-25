import React from "react";

function Contact() {
  return (
    <section id="Contact">
      {" "}
      <div>
        <div className="flex flex-col max-w-[1040px] mx-auto">
          <div className="border-b w-full">
            <div className="flex items-center">
              <div className="text-[38px] mr-[20px]">🤙🏻</div>
              <div className="text-[20px] font-bold text-grey-02">Contact</div>
            </div>
          </div>
          <div className="flex flex-row justify-between w-full gap-[20px]">
            <div className="flex flex-col mr-[20px]">
              <div className="py-[50px]">
                <p className="text-[20px] text-grey-01">
                  Are you interested in collaborating or want to connect or
                  chat? If so, hit the contact button down below
                </p>
              </div>
              <a
                className="bg-zinc-800 py-[18px] px-[25px] w-fit text-white rounded-[4px] text-[16px] font-bold"
                href="mailto:phattarart@gmail.com?subject=Contact via Portfolio"
              >
                Contact Me
              </a>
            </div>
            <div className="flex flex-row space-x-6 mt-[50px]">
              <img
                className="object-cover max-w-[235px] aspect-square rounded-2xl"
                src="https://images.unsplash.com/photo-1523966211575-eb4a01e7dd51?q=80&w=2810&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Telephone"
              />
              <img
                className="object-cover max-w-[235px] aspect-square rounded-2xl"
                src="https://images.unsplash.com/photo-1519052537078-e6302a4968d4?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Orange cat"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
