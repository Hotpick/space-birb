"use client";

import classes from './header.module.css';
import Modal from "@/components/Modal";

const Header = () => {

  const popupContent = (
    <div className="content">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, a nostrum.
      Dolorem, repellat quidem ut, minima sint vel eveniet quibusdam voluptates
      delectus doloremque, explicabo tempore dicta adipisci fugit amet dignissimos?
      <br />
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur sit
      commodi beatae optio voluptatum sed eius cumque, delectus saepe repudiandae
      explicabo nemo nam libero ad, doloribus, voluptas rem alias. Vitae?
    </div>
  );

  return (
    <div className={classes.root}>
      <div className={classes.avatar}>
        <img src="./default-avatar.png" alt="menu"/>
      </div>
      <div className={classes.amounts}>
        <span className={classes.amount}>15000</span>
        <span className={classes.amount}>12469</span>
        <span className={classes.amount}>12469</span>
      </div>
      <Modal
        trigger={<button>
          <img src="./UI/menu.png" alt="menu"/>
        </button>}
        title={"SETTINGS"}
      >
        {popupContent}
      </Modal>
    </div>
  );
}

      export default Header;
