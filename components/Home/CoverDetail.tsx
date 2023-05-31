import Image from 'next/image'
import React from 'react'
import Typewriter from 'typewriter-effect'
import Ey from '../../public/enthuasists/ey.svg'
import Goldman from '../../public/enthuasists/goldman.svg'
import Pw from '../../public/enthuasists/pw.svg'
import Signup from '../Signup'
// import baseImg from '@public/enthuasists'

import { Box, Flex, Text } from '../ui'
// import Signup from "./Signup";

function CoverDetail() {
    const texts = ['Technology', 'Start-up', 'AI', 'Web 3', 'SaaS']

    const images = [Ey, , Goldman, Pw]
    return (
        <Box
            className="flex flex-col items-center w-full mt-10 
  lg:w-2/4 lg:items-start"
        >
            <Text
                text="Keep up with the latest"
                className="
        lg:text-3xl 2xl:text-5xl text-[28px] 
        font-semibold"
            />
            <Flex>
                <Typewriter
                    options={{
                        strings: texts,
                        autoStart: true,
                        loop: true,
                        wrapperClassName:
                            'text-[#ED278F] lg:text-3xl 2xl:text-5xl text-[28px] font-semibold',
                        cursorClassName: 'hidden',
                    }}
                />
                <Text
                    text="Trends"
                    className="
          lg:text-3xl 2xl:text-5xl text-[28px] 
          font-semibold
          pl-2"
                />
            </Flex>

            <Flex
                className="
        space-x-1 
        lg:pt-12 
        pt-[23px] lg:pt-5 2xl:pt-[23px] 
        lg:pb-5 2xl:pb-20 pb-[37px] 
        ml-4"
            >
                <Text
                    text="Get your"
                    className="
          lg:text-base 2xl:text-xl text-[12px]"
                />
                <Text
                    text="daily updates"
                    className="font-semibold 
          lg:text-base 2xl:text-xl text-[12px]"
                />
                <Text
                    text="before anyone else"
                    className="
          lg:text-base 2xl:text-xl text-[12px]"
                />
            </Flex>

            {/* <Signup /> */}
            <Signup text="Sign Up" />

            <Box
                className="ml-0 
  lg:ml-12"
            >
                <Text
                    text="Read by tech enthusiasts working at:"
                    className="
          mt-16 lg:mt-8 2xl:mt-16 
          lg:text-base 2xl:text-xl text-[18px] 
          font-medium"
                />

                <Flex className="justify-center lg:space-x-20 space-x-[50px] pt-6">
                    {images.map((img) => (
                        <Image
                            src={img}
                            alt="alt"
                            width={56}
                            height={56}
                            className={'w-[56px] h-[56px]'}
                        />
                    ))}
                </Flex>
            </Box>
        </Box>
    )
}

export default CoverDetail
