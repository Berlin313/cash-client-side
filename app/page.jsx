import Image from 'next/image';
import BoxServices from '@components/BoxServices';

const Home = () => {
  return (
    <section className="w-full flex-center
    flex-col">
        <div className='text-center'>
          <Image 
                src="/assets/images/logo.png"
                alt='cash Logo'
                width={130}
                height={100}
                className="object-contain text-center"
            />
        </div>
        <h1 className="head_text text-center">
            <span className="sky_gradient text-center">
            The major card delar
            </span>
        </h1>
        <p className="desc text-center">
          cash syria is the best card deller and one of the best proxy provider
          and have amazing and fast `sms - phone` verficayion system
        </p>

        {/* services */}
        <BoxServices />
    </section>
  )
}

export default Home