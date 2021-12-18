import Image from "next/image";
import styles from "./404.module.scss";

const Error404Page = () => {
  return (
    <div className={styles.container}>
      <div className={styles.planetContainer}>
        <Image src="/404.svg" className={styles.planet} layout="fill" alt="404 image" />
      </div>
    </div>
  )
}

export default Error404Page;
