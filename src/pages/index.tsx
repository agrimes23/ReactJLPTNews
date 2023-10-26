import { useRouter } from 'next/router';
import { useEffect } from 'react';

function IndexPage() {
  const router = useRouter();

  useEffect(() => {
    // Check if the user is logged in (you may have your own authentication logic)
    const userIsLoggedIn = /* Your authentication logic here */ true;

    if (!userIsLoggedIn) {
        router.push('/login');
    } else {
        router.push('/news')
    }
  }, []);

}

export default IndexPage;