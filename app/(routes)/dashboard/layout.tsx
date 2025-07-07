import React from 'react';
import AppHeader from './_components/AppHeader';

function DashboardLayout ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <div className=' px-10 md:px-20 lg:px-40 py-10'>
            <AppHeader></AppHeader>
            {children}
        </div>
    );
};

export default DashboardLayout;