/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from 'react';
import talent from '../api/talent';
import Layout from '../components/layout/Layout';

export default function TalentList() {
    const [Talent, setTalent] = useState<any[]>([]);

    useEffect(() => {
        talent.GetData().then(
            data => {
                setTalent(data)
            }
        );
    }, []);

    return (
      <Layout>
        <div className="grid grid-flow-col">
            <div className="col-span-8">
                
                <form className="border-b-2 border-gray-300 pb-2"> 
                    <div className="flex h-20 p-4 justify-center me-20">
                        <div className="p-4 text-sm sm:text-md">
                            <p>Search by category</p>
                        </div>

                        <div className="m-1">
                            <div className="border border-gray-300 relative flex items-center w-full h-12 rounded-lg focus-within:shadow-lg bg-white overflow-hidden">
                                <div className="grid place-items-center h-full w-12 text-gray-300 bg-gray-50">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                    </svg>
                                </div>

                                <input
                                className="peer h-full w-full outline-none text-sm text-gray-700 pr-2 bg-gray-50"
                                type="text"
                                id="search"
                                placeholder="talent name, technology..." /> 
                            </div>
                        </div>

                        <div className="ms-5 pt-1">
                            <select id="countries" className="h-12 bg-gray-50 border border-gray-300 text-sm rounded-lg block w-full p-2.5 focus-within:shadow-lg cursor-pointer">
                                <option selected>STATUS</option>
                                <option value="TRAIN">ON TRAINING</option>
                                <option value="IDLE">IDLE</option>
                                <option value="TRIAL">TRIAL</option>
                            </select>
                        </div>

                        <div className="ms-5 pt-1.5">
                            <button type="submit" className="p-4 text-white bg-gray-700 hover:bg-gray-800 font-medium rounded-lg px-5 py-2.5 mr-2 mb-2 dark:bg-gray-600 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">Search</button>
                        </div>
                    </div>
                </form>
                
                <h1 className="p-10 pt-5 pb-1 text-md">Choose talent for placement</h1>
                
                <div className="flex p-10 gap-10 pt-5">
                    
                    <div className="max-w-[23%] bg-white border border-gray-200 rounded-lg shadow">
                        <a href="#">
                            <img className="rounded-t-lg" src="https://flowbite.com/docs/images/blog/image-1.jpg" alt="example" />
                        </a>
                        <div className="p-5">
                            <a href="#">
                                <h5 className="text-center mb-3 text-[120%] font-bold tracking-tight text-gray-900">Full Name</h5>
                            </a>
                            <p className="text-center mb-3 text-md font-normal text-gray-700 dark:text-gray-400">Status</p>

                            <div className="flex">
                                <p className="grow text-center mb-3 font-normal text-gray-700 dark:text-gray-400">Batch</p>
                                <p className="grow text-center mb-3 font-normal text-gray-700 dark:text-gray-400">Material</p>
                            </div>
                            
                            <div className="flex mt-3">
                                <a href="#" className="grow inline-flex justify-center px-3 py-2 text-md font-medium text-center text-white rounded-lg bg-gray-600 hover:bg-gray-800">
                                    Join Placement
                                </a>
                                <a href="#" className="ms-5 m-2 hover:underline">
                                    More
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="max-w-[23%] bg-white border border-gray-200 rounded-lg shadow">
                        <a href="#">
                            <img className="rounded-t-lg" src="https://flowbite.com/docs/images/blog/image-1.jpg" alt="example" />
                        </a>
                        <div className="p-5">
                            <a href="#">
                                <h5 className="text-center mb-3 text-[120%] font-bold tracking-tight text-gray-900">Full Name</h5>
                            </a>
                            <p className="text-center mb-3 text-md font-normal text-gray-700 dark:text-gray-400">Status</p>

                            <div className="flex">
                                <p className="grow text-center mb-3 font-normal text-gray-700 dark:text-gray-400">Batch</p>
                                <p className="grow text-center mb-3 font-normal text-gray-700 dark:text-gray-400">Material</p>
                            </div>
                            
                            <div className="flex mt-3">
                                <a href="#" className="grow inline-flex justify-center px-3 py-2 text-md font-medium text-center text-white rounded-lg bg-gray-600 hover:bg-gray-800">
                                    Join Placement
                                </a>
                                <a href="#" className="ms-5 m-2 hover:underline">
                                    More
                                </a>
                            </div>
                        </div>
                    </div>
                    
                </div>

            </div>
        </div>
        
        </Layout>
    );
}
