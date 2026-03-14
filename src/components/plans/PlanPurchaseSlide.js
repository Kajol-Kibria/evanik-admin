// 'use client';
// import React, { useEffect, useState } from 'react';
// import { IoCloseOutline } from "react-icons/io5";
// import Image from 'next/image';
// import { FiCheck } from 'react-icons/fi';
// import { MdOutlineStarRate } from 'react-icons/md';
// import { HiOutlineClock } from 'react-icons/hi';
// import { TbCurrencyRupee } from 'react-icons/tb';
// import { usePlans } from '@/hooks/usePlans';

// export default function PlanPurchaseSlide({ isOpen, onClose }) {
//   const { plans, error, isLoading } = usePlans();
//   const [selectedTab, setSelectedTab] = useState('monthly');

//   useEffect(() => {
//     if (isOpen) {
//       document.body.style.overflow = 'hidden';
//     } else {
//       document.body.style.overflow = 'auto';
//     }
//     return () => {
//       document.body.style.overflow = 'auto';
//     };
//   }, [isOpen]);

//   const getPlanIcon = (name) => {
//     if (!name) return "/images/icon-plan-blue.png";
//     if (name.toLowerCase().includes('premium')) return "/images/icon-plan-gold.png";
//     if (name.toLowerCase().includes('pro')) return "/images/icon-plan-silver.png";
//     if (name.toLowerCase().includes('enterprise')) return "/images/icon-plan-gold.png";
//     return "/images/icon-plan-blue.png";
//   };

//   if (isLoading) return (
//     <div className="fixed inset-0 flex items-center justify-center bg-white/80 z-50">
//       <div className="flex flex-col items-center">
//         <div className="w-16 h-16 border-4 border-[#9288c2] border-t-transparent rounded-full animate-spin"></div>
//         <p className="mt-4 text-gray-600 font-medium">Loading plans...</p>
//       </div>
//     </div>
//   );

//   if (error) return (
//     <div className="fixed inset-0 flex items-center justify-center bg-white/80 z-50">
//       <div className="bg-red-50 p-6 rounded-lg max-w-md text-center">
//         <p className="text-red-600 font-medium text-lg">Error loading plans</p>
//         <p className="text-red-500 mt-2">{error.message}</p>
//         <button
//           onClick={() => window.location.reload()}
//           className="mt-4 px-4 py-2 bg-[#9288c2] text-white rounded-lg hover:bg-[#7a6fb9] transition-colors"
//         >
//           Retry
//         </button>
//       </div>
//     </div>
//   );

//   return (
//     <>
//       {/* Overlay */}
//       {isOpen && (
//         <div
//           className="fixed inset-0 bg-black/30 z-[60] backdrop-blur-sm"
//           onClick={onClose}
//         />
//       )}
//       <div className={`fixed top-0 right-0 h-full bg-white z-[70] w-[70vw] shadow-xl transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'
//         }`}>
//         <div className="w-full h-full overflow-auto">
//           <div className="h-full overflow-auto ">
//             <div className="flex items-center justify-between mb-4 text-white p-3 bg-[#9288c2] ">
//               <div>
//                 <h2 className="font-bold text-2xl">Choose Your Plan</h2>
//                 <p className="text-gray-200 text-xs mt-0.5">Select the perfect plan to grow your business</p>
//               </div>
//               <button
//                 className="text-gray-500 hover:text-gray-700 transition-all duration-300 hover:bg-gray-100 p-1.5 rounded-full"
//                 onClick={onClose}
//               >
//                 <IoCloseOutline size={24} />
//               </button>
//             </div>

