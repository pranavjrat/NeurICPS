'use client';
import React from 'react'


const Intro = () => {
  return (
    <div className="bg-[url('/owl.jpg')] bg-cover bg-center min-h-screen">
      <section
        className="mb-56 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
      >

        <div className="flex justify-start items-start h-[30vh]">
          <div className="p-16 mt-56 ms-1/3 text-left mr-16">
          <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-600 via-grey-800 to-gray-900">
              Neuromorphic Interdisciplinary Cyber Physical Centre
            </h1>
            <h2
              className="text-2xl font-normal mt-4 text-black"
            >
            A centre of excellence at Jaypee University of Information Technology, Waknaghat
            </h2>

            {/* Dynamic Array */}
          </div>
        </div>

      </section>
    </div>


  )
}

export default Intro
