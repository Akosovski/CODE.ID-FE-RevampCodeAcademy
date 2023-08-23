/* eslint-disable @next/next/no-sync-scripts */
/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-img-element */

import { useRouter } from 'next/router';
import JoinPlacement from './joinPlacement';

export default function JoinPlacementPage() {
  const router = useRouter();
  const userEntityId = router.query.data;

  console.log("userEntityId: ", userEntityId);

  return <JoinPlacement userEntityId={userEntityId} />;
}