'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useCallback } from 'react';
import { SlMenu } from 'react-icons/sl';
import { MdOutlineClose } from "react-icons/md";
import { MdOutlineMenu } from "react-icons/md";
import { RiCloseLargeLine } from "react-icons/ri";


import { MdArrowDropDown } from 'react-icons/md';
import HelpCantainer from './help/HelpCantainer';
import NotificationCantainer from './notification/NotificationCantainer';
import PlanPurchaseSlide from './plans/PlanPurchaseSlide';
import { logout } from '@/api/user-services/services/session-management';

const Dropdown = ({ icon, label, children, isOpen, toggle }) => (
  <div className="overflow-hidden my-2 ">
    <button onClick={toggle} className="flex items-center justify-between w-full text-base font-semibold text-primarytext">
      <div className="flex items-center gap-3">
        <Image className="py-3" width={16} height={17} src={icon} alt={label} />
        <p>{label}</p>
      </div>
      <MdArrowDropDown size={20} className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
    </button>
    <div
      className={`overflow-hidden ml-8 space-y-2 text-[14px] font-medium transition-[max-height] duration-500 ease-in-out`}
      style={{ maxHeight: isOpen ? '500px' : '0px' }} // Smooth opening effect
    >
      {children}
    </div>
  </div>
);

const NavLink = ({ href, icon, label, onClick }) => (
  <Link href={href} onClick={onClick} className='flex items-center gap-3 w-full text-base font-semibold'>
    <Image className='py-3' width={16} height={17} src={icon} alt={label} />
    <p className={`${label == 'Dashboard' ? 'text-blue' : 'text-gray-500'}`}>{label}</p>
  </Link>
);

