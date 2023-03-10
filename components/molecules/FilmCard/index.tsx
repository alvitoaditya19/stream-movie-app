import React from 'react'

export default function FilmCard() {
    return (
        <div className="w-1/2 md:w-1/5 lg:px-3 px-1 lg:mb-0 mb-4">

        <div className="relative group overflow-hidden">
            <img src="/images/film-5.webp"
                className="object-cover rounded-[30px] w-full lg:h-[310px] h-[200px]" alt="" />
            <div
                className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black rounded-bl-[28px] rounded-br-[28px] z-10 translate-y-0 group-hover:translate-y-[300px] transition ease-in-out duration-500 group-hover:bg-transparent overflow-hidden">
                <div className="px-7 pb-7">
                    <div className="font-medium text-xl text-white">Uncharted</div>
                    <p className="mb-0 text-streamGray text-base mt-[10px]">2022</p>
                </div>
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-y-[500px] group-hover:-translate-y-1/2
                                -translate-x-1/2 z-20 transition ease-in-out duration-500">
                <img src="/images/ic_play.svg" className="lg:w-20 w-12" alt="" />
            </div>
            <a href="watching.html" className="inset-0 absolute z-50"></a>
        </div>
        </div>

    )
}
