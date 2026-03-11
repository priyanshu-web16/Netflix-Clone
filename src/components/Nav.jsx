import React from 'react'
import bgimg from '../assets/bgNetflix.jpg'

const Nav = () => {
  return (
    <>
    <div className="px-10 py-5 bg-black text-white">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: `url(${bgimg})` }}
        ></div>
        <div className="relative z-0">
          <div className="flex justify-between items-center">
            <div className="lg:text-5xl font-bold text-red-600">NETFLIX</div>
            <div className=" flex">
              <div>
                <select
                  className="pr-25 border p-1 mr-2 border-gray-500"
                  name=""
                  id=""
                > 
                  <option className="text-black" value="English">
                    English
                  </option>
                  <option className="text-black" value="Arabic">
                    Arabic
                  </option>
                </select>
              </div>
              <button className="bg-red-600 px-5 py-1 rounded active:scale-95 cursor-pointer">Sign In</button>
            </div>
          </div>
          <div className="py-30 flex flex-col items-center ">
            <div className="lg:text-6xl font-bold w-150 text-center ">
              Unlimited films, series and more
            </div>
            <div className="py-5 font-bold text-[18px]">
              Starts at NOK 99. Cancel at any time.
            </div>
            <p>
              Ready to watch? Enter your email to create or restart your
              membership.
            </p>
            <div className="py-5">
              <input
                className="border p-2 border-gray-500 pr-30 mr-5"
                type="text"
                placeholder="Email Address"
              />
              <button className="bg-red-600 p-2 lg:px-5 rounded active:scale-95 cursor-pointer">
                Get Started 
              </button>
            </div>
          </div>
        </div>
      </div>
     
    </>
  )
}

export default Nav
