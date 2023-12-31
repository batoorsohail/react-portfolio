import { TypeAnimation } from 'react-type-animation';
import AboutPhoto from "../assets/about-img.jpg"

const Hero = () => {
  return (
    <section className="flex flex-col items-center bg-black dark:bg-white h-[90vh]">
      <div className="mt-16">
        <img src={AboutPhoto} alt="Sohail photo" className="w-[180px] h-[180px] rounded-full" />
      </div>
      <div className="flex flex-col gap-2 p-5">
        <h1 className="text-5xl font-bold  text-white dark:text-black">Sohail Batoor</h1>
        <p className="text-[18px] lg:text-5xl font-bold text-white dark:text-black mb-3">
          <TypeAnimation
            sequence={[
              'I Build sleek web applications',
              1000,
              'I create efficient web applications',
              1000,
              ' I develop  scalable web applications',
              1000,
            ]}
            wrapper="span"
            cursor={true}
            repeat={Infinity}
          />
        </p>
        <p className="almost-gray mb-5">A multi-skilled full-stack developer with hands-on experience in developing and maintaining web apps.</p>
        <button type="button" className="bg-white dark:bg-black text-[18px] text-black dark:text-white rounded-2xl w-1/2 py-4 px-6">Say Hello</button>
      </div>
    </section>
  )
}

export default Hero