'use client'
import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'
import x from '@/app/style/app.module.css'
import y from '@/app/style/main.module.css'
import AppTable from '@/components/app.table';
import { useEffect } from 'react'

export default function Home() {

  useEffect(() => {
    const fetchData = async() =>{
      const res = await fetch(" http://localhost:8000/blogs");
      const data = await res.json();
      console.log(data)
    }
    fetchData();
  })
  return (
    <div>
      <li>
        <Link href={"/Youtube"} /*className={y['red']}*/>Youtube</Link>
      </li>
      <li>
        <Link href={"/Facebook"}>Facebook</Link>
      </li>
      <li>
        <Link href={"/Tiktok"}>Tiktok</Link>
      </li>
      <div>
        <AppTable/>
      </div>
    </div>
  )
}
