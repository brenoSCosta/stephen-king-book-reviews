'use client';
import { AuthContext } from '@/contexts/AuthContext';
import { api } from '@/services/api';
import Image from 'next/image';
import React, { useContext, useEffect } from 'react';

const page = () => {
  const context = useContext(AuthContext);

  useEffect(() => {
    api.get('/users');
  });

  return (
    <div>
      {context.user?.name}
      {/* <Image src={context.user?.avatar_url ?? ''} alt='' width={200} height={200} /> */}
    </div>
  );
};

export default page;
