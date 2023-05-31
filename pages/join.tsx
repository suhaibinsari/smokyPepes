import Signup from '@/components/Signup'
import Subscribesec from '@/components/Subscribesec'
import { Box, Button, Flex, Image, Text } from '@/components/ui'
import React, { useState } from 'react'
import Bargraph from '../public/join/bargraph.png'
import Logo from '../public/navbar/logo.svg'

function Join() {
    const [img, setImg] = useState([
        {
            src: '/join/ey.svg',
        },
        {
            src: '/join/goldman.svg',
        },
        {
            src: '/join/pwc.svg',
        },
    ])

    return (
        <Box
            className="
      flex flex-col 
      scrollbar-hide lg:overflow-hidden overflow-scroll
      lg:h-[78vh] h-[68vh] 
      justify-between"
        >
            <Flex
                className="
        flex-col 
        lg:flex-row 
        w-full 
        justify-between 
        lg:pl-[178px] 
        lg:pr-[145px]
        px-[20px] lg:px-[40px]"
            >
                <Box className="flex flex-col items-center self-center lg:self-end lg:items-start">
                    <Text
                        text="Keep up with"
                        className="flex 
            lg:text-[24px] 2xl:text-[30px] text-[28px]
            font-bold 
            lg:hidden"
                    />
                    <Text
                        text="Stay up to date with"
                        className="flex 
            lg:text-[24px] 2xl:text-[30px] text-[28px]
            font-bold 
            hidden 
            lg:block"
                    />

                    <Flex className="gap-x-[11px]">
                        <Text
                            text="Tech"
                            className="flex 
              lg:text-[24px] 2xl:text-[30px] text-[28px]
              text-[#ED278F] 
              font-bold 
              lg:hidden"
                        />
                        <Text
                            text="Technology"
                            className="flex 
              lg:text-[24px] 2xl:text-[30px] text-[28px]
              text-[#ED278F] 
              font-bold 
              hidden 
              lg:block"
                        />
                        <Text
                            text="Trends & Secrets"
                            className="flex 
              lg:text-[24px] 2xl:text-[30px] text-[28px]
              font-bold 
              lg:hidden"
                        />
                        <Text
                            text="Trends & Secrets !"
                            className="flex 
              lg:text-[24px] 2xl:text-[30px] text-[28px]
              font-bold 
              hidden 
              lg:block"
                        />
                    </Flex>

                    <Flex className="gap-x-[5px]">
                        <Text
                            text="Free"
                            className="flex 
              lg:text-[12px] 2xl:text-[16px] text-[12px]
              mt-[31px] 
              mb-[30px]"
                        />
                        <Text
                            text="Daily Updates "
                            className="flex 
              lg:text-[12px] 2xl:text-[16px] text-[12px]
              mt-[31px] 
              mb-[30px] 
              font-bold"
                        />
                        <Text
                            text="so you can stay ahead of the curve"
                            className="flex 
              lg:text-[12px] 2xl:text-[16px] text-[12px]
              mt-[31px] 
              mb-[30px]"
                        />
                    </Flex>
                    {/* <Flex className='flex border-2 border-[#1A1B1C] rounded-[10px] w-fit items-center shadow-[0px_8px_8px_rgba(0,0,0,0.25)] hidden md:block'>
            <input
              type='text'
              placeholder='Enter Your Email'
              onFocus={(e) => (e.target.placeholder = "")}
              onBlur={(e) => (e.target.placeholder = "Enter Your Email")}
              className='outline-0 md:pl-[16px] placeholder:text-[#11101A] md:text-[20px] font-semibold
              text-[12px] pl-2'
            />
            <Button
              className='flex rounded-l-[10px] rounded-r-[5px] bg-[#1A1B1C] text-[#FFFFFF] md:py-[12px] md:px-[20px] md:text-[16px]
            text-[12px] py-[8px] px-[12px]'
            >
              Sign Up
            </Button>
          </Flex> */}
                    <Box className="hidden lg:block">
                        <Signup text="Sign Up" />
                    </Box>
                </Box>

                <Box className="flex">
                    <Image
                        src={Bargraph.src}
                        alt="graph"
                        className="lg:w-[250px] lg:h-[200px] 2xl:w-[334px] 2xl:h-[275px]
            w-[140px] h-[140px]"
                    />
                </Box>

                {/* <Flex className='flex border-2 border-[#1A1B1C] rounded-[10px] w-fit items-center shadow-[0px_8px_8px_rgba(0,0,0,0.25)] md:hidden mt-[23px]'>
          <input
            type='text'
            placeholder='Enter Your Email'
            onFocus={(e) => (e.target.placeholder = "")}
            onBlur={(e) => (e.target.placeholder = "Enter Your Email")}
            className='outline-0 md:pl-[16px] placeholder:text-[#11101A] md:text-[20px] font-semibold
              text-[12px] pl-2'
          />
          <Button
            className='flex rounded-l-[10px] rounded-r-[5px] bg-[#1A1B1C] text-[#FFFFFF] md:py-[12px] md:px-[20px] md:text-[16px]
            text-[12px] py-[8px] px-[12px]'
          >
            Sign Up
          </Button>
        </Flex> */}
                <Box
                    className="
          lg:hidden 
          mt-[23px]"
                >
                    <Signup text="Sign Up" />
                </Box>
            </Flex>

            <Box className="flex flex-col items-center mt-[45px] lg:mt-[30px] 2xl:mt-[20px] px-[50px] lg:px-0">
                <Text
                    text="Read by tech enthusiasts, working at the worlds biggest & best companies"
                    className="flex lg:text-[14px] 2xl:text-[20px] text-[18px]font-semibold"
                />
                <Flex className="flex gap-x-[40px] lg:gap-x-[73px] mt-[29px] lg:mt-[20px] 2xl:mt-[20px] mb-[46px] lg:mb-[20px] 2xl:mb-[20px]">
                    {img.map((item, index) => (
                        <Image
                            key={index}
                            src={item.src}
                            alt=""
                            className="w-[56px] h-[56px] lg:w-[36px] lg:h-[36px] 2xl:w-[56px] 2xl:h-[56px]"
                        />
                    ))}
                </Flex>

                <Text
                    text="“Unicorn Juice Daily keeps me informed and ahead of my competition ”"
                    className="flex lg:text-[12px] 2xl:text-[16px] text-[12px] font-extrabold text-center"
                />
                <Text
                    text="-Kaz Raza"
                    className="flex lg:text-[12px] 2xl:text-[16px] text-[12px]"
                />
            </Box>

            <Box className="flex mt-[30px] lg:mt-[10px] 2xl:mt-[10px] bg-blue">
                <Subscribesec color="text-white" />
            </Box>
        </Box>
    )
}

export default Join
