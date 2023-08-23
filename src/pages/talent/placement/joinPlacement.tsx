import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GetOneTalentReq } from '@/redux-saga/action/talentAction';
import Layout from '@/pages/components/layout/Layout';
import Image from 'next/image';
import Link from 'next/link';
import profile from '@/pages/images/dummy_profile.png';

export default function TalentDetail(props: any) {
  const dispatch = useDispatch();

  const { talent } = useSelector((state: any) => state.talentDetailState);
  console.log("Talent: ", talent);

  useEffect(() => {
    dispatch(GetOneTalentReq({ id: props.userEntityId }));
  }, [dispatch, props.userEntityId]);

  function formatDate(dateString: string): string {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
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
                rounded-lg text-sm px-5 py-2.5 mr-2 mb-2">Create / Change Placement</button>

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
                
                <div className="ms-12 text-[140%]">
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star"></span>
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
                  <p>Idle</p>
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
                  rounded-lg text-sm px-5 py-2.5 mr-2 mb-2">Switch to Idle</button>
                <Link href={`/talent/`}>
                <button className="text-white bg-gray-600 hover:bg-gray-700 
                  focus:outline-none focus:ring-4 focus:ring-gray-300
                  rounded-lg text-sm px-5 py-2.5 mr-2 mb-2">Return</button>
                </Link>
              </div>

            </div>

          </div>

        )}

        </div>
    </Layout>
  );
}