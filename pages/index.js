import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function MyPage() {
  const router = useRouter();

  useEffect(() => {
    router.push('/index.html');
  }, []);

  return null;
}