//             {/* Billing Cycle Tabs */}
//             <div className="flex font-medium text-[15px] mb-6 bg-gray-100 rounded-full p-1 max-w-md mx-auto">
//               <button
//                 onClick={() => setSelectedTab('monthly')}
//                 className={`transition-all duration-300 py-1.5 flex-1 rounded-full px-2 ${
//                   selectedTab === 'monthly'
//                     ? 'text-white bg-[#9288c2]'
//                     : 'text-gray-700 hover:text-[#9288c2]'
//                 }`}
//               >
//                 Monthly
//               </button>
//               <button
//                 onClick={() => setSelectedTab('quarterly')}
//                 className={`transition-all duration-300 py-1.5 flex-1 rounded-full px-2 ${
//                   selectedTab === 'quarterly'
//                     ? 'text-white bg-[#9288c2]'
//                     : 'text-gray-700 hover:text-[#9288c2]'
//                 }`}
//               >
//                 Quarterly
//               </button>
//               <button
//                 onClick={() => setSelectedTab('annual')}
//                 className={`transition-all duration-300 py-1.5 flex-1 rounded-full px-2 ${
//                   selectedTab === 'annual'
//                     ? 'text-white bg-[#9288c2]'
//                     : 'text-gray-700 hover:text-[#9288c2]'
//                 }`}
//               >
//                 Annual
//               </button>
//             </div>

//             {/* Plan Cards */}
//             <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 p-4 ">
//               {plans?.map((plan) => {
//                 // Get price based on selected billing cycle
//                 const getBillingCyclePrice = () => {
//                   const cycle = plan?.pricing?.billingCycles.find(c => c.duration === selectedTab);
//                   return cycle ? cycle.price : plan?.pricing?.billingCycles[0]?.price;
//                 };

//                 const price = getBillingCyclePrice();
//                 const planIcon = getPlanIcon(plan.name);

                // Determine card styling based on plan type
                const getCardStyle = () => {
                  if (plan.name.toLowerCase().includes('premium')) {
                    return {
                      borderColor: '#9288c2',
                      headerBg: 'bg-[#9288c2]',
                      buttonBg: 'bg-[#9288c2] hover:bg-[#7a6fb9]',
                      priceBg: 'bg-[#9288c2]/10',
                      featuresBg: 'bg-gray-50'
                    };
                  } else if (plan.name.toLowerCase().includes('enterprise')) {
                    return {
                      borderColor: '#68bf8c',
                      headerBg: 'bg-[#68bf8c]',
                      buttonBg: 'bg-[#68bf8c] hover:bg-[#5aaa7c]',
                      priceBg: 'bg-[#68bf8c]/10',
                      featuresBg: 'bg-gray-50'
                    };
                  } else {
                    return {
                      borderColor: '#68bf8c',
                      headerBg: 'bg-[#68bf8c]',
                      buttonBg: 'bg-[#68bf8c] hover:bg-[#5aaa7c]',
                      priceBg: 'bg-[#68bf8c]/10',
                      featuresBg: 'bg-gray-50'
                    };
                  }
                };

//                 const cardStyle = getCardStyle();

//                 return (
//                   <div
//                     key={plan._id}
//                     className="relative mt-10 border-[#9288c2] rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg w-full h-auto flex flex-col border hover:border-[#1f1069]"
//                   >
//                     {/* Plan Icon */}
//                     <div className="absolute -top-7 left-1/2 transform -translate-x-1/2">
//                       <div className="w-[60px] h-[60px] rounded-full flex items-center justify-center bg-white shadow-lg border-4 border-white">
//                         <Image src={planIcon} alt="" width={28} height={28} />
//                       </div>
//                     </div>

//                     {/* Trial Badge */}
//                     {plan.trialPeriod?.enabled && (
//                       <div className="absolute -top-[14px] right-4">
//                         <p className="bg-[#9288c2] text-white text-[10px] py-1 px-3 rounded-full font-medium flex items-center shadow-md">
//                           <HiOutlineClock className="mr-1" /> {plan.trialPeriod.durationInDays} days trial
//                         </p>
//                       </div>
//                     )}

