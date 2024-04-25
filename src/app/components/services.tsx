import Image from 'next/image'
import React from 'react'

const Services = () => {
  return (
    <div id='services'>
    <div>
      <h1 className='text-3xl text-center'>OUR SERVICES
      
      </h1>
      
     
        <section className="text-gray-800 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4">
      <div className="p-4 md:w-1/3">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <Image
            className="lg:h-48 md:h-36 w-full object-cover object-center"
            src={require("../../../picture/background.png")}
            alt="blog"
          />
          <div className="p-6">
          
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
            Enrichment Activities
            </h1>
            <p className="leading-relaxed mb-3">
            From STEM workshops to arts and music classes, our enrichment activities provide students with a well-rounded learning experience outside the traditional curriculum
            </p>
         
          </div>
        </div>
        <div className='Line-center w-[305px] h-[2px] bg-purple-950'></div>
      </div>
      <div className="p-4 md:w-1/3">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <Image
            className="lg:h-48 md:h-36 w-full object-cover object-center"
            src={require("../../../picture/class2.png")}
            alt="blog"
          />
          <div className="p-6">
          
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
            Test Prep Programs
            </h1>
            <p className="leading-relaxed mb-3">
            We offer comprehensive test preparation programs designed to equip students with the skills and knowledge needed to excel in standardized tests
            </p>
            
          </div>
        </div>
        <div className='Line-center w-[305px] h-[2px] bg-purple-950'></div>
      
      </div>
      <div className="p-4 md:w-1/3">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <Image
            className="lg:h-48 md:h-36 w-full object-cover object-center"
            src={require("../../../picture/teacher.png")}
            alt="blog"
          />
          <div className="p-6">
            
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
            Personalized Tutoring 
            </h1>
            <p className="leading-relaxed mb-3">
            
              Our personalized tutoring sessions are tailored to meet the individual 
              learning needs of each student, ensuring maximum understanding and improvement.
            </p>
            
          </div>
        </div>
      
        <div className='Line-center w-[305px] h-[2px] bg-purple-950'></div>
      </div>
    </div>
  </div>
</section>
</div>
    </div>
  )
}

export default Services