
import React from 'react';
import Link from "next/link";
import AntdStyleRegistry from "../components/antd-style-registry";
import './globals.css';

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const RegistryLayout = ({ children }) => {
  return (
    <AntdStyleRegistry>
      <React.Fragment>
        <div>
          <Link href='/about/info/baseinfo'>about</Link>
          <Link href='/team' style={{ marginLeft: 12 }}>team</Link>
          <Link href='/me' style={{ marginLeft: 12 }}>me</Link>
        </div>
        {children}
      </React.Fragment>
    </AntdStyleRegistry>
  );
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* <link href='https://fonts.googleapis.com/css2?family=Inter&display=optional' rel="stylesheet" /> */}
        <style>
          {/* {extraStyle} */}
        </style>
      </head>
      <body>
        <header>layout header</header>
        <main>
          <RegistryLayout>
            {children}
          </RegistryLayout>
        </main>
      </body>
    </html >
  );
}
