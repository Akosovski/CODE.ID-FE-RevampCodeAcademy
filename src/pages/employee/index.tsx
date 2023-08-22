import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import Layout from '../components/layout/Layout';
import { GetEmployeeReq } from "@/redux-saga/action/employeeAction";
import Link from 'next/link';
import { IconButton, Typography } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/outline";

export default function Employee(props: any) {
    const [searchValue, setSearchValue] = useState('');
    const dispatch = useDispatch();

    // Fetch Employee
    const { employees } = useSelector((state: any) => state.employeeState);
    console.log("Employees : ", employees);

    useEffect(() => {
        dispatch(GetEmployeeReq(1));
    }, [dispatch]);

    const [active, setActive] = React.useState(1);

    let totalPages: number = Math.ceil(employees?.totalCount / 10); // Max Shown Employee 10 Rows
    console.log("totalPages : ", employees?.totalCount );
    
    const getCurrentPageData = () => {
        const startIndex = (active - 1) * (10 || 0);
        const endIndex = startIndex + (10 || 0);
        return employees?.data?.slice(startIndex, endIndex) || [];
    };

    const next = () => {
        if (active < totalPages) {
            setActive(active + 1);
        }
    };

    const prev = () => {
        if (active > 1) {
            setActive(active - 1);
        }
    };

    return (
        <Layout>
            <div className="grid grid-flow-col">
                <div className="col-span-8">
                    <form className="border-b-2 border-gray-300 pb-2">
                        <div className="flex h-20 p-4 justify-center me-20">
                            <div className="p-4 text-sm sm:text-md">
                                <p>Search</p>
                            </div>

                            <div className="m-1">
                                <div
                                    className="border border-gray-300 relative flex items-center w-full h-12 rounded-lg focus-within:shadow-lg bg-white overflow-hidden">
                                    <div className="grid place-items-center h-full w-12 text-gray-300 bg-gray-50">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                                            viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                        </svg>
                                    </div>

                                    <input
                                        className="peer h-full w-full outline-none text-sm text-gray-700 pr-2 bg-gray-50"
                                        type="text" id="search" placeholder="employee name.." value={searchValue}
                                        onChange={(e) => setSearchValue(e.target.value)}/>
                                </div>
                            </div>

                            <div className="ms-5 pt-1.5">
                                <select id="search"
                                    className="bg-gray-50 border border-gray-300 h-full text-gray-900 text-md rounded-lg block w-full p-2.5">
                                    <option value="">Active</option>
                                    <option value="">Inactive</option>
                                </select>
                            </div>

                            <div className="ms-5 pt-1.5">
                                <button type="submit"
                                    className="p-4 text-white bg-gray-700 hover:bg-gray-800 font-medium rounded-lg px-5 py-2.5 mr-2 mb-2 dark:bg-gray-600 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">Search</button>
                            </div>
                        </div>
                    </form>
                    <div className="w-full overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        EmpId
                                    </th>
                                    <th scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        NationalId
                                    </th>
                                    <th scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        FullName
                                    </th>
                                    <th scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        BirthDate
                                    </th>
                                    <th scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        HireDate
                                    </th>
                                    <th scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Status
                                    </th>
                                    <th scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        <Link href="/employee/createPage">
                                            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-200">
                                            Add
                                            </button>
                                        </Link>
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                            {getCurrentPageData().map((employee: any) => 
                                <>
                                    <tr>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            {employee.empEntityId}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            {employee.empNationalId}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            {employee.empEntity.userFirstName}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                            {employee.BirthDate}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            {employee.HireDate}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            {employee.employeeClientContracts.eccoStatus}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                        <Link href="/employee/editPage">
                                            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-200">
                                            Edit
                                            </button>
                                        </Link>
                                        </td>
                                    </tr>
                                </>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div className="flex items-center gap-8 justify-center">
                <IconButton
                    size="sm"
                    variant="outlined"
                    onClick={prev}
                    hidden={active === 1}
                >
                    <ArrowLeftIcon strokeWidth={2} className="h-4 w-4 -mt-2 -ms-2" />
                </IconButton>
                <Typography color="gray" className="font-normal">
                    Page <strong className="text-gray-900">{active}</strong> of{" "}
                    <strong className="text-gray-900">{totalPages}</strong>
                </Typography>
                <IconButton
                    size="sm"
                    variant="outlined"
                    onClick={next}
                    hidden={active === totalPages || totalPages === 1}
                >
                    <ArrowRightIcon strokeWidth={2} className="-mt-2 -ms-2 h-4 w-4" />
                </IconButton>
            </div>
        </Layout>
    );
}