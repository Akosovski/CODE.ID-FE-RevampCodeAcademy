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
                <Sidebar />
            </div>

            <div className="col-span-8">
                <div className="flex h-14 p-4 bg-gray-800">
                    <h1 className="text-white">Placement</h1>
                </div>
                
                <form> 
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
                
                # Content #

                <div className="flex">
                    <div className="sm:-mx-6 lg:-mx-8">
                        <div className="py-2 sm:px-6 lg:px-8">
                            <div className="overflow-hidden">
                            <table className="min-w-full text-left text-sm font-light">
                                <thead className="border-b font-medium dark:border-neutral-500">
                                <tr>
                                    <th className="px-6 py-4">Entity ID</th>
                                    <th className="px-6 py-4">National ID</th>
                                    <th className="px-6 py-4">Birth Date</th>
                                    <th className="px-6 py-4">Marital Status</th>
                                    <th className="px-6 py-4">Gender</th>
                                    <th className="px-6 py-4">Hire Date</th>
                                    <th className="px-6 py-4">Vacation Hours</th>
                                    <th className="px-6 py-4">Sick Hours</th>
                                    <th className="px-6 py-4">Employee Type</th>
                                </tr>
                                </thead>
                                <tbody>
                                    {
                                        Talent && Talent.map(item => {
                                            return (
                                                <>
                                                <tr>
                                                    <th className="whitespace-nowrap px-6 py-4">
                                                        {item.empEntityId} 
                                                    </th>
                                                    <td className="whitespace-nowrap px-6 py-4">
                                                        {item.empNationalId}
                                                    </td>
                                                    <td className="whitespace-nowrap px-6 py-4">
                                                        {item.empBirthDate}
                                                    </td>
                                                    <td className="whitespace-nowrap px-6 py-4">
                                                        {item.empMaritalStatus}
                                                    </td>
                                                    <td className="whitespace-nowrap px-6 py-4">
                                                        {item.empGender}
                                                    </td>
                                                    <td className="whitespace-nowrap px-6 py-4">
                                                        {item.empHireDate}
                                                    </td>
                                                    <td className="whitespace-nowrap px-6 py-4">
                                                        {item.empVacationHours}
                                                    </td>
                                                    <td className="whitespace-nowrap px-6 py-4">
                                                        {item.empSickleaveHours}
                                                    </td>
                                                    <td className="whitespace-nowrap px-6 py-4">
                                                        {item.empType}
                                                    </td>
                                                </tr>
                                                </>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                            </div>
                        </div>
                    </div>
                </div>
                
                # End of Content #
            </div>
        </div>
        
        </Layout>
    );
}
