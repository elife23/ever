import Typography from '@/components/atomic/atoms/Typography'
import React from 'react'

type Props = {}

function About({ }: Props) {
  return (
    <div className="bg-white lg:h-2/3 flex flex-col lg:justify-center lg:items-center h-screen ">
      <div className="bg-light w-full px-[5.5%]  flex py-6 items-center">
        <Typography fontVariation="bold" className="text-gray text-lg">A propos</Typography>
      </div>

      <div className="w-full px-[5.5%] h-[70vh] bg-white lg:bg-[url(/images/backgrounds/aboutBg.png)] lg:bg-no-repeat lg:bg-right lg:bg-[length:53vw_69vh]  flex py-6 ">
        <div className="flex flex-col">
          <Typography fontVariation="bold" className="text-xl lg:text-3xl text-dark">Everseed</Typography>
          <Typography className="mt-2 text-dark bg-yellow-600 dark:text-gray-400 flex-col gap-y-3 leading-loose text-sm lg:max-w-xl">
          Lorem ipsum dolor sit amet consectetur. Arcu iaculis faucibus fermentum feugiat at dui urna ullamcorper. Ullamcorper et dui massa sapien ipsum amet sed mollis. Consequat turpis massa placerat augue non auctor placerat. Iaculis malesuada nibh at eros.
          </Typography>
        </div>
      </div>
    </div>
  )
}

export default About