const CardAddExperience = () => {
    return (
      <>
        <h2 className="text-base font-semibold leading-7 text-gray-900">Add Experience</h2>
        <div className='w-full bg-white p-3 rounded-md mt-3 mb-3'>
          <form>
            <div className="border-b border-gray-900/10 pb-12">
             {/* TITLE */}
              <div className="sm:col-span-4">
                  <div className="flex items-center">
                  <label htmlFor="title" className="block text-sm font-medium leading-6 text-gray-900 w-24">
                  Title
                  </label>
                  <div className="mt-2 flex-1">
                    <input
                      id="title"
                      name="title"
                      type="text"
                      autoComplete="title"
                      className="block w-1/2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                  </div>
              </div>

             {/* HEADLINE */}
              <div className="sm:col-span-3 mt-4">
                  <div className="flex items-center">
                  <label htmlFor="headline" className="block text-sm font-medium leading-6 text-gray-900 w-24">
                  Headline
                  </label>
                  <div className="mt-1 flex-1">
                    <input
                      id="headline"
                      name="headline"
                      type="text"
                      autoComplete="headline"
                      className="block w-1/2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                  </div>
              </div>


             {/* COMPANY */}
              <div className="sm:col-span-3 mt-4">
                  <div className="flex items-center">
                  <label htmlFor="company" className="block text-sm font-medium leading-6 text-gray-900 w-24">
                  Company
                  </label>
                  <div className="mt-1 flex-1">
                    <input
                      id="company"
                      name="company"
                      type="text"
                      autoComplete="postal-code"
                      className="block w-1/2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                  </div>
              </div>

             {/* CITY */}
              <div className="sm:col-span-3 mt-4">
                  <div className="flex items-center">
                  <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900 w-24">
                  City
                  </label>
                  <div className=" xl:w-96">
                    <div className="relative flex w-full flex-wrap items-stretch">
                    <input
                    type="search"
                    name="city"
                    id="city"
                    className="relative m-0 block flex-auto rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
                    placeholder="Search"
                    aria-label="Search"
                    aria-describedby="button-addon2" />

              {/* <!--Search icon--> */}
                    <span
                      className="input-group-text flex items-center whitespace-nowrap rounded px-3 py-1.5 text-center text-base font-normal text-neutral-700 dark:text-neutral-200"
                        id="basic-addon2">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="h-5 w-5">
                        <path
                        fillRule="evenodd"
                        d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                        clipRule="evenodd" />
                        </svg>
                    </span>
                     </div>
                 </div>
                  </div>
              </div>


          {/* START AND END EXPERIENCE */}
          <div className="sm:col-span-4 mt-4 flex items-center">
            <label htmlFor="start" className="block text-sm font-medium leading-6 text-gray-900 w-24">
                Start
            </label>
            <div className="mt-1">
                <input
                id="start"
                name="start"
                type="date"
                autoComplete="postal-code"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
            </div>
            <label htmlFor="until" className="block ml-3 text-sm font-medium leading-6 text-gray-900 w-11">
                Until
            </label>
            <div className="mt-1">
                <input
                id="until"
                name="until"
                type="date"
                autoComplete="until"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
            </div>

                <div className="relative ml-5 flex gap-x-3 items-center">
                  <div className="flex h-6 items-center">
                    <input
                      id="until-now"
                      name="until-now"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                  </div>
                  <div className="text-sm flex items-center">
                    <label htmlFor="until-now" className="font-medium text-gray-900">
                      Until Now
                    </label>
                  </div>
                </div>
            </div>



          {/* INDUSTRY */}
               <div className="sm:col-span-3 mt-4">
                  <div className="flex items-center">
                  <label htmlFor="industry" className="block text-sm font-medium leading-6 text-gray-900 w-24">
                  Industry
                  </label>
                  <div className=" xl:w-96">
                    <div className="relative flex w-full flex-wrap items-stretch">
                    <input
                    type="search"
                    name="industry"
                    id="industry"
                    className="relative m-0 block flex-auto rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
                    placeholder="Search"
                    aria-label="Search"
                    aria-describedby="button-addon2" />

              {/* <!--Search icon--> */}
                    <span
                      className="input-group-text flex items-center whitespace-nowrap rounded px-3 py-1.5 text-center text-base font-normal text-neutral-700 dark:text-neutral-200"
                        id="basic-addon2">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="h-5 w-5">
                        <path
                        fillRule="evenodd"
                        d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                        clipRule="evenodd" />
                        </svg>
                    </span>
                     </div>
                 </div>
                  </div>
              </div>


              {/* EMPLOYMENT-TYPE*/}
              <div className="sm:col-span-4 w-1/2 mt-4">
                <div className="flex items-center">
                <label htmlFor="employment-type" className="block text-sm font-medium leading-6 text-gray-900 w-36">
                    Employment Type
                  </label>
                <div className="mt-1">
                <select
                id="employment-type"
                name="employment-type"
                autoComplete="employment-type"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"                placeholder="Code Telp."
              >
                <option value="fulltime">Full-Time</option>
                <option value="contract">Contract</option>
                <option value="freelance">Freelance</option>
                <option value="remote">Remote</option>
              </select>
                </div>
                </div>
              </div>


              <div className="sm:col-span-4 mt-4">
                <div className="flex items-center">
                  <label htmlFor="description" className="block text-sm font-medium leading-6 text-gray-900 w-24">
                    Descriptions
                  </label>
                  <div className="mt-1 flex-1">
                    <textarea
                      name="description"
                      id="description"
                      rows={4}
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      defaultValue={''}
                    />
                  </div>
                </div>
              </div>


            {/* EXPERIENCE-TYPE*/}
            <div className="sm:col-span-4 mt-4">
                <div className="flex items-center">
                <label htmlFor="experience-type" className="block text-sm font-medium leading-6 text-gray-900 w-36">
                    Experience Type
                  </label>
                <div className="mt-1">
                <select
                id="experience-type"
                name="experience-type"
                autoComplete="experience-type"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"               
                placeholder="Code Telp."
              >
                <option value="company">Full-Time</option>
                <option value="certified">Certified</option>
                <option value="volunteer">Volunteer</option>
                <option value="organization">Organization</option>
                <option value="reward">Reward</option>
              </select>
                </div>
                </div>
              </div>

            </div>
            <div className="mt-6 flex items-center justify-end gap-x-6">
              <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
                Cancel
              </button>
              <button
                type="submit"
                className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </>
    )
  }
  
  export default CardAddExperience;
  