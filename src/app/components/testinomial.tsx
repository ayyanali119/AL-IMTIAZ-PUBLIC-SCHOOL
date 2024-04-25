import Image from 'next/image'
import React from 'react'

const Testinomial = () => {
  return (
    <div id='Testinomial'>
    <div>
        <h1 className='text-3xl text-center'>TESTIMONIALS
        
        </h1>
        <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4">
      <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
        <div className="h-full text-center">
          <Image
            alt="testimonial"
            className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
            src={require("../../../public/picture/4.png")}
          />
          <p className="leading-relaxed">
          personalized tutoring sessions really made a difference in my understanding of challenging subjects. I now feel more confident in my academic abilities.
          </p>
          <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4" />
          <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
          EMILY JOHNSON
          </h2>
          <p className="text-gray-500">Happy Parents</p>
        </div>
      </div>
      <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
        <div className="h-full text-center">
          <Image
            alt="testimonial"
            className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
            src={require("../../../public/picture/teacher.png")}
          />
          <p className="leading-relaxed">
        I can`t thank the teachers at this academy enough for their dedication and support. My child's confidence and grades have improved significantly
          </p>
          <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4" />
          <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
            ALPER KAMU
          </h2>
          <p className="text-gray-500">Teacher</p>
        </div>
      </div>
      <div className="lg:w-1/3 lg:mb-0 p-4">
        <div className="h-full text-center">
          <Image
            alt="testimonial"
            className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
            src={require("../../../public/picture/4.png")}
          />
          <p className="leading-relaxed">
          Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki
            taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman
            taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid
            fanny pack vaporware.
          </p>
          <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4" />
          <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
            HENRY LETHAM
          </h2>
          <p className="text-gray-500">High School Student</p>
        </div>
      </div>
    </div>
  </div>
</section>

</div>
    </div>
  )
}

export default Testinomial