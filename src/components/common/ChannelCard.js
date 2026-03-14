import React from 'react';
import Image from 'next/image';
import { CHANNELS_C0NNECTION } from '@/api/channels-services/channel-connection.service';

const channelLogos = {
  'Amazon': '/images/logo-amazon.png',
  'Flipkart': '/images/logo-fk.png',
  'Meesho': '/images/logo-sm-meesho.png',
  'Myntra': '/images/logo-sm-myntra.png',
  'Woo Commerce Shopify': '/images/logo-client.png',
  'Snapdeal': '/images/logo-sm-sd.png',
  'Jiomart': '/images/jiomart.png',
  'Ajio': '/images/ajio.png',
  'Tata Click': '/images/tata-click.png',
  'Lime Road': '/images/limeroad.png',
  'Nynka': '/images/nynka.png',
  'Shiproket': '/images/shiproket.png',
  'Rozarpay': '/images/rozarpay.png',
  'Shipway': '/images/shipway.png',
  'Easebuzz': '/images/logo-client.png',
  'Snapment': '/images/logo-client.png',
  'Ecom Express': '/images/logo-Delhivery.png',
  'Delivery': '/images/logo-Delhivery.png'
};

export default function ChannelCard({ channelName }) {
  const logoPath = channelLogos[channelName] || '/images/logo-client.png'; // Default logo if not found

  const handleConnect = async () => {
    try {
      let response;
      switch (channelName) {
        case 'Amazon':
          response = await CHANNELS_C0NNECTION.AMAZON_AUTH();
          if (response?.authorization_url) {
            window.open(response.authorization_url, '_blank');
          }
          break;
        case 'Flipkart':
          response = await CHANNELS_C0NNECTION.FLIPKART_AUTH();
          if (response?.authorization_url) {
            window.open(response.authorization_url, '_blank');
          }
          break;
        case 'Snapdeal':
          response = await CHANNELS_C0NNECTION.SNAPDeal_AUTH();
          if (response?.authorization_url) {
            window.open(response.authorization_url, '_blank');
          }
          break;
        default:
          console.log('Channel connection not implemented yet');
          return;
      }
      
      if (response) {
        // Handle successful connection
        console.log('Channel connected successfully:', response);
        // You can add additional logic here like showing a success message
        // or updating the UI to reflect the connected state
      }
    } catch (error) {
      console.error('Error connecting to channel:', error);
      // Handle error - you can show an error message to the user
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-3 sm:p-4 md:p-6 flex flex-col items-start border border-blue-200">
      <div className="overflow-x-auto flex items-center justify-between w-full mb-2 sm:mb-3 md:mb-4">
        <div className="flex items-center">
          <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 relative mr-2 sm:mr-3">
            <Image
              src={logoPath}
              alt={`${channelName} logo`}
              fill
              className="object-contain"
            />
          </div>
          <span className="text-base sm:text-lg font-semibold text-gray-800 line-clamp-1">{channelName}</span>
        </div>
        <span className="text-xs sm:text-sm text-green-600 bg-green-100 px-2 sm:px-3 py-1 rounded-full whitespace-nowrap">02 Connected</span>
      </div>
      <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4 md:mb-6 line-clamp-2">
        Connect your {channelName} seller central account to access relevant data
      </p>
      <button 
        onClick={handleConnect}
        className="mt-auto hover:bg-[#0080007c] hover:text-white-500 px-4 sm:px-6 py-1.5 sm:py-2 border border-blue-500 text-blue-500 rounded-md hover:bg-blue-50 text-xs sm:text-sm transition-colors duration-300 w-full sm:w-auto"
      >
        Connect
      </button>
    </div>
  );
} 