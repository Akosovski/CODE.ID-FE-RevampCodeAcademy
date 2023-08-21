/* eslint-disable @next/next/no-sync-scripts */
/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-img-element */

import { useRouter } from 'next/router';
import TalentDetail from './talentDetail'; // Import your TalentDetail component

export default function TalentDetailPage() {
  const router = useRouter();
  const empEntityId = router.query.empEntityId as string; // Type assertion

  return <TalentDetail empEntityId={empEntityId} />;
}