import Image from 'next/image';
import TempleTimeStatus from './temple-time-status';

const Hero = () => {
  return (
    <div className='h-screen relative top-[-75px] pb-16 lg:pb-0 bg-purple-600'>
       <Image
          src={'/images/jagannath_deity.jpg'}
          className='object-cover object-top w-full h-full '
          fill={true}
          alt={'lord jagannath vigraha'}
        ></Image>
      <div className='relative w-full h-full'>
       
        <div className='bg-gradient-to-b from-transparent top-[64px] md:top-0 to-black absolute w-full h-full md:w-full bottom-0 px-8 py-4 md:py-0 rounded-md font-light'></div>

        <div className='absolute w-full lg:w-1/3 -bottom-1/3 lg:-bottom-1/4 left-1/2 transform -translate-x-1/2 -translate-y-2/3 text-white text-center'>
          <div className='relative -top-24 lg:top-0'>
            <h1 className='text-xl lg:text-3xl font-semibold text-white'>
              Welcome to
            </h1>
            <h1 className='text-2xl lg:text-4xl xl:text-5xl font-bold text-yellow-400 shadow-lg'>
              Sri Sri Jagannath Mandir
            </h1>
          </div>
          <div className='mt-8'>
            <TempleTimeStatus />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
