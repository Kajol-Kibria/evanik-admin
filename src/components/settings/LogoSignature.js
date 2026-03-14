import React from 'react'
import TurnoverAction from './TurnoverAction'
import AttachFile from '../common/AttachFile'
import CustomTooltip from '../common/Tooltip'
import Image from '../../../node_modules/next/image'

export default function LogoSignature() {
  return (
    <div className='p-6 shd rounded-lg'>
      <TurnoverAction/>
      <div className='flex gap-1 text-sm pt-4 pb-1'>
        <CustomTooltip txt={'Tooltip text'}><Image src='/images/icon-input-info.svg' alt='' height={15} width={15}/></CustomTooltip>
        Upload Seller Logo
      </div>
      <AttachFile/>
       <div className=' text-sm'>
        <p className='font-semibold text-blue my-5'>A well-displayed logo on your invoices, shipping labels, and terms and conditions reinforces your brand identity and ensures a professional appearance.</p>
        <div>
          <div className='flex items-center gap-3 my-3'>
          <Image src='/images/icon-ai-tips.svg' alt='' height={30} width={30}/>
          <p>Ensure your logo is in PNG or JPEG format for optimal compatibility and quality. Keep your file size below 2MB to ensure quick upload and avoid any performance issues.</p>
          </div>
        </div>
        <div>
          <div className='flex items-center gap-3 my-3'>
          <Image src='/images/icon-ai-tips.svg' alt='' height={30} width={30}/>
          <p>Use a high-resolution image to ensure your logo looks sharp and professional on all devices. If your logo has a transparent background, use a PNG format to maintain the transparency.</p>
          </div>
        </div>
        <div>
          <div className='flex items-center gap-3 my-3'>
          <Image src='/images/icon-ai-tips.svg' alt='' height={30} width={30}/>
          <p>Make sure your logo is centered within the image space to avoid any awkward cropping or alignment issues. Maintain the correct aspect ratio to prevent your logo from appearing stretched or squished.</p>
          </div>
        </div>
      </div>
      <div className='flex gap-1 text-sm pt-4 pb-1'>
        <CustomTooltip txt={'Tooltip text'}><Image src='/images/icon-input-info.svg' alt='' height={15} width={15}/></CustomTooltip>
        Upload Signature
      </div>
      <AttachFile/>
     <div className='flex items-center gap-8'>
      <div className="relative z-0 mb-5 group text-black w-1/2">
                                      <input type="text" className="px-4 focus:border-gray-700 border-gray-700/40 block py-2.5 w-full bg-transparent border-b appearance-none outline-none peer" placeholder=" " required />
                                      <label className="flex gap-2 items-center text-gray-700 peer-focus:font-medium absolute text-[15px]   duration-300 transform -translate-y-6 top-1 -z-10  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-6">
                                      <CustomTooltip txt={'Tooltip text'}><Image src='/images/icon-input-info.svg' alt='' height={15} width={15}/></CustomTooltip>
                                      First Name
                                      </label>
       </div>
      <div className="relative z-0 mb-5 group text-black w-1/2">
                                      <input type="text" className="px-4 focus:border-gray-700 border-gray-700/40 block py-2.5 w-full bg-transparent border-b appearance-none outline-none peer" placeholder=" " required />
                                      <label className="flex gap-2 items-center text-gray-700 peer-focus:font-medium absolute text-[15px]   duration-300 transform -translate-y-6 top-1 -z-10  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-6">
                                      <CustomTooltip txt={'Tooltip text'}><Image src='/images/icon-input-info.svg' alt='' height={15} width={15}/></CustomTooltip>
                                      Last Name
                                      </label>
       </div>
     </div>
     <div className=' text-sm'>
        <p className='font-semibold text-blue my-5'>Uploading your signature ensures that all your invoices, shipping labels, and terms and conditions carry a personalized and professional touch</p>
        <div>
          <div className='flex items-center gap-3 my-3'>
          <Image src='/images/icon-ai-tips.svg' alt='' height={30} width={30}/>
          <p>Use a signature image with dimensions of approximately 300x100 pixels for clear visibility. Ensure your signature is in PNG format to maintain clarity and transparency.</p>
          </div>
        </div>
        <div>
          <div className='flex items-center gap-3 my-3'>
          <Image src='/images/icon-ai-tips.svg' alt='' height={30} width={30}/>
          <p>A high-resolution image with a file size below 1MB ensures your signature appears clear and professional on invoices, shipping labels, and terms and conditions. Ensure your signature is dark enough to be easily readable against white or light backgrounds.</p>
          </div>
        </div>
        <div>
          <div className='flex items-center gap-3 my-3'>
          <Image src='/images/icon-ai-tips.svg' alt='' height={30} width={30}/>
          <p>Make sure your signature is centered within the image space to avoid any awkward cropping or alignment issues. Maintain the correct aspect ratio to prevent your signature from appearing stretched or squished.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
