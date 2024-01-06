import { TypeAnimation } from 'react-type-animation';
import Programmer from "../assets/programmer.svg"

const Hero = () => {
  return (
    <section className="flex md:items-center justify-center md:justify-between bg-black dark:bg-white h-[90vh] md:p-28">
      <div className="flex flex-col gap-2 p-5 mt-10 md:mt-0">
        <p className="text-white">Hi there, I am</p>
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
        <div>
          <p className="almost-gray text-base">A multi-skilled full-stack developer with hands-on experience in developing and maintaining web apps.</p>
          <p className="almost-gray text-base mb-5">Currently, I am working as a self employed developer and I am looking for a full time job as a full stack developer.</p>
        </div>
        <button type="button" className="bg-white dark:bg-black text-[18px] text-black dark:text-white rounded-2xl w-40 py-4 px-5">Say Hello</button>
      </div>
      <div className="hidden md:block w-[40%]">
        <img src={Programmer} alt="programmer" />
      </div>
    </section>
  )
}

export default Hero