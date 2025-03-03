import classes from "./builds.module.css";

const Builds = () => {
  const data = [
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
            <img src="./UI/build.png" alt="buid" className="w-[6vw] transform -translate-y-1/2"/>
            : null}
        </div>
      ))}
    </div>
  )
}

export default Builds;
