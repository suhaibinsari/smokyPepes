import { Box, Button, Flex, Text } from '@/components/ui'
import FilterCaseStudies from '@/components/CaseStudies/FilterCaseStudies'
import Image from 'next/image'
import React from 'react'
import Graph from '../public/trends/lineGraph.svg'
import Signup from '@/components/Signup'

function CaseStudies() {
    return (
        <Flex
            className="
      flex-col-reverse lg:flex-row 
      justify-start lg:justify-center 
      mt-[1%] 
      pb-[30px] lg:pb-[10px] 2xl:pb-[50px] 
      overflow-scroll lg:overflow-hidden
      lg:h-[78vh] h-[68vh]"
        >
            <Flex
                className="flex-col 
        justify-center 
        lg:w-1/2 2xl:w-2/4
        lg:ml-[4%] 
        lg:mb-4 
        px-[20px] lg:px-0"
                styles={{ alignItems: 'baseline' }}
            >
                <Box
                    className="flex flex-col 
        lg:mb-32 mb-[36px]
        self-center lg:self-start
        gap-y-[10px] 
        mt-[22px] lg:mt-0"
                >
                    <Text
                        text="Coming Soon"
                        className="
            lg:text-4xl 2xl:text-6xl text-[30px] 
            text-center lg:text-start 
            font-extrabold "
                    />
                    <Text
                        text="Get Notified When"
                        className="lg:text-4xl 2xl:text-6xl text-[30px] font-extrabold "
                    />
                    <Text
                        text="We Launch"
                        className="lg:text-4xl 2xl:text-6xl text-[30px] 
            text-center lg:text-start font-extrabold"
                    />
                </Box>

                {/* <Box className='w-[450px] h-12 drop-shadow-signupShadow border border-2 border-black rounded-lg relative ml-8'>
          <input
            placeholder='Enter Your Email'
            onFocus={(e) => (e.target.placeholder = "")}
            onBlur={(e) => (e.target.placeholder = "Enter Your Email")}
            className='w-3/4 h-full pl-4 text-black placeholder-black border-r-2 border-white placeholder:pl-auto placeholder:text-xl placeholder:font-semibold outline-0 rounded-md'
          />
          <Button className=' absolute right-0 bg-black h-full text-xl py-2 pl-5 pr-4 w-[35%] rounded-md text-white'>
            Get Notified
          </Button>
        </Box> */}
                <Box className="lg:pl-8">
                    <Signup text="Get Notified" />
                </Box>
            </Flex>

            <Flex
                className="flex-col 
      justify-center 
      lg:mr-[4%] 
      px-[20px]"
            >
                <Text
                    text="Case Studies"
                    className="text-[40px] lg:text-[30px] 2xl:text-[40px] font-semibold mb-2"
                />
                <Text
                    text="We’ll be posting a bunch of cash studies of successful start-ups as well as failures. Accompanied by interviews with their founders. Stay tuned!"
                    className="lg:text-base 2xl:text-xl text-[12px] lg:w-[545px] w-full font-medium self-start"
                />

                <FilterCaseStudies />
            </Flex>
        </Flex>
    )
}

export default CaseStudies
