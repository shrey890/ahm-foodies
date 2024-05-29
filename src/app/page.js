'use client'
import Image from 'next/image'
const Home = () => {
  return (
    <section className='min-h-screen p-2 sm:p-5'>
      <div className='md:flex justify-center  w-full'>
        <div className="md:w-1/2">
          <Image src='/looking.svg' alt='looking' width={ 550 } height={ 550 } />
        </div>
        <div className="md:w-1/2">
          <h2 className='text-2xl  md:mt-7 md:text-3xl font-semibold'>Looking for more customers for <br /> your business?</h2>
          <p>hello</p>
        </div>
      </div>
    </section>
  )
}
export default Home