'use client';
import React from 'react'


const Intro = () => {
  return (
    <div className="bg-[url('/owl.jpg')] bg-cover bg-center min-h-screen">
      <section
        className="mb-56 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
      >

        <div className="flex justify-start items-start h-[30vh]">
          <div className="mt-56 ms-40 text-left mr-16">
            <h1 className="text-7xl font-bold text-gray-800">
              Beyond Bits
            </h1>
            <h2
              className="text-2xl font-light mt-4 text-black"
            >
              JUIT Solan - IoT and Robotics
            </h2>

            {/* Dynamic Array */}
          </div>
        </div>

      </section>
    </div>


  )
}

export default Intro
