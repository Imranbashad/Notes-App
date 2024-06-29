import React from "react";
import styles from "./homepage.module.css";
import image from "../../assets/pocket-notes-svg.png";
import { BiSolidLock } from "react-icons/bi";
function HomePage() {
  return (
    <div className={styles.container}>
      <div>
        <div className={styles.image}>
          <img src={image} alt="" />
        </div>
        <div>Pocket Notes</div>
        <p>
        A minimalist note-capturing app with apps for Windows, Mac, iOS, and Android.
        </p>
      </div>
      <p>
        <BiSolidLock />
        end-to-end encrypted
      </p>
    </div>
  );
}

export default HomePage;
