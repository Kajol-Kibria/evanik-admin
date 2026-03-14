import CompanyLogos from "@/components/logincomponents/CompanyLogos";
import SideCarousel from "@/components/logincomponents/SideCarousel";
import RegisterForm from "@/components/register/RegisterForm";

export default function RegisterPage() {
  return (
      <div className='z-[100] absolute top-0 bottom-0 left-0 right-0 w-screen flex justify-center items-center bg-white px-5'>
        <div className='flex sm:h-screen sm:w-screen'>
          <div className='sm:w-1/2 flex flex-col justify-between my-7'>
            <CompanyLogos />
            <RegisterForm />
            <CompanyLogos />
          </div>
          <div className='text-base bg-blue text-white w-1/2 content-center  hidden sm:block'>
            <SideCarousel />
          </div>
        </div>
      </div>
  )
}
