import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link';

export default function Home() {
  return (
      <div>
        <li>
          <Link href={"/Youtube"}>Youtube</Link>
        </li>
        <li>
        <Link href={"/Facebook"}>Facebook</Link>
        </li>
        <li><a href="">Tiktok</a></li>
      </div>
  )
}
