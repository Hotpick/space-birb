import classes from "./builds.module.css";

interface Build {
  id: string;
  type?: "gold" | "crystal" | "farm" | "warehouse" | "totem" | "lab";
  // Add other properties as needed
}

const Builds = () => {
  const data: Build[] = [
    {
      id: "1"
    },
    {
      id: "2",
      type: "gold"
    },
    {
      id: "3",
      type: "crystal"
    },
    {
      id: "4",
      type: "farm"
    },
    {
      id: "5",
      type: "warehouse"
    },
    {
      id: "6",
      type: "totem"
    },
    {
      id: "7",
      type: "lab"
    },
    {
      id: "8"
    },
  ]


  return (
    <div className={classes.root}>
      {data.map((item, index) => (
        <div className={classes.build} key={`Build index ${index}`}>
          {!item?.type ?
            <img src="./UI/build.png" alt="buid" className="w-[7vw] max-w-[20px] transform -translate-y-1/2"/>
            : null}
          {item?.type ?
            <img src={`./buildings/${item.type}.png`} alt="buid" className="w-[80%] absolute bottom-0 left-1/2 transform -translate-x-1/2"/>
            : null}
        </div>
      ))}
    </div>
  )
}

export default Builds;
