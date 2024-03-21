const SkillCard = ({skill}) => {
  const { title, icon:Icon } = skill;

  return (
    <div className="flex flex-row bg-[#202938] items-center w-[90%] md:w-[30%] lg:w-[25%] gap-2 p-4 rounded-2xl">
      <div className="md:mr-4">
        <p>{Icon && <Icon className="text-coding-color text-3xl md:text-4xl" />}</p>
      </div>
      <div>
        <p className="text-white text-base md:text-xl md:font-bold">{title}</p>
      </div>
    </div>
  )
}

export default SkillCard