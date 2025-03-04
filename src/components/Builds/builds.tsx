import classes from "./builds.module.css";

interface Build {
  type?: string;
  // Add other properties as needed
}

const Builds = () => {
  const data: Build[] = [
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
  ]


  return (
    <div className={classes.root}>
      {data.map((item, index) => (
        <div className={classes.build} key={`Build index ${index}`}>
          {!item?.type ?
            <img src="./UI/build.png" alt="buid" className="w-[6vw] max-w-[20px] transform -translate-y-1/2"/>
            : null}
        </div>
      ))}
    </div>
  )
}

export default Builds;
