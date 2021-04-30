import React from "react";

import LOGO from "../img/LOGO.png";

function HomePage() {
  return (
    // <div className="body">
    //   <div className="header">
    //     <div className="header-left"></div>
    //     <div className="header-center"></div>
    //     <div className="header-right"></div>
    //   </div>

    //   <div className="content">
    //     <div className="content-left"></div>
    //     <div className="content-center"></div>
    //     <div className="content-right"></div>
    //   </div>
    // </div>

    <nav class="flex items-center justify-between flex-wrap bg-teal p-6 bg-red-600">
      <div class="flex items-center flex-no-shrink text-black mr-6">
        <img src={LOGO} alt="logo" />
      </div>
      <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div class="text-sm lg:flex-grow">
          <a
            href="#responsive-header"
            class="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white mr-4"
          >
            Docs
          </a>
          <a
            href="#responsive-header"
            class="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white mr-4"
          >
            Examples
          </a>
          <a
            href="#responsive-header"
            class="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white"
          >
            Blog
          </a>
        </div>
        <div>
          <a
            href="#"
            class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal hover:bg-white mt-4 lg:mt-0"
          >
            Download
          </a>
        </div>
      </div>
      <div class="flex items-center flex-no-shrink text-black mr-6">
        <img src={LOGO} alt="logo" />
        <span>Username</span>
      </div>
    </nav>
  );
}

export default HomePage;
