import React from 'react'
import Image from 'next/image'
const Hero = () => {
  return (
    <div id='hero'>
<div>
        <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      
    <Image
        className="object-cover object-center rounded mx-auto "
        alt="hero"
        
        src={require("../../../picture/student1.png")}
      />



    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
      About Our School
       
      </h1>
      <div className='Line-center w-[100px] h-[2px] bg-purple-950'></div>
      <div className='Line-center w-[100px] h-[2px] bg-purple-950'></div>
      <p className="mb-8 leading-relaxed text-black text-balance">
      At our school, we provide the best qualified teachers and create a nurturing environment to support every student's learning journey. Our goal is to unlock the potential in every student and help them excel academically and personally.
      </p>
      <div className="flex justify-center">
        

      </div>
    </div>
  </div>
</section>
</div>
</div>
  )
}

export default Hero
