/* eslint-disable @next/next/no-img-element */
import React from 'react';

export default function Footer() {
    return (
      <div>
        <header className="bg-white dark:bg-gray-900">
          <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-900">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <div className="flex items-center">
                        <img src="https://flowbite.com/docs/images/logo.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
                        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Code Academy</span>
                    </div>
                    <div className="flex items-center lg:order-2">
                        <p className="text-gray-800 dark:text-white font-medium rounded-lg text-sm px-3 lg:px-4 py-2 lg:py-2.5 mr-2">Username</p>
                        <a href="#" className="py-2 lg:py-2.5 mr-2">
                          <img src="https://cdn.discordapp.com/attachments/995173807750926346/1141782116955345027/Profile.png" className="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
                        </a>
                    </div>
                </div>
          </nav>
          <hr />
          <div className="flex flex-row justify-center lg:justify-start">
            <a href="#" className="text-white px-2 lg:px-4 py-2.5 hover:underline underline-offset-2">Home</a>
            <p className="text-white py-2.5">&gt;</p>
            <a href="#" className="text-white px-2 lg:px-4 py-2.5 hover:underline underline-offset-2">Placement</a>
          </div>
        </header>
      </div>
      
    )
}