export default function Navbar({ children }) {
  const [colaps, setColaps] = useState(false);
  const [dropdownStates, setDropdownStates] = useState({
    show1: false,
    show2: false,
    show3: false,
    show4: false,
    show5: false,
    show6: false,
    show7: false,
  });

  const toggleDropdown = useCallback((key) => {
    setDropdownStates((prev) => ({ ...prev, [key]: !prev[key] }));
  }, []);

  const toggleColaps = useCallback(() => setColaps((prev) => !prev), []);

  const [helpToggle, setHelpToggle] = useState(false);
  const [notificationToggle, setNotificationToggle] = useState(false);
  const [planPurchaseToggle, setPlanPurchaseToggle] = useState(false);

  return (
    <div className='overflow-x-hidden'>

      <div onClick={() => { setHelpToggle(false); setNotificationToggle(false); setPlanPurchaseToggle(false) }} className={`${helpToggle || notificationToggle || planPurchaseToggle ? 'z-50' : '-z-50'}  fixed  top-0 right-0 left-0 bottom-0`}>
      </div>
      <div className={`${helpToggle ? 'block' : 'hidden'}`}>
        <HelpCantainer state={helpToggle} setState={setHelpToggle} />
      </div>
      <div className={`${notificationToggle ? 'block' : 'hidden'}`}>
        <NotificationCantainer state={notificationToggle} setState={setNotificationToggle} />
      </div>
      <PlanPurchaseSlide isOpen={planPurchaseToggle} onClose={() => setPlanPurchaseToggle(false)} />
      <div className='h-[72px] content-center border-b border-[rgb(224,225,255)]'>
        {/* Topbar */}
        <div className='px-4 flex items-center justify-between'>
          <Link href='/dashboard'>
            <Image width={150} height={44} src='/images/evalogo.png' alt='logo' />
          </Link>
          <div className='hidden xl:block'>
            <div className='flex items-center gap-7'>
              <button className='text-[13px] font-medium text-white rounded-lg bg-[#928ec3] py-2 px-3 ' onClick={() => setPlanPurchaseToggle(!planPurchaseToggle)}>
                 Plan Purchase
              </button>
              <Link href='/upload'><Image width={23} height={23} src={`/images/icon-upload.svg`} alt='' /></Link>
              <Link href='/whatsapp'><Image width={23} height={23} src={`/images/icon-whatsapp.svg`} alt='' /></Link>
              <Link href='/eva'><Image width={23} height={23} src={`/images/icon-askeva.svg`} alt='' /></Link>
              <Link href='/channels_list'><Image width={23} height={23} src={`/images/icon-sync.svg`} alt='' /></Link>
              <Link href='/settings'><Image width={23} height={23} src={`/images/icon-settings.svg`} alt='' /></Link>
              <button onClick={() => setHelpToggle(!helpToggle)}><Image width={23} height={23} src={`/images/icon-help.svg`} alt='' /></button>
              <button onClick={() => setNotificationToggle(!notificationToggle)} ><Image width={23} height={23} src={`/images/icon-notifications.svg`} alt='' /></button>
              <button onClick={logout} ><Image width={23} height={23} src={`/images/icon-logout.svg`} alt='' /></button>
              {/* {[{img:'askeva-header', link:'/'}, {img:'sync', link:'/channels_list'},{img:'settings', link:'/settings'},{img:'help', link:'/'},{img:'notifications', link:'/'},{img:'logout', link:'/'}].map((icon) => ( */}
              {/* ))} */}
            </div>
          </div>
          <div onClick={toggleColaps} className='xl:hidden'>
            <SlMenu className={`${colaps ? 'hidden' : ''} text-gray-600 cursor-pointer`} size={20} />
            <RiCloseLargeLine className={`${colaps ? '' : 'hidden'} text-gray-600 cursor-pointer`} size={20} />
          </div>
        </div>
      </div>
      <div className='flex '>
        {/* Collapsed Menu */}
        <div className={`${colaps ? 'xl:block' : 'hidden'} hidden w-[70px] h-full `}>
          <div className='h-[calc(100vh-72px)] overflow-auto py-8 border-r border-[rgb(224,225,255)] flex flex-col items-center'>
            <div><SlMenu onClick={toggleColaps} className='text-gray-600 cursor-pointer' size={20} /></div>
            <div className='my-5 relative flex items-center justify-center'>
              <div style={{ background: `conic-gradient(#8bc5b1 ${3.6 * 65}deg, #6b6b6b35 10deg)` }} className='flex items-center justify-center w-12 h-12 rounded-full'></div>
              <div className='bg-[#ffffff] absolute w-10 h-10 rounded-full content-center text-center text-xs'>65%</div>
            </div>
            {[
              'dashboard', 'Transactions', 'Product', 'OMS', 'IMS', 'Reconcillation', 'Reports', 'Accounting',
              'Pricing-Automation', 'FeedBakerAmazon', 'Business-Reports', 'Channels', 'Add-Review', 'My-Profile', 'My-Plan'
            ].map((icon) => (
              <Link key={icon} href='/'><Image className='py-3' width={16} height={17} src={`/images/icon-${icon}.svg`} alt={icon} /></Link>
            ))}
          </div>
        </div>

        {/* Full Menu */}
        <div className={`${colaps ? 'fixed right-0 xl:-left-full' : 'fixed xl:relative xl:left-0 -right-full'} w-screen z-50 bg-[#fcfeff] transition-all duration-500 sm:w-[340px]`}>
          <div className='h-[calc(100vh-78px)] overflow-auto pt-8 border-r border-[rgb(224,225,255)] px-5'>
            <SlMenu onClick={toggleColaps} className='text-gray-600 cursor-pointer hidden xl:block' size={20} />
            <div className='sm:hidden block'>
              <div onClick={toggleColaps} className='flex items-center justify-between'>
                {[{ img: 'whatsapp', link: '/' }, { img: 'upload', link: '/' }, { img: 'askeva', link: '/' }, { img: 'sync', link: '/channels_list' }, { img: 'settings', link: '/settings' }, { img: 'help', link: '/' }, { img: 'notifications', link: '/' }, { img: 'logout', link: '/' }].map((icon) => (
                  <Link className='w-fit' key={icon.img} href={icon.link}><Image width={23} height={23} src={`/images/icon-${icon.img}.svg`} alt={icon} /></Link>
                ))}
              </div>
            </div>

            <div className='flex items-center gap-2 my-5'>
              <div className='relative flex items-center justify-center'>
                <div style={{ background: `conic-gradient(#8bc5b1 ${3.6 * 65}deg, #6b6b6b35 10deg)` }} className='flex items-center justify-center w-12 h-12 rounded-full'></div>
                <div className='bg-[#ffffff] absolute w-10 h-10 rounded-full content-center text-center text-xs'>65%</div>
              </div>
              <p className='text-sm font-medium'>Profile looks great!</p>
              <Image width={20} height={21} src='/images/icon-thumb.svg' alt='thumb' />
            </div>

            <NavLink href='/dashboard' icon='/images/icon-dashboard.svg' label='Dashboard' onClick={toggleColaps} />
            <p className='text-[10px] font-bold text-blue'>GENERAL</p>
            <Dropdown icon='/images/icon-Transactions.svg' label='Transactions' isOpen={dropdownStates.show1} toggle={() => toggleDropdown('show1')}>
              <div onClick={toggleColaps}><Link href='/sales'>Orders</Link></div>
              <div onClick={toggleColaps}><Link href='/returns'>Returns</Link></div>
              <div onClick={toggleColaps}><Link href='/settlement'>Settlements</Link></div>
            </Dropdown>
            {/* <Dropdown icon='/images/icon-Product.svg' label='Product' isOpen={dropdownStates.show2} toggle={() => toggleDropdown('show2')}>
              <div><Link href='/product-management'>My Products</Link></div>
              <div><Link href='/'>Marketplace Listings</Link></div>
            </Dropdown> */}
            <hr />
            <p className='text-[10px] font-bold text-blue my-4'>ORDER & INVENTORY MANAGEMENT</p>
            <Dropdown icon='/images/icon-OMS.svg' label='OMS' isOpen={dropdownStates.show3} toggle={() => toggleDropdown('show3')}>
              <div onClick={toggleColaps}><Link href='/manage_order'>Manage orders</Link></div>
              <div onClick={toggleColaps}><Link href='/dispatch_order'>Dispatch order</Link></div>
              <div onClick={toggleColaps}><Link href='/price_tag'>Price Tag</Link></div>
            </Dropdown>
            <Dropdown icon='/images/icon-IMS.svg' label='IMS' isOpen={dropdownStates.show4} toggle={() => toggleDropdown('show4')}>
              <div onClick={toggleColaps}><Link href='/inventory'>Inventory</Link></div>
              <div onClick={toggleColaps}><Link href='/inventory_ledger'>Inventory Ledger</Link></div>
              {/* <div><Link href='/product-management'>Product Management</Link></div> */}
              <div onClick={toggleColaps}><Link href='/purchase'>Purchases</Link></div>
              <div onClick={toggleColaps}><Link href='/supplier'>Vendors </Link></div>
              <div onClick={toggleColaps}><Link href='/sales_management'>Sales</Link></div>
              <div onClick={toggleColaps}><Link href='/customers'>Customers</Link></div>
            </Dropdown>
            <hr />
            <p className='text-[10px] font-bold text-blue my-4'>FINANCE</p>
            <Dropdown icon='/images/icon-Reconcillation.svg' label='Reconcillation' isOpen={dropdownStates.show5} toggle={() => toggleDropdown('show5')}>
              <div onClick={toggleColaps}><Link href='/reconciliation-summary'>Dashboard</Link></div>
              <div onClick={toggleColaps}><Link href='/inventory-reconciliation'>Inventory reconciliation</Link></div>
            </Dropdown>
            {/* <Dropdown icon='/images/icon-Reports.svg' label='Reports' isOpen={dropdownStates.show6} toggle={() => toggleDropdown('show6')}>
              <div><Link href='/'>Product Profitability</Link></div>
              <div><Link href='/order-details'>Order Detail Report</Link></div>
              <div><Link href='/'>Profit & Loss Statement</Link></div>
            </Dropdown> */}
            <Dropdown icon='/images/icon-Accounting.svg' label='Accounting' isOpen={dropdownStates.show7} toggle={() => toggleDropdown('show7')}>
              <div onClick={toggleColaps}><Link href='/tally'>Tally Integration</Link></div>
            </Dropdown>
            <hr />
            <NavLink href='/report_center' icon='/images/icon-Business-Reports.svg' label='Business Reports' onClick={toggleColaps} />
            <NavLink href='/automatic_repricer' icon='/images/icon-Pricing-Automation.svg' label='Pricing Automation' onClick={toggleColaps} />
            <NavLink href='/amazon_feedbaker' icon='/images/icon-FeedBakerAmazon.svg' label='FeedBaker' onClick={toggleColaps} />
            <hr />
            <p className='text-[10px] font-bold text-blue my-4'>OTHER</p>
            <NavLink href='/channels_list' icon='/images/icon-Channels.svg' label='Channels' onClick={toggleColaps} />
            <NavLink href='/' icon='/images/icon-Add-Review.svg' label='Add Reviews' onClick={toggleColaps} />
            <NavLink href='/myprofile' icon='/images/icon-My-Profile.svg' label='My Profile' onClick={toggleColaps} />
            <NavLink href='/ActivePlans' icon='/images/icon-My-Plan.svg' label='My Plan' onClick={toggleColaps} />
          </div>
        </div>

        <div className={`overflow-auto w-full h-[calc(100vh-72px)]`}>
          {children}
        </div>
      </div>
    </div>
  );
}