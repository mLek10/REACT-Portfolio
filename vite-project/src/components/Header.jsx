import React from "react";

function Header({setCurrentPage}) {
  return (
    <header>
      <nav className="bg-blue-300">
  <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
    <div className="relative flex h-16 items-center justify-between">
      <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
        {/* <div className="flex flex-shrink-0 items-center">
          <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company"/>
        </div> */}
        <div className="hidden sm:ml-6 sm:block">
          <div className="flex space-x-4">
           
            <a href="#" className="bg-violet-400 text-sky-950 hover:text-white rounded-md px-3 py-2 text-sm font-medium" aria-current="page"
            onClick={() => {
                setCurrentPage("About")
              }}
            >About Me</a>
            <a href="#" className="text-sky-950 hover:bg-violet-400 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
            onClick={() => {
                setCurrentPage("Portfolio")
              }}
            >Portfolio</a>
            <a href="#" className="text-sky-950 hover:bg-violet-400 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
            onClick={() => {
                setCurrentPage("Contact")
              }}
            >Contact</a>
            <a href="#" className="text-sky-950 hover:bg-violet-400 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Resume</a>
          </div>
        </div>
      </div>
    </div>
  </div>


  <div className="sm:hidden" id="mobile-menu">
    <div className="space-y-1 px-2 pb-3 pt-2">
     
      <a href="#" className="bg-violet-400 text-white block rounded-md px-3 py-2 text-base font-medium" aria-current="page">About Me</a>
      <a href="#" className="text-gray-300 hover:bg-violet-400 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Portfolio</a>
      <a href="#" className="text-gray-300 hover:bg-violet-400 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Contact</a>
      <a href="#" className="text-gray-300 hover:bg-violet-400 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Resume</a>
    </div>
  </div>
</nav>
    </header>
  );
}

export default Header;