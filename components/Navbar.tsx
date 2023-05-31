import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import Logo from '../public/navbar/logo.svg'
import { Box, Flex, Text } from './ui'
import { GiHamburgerMenu } from 'react-icons/gi'
import { RxCross2 } from 'react-icons/rx'

function Navbar() {
    const [openNavbarMenu, setopenNavbarMenu] = useState(false)
    const router = useRouter()
    const navItems = [
        { key: 'feed', value: 'Feed' },
        { key: 'blog', value: 'Blog' },
        //{ key: "trends", value: "Trends" },
        //{ key: "caseStudies", value: "Case Studies" },
        { key: 'develop', value: 'Develop' },
    ]

    const path = router.pathname
    return (
        <>
            <Flex className="justify-between pr-4 h-[12vh] lg:h-[10vh]">
                <Box
                    onClick={() => router.push('/')}
                    className="cursor-pointer"
                >
                    <Image src={Logo} alt="logo" />
                </Box>

                {path !== '/develop' && (
                    <>
                        <Box className="justify-between hidden  lg:flex lg:space-x-24 2xl:space-x-36">
                            {path !== '/join' && (
                                <Flex className="px-4 lg:space-x-8 2xl:space-x-16">
                                    {navItems.map((item) => (
                                        <Text
                                            text={item.value}
                                            key={item.key}
                                            className={`cursor-pointer font-medium text-lg ${
                                                router.pathname.includes(
                                                    item.key
                                                )
                                                    ? 'text-[#ED278F]'
                                                    : 'text-[#000]'
                                            }`}
                                            onClick={() =>
                                                router.push(`/${item.key}`)
                                            }
                                        />
                                    ))}
                                </Flex>
                            )}
                        </Box>
                        <Box
                            className=" bg-[#ED278F] w-149 h-49 
              px-[1.4rem] 
              py-[0.875rem] 
              border-[3px] 
              border-black 
              rounded-[10px] 
              drop-shadow-priceShadow 
              cursor-pointer 
              hidden lg:flex"
                            onClick={() => router.push('/join')}
                        >
                            <Text
                                text="Join For $0"
                                className="text-lg font-semibold text-white"
                            />
                        </Box>
                        <Box className="lg:hidden">
                            {openNavbarMenu ? (
                                <RxCross2
                                    width={24}
                                    height={24}
                                    className={'w-[30px] h-[20px]'}
                                    onClick={() =>
                                        setopenNavbarMenu(!openNavbarMenu)
                                    }
                                />
                            ) : (
                                <GiHamburgerMenu
                                    width={24}
                                    height={24}
                                    className={'w-[30px] h-[20px]'}
                                    onClick={() =>
                                        setopenNavbarMenu(!openNavbarMenu)
                                    }
                                />
                            )}
                        </Box>
                    </>
                )}
            </Flex>
            {openNavbarMenu && (
                <Box className="pb-8 translate-y-3">
                    {path && (
                        <Flex className="flex-col pr-4 ">
                            {navItems.map((item) => (
                                <Text
                                    text={item.value}
                                    key={item.key}
                                    className={`cursor-pointer font-medium text-lg ${
                                        router.pathname.includes(item.key)
                                            ? 'text-[#ED278F]'
                                            : 'text-[#000]'
                                    }`}
                                    onClick={() => {
                                        router.push(`/${item.key}`)
                                        setopenNavbarMenu(!openNavbarMenu)
                                    }}
                                />
                            ))}
                            <Box
                                className="bg-[#ED278F] px-[1.4rem] py-[0.5rem] border-[3px] border-black rounded-[10px] drop-shadow-priceShadow cursor-pointer"
                                onClick={() => {
                                    router.push('/join')
                                    setopenNavbarMenu(!openNavbarMenu)
                                }}
                            >
                                <Text
                                    text="Join For $0"
                                    className="text-lg font-semibold text-white"
                                />
                            </Box>
                        </Flex>
                    )}
                </Box>
            )}
        </>
    )
}

export default Navbar
