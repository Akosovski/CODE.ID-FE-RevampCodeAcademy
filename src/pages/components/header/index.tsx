/* eslint-disable @next/next/no-img-element */
import React from 'react';

export default function Footer() {
    return (
      <div>
        <header className="bg-white dark:bg-gray-900">
          <nav className="border-b-2 border-gray-700 pb-2 px-4 lg:px-6 py-2.5 bg-gray-900">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <div className="flex items-center">
                        <img src="https://flowbite.com/docs/images/logo.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
                        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Code Academy</span>
                    </div>
                    <div className="flex items-center lg:order-2">
                        <p className="text-gray-800 dark:text-white font-medium rounded-lg text-md px-3 lg:px-4 py-2 lg:py-2.5 mr-2">Username</p>
                        <a href="#" className="py-2 lg:py-2.5 mr-2">
                          <img src="https://cdn.discordapp.com/attachments/995173807750926346/1141782116955345027/Profile.png" className="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
                        </a>
                    </div>
                </div>
          </nav>

          <nav className="flex" aria-label="Breadcrumb">
            <ol className="inline-flex items-center px-7 lg:px-6 py-2.5 space-x-1 md:space-x-3">

              <li className="inline-flex items-center">
                <a href="#" className="inline-flex items-center font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                  <svg className="w-3 h-3 mr-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"/>
                  </svg>
                  Home
                </a>
              </li>

              <li>
                <div className="flex items-center">
                  <svg className="w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                  </svg>
                  <a href="#" className="ml-1 font-medium text-gray-700 hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-white">Placements</a>
                </div>
              </li>

            </ol>
          </nav>
        </header>
      </div>
      
    )
}