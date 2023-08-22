/* eslint-disable @next/next/no-sync-scripts */
/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-img-element */

import { useRouter } from 'next/router';
import TalentDetail from './talentDetail';

export default function TalentDetailPage() {
  const router = useRouter();
  const userEntityId = router.query.data;

  console.log("userEntityId: ", userEntityId);

  return <TalentDetail userEntityId={userEntityId} />;
}