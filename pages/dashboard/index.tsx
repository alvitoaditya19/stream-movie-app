import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import FeaturedCard from '../../components/molecules/Featured'

import FilmCard from '../../components/molecules/FilmCard'
import Navbar from '../../components/molecules/Navbar'
import Sidebar from '../../components/molecules/Sidebar'

export default function dashboard() {
  const [toggleViewMode, setToggleViewMode] = useState(false);
  const toggleNavbar = () => {
    setToggleViewMode(!toggleViewMode);
  };

  return (
    <div className="bg-streamDark font-poppins">
      {/* <!-- Desktop Only --> */}
      <div className="mx-auto max-w-screen flex">
        <Sidebar toggleViewMode={toggleViewMode}
          toggleNavbar={toggleNavbar} />
        <div className="content ml-[24px] lg: pr-[24px] overflow-hidden">
          <div className="py-[70px] flex flex-col gap-[50px]">
            {/* <!-- Navbar --> */}
            <Navbar toggleNavbar={toggleNavbar} />
            {/* <!-- /Navbar -->

                <!-- Featured --> */}
            <div>
              <div className="font-semibold text-[22px] text-white mb-[18px]">Featured</div>
              <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 xl:gap-12">
                <FeaturedCard />
                <FeaturedCard />

              </div>
            </div>
            <div>
              <div className="font-semibold text-[22px] text-white mb-[18px]">Continue Watching</div>
              <div className="flex flex-wrap justify-start items-center lg:-mx-3 -mx-1 watched-movies">
                <FilmCard />
                <FilmCard />
                <FilmCard />
                <FilmCard />
                <FilmCard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
