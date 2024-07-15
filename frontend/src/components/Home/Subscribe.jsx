import React from "react";
import subImg from "../../assets/imgs/contact.gif";
import { BsArrowDownRight } from "react-icons/bs";

function Subscribe() {
  return (
    <section className="w-full h-fit relative z-20 bg-[#fff200]">
      <div className="w-full grid grid-cols-2 border-2 border-black">
        <div className="flex items-center justify-center pl-5 sm:pl-10 md:pl-16 lg:pl-24 xl:pl-32">
          <figure>
            <img src={subImg} alt="" />
          </figure>
        </div>
        <div className="w-full h-full bg-black pt-5 pb-4 px-20 sm:pr-10 md:pr-16 lg:pr-24 xl:pr-32 text-white bg-">
          <h3 className="text-7xl font-bold pb-5">Let’s Talk.</h3>
          <p>
            Take the first step toward meaningful and measurable change by
            reaching out to learn how we might support you.
          </p>
          <span className="h-[2px] w-2/3 bg-slate-100 flex my-5"></span>
          <form action="" className="w-full mt-8">
            <div className="grid md:grid-cols-2 gap-4 mb-2">
              <div className="form-group grid gap-1">
                <label
                  htmlFor="last-name"
                  className="input-label text-xs font-semibold"
                >
                  First Name
                </label>
                <input
                  type="text"
                  placeholder="First name"
                  className="input-lg rounded-lg text-sm py-2 border-2 border-cyan-800/30 placeholder:pl-2"
                />
              </div>
              <div className="form-group grid gap-1">
                <label
                  htmlFor="last-name"
                  className="input-label text-xs font-semibold"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  placeholder="Last name"
                  className="input-lg rounded-lg text-sm py-3 border-2 border-cyan-800/30 placeholder:pl-2"
                />
              </div>
            </div>
            <div className="form-group grid gap-4 mb-2">
              <div className="form-group grid gap-1">
                <label
                  htmlFor="email"
                  className="input-label text-xs font-semibold"
                >
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  className="input-lg rounded-lg text-sm py-3 border-2 border-cyan-800/30 placeholder:pl-2"
                />
              </div>
            </div>
            <div className="form-group grid gap-4 mb-2">
              <div className="form-group grid gap-1">
                <label
                  htmlFor="email"
                  className="input-label text-xs font-semibold"
                >
                  Message
                </label>
                <textarea
                  rows="2"
                  type="text"
                  placeholder="Email"
                  className="input-lg rounded-lg text-sm py-3 border-2 border-cyan-800/30 placeholder:pl-2"
                />
              </div>
            </div>
            {/* <div className="form-group flex justify-between mb-2 mt-6">
              <div className="flex items-center mb-8">
                <input
                  type="checkbox"
                  id="save-info"
                  className="w-4 h-4 ml-1 border-none outline outline-cyan-800/30 text-neutral-0  rounded-lg cursor-pointer mr-2"
                />
                <label
                  htmlFor="save-info"
                  className="text-sm text-white dark:text-neutral-dark-950"
                >
                  I agree to the{" "}
                  <a href="#" className="font-bold">
                    Terms &amp; conditions
                  </a>
                </label>
              </div>
              <a href="#" className="text-neutral-950 underline text-sm">
                Need help?
              </a>
            </div> */}
            <button
              type="submit"
              className="w-full btn bg-[#fff200] rounded-full mt-5 px-8 py-3 text-lg text-neutral-950 font-bold text-center"
            >
              Send Message <BsArrowDownRight className="inline text-2xl" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Subscribe;
