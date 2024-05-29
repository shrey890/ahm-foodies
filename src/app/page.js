'use client'
import Image from 'next/image'
const Home = () => {
  return (
    <section className='min-h-screen p-10 sm:p-5'>
      <div className='md:flex justify-center items-center  w-full'>
        <div className="md:w-1/2 ">
          <Image src='/looking.svg' alt='looking' width={ 550 } height={ 550 } />
        </div>
        <div className="md:w-1/2">
          <div className="text-center sm:text-start  ">
            <h2 className='text-2xl   md:text-3xl font-semibold'>Looking for more customers for <br /> your business?</h2>
            <p className='mt-10 text-2xl  sm:text-lg tracking-wider '>We showcase your business using our Instagram Reels - solely in <span className='font-extrabold'>Ahmedabad</span>. Our majority audience is from Ahmedabad, and that is a big advantage for your business. So, what are you waiting for? Contact us today!
            </p>
          </div>
        </div>
      </div>
      {/* ! progress */ }
      <div className="flex justify-center sm:hidden">
        <progress className="progress w-full m-5 p-[0.5]  sm:hidden "></progress>
      </div>
      {/* ! part - 2  */ }
      <div className='md:flex justify-center items-center  w-full'>
        <div className="md:w-1/2 ">
          <div className="text-center sm:text-start  ">
            <h2 className='text-2xl   md:text-3xl font-semibold'>We are leaders in our segment.</h2>
            <p className=' text-2xl  sm:text-lg tracking-wider mt-10 '>
              We have a vast audience and a growing community, and that's the way to success for your business
            </p>
          </div>
        </div>
        <div className="md:w-1/2">
          <Image src='/leader.svg' alt='looking' width={ 550 } height={ 550 } />
        </div>
      </div>
      {/* ! part - 3 */ }
      {/* ! progress */ }
      <div className="flex justify-center sm:hidden">
        <progress className="progress w-full m-5 p-[0.5]  sm:hidden "></progress>
      </div>
      <div className='md:flex justify-center items-center  w-full'>
        <div className="md:w-1/2 ">
          <Image src='/location.svg' alt='looking' width={ 550 } height={ 550 } />
        </div>
        <div className="md:w-1/2">
          <div className="text-center sm:text-start  ">
            <h2 className='text-2xl   md:text-3xl font-semibold'>Fastest Service</h2>
            <p className=' text-2xl  sm:text-lg tracking-wider mt-10 '>
              After you confirm the service, we usually take 2 days. We currently only cover the Ahmedabad area.
            </p>
          </div>
        </div>
      </div>
      {/* ! part - 4*/ }
      {/* ! progress */ }
      <div className="flex justify-center sm:hidden">
        <progress className="progress w-full m-5 p-[0.5]  sm:hidden "></progress>
      </div>
      <div className='md:flex justify-center items-center  w-full'>
        <div className="md:w-1/2 ">
          <div className="text-center sm:text-start  ">
            <h2 className='text-2xl   md:text-3xl font-semibold'>Don't think too much.</h2>
            <p className=' text-2xl  sm:text-lg tracking-wider mt-10 '>
              Don't think too much; if you have any questions, just feel free to contact us.
            </p>
          </div>
        </div>
        <div className="md:w-1/2">
          <Image src='/think.svg' alt='looking' width={ 550 } height={ 550 } />
        </div>
      </div>
    </section>
  )
}
export default Home