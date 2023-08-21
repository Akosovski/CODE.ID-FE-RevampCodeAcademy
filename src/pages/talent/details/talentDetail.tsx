// path-to-your-component/TalentDetail.tsx

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GetOneTalentReq } from '@/redux-saga/action/talentAction';
import Layout from '@/pages/components/layout/Layout';

export default function TalentDetail(props: any) {
  const dispatch = useDispatch();

  const { talent } = useSelector((state: any) => state.talentDetailState);
  console.log("Talent: ", talent);

  useEffect(() => {
    dispatch(GetOneTalentReq({ id: props.empEntityId }));
  }, [dispatch, props.empEntityId]);

  return (
    <Layout>
      {talent && (
        <div>
          <h1>Talent Details No. {talent.empEntityId}</h1>
          <h5 className="text-center mb-3 text-[120%] font-bold tracking-tight text-gray-900">{talent.empEntity.userFirstName}&nbsp;{talent.empEntity.userLastName}</h5>
        </div>
      )}
    </Layout>
  );
}