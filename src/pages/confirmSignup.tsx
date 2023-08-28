import { useRouter } from 'next/router';

export default function ConfirmSignup() {
  const router = useRouter();
  const { username } = router.query;

  return (
    <div>
      <p>Selamat {username}! Anda telah berhasil melakukan registrasi.</p>
    </div>
  );
}