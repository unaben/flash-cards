'use client';

import { useEffect, useState } from 'react';

const AppHydration = ({ children }: { children: React.ReactNode }) => {
  const [isMounted, setIsMounted] = useState(false);

  // Wait till Next.js rehydration completes
  useEffect(() => {     
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsMounted(true);
  }, []);

  return <div>{isMounted ? <div>{children}</div> : null}</div>;
};

export default AppHydration;
