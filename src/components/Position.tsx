const Position = (job: any) => {
  const role = job.job
  return (
    <div className="flex md:flex-row flex-col gap-5 items-start w-full p-4">
      <img src={role.logo} alt="" className="w-20 h-20" />
      <div className="flex w-full flex-col justify-center h-full">
        <p className="font-normal tracking-wide text-gray-500 text-lg">
          {role.company}&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;{role.startYear}/{role.endYear}
        </p>
        <h3 className="text-2xl font-medium py-3">
          {role.title}
        </h3>
        <p className="font-normal leading-relaxed text-gray-500 text-lg">
          {role.description}
        </p>
      </div>
    </div>
  )
}

export default Position