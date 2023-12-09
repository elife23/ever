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
import CollaborationCallSection from '@/components/atomic/organisme/Home/CollaborationCallSection';
import SessionManSection from '@/components/atomic/organisme/Home/SessionManSection';
import UserSpaceSection from '@/components/atomic/organisme/Home/UserSpaceSection';
import TryAppSection from '@/components/atomic/organisme/Home/TryAppSection';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    // <main
    //   className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    // >
    
    // </main>
    <main className="flex min-h-screen flex-col bg-white justify-between">
      <MainHeader />
      
      <VideoCallSection /> 

      <CollaborationCallSection />
      
      <SessionManSection />

      <UserSpaceSection />

      <TryAppSection />
      
      {/* <VisualisationSection />  */}
      {/* Collaborer plus simplement */}

      
      {/* <TrustedSection />  */}

      
      {/* <Visualisation /> */}
      
      {/* <BeginYourJourney /> */}

      {/* 
      {/* <PartsSection /> */}
    </main>
  )
}
