import React from 'react'
import { Box, Button, Flex, Text } from '@components/ui'
import Logo from '../public/develop/singleIcon.svg'
import Image from 'next/image'
import Hippo from '../public/Feeds/hippo.svg'

function Develop() {
    return (
        <Flex
            className="
      flex-col 
      justify-start lg:justify-center
      mt-[5px] lg:mt-0 2xl:mt-[5px] 
      mb-0 lg:mb-10 
      pb-[30px] lg:pb-0 
      scrollbar-hide
      lg:overflow-hidden overflow-scroll
      px-[34px] lg:px-0 
      lg:h-[78vh] h-[68vh]"
        >
            <Box className="bg-[#ED278F] border-[3px] border-black py-2 px-2 rounded-[20px]">
                <Text
                    text="A unicorn: A privately held start up with a valuation of over $1 billion."
                    className="lg:text-[16px] 2xl:text-[22px] text-[14px] text-[#FFFFFF] text-center font-semibold "
                    // styles={{ textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25);" }}
                />
            </Box>

            <Flex
                className="bg-[#5F84FF] 
        pt-0 lg:pt-8 2xl:pt-8 
        lg:pr-24 
        mt-[14px] 
        border-[3px] 
        border-black 
        rounded-[20px]
      flex-col lg:flex-row px-[38px] lg:px-0"
            >
                <Image
                    src={Logo}
                    alt="logo"
                    width={331}
                    height={334}
                    className="w-[78px] h-[78px] lg:w-[331px] lg:h-[331px]"
                />

                <Flex className="flex-col">
                    <Text
                        text="Want To Develop The Next Unicorn?"
                        className="
            lg:text-[30px] 2xl:text-[38px] text-[16px] 
            text-white 
            mb-10 lg:mb-5 2xl:mb-8 
            font-black 
            drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)]"
                    />
                    <Text
                        text="You're Going To Need:"
                        className="
            lg:text-xl 2xl:text-2xl text-[16px] 
            text-white 
            mb-5 2xl:mb-8 
            text-center 
            font-outline-2 outline-[#000]  
            font-extrabold 
            drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)]"
                        // styles={{ textShadow: "0px 4px 4px rgba(0 , 0, 0, 0.25);" }}
                    />
                    <Text
                        text="A Developer or a CTO to build your MVP or software."
                        className="
            lg:text-xl 2xl:text-2xl text-[16px] 
            text-white 
            lg:mb-2 2xl:mb-4 mb-8
            font-outline-2 outline-[#000] 
            text-center 
            font-extrabold 
            drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)]"
                        // styles={{ textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}
                    />
                    <Text
                        text="If your hiring a developer, we can help you"
                        className="
            lg:text-xl 2xl:text-2xl text-[16px] 
            text-white 
            font-outline-2 outline-[#000] 
            text-center 
            font-extrabold 
            drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)]"
                        // styles={{ textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25);" }}
                    />

                    <Button
                        className="bg-[#F9DB88] 
            w-149 h-49 lg:w-149 lg:h-49
            px-4 lg:px-14
            py-2 lg:py-4
            my-[3.688rem] lg:my-[1.688rem] 2xl:my-[2.688rem] 
            border-[3px] border-black rounded-[10px] 
            drop-shadow-signupShadow 
            font-bold 
          lg:text-[20px] 2xl:text-[40px] text-[20px] 
          font-extrabold 
          cursor-pointer 
          text-[#1A1B1C]"
                    >
                        CHAT TO US
                    </Button>

                    <Flex className="space-x-4 bg-black lg:px-20 px-[21px] lg:pt-8 pt-[60px] rounded-t-[20px]">
                        <Image
                            src={Hippo}
                            alt="hippo"
                            width={75}
                            height={78}
                            className="w-[55px] h-[56px] lg:w-[75px] lg:h-[78px]"
                        />
                        <Text
                            text="Hippo Studios "
                            className="text-white text-[24px]"
                        />
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    )
}

export default Develop
