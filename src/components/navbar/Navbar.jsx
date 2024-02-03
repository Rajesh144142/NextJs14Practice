import Link from 'next/link'
import Links from '@/components/navbar/links/links';
import styles from "./navbar.module.css"

const Navbar = () => {
  return (
    <div className={styles.container} >
      <Link href="/" className={styles.logo} >Logo</Link>
      <div>
        <Links/>
      </div>
    </div>
  )
}

export default Navbar