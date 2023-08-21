/* eslint-disable @next/next/no-sync-scripts */
/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-img-element */

import { useRouter } from 'next/router';
import TalentDetail from './talentDetail';

export default function TalentDetailPage() {
  const router = useRouter();
  const empEntityId = router.query.data;

  console.log("empEntityId: ", empEntityId);

  return <TalentDetail empEntityId={empEntityId} />;
}