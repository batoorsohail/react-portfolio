import AboutPhoto from '../assets/about-img.jpg';

const About = () => {
  return (
    <section className="bg-black text-white">
      <div className="flex flex-col items-center justify-center pt-8">
        <h2 className="text-white text-2xl font-bold mb-8">About Me</h2>
        <div>
          <img src={AboutPhoto} alt="Sohail's Photo" className="w-56 rounded-xl mb-10" />
        </div>
        <div className="flex gap-2 mb-10">
          <div className="flex flex-col items-center justify-center p-2 bg-[#333333] px-3 py-2 rounded-lg">
            <p className="text-white text-[16px]">Experience</p>
            <p className="almost-gray">1+ year working</p>
          </div>
          <div className="flex flex-col items-center justify-center p-2 bg-[#333333] px-3 py-2 rounded-lg">
            <p className="text-white text-[16px]">Projects</p>
            <p className="almost-gray">25+ completed</p>
          </div>
        </div>
      </div> 
    </section>
  )
}

export default About