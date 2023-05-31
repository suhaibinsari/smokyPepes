import Signup from '@/components/Signup'
import { Box, Button, Flex, Text } from '@/components/ui'
import Image from 'next/image'
import React from 'react'
import Graph from '../public/trends/lineGraph.svg'

function Trends() {
    return (
        <Flex
            className="
      flex-col-reverse lg:flex-row 
      justify-start lg:justify-center 
      lg:space-x-8 
      pb-[30px] lg:pb-0
      px-[32px] lg:px-0 
      lg:items-center 
      mt-5 lg:mt-0
      lg:overflow-hidden overflow-scroll
      lg:h-[78vh] h-[68vh]"
            // styles={{ alignItems: "start" }}
        >
            <Flex
                className="flex-col items-center justify-center w-full  
 lg:w-2/4 lg:items-start"
                // styles={{ alignItems: "start" }}
            >
                <Box className="flex flex-col  lg:mb-32 mb-[41px] mt-[59px] lg:mt-0 gap-y-[10px]">
                    <Text
                        text="Coming Soon"
                        className="
            lg:text-4xl 2xl:text-6xl text-[30px] 
            text-center lg:text-start font-extrabold "
                    />
                    <Text
                        text="Get Notified When"
                        className="
            lg:text-4xl 2xl:text-6xl text-[30px] 
            font-extrabold "
                    />
                    <Text
                        text="We Launch"
                        className="
            lg:text-4xl 2xl:text-6xl text-[30px] 
            text-center lg:text-start font-extrabold "
                    />
                </Box>

                {/* <Flex
          className='flex border-2 border-[#1A1B1C] rounded-[10px] w-fit items-center bg-[#FFFFFF]
        shadow-[0px_8px_8px_rgba(0,0,0,0.25)] mb-[90px] md:mb-0
        '
        >
          <input
            type='text'
            placeholder='Enter Your Email'
            onFocus={(e) => (e.target.placeholder = "")}
            onBlur={(e) => (e.target.placeholder = "Enter Your Email")}
            className='outline-0 md:pl-[16px] placeholder:text-[#11101A] md:text-[20px] font-semibold
            text-[12px] pl-2'
          />
          <Button
            className='flex rounded-l-[10px] rounded-r-[5px] bg-[#1A1B1C] text-[#FFFFFF] text-[12px] py-[8px] px-[12px]
            md:py-[12px] md:px-[20px] md:text-[16px]'
          >
            Get Notified
          </Button>
        </Flex> */}
                <Box>
                    <Signup text="Get Notified" />
                </Box>
            </Flex>

            <Flex
                className="flex-col 
      lg:w-2/4 
      justify-center 
      lg:w-[370px] 
      self-center 
      mt-[0px] lg:mt-0"
            >
                <Text
                    text="Exploding Trends"
                    className="lg:text-[40px] text-[30px] font-semibold mb-[20px]"
                />
                <Text
                    text="Get access to growing trends before they explode!"
                    className="sssssmd:text-[26px] text-[18px] text-start font-medium mb-[22px] lg:leading-7"
                />
                <Image src={Graph} alt="graph" />
            </Flex>
        </Flex>
    )
}

export default Trends
