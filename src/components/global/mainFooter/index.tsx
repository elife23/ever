import Link from 'next/link'
import React from 'react'
// import logo from '../../../public/images/logo.png';
import Image from 'next/image';
import logo from '../../../../public/images/logo.png';
import SpanAnimatedLine from '@/components/atomic/atoms/SpanAnimatedLine';
import { BiLogoFacebook } from "react-icons/bi";
import { BsFacebook, BsTwitter, BsInstagram, BsDiscord } from "react-icons/bs";

type Props = {}

function MainFooter({ }: Props) {
    return (
        // <footer className="w-full bg-tertiary flex flex-wrap gap-x-4 h-48 px-[1.357rem]" >
        //     <div className='w-1/4 flex-1 h-max flex items-center justify-center gap-0'>
        //         <Image src={logo} alt={'logo'} className="w-48 h-48" />
        //         {/* <p className="font-ibm-plex-mono text-2xl text-[#5ABB71] font-bold"><span className="text-[#5ABB71] font-light text-base">ever</span>seed</p> */}
        //         {/* <p className="font-bold text-xl "><span className="text-[#5ABB71] text-2xl">E</span>verseed</p> */}


        //     </div>
        //     <div className='w-1/4 flex-1 h-full  flex items-center'>
        //         <h1 className='text-xl font-bold'>Contact</h1>
        //         <div>

        //         </div>
        //     </div>
        //     <div className='w-1/4 flex-1 h-full bg-purple-600'></div>
        //     <div className='w-1/4 flex-1 h-full bg-blue-600'></div>
        // </footer>


        <footer className="bg-tertiary flex justify-center items-center dark:bg-gray-900 w-full md:py-8">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0">
                        <Link href="/" className="flex items-center lg:w-max">
                            {/* <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 mr-3" alt="FlowBite Logo" /> */}
                            <Image src={logo} alt={'logo'} className="h-20 w-20" />
                            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"><span className="text-[#5ABB71] text-3xl">E</span>verseed</span>
                        </Link>
                    </div>
                    <div className="flex flex-wrap gap-8 sm:gap-6 sm:grid-cols-3">
                        <div className='flex flex-col gap-y-unit-md md:w-72'>
                            <h2 className="text-sm font-semibold text-secondary uppercase dark:text-white">Resources</h2>
                            <p className='opacity-70 tracking-wide w-3/4 md:w-full '>Want to improve your skills? From video tutorials and step-by-step guides to live one-to-one sessions, Everseed has a learning solution to suit you.</p>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                <li className="pb-2 group relative overflow-x-hidden w-max">
                                    <SpanAnimatedLine />
                                    <Link href="" className="group-hover:text-secondary transition-all duration-500">Video Tutorials</Link>
                                </li>
                                <li className="pb-2 group relative overflow-x-hidden w-max">
                                    <SpanAnimatedLine />
                                    <Link href="" className="group-hover:text-secondary transition-all duration-500">Interactive Tutorials</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="flex flex-col gap-y-unit-md md:w-60">
                            <h2 className="text-sm font-semibold text-secondary uppercase dark:text-white">Contact</h2>
                            <p className='opacity-70 tracking-wide w-3/4 md:w-full '>Whether you need help, have feedback or want to book a personal demo, you can contact us any time!</p>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium gap-y-unit-sm">
                                <li className="pb-2 group relative overflow-x-hidden w-max">
                                    <SpanAnimatedLine />
                                    <Link href="" className="group-hover:text-secondary transition-all duration-500">Book a free personal demo</Link>
                                </li>
                                <li className="pb-2 group relative overflow-x-hidden w-max">
                                    <SpanAnimatedLine />
                                    <Link href="" className="group-hover:text-secondary transition-all duration-500">Leave us a review</Link>
                                </li>

                                <div className="flex  w-full py-1 items-center sm:justify-start gap-x-unit-xs sm:mt-0">
                                    <a href="#" className=" text-gray-500 hover:text-secondary dark:hover:text-white group p-1 ">
                                        <BsFacebook className="text-secondary w-5 h-5 group-hover:-translate-y-1 group-hover:text-primary transition-all duration-300" />
                                        {/* <span className="sr-only">Discord community</span> */}
                                    </a>
                                    <a href="#" className=" text-gray-500 hover:text-secondary dark:hover:text-white group p-1 ">
                                        <BsTwitter className="text-secondary w-5 h-5 group-hover:-translate-y-1 group-hover:text-primary transition-all duration-300" />
                                        {/* <span className="sr-only">Discord community</span> */}
                                    </a>
                                    <a href="#" className=" text-gray-500 hover:text-secondary dark:hover:text-white group p-1 ">
                                        <BsInstagram className="text-secondary w-5 h-5 group-hover:-translate-y-1 group-hover:text-primary transition-all duration-300" />
                                        {/* <span className="sr-only">Discord community</span> */}
                                    </a>
                                    <a href="#" className=" text-gray-500 hover:text-secondary dark:hover:text-white group p-1 ">
                                        <BsDiscord className="text-secondary w-5 h-5 group-hover:-translate-y-1 group-hover:text-primary transition-all duration-300" />
                                        {/* <span className="sr-only">Discord community</span> */}
                                    </a>
                                </div>
                            </ul>
                        </div>
                        <div className='flex flex-col gap-y-unit-md md:w-72'>
                            <h2 className="text-sm font-semibold text-secondary uppercase dark:text-white">Legal</h2>
                            <p className='opacity-70 tracking-wide w-3/4 md:w-full '>Find out about all the legal stuff here, how your diagrams are and will always remain your diagrams, and learn more about our market-leading Security.</p>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                <li className="pb-2 group relative overflow-x-hidden w-max">
                                    <SpanAnimatedLine />
                                    <Link href="#" className="group-hover:text-secondary transition-all duration-500">Privacy Policy</Link>
                                </li>

                                <li className="pb-2 group relative overflow-x-hidden w-max">
                                    <SpanAnimatedLine />
                                    <Link href="#" className="group-hover:text-secondary transition-all duration-500">Terms &amp; Conditions</Link>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
                {/* <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" className="hover:underline">Flowbite™</a>. All Rights Reserved.
                    </span>
                    
                </div> */}
            </div>
        </footer>

    )
}

export default MainFooter