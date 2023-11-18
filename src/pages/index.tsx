import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Button } from '@nextui-org/react'
import MainHeader from '@/components/atomic/organisme/Home/MainHeader';
import ProductiveSection from '@/components/atomic/organisme/Home/ProductiveSection';
import VideoCallSection from '@/components/atomic/organisme/Home/VideoCallSection';
import VisualisationSection from '@/components/atomic/organisme/Home/VIsualisationSection';
import TrustedSection from '@/components/atomic/organisme/Home/TrustedSection';
import Visualisation from '@/components/atomic/organisme/Home/Visualisation';
import BeginYourJourney from '@/components/atomic/organisme/Home/BeginYourJourney';
import PartsSection from '@/components/atomic/organisme/Home/PartsSection';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    // <main
    //   className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    // >
    
    // </main>
    <main className="flex min-h-screen flex-col bg-[#DCE1DE] justify-between">
      <MainHeader />
      {/* <div className='py-5 w-full bg-white'/> */}
      <PartsSection />

      {/* <div className='py-5 w-full'/> */}
      <VideoCallSection />   {/* // Exprimez librement */}

      {/* <div className='py-5 w-full'/> */}
      <ProductiveSection />  {/* Gagnez en temps */}

      {/* <div className='py-5 w-full bg-white'/> */}
      <VisualisationSection /> {/* Collaborer plus simplement */}

      {/* <div className='py-5 w-full '/> */}
      <TrustedSection /> 

      {/* <div className='py-5 w-full bg-white'/> */}
      {/* <Visualisation /> */}
      {/* <div className='py-5 w-full'/> */}
      <BeginYourJourney /> {/* Engagement */}

      {/* {/* <div className='py-5 w-full bg-white'/> */}
      {/* <PartsSection /> */}
    </main>
  )
}
