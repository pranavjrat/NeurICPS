'use client';
import React from 'react'


const Intro = () => {
  return (
    <div className="bg-[url('/owl.jpg')] bg-cover bg-center min-h-screen">
      <section
        className="mb-56 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
      >

        <div className="flex justify-start items-start h-[30vh]">
          <div className="text-left mr-16">
            <h1 className="mt-48 ms-32 text-4xl font-bold text-white">
              Let&apos;s Forge the Future Together
            </h1>

            {/* Main Role */}
            <h2
              className="ms-32 text-2xl font-light mt-4 text-white"
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
