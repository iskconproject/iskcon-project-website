import Image from 'next/image';
import TempleTimeStatus from './temple-time-status';

const Hero = () => {
  return (
    <div className='h-[300px] md:h-screen relative md:top-[-75px] pb-16 lg:pb-0 bg-[#9f0c0e]'>
       <Image
          src={'/images/jagannath_deity.jpg'}
          className='object-contain md:object-cover object-top w-full h-full '
          fill={true}
          alt={'lord jagannath vigraha'}
        ></Image>
       
        <div className='bg-gradient-to-b from-transparent to-slate-800 absolute w-full h-full md:w-full bottom-0 px-8 py-4 md:py-0 rounded-md font-light'></div>

        <div className='absolute w-full text-center bottom-0 text-white'>
          <div className='lg:top-0'>
            <h1 className='text-sm sm:text-3xl lg:text-5xl text-white font-thin'>
              Welcome to
            </h1>
            <h1 className='text-sm sm:text-4xl lg:text-5xl xl:text-5xl font-bold text-yellow-400 shadow-lg'>
              Sri Sri Jagannath Mandir
            </h1>
            <span className='sm:text-3xl font-light'>Asansol</span>
          </div>
          <div className='md:mt-4'>
            <TempleTimeStatus />
          </div>
        </div>
      </div>
  );
};

export default Hero;
