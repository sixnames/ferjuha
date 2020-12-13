import { getDatabase } from '../db/mongodb';
import React from 'react';
import { signIn, signOut, useSession } from 'next-auth/client';

const Page = () => {
  const [session] = useSession();

  return (
    <>
      {!session && (
        <>
          Not signed in <br />
          <button onClick={() => signIn()}>Sign in</button>
        </>
      )}
      {session && (
        <>
          Signed in as {session.user.email} <br />
          <button onClick={() => signOut()}>Sign out</button>
        </>
      )}
    </>
  );
};

export default Page;

export async function getStaticProps() {
  const db = await getDatabase();
  const collection = db.collection('users');
  const items = await collection.find({}).toArray();

  return {
    props: {
      items: JSON.parse(JSON.stringify(items)),
    },
    revalidate: 30,
  };
}
