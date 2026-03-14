import DownloadApp from "@/components/common/DownloadApp";
import OrderProcessingSubMenu from "@/components/manage_order/OrderProcessingSubMenu";
import ProgressBar from "@/components/manage_order/ProgressBar";


export default function Page() {
      return (
    <div className='sm:pt-7 sm:pl-7 sm:pr-9 xl:pr-14 p-5 '>
      <ProgressBar/>
      <DownloadApp/>
      <OrderProcessingSubMenu/>
    </div>
  )
}
