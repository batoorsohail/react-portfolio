import AboutPhoto from "../assets/about-img.jpg"

const Hero = () => {
  return (
    <section className="flex flex-col justify-center items-center">
      <div>
        <h1>Ahmad Sohail Batoor</h1>
        <p>Full Stack Developer</p>
        <p>A multi-skilled full-stack developer with hands-on experience in developing and maintaining web apps.</p>
        <button type="button">Say Hello</button>
      </div>
      <div>
        <img src={AboutPhoto} alt="Sohail photo" className="w-[180px] h-[180px] rounded-full" />
      </div>
    </section>
  )
}

export default Hero