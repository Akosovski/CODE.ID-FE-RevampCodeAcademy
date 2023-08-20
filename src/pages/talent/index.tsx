/* eslint-disable @next/next/no-sync-scripts */
/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import GetTalent from '../api/talent';
import Layout from '../components/layout/Layout';
import { GetTalentReq } from "@/redux-saga/action/talentAction";
import prodile from '@/pages/images/dummy_profile.png';
import Image from 'next/image';
import profile from '@/pages/images/dummy_profile.png';
import { IconButton, Typography } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/outline";

export default function TalentList(props: any) {
    const [searchValue, setSearchValue] = useState('');
    const [status, setStatus] = useState('');
    const [statusLabel, setStatusLabel] = useState('Status');
    const [dropdownStatusOpen, setDropdownStatusOpen] = useState(false);
    const [createDisplay, setCreateDisplay] = useState(false);
    const [viewDisplay, setViewDisplay] = useState(false);
    const [employeeId, setEmployeeId] = useState('');
    const [searchDisplay, setSearchDisplay] = useState(false);

    const dummy_talents = [
        {
            name: 'Student 1',
            status: 'Idle',
            batch: 'Batch 23',
            material: 'Node JS'
        },
        {
            name: 'Student 2',
            status: 'On Training',
            batch: 'Batch 21',
            material: 'Golang'
        },
        {
            name: 'Student 3',
            status: 'Trial',
            batch: 'Batch 25',
            material: 'Node JS'
        },
        {
            name: 'Student 4',
            status: 'Trial',
            batch: 'Batch 24',
            material: 'Golang'
        },
        {
            name: 'Student 5',
            status: 'Trial',
            batch: 'Batch 24',
            material: 'Node JS'
        },
        {
            name: 'Student 6',
            status: 'Trial',
            batch: 'Batch 24',
            material: 'Golang'
        },
        {
            name: 'Student 7',
            status: 'Trial',
            batch: 'Batch 24',
            material: 'Node JS'
        },
        {
            name: 'Student 8',
            status: 'Trial',
            batch: 'Batch 24',
            material: 'Golang'
        },
    ]

    const [active, setActive] = React.useState(1);
 
    const getItemProps = (index: React.SetStateAction<number>) => ({
        className: active === index ? "bg-gray-100 text-gray-900" : "",
        onClick: () => setActive(index),
    });

    const itemsPerPage = 4; 
    const totalPages = Math.ceil(dummy_talents.length / itemsPerPage);

    const getPageData = () => {
        const startIndex = (active - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        return dummy_talents.slice(startIndex, endIndex);
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
                
                <div className="flex p-10 gap-8 md:gap-8 lg:gap-10 pt-5 justify-center">
                    
                {getPageData().map((student: any, i: number) => (
                            
                    <div key={i} className="max-w-[23%] lg:w-[25%] bg-white border border-gray-200 rounded-lg shadow">
                        <a href="#">
                            <Image className="rounded-t-lg mx-auto mt-4 brightness-125" width={180} height={180} src={profile} alt="example" />
                        </a>
                        <div className="p-5">
                            <a href="#">
                                <h5 className="text-center mb-3 text-[120%] font-bold tracking-tight text-gray-900">{student.name}</h5>
                            </a>
                            <p className="text-center mb-3 text-md font-medium text-gray-900 dark:text-gray-400">{student.status}</p>

                            <div className="flex">
                                <p className="grow text-center mb-3 font-normal text-gray-700 dark:text-gray-400">{student.batch}</p>
                                <p className="grow text-center mb-3 font-normal text-gray-700 dark:text-gray-400">{student.material}</p>
                            </div>
                            
                            <div className="flex gap-2 mt-3">
                                <a href="#" className="grow inline-flex justify-center px-3 py-2 text-md font-medium text-center text-white rounded-lg bg-gray-600 hover:bg-gray-800">
                                    Join Placement
                                </a>
                                <button className="dropdots inline-flex items-center p-2 text-sm font-medium text-center text-gray-900 bg-white rounded-lg hover:bg-gray-100 focus:bg-gray-200" type="button"> 
                                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 4 15">
                                        <path d="M3.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 6.041a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 5.959a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"/>
                                    </svg>
                                </button>

                            </div>
                        </div>
                    </div>
                    ))
                }

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
                    hidden={active === totalPages}
                >
                    <ArrowRightIcon strokeWidth={2} className="-mt-2 -ms-2 h-4 w-4" />
                </IconButton>
        </div>

        </Layout>
    );
}
