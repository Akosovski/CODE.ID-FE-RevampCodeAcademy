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
            
            <div className="flex flex-row border-b-2 border-gray-300">

              <div className="p-12 pt-5 bg-gray-200">
                <Image className="rounded-full mt-4 brightness-100" width={75} src={profile} alt="example"/>
              </div>

              <div className="justify-items-start grow ps-10">
                <h5 className="mb-3 mt-7 text-[120%] font-bold">
                  {talent.empEntity.userFirstName}&nbsp;{talent.empEntity.userLastName}
                </h5>
                <h6 className="mb-3">NodeJS, Batch#15</h6>
                <h6 className="mb-3">StartDate until EndDate</h6>
              </div>

              <div className="justify-items-end bg-gray-200">
                <h5 className="m-10 mb-2 mt-12 text-[110%]">Scale Skill (1-4)</h5>
                
                <div className="ms-12 text-[140%]">
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star"></span>
                  <span className="fa fa-star"></span>
                </div>
                
              </div>

              
            </div>

          
            
          </div>
        )}

        </div>
    </Layout>
  );
}