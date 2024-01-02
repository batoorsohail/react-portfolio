const SkillCard = ({skill}) => {
  const { title, icon } = skill;

  return (
    <div className="flex flex-col bg-[#323234] items-center justify-center w-[45%] gap-2 p-4 rounded-2xl">
      <p className="text-white text-3xl">{icon}</p>
      <p className="text-white text-base">{title}</p>
    </div>
  )
}

export default SkillCard