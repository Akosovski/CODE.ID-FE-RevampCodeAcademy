import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GetOneTalentReq } from '@/redux-saga/action/talentAction';
import Layout from '@/pages/components/layout/Layout';
import Image from 'next/image';
import profile from '@/pages/images/dummy_profile.png';

export default function TalentDetail(props: any) {
  const dispatch = useDispatch();

  const { talent } = useSelector((state: any) => state.talentDetailState);
  console.log("Talent: ", talent);

  useEffect(() => {
    dispatch(GetOneTalentReq({ id: props.empEntityId }));
  }, [dispatch, props.empEntityId]);

  return (
    <Layout>
        <div>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>

          {talent && talent.empEntity && (
          <div>
            <div className="border-b-2 border-gray-300">
              <h1 className="p-5 ps-10">Talent Profile ID-{talent.empEntityId}</h1>
            </div>
            
            <div className="flex flex-row border-b-2 border-gray-300 h-36">

              <div className="p-12 pt-2 bg-gray-200">
                <Image className="rounded-full mt-4 brightness-100" width={75} src={profile} alt="example"/>
              </div>

              <div className="justify-items-start grow ps-10">
                <h5 className="mb-3 mt-4 text-[120%] font-bold">
                  {talent.empEntity.userFirstName}&nbsp;{talent.empEntity.userLastName}
                </h5>
                <h6 className="mb-3">NodeJS, Batch#15</h6>
                <h6 className="mb-3">StartDate until EndDate</h6>
              </div>

              <div className="justify-items-end bg-gray-200">
                <h5 className="m-10 mb-2 mt-9 text-[110%]">Scale Skill (1-4)</h5>
                
                <div className="ms-12 text-[140%]">
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star"></span>
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
                  <p>app</p>
                </div>
                
                <div className="basis-1/2 p-5 pb-2">
                  <h2 className="font-bold">Email Address</h2>
                  <p>email</p>
                </div>

                <div className="basis-1/2 p-5 pb-2">
                  <h2 className="font-bold">Status</h2>
                  <p>stat</p>
                </div>

              </div>

              <div className="flex flex-row gap-10 text-center">

                <div className="basis-1/2 p-5">
                  <h2 className="font-bold">Phone</h2>
                  <p>02392932932</p>
                </div>
                
                <div className="basis-1/2 p-5">
                  <h2 className="font-bold">Skills</h2>
                  <p>php, pyton, js, ts</p>
                </div>

                <div className="basis-1/2 p-5">
                  <h2 className="font-bold">Placement</h2>
                  <p>PT. Merdeka</p>
                </div>

              </div>

              <div>
                <h1 className='p-9 pb-0 pt-5 font-bold'>Review Trainer</h1>

                <div className="p-9 pb-5 pt-3 ps-9">
                  <p className="text-justify">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry
                   standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to 
                   make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, 
                   remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing 
                   Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                  </p>
                </div>

              </div>

            </div>

          </div>
          
        )}

        </div>
    </Layout>
  );
}