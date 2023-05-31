import React from 'react'
import { Box, Flex, Image, Text } from './ui'
import Logoicon from '../public/logoicon.svg'
import Signup from './Signup'

type Props = {
    color?: string
}

const Subscribesec = (props: Props) => {
    return (
        <Flex className="gap-x-[20px] lg:gap-x-[47px] px-2 w-full justify-center lg:pb-[30px] 2xl:pb-[50px] pb-[30px] pt-[17px]">
            <Box>
                <Image
                    src={Logoicon.src}
                    alt="graph"
                    className="lg:w-[190px] lg:h-[120px] 2xl:h-[170px] 2xl:w-[208px]  w-[85px] h-[85px]"
                />
            </Box>
            <Box className="flex flex-col items-center gap-y-[32px] lg:gap-y-[16px] 2xl:gap-y-[32px]">
                <Text
                    text="Subscribe for free"
                    className={`flex lg:text-[20px] lg2xl:text-[30px] text-[16px] font-extrabold ${props.color}`}
                />
                <Signup text="Sign Up" />
            </Box>
        </Flex>
    )
}

export default Subscribesec
