
export default function FeedBakerButtons() {
  return (
    <div>
        <div className='sm:flex items-center justify-between my-5'>
            <p className='sm:text-4xl text-3xl font-semibold text-[#3a3b4c]'>Amazon feedBAKER</p>
            <div className='sm:flex items-center gap-4'>
            <button className='flex items-center gap-2 text-sm border py-[10px] px-5 rounded-xl hover:border-blue hover:text-blue transition-all duration-300'>
            Watch video
            <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http:/www.w3.org/2000/svg">
               <path d="M7 14.8984C3.1339 14.8984 0 11.7645 0 7.89844C0 4.03234 3.1339 0.898438 7 0.898438C10.8661 0.898438 14 4.03234 14 7.89844C14 11.7645 10.8661 14.8984 7 14.8984ZM7 13.4984C8.48521 13.4984 9.90959 12.9084 10.9598 11.8582C12.01 10.808 12.6 9.38365 12.6 7.89844C12.6 6.41323 12.01 4.98884 10.9598 3.93864C9.90959 2.88844 8.48521 2.29844 7 2.29844C5.51479 2.29844 4.09041 2.88844 3.0402 3.93864C1.99 4.98884 1.4 6.41323 1.4 7.89844C1.4 9.38365 1.99 10.808 3.0402 11.8582C4.09041 12.9084 5.51479 13.4984 7 13.4984ZM6.0354 5.38894L9.4507 7.66534C9.48911 7.6909 9.5206 7.72555 9.54239 7.76622C9.56417 7.80688 9.57557 7.8523 9.57557 7.89844C9.57557 7.94457 9.56417 7.98999 9.54239 8.03066C9.5206 8.07132 9.48911 8.10598 9.4507 8.13154L6.0347 10.4079C5.99258 10.4359 5.94369 10.4519 5.89321 10.4542C5.84273 10.4566 5.79255 10.4453 5.74799 10.4215C5.70342 10.3977 5.66613 10.3622 5.64008 10.3189C5.61403 10.2756 5.60018 10.2261 5.6 10.1755V5.62134C5.60009 5.57069 5.61392 5.52102 5.64001 5.47761C5.6661 5.43421 5.70347 5.39869 5.74815 5.37484C5.79283 5.35099 5.84314 5.33971 5.89372 5.34219C5.94431 5.34467 5.99327 5.36083 6.0354 5.38894Z" fill="#FD4539"></path>
            </svg>
            </button>
            <div className='my-3 sm:my-0 w-fit flex items-center gap-4 bg-[#f3f4fb]  pl-5 rounded-xl text-sm'>
                
                <div className=' font-medium text-gray-600 py-[10px]'>Credits Remaining: <span className='text-black'>2000</span></div>
                <button className='rounded-xl hover:bg-blue hover:text-white border-blue text-blue border transition-all duration-300 px-6 py-[10px]'>Buy Credits</button>
            </div>
            </div>
            </div>
    </div>
  )
}
