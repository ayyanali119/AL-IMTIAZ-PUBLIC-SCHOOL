import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
const Navbar = () => {
  return (
    <div>
        <header className="text-gray-600 body-font">
  <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
     <Image src={require("../../picture/Capture.png")} 
     alt="AL-IMTIAZ PUBLIC SCHOOL" 
     width={100} 
     height={100} 
     className='w-[100px]'
     />



      <span className="ml-3 text-xl text-black">AL-IMTIAZ PUBLIC SCHOOL</span>
    </a>
    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
      <Link href={"/"} className="mr-5 hover:text-purple-950" >Home</Link>
      <Link href={"#hero"} className="mr-5 hover:text-purple-950" >About</Link>
      <Link href={"#statistic"} className="mr-5 hover:text-purple-950" >Statistics</Link>
      <Link href={"#services"} className="mr-5 hover:text-purple-950" >Services</Link>
      <Link href={"#Testinomial"} className="mr-5 hover:text-purple-950" >Testiomials</Link>
      <Link href={"#Contact"} className="mr-5 hover:text-purple-950" >Contact</Link>
    </nav>
   
  </div>
</header>
    </div>
  )
}

export default Navbar