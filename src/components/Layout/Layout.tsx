import React, { ReactNode } from 'react';
import { useEffect, useState } from "react";
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { getContacts } from "@/queries/contentful";
import { ContactDataProps } from "@/types/contactDataProps";

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  const [cmsData, setSmcData] = useState<ContactDataProps | null>(null);
  const [error, setError] = useState<Error | string | null>(null);

  useEffect(() => {
    getContacts()
      .then((result) => {
        setSmcData(result)
      })
      .catch((err) => {
        setError(err);
        console.error(error);
      });
  }, []);

  if (!cmsData) return <p>Loading...</p>;

  return (
    <>
      <Header {...cmsData} />
        <main>{children}</main>
      <Footer {...cmsData} />
    </>
  )
}