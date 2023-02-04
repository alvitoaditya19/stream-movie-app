import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect } from 'react'
import AOS from 'aos';
import { useRouter } from 'next/router';


export default function Hero() {
  const router = useRouter();

    function submit() { 
        
    }

    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <div className=" flex bg-linear lg:pt-16 pt-5">
            <div className="m-auto text-center">
                <h1 className="font-semibold mt-3 text-white lg:text-4xl text-2xl">
                    Find a lot of amazing <span className='text-primary1'>movies</span>, series,<br /> <span className='text-primary1'>podcast</span>, and <span className='text-primary1'>TV</span> in here
                </h1>
                <h1 className=" md:mt-5 mt-4 lg:text-xl text-sm text-grey1">
                    Bring the magic of the cinema to your home with <br />
                    NontonFilm. Our extensive movie library has something for <br />
                    everyone. Sign up today and start streaming.
                </h1>
                <Link href="/dashboard">
                    <input
                        type="text"
                        className="bg-white focus:outline-none border-0 lg:px-6 px-4 lg:py-3 py-2 mt-8 md:w-1/2 text-sm lg:text-base"
                        placeholder="Your email addres"
                    />
                    <button className="bg-primary1 hover:bg-primary2 transition-all duration-200 focus:outline-none shadow-inner text-white px-4 md:px-6 lg:py-3 py-2 text-sm lg:text-base">
                        Daftar Now
                    </button>
                </Link>
                <div data-aos="zoom-in" className='mt-8 lg:px-0 px-4 lg:pb-20 pb-12'>
                    <Image src="/images/img-hero.png" className="object-contain inline" height={400} width={500} alt='robot' />
                </div>
            </div>
        </div>
    )
}
