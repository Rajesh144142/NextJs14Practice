'use client';
import Link from "next/link";
import styles from "./navLink.module.css";
import { usePathname } from "next/navigation";
function navLink({ item }){
  const pathname =usePathname();
  return (
    <Link
      href={item.path}
      className={`${styles.container} ${
        pathname === item.path && styles.active
      }`}
    >
      {item.title}
    </Link>
  );
};

export default navLink;
