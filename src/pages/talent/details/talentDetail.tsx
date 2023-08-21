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
    const empEntityId = 1
    dispatch(GetOneTalentReq({ id: empEntityId }));
  }, [dispatch]);

  return (
    <Layout>
      {talent && (
        <div>
          <h1>Talent Details No. {talent.empEntityId}</h1>
        </div>
      )}
    </Layout>
  );
}