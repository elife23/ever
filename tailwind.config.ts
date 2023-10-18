import type { Config } from 'tailwindcss'
import {nextui} from "@nextui-org/react";

const config: Config = {
  content: [
    // Link from NEXTUI
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    // Natives links
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  safelist: [
    "font-thin",
    "font-extralight",
    "font-light",
    "font-regular",
    "font-medium",
    "font-semibold",
    "font-bold",
    "font-extrabold",
    "font-black",
    "font-ibm-plex-mono",
    "font-monospace",
    "font-mono",
    "text-xs",
    "text-sm",
    "text-md",
    "text-lg",
    "text-xl",
    "text-2xl",
    "text-3xl",
    "text-4xl",
    "tet-5xl",
    "text-6xl",
    "text-7xl",
    "text-8xl",
    "text-9xl",
  ],
  theme: {
    extend: {
    colors: {
        "primary": '#5Abb71',
        "secondary": '#33332D',
        "tertiary": '#E1E1E1',
      },
      fontFamily: {
        'ibm-plex-mono': [
          'IBMPlexMono-Bold',
          'IBMPlexMono-BoldItalic',
          'IBMPlexMono-ExtraLight',
          'IBMPlexMono-ExtraLightItalic',
          'IBMPlexMono-Italic',
          'IBMPlexMono-Light',
          'IBMPlexMono-LightItalic',
          'IBMPlexMono-Medium',
          'IBMPlexMono-MediumItalic',
          'IBMPlexMono-Regular',
          'IBMPlexMono-SemiBold',
          'IBMPlexMono-SemiBoldItalic',
          'IBMPlexMono-Thin',
          'IBMPlexMono-ThinItalic',
        ],
        'monospace': [
          'monospace.bold',
          'monospace.medium',
          'monospace.oblique',
        ],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui(),
    require("daisyui"),
  ],
}
export default config
