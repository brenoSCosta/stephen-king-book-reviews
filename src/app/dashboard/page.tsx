'use client';
import { AuthContext } from '@/contexts/AuthContext';
import { api } from '@/services/api';
import { GetServerSideProps } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { parseCookies } from 'nookies';
import React, { useContext, useEffect } from 'react';

const page = () => {
  const context = useContext(AuthContext);
  getAuthorization();
  // useEffect(() => {
  //   api.get('/users');
  // });
  return (
    <div>
      {context.user?.name}
      {/* <Image src={context.user?.avatar_url ?? ''} alt='' width={200} height={200} /> */}
    </div>
  );
};

export default page;

function getAuthorization() {
  const router = useRouter();

  const { 'skbooks-token': token } = parseCookies();

  if (!token) {
    router.push('/');
  }
}
