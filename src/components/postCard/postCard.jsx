import styles from "./postCard.module.css";
import Image from "next/image";
import Link from "next/link";
function postCard() {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imgContainer}>
          <Image src="https://images.pexels.com/photos/11509062/pexels-photo-11509062.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" fill className={styles.img} />
        </div>
        <span className={styles.date}>01.02.2024</span>
        </div>
        <div className={styles.bottom}>
          <h1 className={styles.title}>Title</h1>
          <p className={styles.desc}>Desc</p>
          <Link className={styles.link} href="/blog/post">READ MORE</Link>
        </div>
      </div>
  );
}
export default postCard;
