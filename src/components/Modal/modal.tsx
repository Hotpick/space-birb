import Popup from "reactjs-popup";
import {ReactNode} from "react";
import classes from "./modal.module.css";

const Modal = (
  {trigger, title, children}:
  {trigger: ReactNode, title: ReactNode, children: ReactNode}
) => {
  return (
    <Popup
      trigger={trigger}
      modal
      nested
      contentStyle={{
        width: "calc(100% - 45px)",
        padding: 0,
        border: "none",
        height: "80vh",
        background: "transparent"
    }}
    >
      <div className={classes.root}>
        <div className={classes.header}>
          <span className={classes.title}>
            {title}
          </span>
        </div>
        <div className={classes.content}>
          {children}
        </div>
      </div>
    </Popup>
)
}

export default Modal;
