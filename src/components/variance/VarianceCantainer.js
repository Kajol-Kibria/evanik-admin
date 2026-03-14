import React from 'react'
import DownloadApp from '../common/DownloadApp'
import Image from '../../../node_modules/next/image'
import VarianceSubMenu from './VarianceSubMenu'
import {
  Dialog,
  DialogContentLarge,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import RateCardDetails from './RateCardDetails'
export default function VarianceCantainer() {
  return (
    <div className='sm:pt-7 sm:pl-7 sm:pr-9 xl:pr-14 p-5 '>
        <DownloadApp/>
        <div className='sm:flex items-center justify-between'>
            <p className='sm:text-4xl text-3xl font-semibold text-[#3a3b4c]'>Variance</p>
            <div className='flex items-center gap-4'>
            <button className='w-9 h-9 flex items-center justify-center border hover:border-blue hover:bg-blue/10 rounded-full transition-all duration-300'>
            <Image src='/images/icon-download.svg' alt='' width={15} height={15}/>
            </button>
            <button className='w-9 h-9 flex items-center justify-center border hover:border-blue hover:bg-blue/10 rounded-full transition-all duration-300'>
            <Image src='/images/icon-upload.svg' alt='' width={15} height={15}/>
            </button>
            <Dialog >
              <DialogTrigger>
              <p className='blueButton my-4 sm:my-0 w-full sm:w-auto'>Update Rate Card</p>
              </DialogTrigger>
              <DialogContentLarge className=' overflow-auto max-h-[90vh]'>
                <DialogHeader>
                  <DialogTitle>
                    <p className='text-blue text-2xl mb-3 text-left'>Update Rate Card</p>
                  </DialogTitle>
                  <RateCardDetails/>
                  <span className='flex items-center justify-end gap-5 mt-8'>
                  <DialogTrigger><div className='buttonBlue w-28'>Cancel</div></DialogTrigger>
                  <DialogTrigger><div className='blueButton'>Save Rate Card</div></DialogTrigger>
                  </span>
                </DialogHeader>
              </DialogContentLarge>
            </Dialog>
            </div>
        </div>
        <VarianceSubMenu/>
    </div>
  )
}