//                     {/* Card Content Wrapper */}
//                     <div className="relative z-10 flex flex-col h-full">
//                       {/* Header */}
//                       <div className={`${cardStyle.headerBg} text-center pt-8 pb-3`}>
//                         <h3 className="font-bold text-xl text-white mb-0.5">{plan.name}</h3>
//                         <p className="text-white/90 text-xs">{plan.description}</p>
//                       </div>

//                       <div className="p-4 flex flex-col h-full">
//                         {/* Price Section */}
//                         <div className={`${cardStyle.priceBg} rounded-lg p-3 w-full text-center mb-4`}>
//                           <p className="text-3xl font-bold flex items-center justify-center text-gray-900">
//                             <TbCurrencyRupee className="text-2xl" />{price}
//                           </p>
//                           <p className="text-gray-500 text-xs mt-0.5 font-medium">
//                             Excl GST • {selectedTab.charAt(0).toUpperCase() + selectedTab.slice(1)}
//                           </p>
//                         </div>

//                         {/* Features */}
//                         <div className={`${cardStyle.featuresBg} rounded-lg p-3 flex-grow mb-4`}>
//                           <h4 className="font-semibold text-gray-900 text-xs uppercase tracking-wider mb-2 text-center">Features & Limits</h4>
//                           <div className="space-y-2">
//                             {plan.features?.map((feature, idx) => (
//                               <div key={idx} className="flex items-start">
//                                 <div className="p-0.5 bg-[#68bf8c] rounded-full mr-2 mt-0.5">
//                                   <FiCheck className="w-2.5 h-2.5 text-white" />
//                                 </div>
//                                 <p className="text-xs text-gray-700 leading-tight">
//                                   <span className="font-medium">{feature.name}:</span> {
//                                     typeof feature.value === 'boolean'
//                                       ? 'Included'
//                                       : `${feature.value} ${feature.description || ''}`
//                                   }
//                                 </p>
//                               </div>
//                             ))}

//                             {plan.limits?.map((limit, idx) => (
//                               <div key={idx} className="flex items-start">
//                                 <div className="p-0.5 bg-[#68bf8c] rounded-full mr-2 mt-0.5">
//                                   <FiCheck className="w-2.5 h-2.5 text-white" />
//                                 </div>
//                                 <p className="text-xs text-gray-700 leading-tight">
//                                   <span className="font-medium">{limit.name}:</span> {limit.value} {limit.unit}
//                                 </p>
//                               </div>
//                             ))}
//                           </div>

//                           {/* Tags */}
//                           {plan.metadata?.tags && plan.metadata.tags.length > 0 && (
//                             <div className="mt-3 flex flex-wrap gap-1.5 justify-center">
//                               {plan.metadata.tags.map((tag, idx) => (
//                                 <span key={idx} className="text-[10px] px-2 py-0.5 rounded-full bg-gray-200 text-gray-700">
//                                   #{tag}
//                                 </span>
//                               ))}
//                             </div>
//                           )}

//                           {/* Recommended */}
//                           {plan.metadata?.customFields?.recommendedUsers && (
//                             <div className="mt-3 flex items-center justify-center text-[#9288c2] text-xs font-medium">
//                               <MdOutlineStarRate className="mr-1 text-sm" />
//                               Recommended for {plan.metadata.customFields.recommendedUsers} users
//                             </div>
//                           )}
//                         </div>

//                         {/* Button */}
//                         <div className="mt-auto">
//                           <button
//                             className={`w-full py-2 px-3 rounded-lg font-bold transition-all duration-300 text-white text-sm ${cardStyle.buttonBg}`}
//                           >
//                             Choose Plan
//                           </button>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>

//             {/* Footer Note */}
//             <div className="mt-6 text-center text-gray-500 text-xs pb-4">
//               <p>Need help choosing? <a href="#" className="text-[#9288c2] hover:underline">Contact our sales team</a></p>
//               <p className="mt-0.5">All plans come with a 14-day money-back guarantee</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

const PlanPurchaseSlide = () =>{
  return(
    <></>
  )
}

export default PlanPurchaseSlide;