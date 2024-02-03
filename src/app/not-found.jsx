import Link from 'next/link'
const notfound = () => {
  return (
    <div>
    <h2>Page Not Found</h2>
    <p>Sorry .the page you are looking for does not exist</p>
    <Link href='/'>Return to the HomePage </Link>
    </div>
  )
}

export default notfound