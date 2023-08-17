/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from 'react';
import talent from '../api/talent';
import '../styles/globals.css';
import Layout from '../components/layout';
import Sidebar from '../components/sidebar';

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
            <div className="col-span-1">
                <Sidebar/>
            </div>

            <div className="col-span-8">
                <div className="flex h-14 p-4 bg-gray-800">
                    <h1 className="text-white">Placement</h1>
                </div>
                
                <form className="border-b-2 border-gray-500 pb-2"> 
                    <div className="flex h-20 p-4 justify-center me-20">
                        <div className="p-4 text-medium">
                            <p>Search by category</p>
                        </div>

                        <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg className="mt-1.5 w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                                </svg>
                            </div>
                            <input type="search" id="default-search" className="w-96 p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-grey-800" placeholder="Talent name, technology, batch..." />
                        </div>

                        <div className="ms-5 pt-1">
                            <select id="countries" className="h-12 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option selected>Status</option>
                                <option value="TRAIN">ON TRAINING</option>
                                <option value="IDLE">IDLE</option>
                                <option value="TRIAL">TRIAL</option>
                            </select>
                        </div>

                        <div className="ms-5 pt-1.5">
                            <button type="submit" className="p-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Search</button>
                        </div>
                    </div>
                </form>
                
                <h1 className="p-10 pt-5 pb-1 text-lg">Pilih talent untuk placement</h1>
                
                <div className="flex p-10 gap-10 pt-5">
                    <div className="max-w-xs bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <a href="#">
                            <img className="rounded-t-lg" src="https://flowbite.com/docs/images/blog/image-1.jpg" alt="example" />
                        </a>
                        <div className="p-5">
                            <a href="#">
                                <h5 className="text-center mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Full Name</h5>
                            </a>
                            <p className="text-center mb-3 text-lg font-normal text-gray-700 dark:text-gray-400">Status</p>

                            <div className="flex">
                                <p className="grow text-center mb-3 font-normal text-gray-700 dark:text-gray-400">Batch</p>
                                <p className="grow text-center mb-3 font-normal text-gray-700 dark:text-gray-400">Material</p>
                            </div>
                            
                            <div className="flex mt-3">
                                <a href="#" className="grow inline-flex justify-center px-3 py-2 text-md font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    Join Placement
                                </a>
                                <a href="#" className="ms-5 m-2 text-white hover:underline">
                                    More
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="max-w-xs bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <a href="#">
                            <img className="rounded-t-lg" src="https://flowbite.com/docs/images/blog/image-1.jpg" alt="example" />
                        </a>
                        <div className="p-5">
                            <a href="#">
                                <h5 className="text-center mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Full Name</h5>
                            </a>
                            <p className="text-center mb-3 text-lg font-normal text-gray-700 dark:text-gray-400">Status</p>

                            <div className="flex">
                                <p className="grow text-center mb-3 font-normal text-gray-700 dark:text-gray-400">Batch</p>
                                <p className="grow text-center mb-3 font-normal text-gray-700 dark:text-gray-400">Material</p>
                            </div>
                            
                            <div className="flex mt-3">
                                <a href="#" className="grow inline-flex justify-center px-3 py-2 text-md font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    Join Placement
                                </a>
                                <a href="#" className="ms-5 m-2 text-white hover:underline">
                                    More
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="flex h-14 p-4 bg-white justify-center mb-7">
                    <nav aria-label="Page navigation example">
                        <ul className="inline-flex -space-x-px text-base h-10">
                            <li>
                                <a href="#" className="flex items-center justify-center px-4 h-10 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Previous</a>
                            </li>
                            <li>
                                <a href="#" className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</a>
                            </li>
                            <li>
                                <a href="#" className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</a>
                            </li>
                            <li>
                                <a href="#" className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">3</a>
                            </li>
                            <li>
                                <a href="#" className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Next</a>
                            </li>
                        </ul>
                    </nav>
                </div>

            </div>
        </div>
        
        </Layout>
    );
}
