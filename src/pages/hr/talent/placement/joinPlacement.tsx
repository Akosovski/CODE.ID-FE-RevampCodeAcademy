import React, { useEffect, useState, Fragment, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GetOneTalentReq, EditStatusReq } from "@/redux-saga/action/talentAction";
import Layout from '@/pages/components/layout/Layout';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, Dialog, Transition } from '@headlessui/react';
import profile from '@/pages/images/dummy_profile.png';

export default function TalentDetail(props: any) {
  const dispatch = useDispatch();
  const [statusChangeID, setStatusChangeID] = useState(0);
  const [modifiedDate, setModifiedDate] = useState('');

  const { talent } = useSelector((state: any) => state.talentDetailState);
  console.log("Talent: ", talent);

  useEffect(() => {
    dispatch(GetOneTalentReq({ id: props.userEntityId }));
  }, [dispatch, props.userEntityId]);

  function formatDate(dateString: string): string {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  }

  // Edit Status
  const handleStatusEdit = (event: React.FormEvent<HTMLFormElement>) => {
    const combinedDateTime = `${modifiedDate}T14:30:00.000Z`;
    console.log(combinedDateTime);
    event.preventDefault();
    const payload = {
        id: props.userEntityId,
        newRole: 2,
        modifiedDate: combinedDateTime,
    };
    dispatch(EditStatusReq(payload));
  };

  // Set Modal State
  let [isOpen, setIsOpen] = useState(false);
  const [isOpenChangeStatusModal, setIsOpenChangeStatusModal] = useState(false);
  const [modalId, setModalId] = useState(0);

  function closeModal() {
      setIsOpen(false)
      localStorage.setItem('modalState', 'closed');
  }
  
  function openModal(userId: number) {
      setIsOpen(true);
      setModalId(userId);
  }

  function openChangeStatusModal() {
    setIsOpenChangeStatusModal(true);
  }

  function closeChangeStatusModal() {
    setIsOpenChangeStatusModal(false);
  }

  return (
    <Layout>
        <div>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>

        {talent && talent.batchTrainees && (
          <div>
            <div className="flex flex-cols border-b-2 border-gray-300">

              <div className="justify-items-start flex-1">
                <h1 className="p-5 ps-10">Talent Profile ID-{talent.userEntityId} / PLACEMENT</h1>
              </div>

              <div className="justify-items-end p-2 mt-1 me-20">
                
                <button className="text-white bg-gray-600 hover:bg-gray-700 
                focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium 
                rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
                onClick={() => openModal(talent.userEntityId)}>
                  Create / Change Placement</button>

              </div>
              
            </div>
            
            <div className="flex flex-row border-b-2 border-gray-300 h-36">

              <div className="p-12 pt-2 bg-gray-200">
                <Image className="rounded-full mt-4 brightness-100" width={75} src={profile} alt="example"/>
              </div>

              <div className="justify-items-start grow ps-10">
                <h5 className="mb-3 mt-4 text-[120%] font-bold">
                  {talent.userFirstName}&nbsp;{talent.userLastName}
                </h5>
                <h6 className="mb-3">{talent.batchTrainees[0]?.batrBatch?.batchEntity?.progTitle},&nbsp;{talent.batchTrainees[0]?.batrBatch?.batchName}</h6>
                <h6 className="mb-3">{formatDate(talent.batchTrainees[0]?.batrBatch?.batchStartDate)}&nbsp;until&nbsp;{formatDate(talent.batchTrainees[0]?.batrBatch?.batchEndDate)}</h6>
              </div>

              <div className="justify-items-end bg-gray-200 overflow-clip">
                <h5 className="m-10 mb-2 mt-9 text-[110%]">Scale Skill (1-4)</h5>
                
                <div className="ms-16 text-[140%]">
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star-half-o checked"></span>
                </div>
                
              </div>

            </div>
 

            <h1 className="p-6 ps-10 pb-3 font-bold">Talent Information</h1>
            <p className="ps-10">Ask talent to full fill cv application.</p>

            <div className="flex flex-col mt-3">

              <div className="flex flex-row gap-10 text-center">

                <div className="basis-1/2 p-5 pb-2">
                  <h2 className="font-bold">Application for</h2>
                  <p>Junior Backend Developer</p>
                </div>
                
                <div className="basis-1/2 p-5 pb-2">
                  <h2 className="font-bold">Email Address</h2>
                  <p>{talent.usersEmails[0].pmailAddress}</p>
                </div>

                <div className="basis-1/2 p-5 pb-2">
                  <h2 className="font-bold">Status</h2>
                  <p>
                    {talent.userCurrentRole === 2 ? 'IDLE' : 
                    talent.userCurrentRole === 12 ? 'PLACEMENT' : 
                    talent.userCurrentRole === 13 ? 'TRIAL' : 
                    talent.userCurrentRole === 1 ? 'ON BOOTCAMP' : 
                    'Unknown'}
                  </p>
                </div>

              </div>

              <div className="flex flex-row gap-10 text-center">

                <div className="basis-1/2 p-5">
                  <h2 className="font-bold">Phone</h2>
                  <p>+62{talent.usersPhones[0].uspoNumber}</p>
                </div>
                
                <div className="basis-1/2 p-5">
                  <h2 className="font-bold">Skills</h2>
                  <p>Javascript Full Stack, NodeJS, PHP, ReactJS, Redux</p>
                </div>

                <div className="basis-1/2 p-5">
                  <h2 className="font-bold">Placement</h2>
                  <p>PT. Hari Merdeka Kita</p>
                </div>

              </div>

              <div>
                <h1 className='p-9 pb-0 pt-5 font-bold'>Review Trainer</h1>

                <div className="p-9 pb-5 pt-3 ps-9">
                  <p className="text-justify">
                    {talent.batchTrainees[0]?.batrReview}
                  </p>
                </div>

              </div>

              <div className="ms-9 me-9 mt-1 mb-5">
                <h1 className='font-bold mb-5'>Attachments</h1>
                <ul className="w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg">
                    <li className="w-full p-3 border-b border-gray-300 rounded-t-lg bg-gray-200 text-[115%]">Attachment #1</li>
                    <li className="w-full p-3 border-b border-gray-200 rounded-b-lg bg-gray-200 text-[115%]">Attachment #2</li>
                </ul>
              </div>

              <div className="flex flex-row ms-9 me-9 mt-1 mb-12 justify-end pe-16">
                <button className="text-white bg-gray-600 hover:bg-gray-700 
                  focus:outline-none focus:ring-4 focus:ring-gray-300
                  rounded-lg text-sm px-5 py-2.5 mr-2 mb-2" 
                  onClick={openChangeStatusModal}>
                  Switch to Idle</button>

                <Link href={`/talent/`}>
                <button className="text-white bg-gray-600 hover:bg-gray-700 
                  focus:outline-none focus:ring-4 focus:ring-gray-300
                  rounded-lg text-sm px-5 py-2.5 mr-2 mb-2">Return</button>
                </Link>
              </div>

            </div>

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
                                    Talent Placement For <span className="text-lg font-bold leading-6 text-gray-900">{talent.userFirstName}&nbsp;{talent.userLastName}</span>
                                </Dialog.Title>

                                <form>
                                    <div className="mt-5">

                                      <div className="mb-6">
                                        <label htmlFor="client" className="block mb-2 text-sm font-medium text-gray-900">Client</label>
                                        <input type="client" id="client" className="bg-gray-50 focus:drop-shadow-md border border-gray-300 text-gray-900 outline-none text-sm rounded-lg block w-full p-2.5" placeholder="client name..." required/>
                                      </div>

                                      <div className="mb-6">
                                        <label htmlFor="contractNo" className="block mb-2 text-sm font-medium text-gray-900">Contract No.</label>
                                        <input type="contractNo" id="contractNo" className="bg-gray-50 focus:drop-shadow-md border border-gray-300 text-gray-900 outline-none text-sm rounded-lg block w-full p-2.5" placeholder="contract no..." required/>
                                      </div>

                                      <div className="mb-6 flex">
                                        <div>
                                          <label htmlFor="periodStart" className="block mb-2 text-sm font-medium text-gray-900">Start Date</label>
                                          <input type="date" id="periodStart" className="bg-gray-50 focus:drop-shadow-md border border-gray-300 text-gray-900 outline-none text-sm rounded-lg block w-full p-2.5" placeholder="date" required/>
                                        </div>

                                        <div className="ms-8">
                                          <label htmlFor="periodEnd" className="block mb-2 text-sm font-medium text-gray-900">End Date</label>
                                          <input type="date" id="periodEnd" className="bg-gray-50 focus:drop-shadow-md border border-gray-300 text-gray-900 outline-none text-sm rounded-lg block w-full p-2.5" placeholder="date" required/>
                                        </div>
                                        
                                      </div>
                                    
                                      <div className="mb-6">
                                          <label htmlFor="status" className="block mb-2 text-sm font-medium text-gray-900">Status Type</label>
                                          <select id="status" className="h-12 bg-gray-50 border border-gray-300 text-sm rounded-lg block w-full p-2.5 focus-within:shadow-lg cursor-pointer">
                                              <option defaultValue="STATUS">Status</option>
                                              <option value="TRIAL">TRIAL</option>
                                              <option value="TRIAL">PLACEMENT</option>
                                          </select>
                                      </div>

                                      <div className="mb-6">
                                          <label htmlFor="notes" className="block mb-2 text-sm font-medium text-gray-900">Notes</label>
                                          <input type="notes" id="notes" className="bg-gray-50 focus:drop-shadow-md border border-gray-300 text-gray-900 outline-none text-sm rounded-lg block w-full p-2.5" 
                                          onChange={() => { setStatusChangeID(talent.userEntityId); }} required/>
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

              <Transition appear show={isOpenChangeStatusModal} as={Fragment}>
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
                                    Set Idle For <span className="text-lg font-bold leading-6 text-gray-900">{talent.userFirstName}&nbsp;{talent.userLastName}</span>
                                </Dialog.Title>

                                <form onSubmit={handleStatusEdit}>
                                    <div className="mt-5">

                                      <div className="mb-6">
                                          <label htmlFor="periodStart" className="block mb-2 text-sm font-medium text-gray-900">Start Date</label>
                                          <input type="date" id="periodStart" className="bg-gray-50 focus:drop-shadow-md border border-gray-300 text-gray-900 outline-none text-sm rounded-lg block w-full p-2.5" 
                                          onChange={(event) => setModifiedDate(event.target.value)} 
                                          required/>
                                      </div>

                                      <div className="mb-6">
                                          <label htmlFor="notes" className="block mb-2 text-sm font-medium text-gray-900">Notes</label>
                                          <input type="notes" id="notes" className="bg-gray-50 focus:drop-shadow-md border border-gray-300 text-gray-900 outline-none text-sm rounded-lg block w-full p-2.5" required/>
                                      </div>
                        
                                    </div>
                                    
                                    <div className="flex flex-row gap-5 justify-end">
                                        <div className="mt-2">
                                            <button
                                            type="submit"
                                            className="w-full inline-flex justify-center px-3 py-2 text-md 
                                            font-medium text-center text-white rounded-lg bg-gray-600 hover:bg-gray-800"
                                            >
                                            Set To Idle
                                            </button>
                                        </div>
                                        <div className="mt-2">
                                            <button
                                            type="button"
                                            className="w-full inline-flex justify-center px-3 py-2 text-md 
                                            font-medium text-center text-white rounded-lg bg-gray-600 hover:bg-gray-800"
                                            onClick={closeChangeStatusModal}
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

          </div>


        )}

        </div>
    </Layout>
  );
}