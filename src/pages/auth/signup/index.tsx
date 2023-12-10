import { Avatar, AvatarGroup, Button } from '@nextui-org/react';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'

// Import images
import eyeClosedSvg from "../../../../public/images/icons/eye-off.svg";
import eyeSvg from "../../../../public/images/icons/eye.svg";
import googleSvg from "../../../../public/images/icons/google-color.svg";
import logo from "../../../../public/images/logo.png";
import Link from 'next/link';
import { AuthCheck } from '@/utils/auth';
import { createUser, getUserConnectedDatas } from '@/utils/requests';
import axios from 'axios';
import { open_api } from '@/utils/api';
import { useRouter } from 'next/router';
import clientPaths from '@/utils/routes/client_routes';
import importedImages from '@/utils/importedImg';
import Typography from '@/components/atomic/atoms/Typography';

type Props = {}

function Signup({ }: Props) {

  const router = useRouter();

  const [hidePassword, setHidePassword] = useState(true);
  const [isSigningUp, setIsSigningUp] = useState(false);

  const [user, setUser] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    deleted: false,
    is_admin: false,
  });

  const handleChange = async (event: { target: { name: string; value: string; }; }) => {
    const { name, value } = event.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }))
  };

  async function handleSignup() {
    setIsSigningUp(true);
    // router.push(clientPaths.login);
    let response = await createUser(user);

    if (response != null) {
      // On vérifi si le status est 200 on redirige vers le login
      // On vérifi si le status est 400 on redirige 
    } else {
      setIsSigningUp(false);
    }
  }

  useEffect(() => {
    const tmpUser = getUserConnectedDatas();

    if (tmpUser && tmpUser.user != null) {
      router.back();
    }
  }, []);

  return (
    <div className="flex h-[95vh] lg:h-[90vh] items-center relative bg-[url(/images/backgrounds/authBg.png)] bg-no-repeat bg-cover bg-center ">
      <div className="absolute w-full h-full bg-[#000000]/40 z-0" />

      <div className="z-10 flex items-center justify-center w-full h-full lg:py-8">
        {/* Left side of the login page */}
        <div className="hidden rounded-l-xl lg:flex lg:flex-col relative h-full w-1/5 bg-light">
          <div className="lg:relative lg:h-full lg:flex lg:flex-col lg:items-center lg:justify-center">
            <Image src={importedImages.logo2} alt={'logo'} className="w-96 h-96 lg:relative lg:bottom-10 p-0 object-cover" />
            <Typography fontVariation='semibold' className="relative bottom-20 text-gray text-xl">Bienvenue</Typography>
            <Typography fontVariation='medium' className="relative bottom-12 text-center px-4 text-gray text-sm">En continuant, vous acceptez les <Link href={"#"} className='underline'>termes et conditions d’utilisation</Link> </Typography>
          </div>
        </div>

        {/* Rigt side of the login page */}
        <div className="rounded-xl lg:rounded-l-none bg-[url(/images/backgrounds/login.jpg)] bg-no-repeat bg-cover bg-center lg:bg-white lg:bg-[url()] w-full relative h-full lg:w-1/2">
          <div className="relative w-full h-full flex justify-center items-center px-8 lg:px-20 py-4 lg:py-0">
            <div className='bg-white py-4 px-8 lg:px-0 rounded-lg flex flex-col w-full h-auto gap-y-4'>

              <div className="">
                <h1 className="text-lg lg:text-2xl font-extrabold text-gray text-center">Créer un compte</h1>
                {/* <p>Start your 30-day free trial</p> */}
                {/* <p>Commencez vos 30 jours gratuits</p> */}
              </div>

              {/* Inputs section */}
              <form className='flex flex-col gap-y-unit-md'>
                <div className='flex flex-col gap-2 lg:flex-row lg:gap-x-3'>
                  <div>
                    <label className="text-sm font-bold after:content-['*'] after:ml-0.5 after:text-red-500 text-gray" htmlFor="lastname">Nom</label>
                    <input type="text" id='lastname' name='lastname' value={user.lastname} className='py-2 w-full border-1 border-gray  rounded-sm px-4 md:text-base focus:ring-2 transition-all placeholder-gray-four ease-in-out focus:outline focus:outline-gray/50 focus:ring-gray' placeholder='Exple: John Doe' onChange={handleChange} />
                  </div>

                  <div>
                    <label className="text-sm font-bold after:content-['*'] after:ml-0.5 after:text-red-500 text-gray" htmlFor="firstname">Prénom</label>
                    <input type="text" id='firstname' name='firstname' value={user.firstname} className='py-2 w-full placeholder-gray-four border-1 border-gray  rounded-sm px-4 md:text-base focus:ring-2 transition-all ease-in-out focus:outline focus:outline-gray/50 focus:ring-gray' placeholder='Exple: John Doe' onChange={handleChange} />
                  </div>
                </div>
                <div className='flex flex-col gap-2'>
                  <label className="text-sm font-bold after:content-['*'] after:ml-0.5 after:text-red-500 text-gray" htmlFor="email">Email</label>
                  <input type="email" id='email' name='email' value={user.email} className='py-2 w-full border-1 border-gray  rounded-sm px-4 md:text-base focus:ring-2 transition-all placeholder-gray-four ease-in-out focus:outline focus:outline-gray/50 focus:ring-gray' placeholder='Exple: John Doe@gmail.com' onChange={handleChange} />
                </div>
                <div className='flex flex-col gap-1'>
                  <label className='text-sm font-bold text-gray' htmlFor="password">Mot de passe <span className="text-danger">*</span></label>
                  <div className='relative w-full'>
                    <input type={hidePassword ? "password" : "text"} id='password' name='password' value={user.password} className={`py-2 w-full border-1 border-gray  rounded-sm px-4 md:text-base focus:ring-1 transition-all ease-in-out focus:outline placeholder-gray-four  ${(user.password != '' && user.password.length < 8) ? 'border-danger focus:ring-danger focus:outline-red-600/50' : 'focus:ring-gray-secondary focus:outline-gray-secondary/50'}`} placeholder='Écrivez ici' onChange={handleChange} />

                    <span className="hover:cursor-pointer hover:text-gray absolute inset-y-0 right-4 inline-flex items-center" onClick={() => { setHidePassword(!hidePassword) }}>
                      {hidePassword == true ? (<Image src={eyeSvg} className="h-5 w-5 text-secondary" alt="eye-Svg" />) : (
                        <Image src={eyeClosedSvg} className="h-5 w-5 text-secondary" alt="eye-closed-Svg" />
                      )}
                    </span>
                  </div>
                  { (user.password != '' && user.password.length < 8) && <p className={`${(user.password != '' && user.password.length < 8) ? 'text-danger' : 'text-gray'}`} >Doit être au moins 8 caractères.</p>}
                </div>

              </form>

              {/* Signup buttons section */}
              <div>
                <Button className={`bg-gray w-full text-white font-medium rounded-md`} isIconOnly={true} isLoading={isSigningUp} variant="flat" onClick={() => { handleSignup() }} >
                  {isSigningUp == false ? "S'inscrire" : <span className='ml-2 text-white font-bold'>{"Veuillez patienter"}</span>}
                </Button>
              </div>
              <div className='flex items-center w-full'>
                <div className="h-0.5 bg-tertiary w-1/2" /> <span className="md:text-base font-semibold mx-2">Ou</span><div className="h-0.5 bg-tertiary w-1/2" />
              </div>
              <div>
                <Button className="w-full font-bold bg-white border-1 border-gray py-4 rounded-md">
                  <Image src={googleSvg} className="h-5 w-5 text-secondary" alt="google-svg" />
                  Inscription avec google
                </Button>
              </div>

              {/* New here text section */}
              <div className="w-full flex-col flex items-center justify-center">
                <p className="text-xs md:text-sm text-gray">Vous avez déjà un compte ?</p>
                <Link href="/auth/login/" className="text-gray hover:text-gray/80 underline">Connectez vous</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup