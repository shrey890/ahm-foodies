/* eslint no-use-before-define: 0 */
'use client'
import { sections } from '@/constants';
import Image from 'next/image'
const Home = () => {
  return (
    <section className='min-h-screen p-10 sm:p-5'>
      { sections.map((section, index) => (
        <div key={ index }>
          <div className='md:flex justify-center items-center p-5 '>
            { index % 2 === 0 && (
              <div className="md:w-1/2 " >
                <Image src={ section.image } className='imgGsap' alt={ section.alt } width={ 550 } height={ 550 } />
              </div>
            ) }
            <div className="md:w-1/2">
              <div className="text-center sm:text-start">
                <h2 className='text-2xl md:text-3xl font-semibold textGsap'>{ section.title }</h2>
                <p className='mt-10 text-2xl sm:text-lg tracking-wider' dangerouslySetInnerHTML={ { __html: section.text } }></p>
              </div>
            </div>
            { index % 2 !== 0 && (
              <div className="md:w-1/2">
                <Image src={ section.image } className='imgGsap' alt={ section.alt } width={ 550 } height={ 550 } />
              </div>
            ) }
          </div>
          {/* ! progress */ }
          <div className="flex justify-center sm:hidden">
            <progress className="progress w-full m-5 p-[0.5] sm:hidden"></progress>
          </div>
        </div>
      )) }
    </section>
  );
};
export default Home;
