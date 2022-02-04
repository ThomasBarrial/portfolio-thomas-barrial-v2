import React from 'react';
import Head from 'next/head';
import metaImage from '../../../public/metaImage.png';

interface IProps {
  pageTitle: string;
  title: string;
  description: string;
  keywords: string;
}

function Meta({ pageTitle, title, description, keywords }: IProps): JSX.Element {
  return (
    <Head>
      <title>{pageTitle}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={metaImage} />
    </Head>
  );
}

export default Meta;
