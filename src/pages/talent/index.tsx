/* eslint-disable @next/next/no-sync-scripts */
/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState, Fragment, useRef } from 'react';
import { useDispatch, useSelector } from "react-redux";
import Layout from '../components/layout/Layout';
import { GetTalentReq, SearchTalentReq, EditStatusReq } from "@/redux-saga/action/talentAction";
import Image from 'next/image';
import profile from '@/pages/images/dummy_profile.png';
import { IconButton, Typography } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/outline";
import { Menu, Dialog, Transition } from '@headlessui/react';
import { useFormik } from "formik";
import Link from 'next/link';

export default function TalentList(props: any) {
    const [searchValue, setSearchValue] = useState('');
    const [selectedStatus, setSelectedStatus] = useState(0);
    const [searchDisplay, setSearchDisplay] = useState(false);
    const [refresh, setRefresh] = useState(false);

    const [statusChangeID, setStatusChangeID] = useState(0);
    const [roleValue, setRoleValue] = useState(0);
    const [modifiedDate, setModifiedDate] = useState('');

    const dispatch = useDispatch();

    // Fetch Talents
    const { talents } = useSelector((state: any) => state.talentState);
    console.log("Talents : ", talents);

    useEffect(() => {
        dispatch(GetTalentReq({}));
    }, [dispatch]);

    const [active, setActive] = React.useState(1);

    // Search Talents
    const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const payload = {
            name: searchValue,
            status: selectedStatus,
        };
        dispatch(SearchTalentReq(payload));
        setSearchDisplay(true);
        setActive(1);
    };

    // Edit Status
    const handleStatusEdit = (event: React.FormEvent<HTMLFormElement>) => {
        const combinedDateTime = `${modifiedDate}T14:30:00.000Z`;
        console.log(combinedDateTime);
        event.preventDefault();
        const payload = {
            id: statusChangeID,
            newRole: roleValue,
            modifiedDate: combinedDateTime,
        };
        dispatch(EditStatusReq(payload));
        setActive(1);
    };

    // Pagination
    let totalPages: number = Math.ceil(talents?.totalCount / 4);
    console.log("totalPages : ", totalPages);
    
    const getCurrentPageData = () => {
        const startIndex = (active - 1) * (4 || 0);
        const endIndex = startIndex + (4 || 0);
        return talents?.data?.slice(startIndex, endIndex) || [];
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

    // Set Modal State
    let [isOpen, setIsOpen] = useState(false);
    const [modalId, setModalId] = useState(0);

    function closeModal() {
        setIsOpen(false)
        localStorage.setItem('modalState', 'closed');
    }
    
    function openModal(userId: number) {
        setIsOpen(true);
        setModalId(userId);
    }

    return (
      <Layout>
        <div className="grid grid-flow-col">
            <div className="col-span-8">

            <form className="border-b-2 border-gray-300 pb-2" onSubmit={handleSearch}>
                <div className="flex h-20 p-4 justify-center me-20">
                    <div className="p-4 text-md">
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
                            placeholder="talent name..." 
                            value={searchValue}
                            onChange={(e) => setSearchValue(e.target.value)}
                            /> 
                        </div>
                    </div>

                    <div className="ms-5 pt-1">
                    <select
                        className="h-12 bg-gray-50 border border-gray-300 text-sm rounded-lg block w-full p-2.5 focus-within:shadow-lg cursor-pointer"
                        value={selectedStatus}
                        onChange={(e) => setSelectedStatus(Number(e.target.value))}>
                            <option value={0}>Status</option>
                            <option value={1} onClick={() => { setSelectedStatus(1); }}>ON BOOTCAMP</option>
                            <option value={2} onClick={() => { setSelectedStatus(2); }}>IDLE</option>
                            <option value={13} onClick={() => { setSelectedStatus(13); }}>TRIAL</option>
                    </select>
                    </div>

                    <div className="ms-5 pt-1.5">
                        <button
                            type="submit"
                            className="p-4 text-white bg-gray-700 hover:bg-gray-800 font-medium rounded-lg px-5 py-2.5 mr-2 mb-2 
                            bg-gray-600 hover:bg-gray-700 focus:ring-gray-800">
                            Search
                        </button>
                    </div>
                </div>
            </form>
                
                <h1 className="p-10 pt-5 pb-1 text-md">Choose talent for placement</h1>
                
                <div className="flex p-10 gap-8 md:gap-10 lg:gap-15 pt-5 justify-center">

                {getCurrentPageData().map((talent: any) =>
                    <div key={talent.userEntityId} className="min-w-[23%] lg:w-[25%] bg-white border border-gray-200 rounded-lg shadow">
                        <div>
                            <Image className="rounded-t-lg mx-auto mt-4 brightness-125" width={180} height={180} src={profile} alt="example" />
                        </div>
                        <div className="p-5">
                            <a href="#">
                                <h5 className="text-center mb-3 text-[120%] font-bold tracking-tight text-gray-900">{talent.userFirstName}&nbsp;{talent.userLastName}</h5>
                            </a>
                            <p className="text-center mb-3 text-md font-medium text-gray-900">
                                {talent.userCurrentRole === 2 ? 'IDLE' : 
                                talent.userCurrentRole === 12 ? 'PLACEMENT' : 
                                talent.userCurrentRole === 13 ? 'TRIAL' : 
                                talent.userCurrentRole === 1 ? 'ON BOOTCAMP' : 
                                'Unknown'}
                            </p>

                            <div className="flex">
                                <p className="grow text-center mb-3 font-normal text-gray-700">{talent.batchTrainees[0].batrBatch.batchName}</p>
                                <p className="grow text-center mb-3 font-normal text-gray-700">{talent.batchTrainees[0].batrBatch.batchEntity.progTitle}</p>
                            </div>
                            
                            <div className="flex gap-2 mt-3">
                                <div className="grow">
                                    <Link href={`/talent/placement/${talent.userEntityId}?data=${encodeURIComponent(talent.userEntityId)}`}>
                                        <button className="w-full inline-flex justify-center px-3 py-2 text-md font-medium text-center text-white rounded-lg bg-gray-600 hover:bg-gray-800">
                                            Join Placement
                                        </button>
                                    </Link>
                                </div>

                                <Menu as="div">
                                    <Menu.Button className="dropdots inline-flex items-center p-2 text-sm font-medium text-center text-gray-900 bg-white rounded-lg hover:bg-gray-100 focus:bg-gray-200" type="button"> 
                                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 4 15">
                                            <path d="M3.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 6.041a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 5.959a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"/>
                                        </svg>
                                    </Menu.Button>
                                
                                <Transition
                                    as={Fragment}
                                    enter="transition ease-out duration-100"
                                    enterFrom="transform opacity-0 scale-95"
                                    enterTo="transform opacity-100 scale-100"
                                    leave="transition ease-in duration-75"
                                    leaveFrom="transform opacity-100 scale-100"
                                    leaveTo="transform opacity-0 scale-95"
                                >
                                    <Menu.Items className="z-50 absolute mt-4 -ms-48 w-56 origin-top-left divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                        <div className="px-1 py-1">
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <button
                                                        className={`${
                                                        active ? 'bg-gray-600 text-white' : 'text-gray-900'
                                                        } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                                        onClick={() => openModal(talent.userEntityId)}
                                                    >
                                                        Switch Action
                                                    </button>
                                                )}
                                            </Menu.Item>

                                            <Menu.Item>
                                                {({ active }) => (
                                                    <Link href={`/talent/details/${talent.userEntityId}?data=${encodeURIComponent(talent.userEntityId)}`}>
                                                            <button
                                                                className={`${active ? 'bg-gray-600 text-white' : 'text-gray-900'} group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                                            >
                                                                Details
                                                            </button>
                                                    </Link>
                                                )}
                                            </Menu.Item>
                                        </div>
                                    </Menu.Items>  

                                </Transition>
                            </Menu>
                            
                            {talent.userEntityId === modalId && (
                                <Transition appear show={isOpen} as={Fragment}>
                                <Dialog as="div" className="relative z-10" onClose={() => {}}>
                                    <Transition.Child
                                        as={Fragment}
                                        enter="ease-out duration-300"
                                        enterFrom="opacity-0"
                                        enterTo="opacity-100"
                                        leave="ease-in duration-200"
                                        leaveFrom="opacity-100"
                                        leaveTo="opacity-0"
                                    >
                                        <div className="fixed inset-0 bg-black bg-opacity-25"/>
                                    </Transition.Child>
                        
                                    <div className="fixed inset-0 overflow-y-auto">
                                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                                        <Transition.Child
                                            as={Fragment}
                                            enter="ease-out duration-300"
                                            enterFrom="opacity-0 scale-95"
                                            enterTo="opacity-100 scale-100"
                                            leave="ease-in duration-200"
                                            leaveFrom="opacity-100 scale-100"
                                            leaveTo="opacity-0 scale-95"
                                        >
                                            <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                        
                                                <Dialog.Title
                                                    as="h3"
                                                    className="text-lg font-medium leading-6 text-gray-900"
                                                >
                                                    Set Status to <span className="text-lg font-bold leading-6 text-gray-900">
                                                        {talent.userFirstName} 
                                                        &nbsp;
                                                        {talent.userLastName}
                                                    </span>
                                                </Dialog.Title>
                        
                                                <form onSubmit={handleStatusEdit}>
                                                    <div className="mt-5">
                                                    
                                                        <div className="mb-6">
                                                            <label htmlFor="status" className="block mb-2 text-sm font-medium text-gray-900">Status Type</label>
                                                            <select id="status" className="h-12 bg-gray-50 border border-gray-300 text-sm rounded-lg block w-full p-2.5 focus-within:shadow-lg cursor-pointer">
                                                                <option value={0}>Status</option>
                                                                <option value={1} onClick={() => { setRoleValue(1); }}>ON BOOTCAMP</option>
                                                                <option value={2} onClick={() => { setRoleValue(2); }}>IDLE</option>
                                                                <option value={13} onClick={() => { setRoleValue(13); }}>TRIAL</option>
                                                                <option value={13} onClick={() => { setRoleValue(12); }}>PLACEMENT</option>
                                                            </select>
                                                        </div>
                        
                                                        <div className="mb-6">
                                                            <label htmlFor="periodStart" className="block mb-2 text-sm font-medium text-gray-900">Start Date</label>
                                                            <input type="date" id="periodStart" className="bg-gray-50 focus:drop-shadow-md border border-gray-300 text-gray-900 outline-none text-sm rounded-lg block w-full p-2.5" 
                                                            onChange={(event) => setModifiedDate(event.target.value)} 
                                                            required/>
                                                        </div>
                        
                                                        <div className="mb-6">
                                                            <label htmlFor="notes" className="block mb-2 text-sm font-medium text-gray-900">Notes</label>
                                                            <input type="notes" id="notes" className="bg-gray-50 focus:drop-shadow-md border border-gray-300 text-gray-900 outline-none text-sm rounded-lg block w-full p-2.5" 
                                                            onChange={() => { setStatusChangeID(talent.userEntityId); }}
                                                            placeholder="notes..." required/>
                                                        </div>
                                        
                                                    </div>
                                                    
                                                    <div className="flex flex-row gap-5 justify-end">
                                                        <div className="mt-2">
                                                            <button
                                                            type="submit"
                                                            className="w-full inline-flex justify-center px-3 py-2 text-md 
                                                            font-medium text-center text-white rounded-lg bg-gray-600 hover:bg-gray-800"
                                                            >
                                                            Change Status
                                                            </button>
                                                        </div>
                                                        <div className="mt-2">
                                                            <button
                                                            type="button"
                                                            className="w-full inline-flex justify-center px-3 py-2 text-md 
                                                            font-medium text-center text-white rounded-lg bg-gray-600 hover:bg-gray-800"
                                                            onClick={closeModal}
                                                            >
                                                            Cancel
                                                            </button>
                                                        </div>
                                                        
                                                    </div>
                                                </form>
                        
                                            </Dialog.Panel>
                                        </Transition.Child>
                                        </div>
                                    </div>
                                    </Dialog>
                                </Transition>
                            )}
                            
                            </div>
                        </div>

                    </div>
                    
                )}                                

                </div>
            </div>
        </div>

        <div className="flex items-center gap-8 justify-center mb-10">
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
