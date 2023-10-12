import { Avatar, AvatarGroup, Button } from '@nextui-org/react';
import Image from 'next/image';
import React, { useState } from 'react'

// Import images
import eyeClosedSvg from "../../../../public/images/icons/eye-off.svg";
import eyeSvg from "../../../../public/images/icons/eye.svg";
import googleSvg from "../../../../public/images/icons/google-color.svg";
import logo from "../../../../public/images/logo.png";
import Link from 'next/link';
import { AuthCheck } from '@/utils/auth';

type Props = {}

function Signup({ }: Props) {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [hidePassword, setHidePassword] = useState(true);
  const [rememberMe, setRememberMe] = useState(false);
  const [isSigningUp, setIsSigningUp] = useState(false);

  async function handleLogin() {
    await setIsSigningUp(true);
    console.log(email, password, rememberMe, name);
    // Write request to send data to API
    // Handle Response and Data's from the API 
    // Redirect to the login page

  }


  return (
    <div className="flex w-screen h-[95vh] lg:h-[93vh] bg-white">
      {/* Left side of the login page */}
      <div className="hidden lg:flex relative h-full w-1/2 bg-white">
        <div className=" flex items-center justify-center z-0 relative w-full h-full rounded-r-[40px] bg-[url(/images/backgrounds/login.jpg)] bg-no-repeat bg-cover bg-center">
          <div className="absolute w-full h-full bg-[#33332D]/40 z-0 rounded-r-[40px]" />

          {/* Description text section */}
          <div className='flex flex-col gap-6 z-10 mx-[4.5rem]'>
            <h1 className="font-bold text-3xl text-black"><span className="text-primary text-4xl">E</span>verseed</h1>
            {/* <h1 className="font-ibm-plex-mono text-2xl text-[#5ABB71] font-bold"><span className="text-[#5ABB71] font-light text-base">ever</span>seed</h1> */}


            <p className="text-white text-5xl font-semibold">Start turning your <br /> ideas into reality.</p>

            <p className="text-white text-xl font-medium">Create a free account and get full access to all features for 30 days. No credit card needed. Trusted by over 4,000 professionals.</p>

            <div className='w-full flex gap-3 py-2'>
              <AvatarGroup isBordered={true} >
                <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
                <Avatar src="https://i.pravatar.cc/150?u=a04258a2462d826712d" />
                <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
                <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026302d" />
                <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026702d" />
              </AvatarGroup>

              <div className="flex flex-col font-medium">
                <div className="flex text-white">⭐⭐⭐⭐⭐ 5.0</div>
                <p className="text-white">from 200+ reviews</p>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Rigt side of the login page */}
      <div className="bg-[url(/images/backgrounds/login.jpg)] bg-no-repeat bg-cover bg-center lg:bg-white lg:bg-[url()] w-full relative h-full lg:w-1/2">
        <div className="backdrop-blur-sm relative w-full h-full flex justify-center items-center px-8 lg:px-20 ">
          <div className='bg-white py-4 px-8 lg:px-0 rounded-lg flex flex-col w-full h-auto gap-y-4'>
            {/* Title section */}
            <div className="w-full flex justify-start">
              <div className="w-12 h-12 rounded-lg bg-primary/50" />
              {/* <Image src={logo} alt={'logo'} className="w-24 h-24 " /> */}
            </div>

            <div className="">
              <h1 className="text-2xl font-extrabold">Sign Up</h1>
              <p>Start your 30-day free trial</p>
            </div>

            {/* Inputs section */}
            <form className='flex flex-col gap-y-unit-md'>
              <div className='flex flex-col gap-2'>
                <label className="text-sm font-bold after:content-['*'] after:ml-0.5 after:text-red-500" htmlFor="name">Name</label>
                <input type="text" id='name' name='name' value={name} className='py-2 w-full border-2 rounded-lg px-4 md:text-base focus:ring-2 transition-all ease-in-out focus:outline focus:outline-primary/50 focus:ring-primary' placeholder='Exple: John Doe' onChange={(val) => setName(val.target.value)} />
              </div>
              <div className='flex flex-col gap-2'>
                <label className="text-sm font-bold after:content-['*'] after:ml-0.5 after:text-red-500" htmlFor="email">Email</label>
                <input type="email" id='email' name='email' value={email} className='py-2 w-full border-2 rounded-lg px-4 md:text-base focus:ring-2 transition-all ease-in-out focus:outline focus:outline-primary/50 focus:ring-primary' placeholder='Exple: John Doe@gmail.com' onChange={(val) => setEmail(val.target.value)} />
              </div>
              <div className='flex flex-col gap-1'>
                <label className='text-sm font-bold' htmlFor="password">Password <span className="text-danger">*</span></label>
                <div className='relative w-full'>
                  <input type={hidePassword ? "password" : "text"} id='password' name='password' value={password} className='py-2 w-full border-2 rounded-lg px-4 md:text-base focus:ring-2 transition-all ease-in-out focus:outline focus:outline-primary/50 focus:ring-primary' placeholder='Type here' onChange={(val) => setPassword(val.target.value)} />

                  <span className="hover:cursor-pointer hover:text-primary absolute inset-y-0 right-4 inline-flex items-center" onClick={() => { setHidePassword(!hidePassword) }}>
                    {hidePassword == true ? (<Image src={eyeSvg} className="h-5 w-5 text-secondary" alt="eye-Svg" />) : (
                      <Image src={eyeClosedSvg} className="h-5 w-5 text-secondary" alt="eye-closed-Svg" />
                    )}
                  </span>
                </div>
                <p>Must be at least 8 characters.</p>
              </div>

            </form>

            {/* Signup buttons section */}
            <div>
              <Button className={`bg-primary w-full text-white`} isIconOnly={true} isLoading={isSigningUp} variant="flat" onClick={() => { handleLogin() }} >
                {isSigningUp == false ? "Create an account" : <span className='ml-2 text-white font-bold'>{"Loading"}</span>}
              </Button>
            </div>
            <div className='flex items-center w-full'>
              <div className="h-0.5 bg-tertiary w-1/2" /> <span className="md:text-base font-semibold mx-2">Or</span><div className="h-0.5 bg-tertiary w-1/2" />
            </div>
            <div>
              <Button className="w-full font-bold bg-white border-2 py-4">
                <Image src={googleSvg} className="h-5 w-5 text-secondary" alt="google-svg" />
                Sign Up With google
              </Button>
            </div>

            {/* New here text section */}
            <div className="w-full flex justify-center">
              <p>Already have an account ? <Link href="/auth/login/" className="font-bold md:text-sm text-primary hover:text-primary/80">Login</Link></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup