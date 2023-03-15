import React from 'react'
import Jobs from '../componenets/Jobs/Jobs'
import Topbar from '../componenets/Topbar/Topbar'


const Home = () => {
  return (
        <div class="max-w-[90rem] mx-auto px-4 sm:px-6 md:px-8 " >
            <div className="lg:pl-[14rem]  mt-[5.8125rem]">
            <main className="max-w-3xl rounded-lg  mx-auto relative z-20 p-10 xl:max-w-none bg-[#1E293B]">
              <Topbar />
             <Jobs />
            </main>
        </div>
        </div>
  )
}

export default Home