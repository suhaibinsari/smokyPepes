import Image from 'next/image'
import React, { use } from 'react'
import Logo from '../public/footer/whiteLogo.svg'
import Linkedin from '../public/footer/linkedin.svg'
import Instagram from '../public/footer/instagram.svg'
import Twitter from '../public/footer/twitter.svg'
import { Box, Flex } from './ui'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'

function Footer() {
    const router = useRouter()
    const path = router.pathname
    const [pages, setPages] = useState(false)

    useEffect(() => {
        if (path === '/' || path === '/develop' || path === '/feed') {
            setPages(true)
        } else {
            setPages(false)
        }
    }, [path])

    return (
        <Flex
            className="
    justify-center lg:justify-between 
    flex-col lg:flex-row 
    bg-black 
    lg:space-x-6 2xl:space-x-32 
    lg:pr-2 2xl:pr-6 
    sticky lg:fixed bottom-0 
    w-full lg:h-[12vh] h-[20vh]"
        >
            <Box className="">
                <Image
                    src={Logo}
                    alt="logo"
                    width={318}
                    height={81}
                    className="max-w-[318px] max-h-[80px]"
                />
            </Box>
            {pages && (
                <Flex className="lg:pr-10 2xl:pr-20 lg:space-x-6 2xl:space-x-16">
                    <Flex className="pb-4 space-x-6 lg:pb-0 ">
                        <Image
                            src={Linkedin}
                            alt="linkedin"
                            width={31}
                            height={31}
                            className="w-[31px] h-[31px] md:w-[48px] md:h-[48px]"
                        />
                        <Image
                            src={Instagram}
                            alt="logo"
                            width={31}
                            height={31}
                            className="w-[31px] h-[31px] lg:w-[48px] lg:h-[48px]"
                        />
                        <Image
                            src={Twitter}
                            alt="logo"
                            width={31}
                            height={31}
                            className="w-[31px] h-[31px] lg:w-[48px] lg:h-[48px]"
                        />
                    </Flex>
                </Flex>
            )}
        </Flex>
    )
}

export default Footer
