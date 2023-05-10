"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect} from 'react'; 
import {RiVipLine} from 'react-icons/ri';
import {signIn, signOut, useSession, getProviders
} from 'next-auth/react';

const Nav = () => {

    const { data: session} = useSession();

    const [providers,  setProviders] = useState(null);

    const [toggleDropdown, setToggleDropdown] = useState(false);

    useEffect(() => {
        const setUpProviders = async () => {
            const response = await getProviders();
            
            setProviders(response);
        }

        setUpProviders();
    }, [])

  return (
    <nav className='flex-between w-full mb-16
    pt-3'>
        <Link href="/" className='flex gap-2 flex-center'>
            <Image 
                src="/assets/images/logo.png"
                alt='cash Logo'
                width={60}
                height={60}
                className="object-contain"
            />
        </Link>
        { /* Desktop */}
        <div className='sm:flex hidden'>
            {session?.user ? (
                <div className='flex gap-3 md:gap-5'>
                    {/* topup button */}
                    <Link href='/top-up' className='black_btn'>
                        Top-up
                    </Link>
                    <Link
                        href='/history'
                        className='black_btn'
                        
                        >
                            History
                        </Link>
                    {/* cards sell button */}
                    <Link href='/sell-card' className='black_btn'>
                        Sell-cards
                    </Link>
                    {/* Proxys */}
                    <Link href='/proxys' className='black_btn'>
                        Proxys
                    </Link>
                    {/* Verfication-services */}
                    <Link href='/verfication' className='black_btn'>
                        Verfication
                    </Link>

                    {/* singout */}
                    <button type='button' onClick={signOut} className="
                    outline_btn">
                        Sign Out
                    </button>
                    <div className="bg-black flex flex-row items-center uppercase rounded-lg py-2 px-3 text-xs font-bold text-white transition duration-200">
                        <div className="flex h-5 w-5 items-center justify-center">
                            <RiVipLine size={28} />
                        </div>
                        {session?.user.vip}
                    </div>
                    {/* image */}
                    <Link href="/profile">
                        <Image 
                            src={session?.user.image}
                            width={37}
                            height={37}
                            className="rounded-full"
                            alt="profile"
                        />
                    </Link>
                </div>
            ): (
                <>
                {providers && 
                    Object.values(providers).map((provider) => (
                        <button
                        type="button"
                        key={provider.name}
                        onClick={() => signIn(provider.id)}
                        className="black_btn"
                        >
                            Sign In
                            
                        </button>
                    ))
                }
                </>
            )}
        </div>

        {/* Mobile */}
        <div className='sm:hidden flex relative'>
            {session?.user ? (
                
                <div className='flex'>
                    <div className="bg-black flex flex-row items-center uppercase rounded-lg py-2 px-3 text-xs font-bold text-white transition duration-200">
                        <div className="flex h-5 w-5 items-center justify-center">
                            <RiVipLine size={28} />
                        </div>
                        {session?.user.vip}
                    </div>
                    <span className="text-white">||</span>
                <Image 
                src={session?.user.image}
                width={37}
                height={37}
                className="rounded-full"
                alt="profile"
                onClick={() => setToggleDropdown((prev) => !prev)}
                />

                {toggleDropdown && (
                    <div className='dropdown'>
                        <Link 
                        href="/profile"
                        className="dropdown_link"
                        onClick={() => setToggleDropdown(false)}
                        >
                            My Profile
                        </Link>
                        <Link
                        href='/history'
                        className='dropdown_link'
                        onClick={() => setToggleDropdown(false)}
                        >
                            History
                        </Link>
                        <Link 
                        href="/top-up"
                        className="dropdown_link"
                        onClick={() => setToggleDropdown(false)}
                        >
                            Balance : 0 S.P
                        </Link>
                        <Link 
                        href="/sell-card"
                        className="dropdown_link"
                        onClick={() => setToggleDropdown(false)}
                        >
                            Sell Card
                        </Link>
                        <Link 
                        href="/proxys"
                        className="dropdown_link"
                        onClick={() => setToggleDropdown(false)}
                        >
                            Proxys
                        </Link>
                        <Link 
                        href="/verfication"
                        className="dropdown_link"
                        onClick={() => setToggleDropdown(false)}
                        >
                            verfication
                        </Link>
                        <button 
                            type='button'
                            onClick={() => {setToggleDropdown(false);
                                signOut();
                            }}
                            className="mt-5 w-full black_btn"
                        >
                            signOut
                        </button>
                        
                    </div>
                )}
                </div>
            ) : (
                <>
                {providers && 
                    Object.values(providers).map((provider) => (
                        <button
                        type="button"
                        key={provider.name}
                        onClick={() => signIn(provider.id)}
                        className="black_btn"
                        >
                            Sign In
                            
                        </button>
                    ))
                }
                </>
            )}
        </div>
    </nav>
  )
}

export default Nav
