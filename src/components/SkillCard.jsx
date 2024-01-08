const SkillCard = ({skill}) => {
  const { title, icon:Icon } = skill;

  return (
    <div className="flex flex-col bg-[#323234] items-center justify-center w-[45%] md:flex-row md:w-[20%] gap-2 p-4 rounded-2xl">
      <p>{Icon && <Icon className="text-white text-3xl md:text-4xl" />}</p>
      <p className="text-white text-base md:text-xl md:font-bold">{title}</p>
    </div>
  )
}

export default SkillCard