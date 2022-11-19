import React from 'react';
import Head from 'next/head';
import { AgentAccountSettingsPage } from 'containers/Agent/';
export default function accountSettingsPage({ processedData }) {
  return (
    <>
      <Head>
        <title>Account Settings | #Partiu</title>
      </Head>
      <AgentAccountSettingsPage processedData={processedData} />
    </>
  );
}

export async function getServerSideProps() {
  return {
    props: {},
  };
}
