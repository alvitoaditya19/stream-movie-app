import React, { MouseEventHandler } from 'react'

export interface NavbarProps {
    toggleNavbar: MouseEventHandler<HTMLButtonElement>;

}
export default function Navbar({ toggleNavbar }: NavbarProps) {
    return (
        <div className="flex  justify-between items-center">
            <div className="flex items-start gap-3">
                <button
                    className="btn mt-1"
                    onClick={toggleNavbar}
                >
                    <img src="/images/ic-sidebar.svg" alt="" width={50} />
                </button>
                <div className="flex flex-col gap-[10px]">
                    <div className="font-bold text-[32px] text-white">
                        Watch Today
                    </div>
                    <p className="mb-0 text-streamGray text-base">Our selected movies for your mood</p>
                </div>
            </div>
            <div className="items-center gap-[26px] lg:flex hidden">
                <span className="text-white text-base">Welcome, Alvito Aditya</span>
                {/* <!-- user avatar --> */}
                <div className="collapsible-dropdown flex flex-col gap-2 relative">
                    <a href="#!"
                        className="outline outline-2 outline-streamGray p-[6px] rounded-full w-[60px] h-[60px] dropdown-button"
                        data-target="#dropdown-stream">
                        <img src="/images/img-pic.svg" className="rounded-full object-cover w-full h-full overflow-hidden"
                            alt="stream" />
                    </a>
                    <div className="bg-white rounded-2xl text-streamDark font-medium flex flex-col gap-1 absolute z-[999] right-0 top-[80px] min-w-[180px] hidden overflow-hidden"
                        id="dropdown-stream">
                        <a href="#" className="transition-all hover:bg-sky-100 p-4">Watch</a>
                        <a href="#" className="transition-all hover:bg-sky-100 p-4">Settings</a>
                        <a href="#" className="transition-all hover:bg-sky-100 p-4">Sign Out</a>
                    </div>
                </div>
            </div>
        </div>
    )
}   
