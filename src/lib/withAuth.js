// lib/withAuth.js
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const withAuth = (WrappedComponent) => {
  return (props) => {
    const router = useRouter();

    useEffect(() => {
      if (!props.user) {
        router.push('/Login');
      }
    }, [props.user]);

    return <WrappedComponent {...props} />;
  };
};

export default withAuth;