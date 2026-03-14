'use client';

import DashBoardCantainer from "@/components/dashboard/DashBoardCantainer";
import * as DialogModule from '@/components/common/Dialog';
import * as ChannelListModule from '@/components/common/ChannelList';
import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';

function DashboardContent() {
  const [showDialog, setShowDialog] = useState(false);
  const searchParams = useSearchParams();

  // Access the default export
  const Dialog = DialogModule.default || DialogModule;
  const ChannelList = ChannelListModule.default || ChannelListModule;

  useEffect(() => {
    if (searchParams.get('showChannels') === 'true') {
      setShowDialog(true);
    }
  }, [searchParams]);

  const handleCloseDialog = () => {
    // setShowDialog(false);
    // Optional: Remove the query parameter from the URL
    // history.replaceState({}, document.title, window.location.pathname);
  };

  return (
    <>
      <DashBoardCantainer/>
      <Dialog isOpen={showDialog} onClose={handleCloseDialog}>
        <h2 className="text-xl font-semibold mb-4">Available Channels</h2>
        <ChannelList />
      </Dialog>
    </>
  )
}

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <DashboardContent />
    </Suspense>
  );
}
