'use client';
import { AuthContext } from '@/contexts/AuthContext';
import Image from 'next/image';
import React, { useContext } from 'react';

const page = () => {
  const context = useContext(AuthContext);
  return (
    <div>
      <Image src={context.user?.avatar_url ?? ''} alt='' width={200} height={200} />
    </div>
  );
};

export default page;
