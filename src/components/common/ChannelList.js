import React from 'react';
import ChannelCard from './ChannelCard';

export default function ChannelList() {
  const channels = [
    'Amazon',
    'Flipkart',
    'Meesho',
    'Myntra',
    'Woo Commerce Shopify',
    'Snapdeal',
    'Jiomart',
    'Ajio',
    'Tata Click',
    'Lime Road',
    'Nynka',
    'Shiproket',
    'Rozarpay',
    'Shipway',
    'Easebuzz',
    'Snapment',
    'Ecom Express',
    'Delivery'
  ];

  return (
    <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 p-2 sm:p-3 md:p-4">
      {channels.map(channel => (
        <ChannelCard key={channel} channelName={channel} />
      ))}
    </div>
  );
} 