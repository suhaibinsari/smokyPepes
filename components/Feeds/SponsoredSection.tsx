import Image from 'next/image'
import React from 'react'
import { Box, Button, Flex, Text } from '../ui'

function SponsoredSection() {
    return (
        <Box className="lg:mt-4 2xl:mt-4 border-t border-black w-full pt-5 lg:pt-2 2xl:pt-5 pb-5 lg:pb-2 2xl:pb-5 text-xl bg-[#FFF1E4] rounded-br-3xl rounded-bl-3xl lg:rounded-bl-[0px]">
            <Text
                text="Sponsored  Post"
                className="text-xl lg:text-base 2xl:text-xl text-center text-[#ED278F] font-bold"
            />

            <Flex className="justify-around">
                <Flex>
                    <Image
                        src={'/Feeds/hippo.svg'}
                        alt="hippo"
                        width={42}
                        height={42}
                        className="w-[42px] h-[42px] lg:w-[76px] lg:h-[79px]"
                    />
                    <Text
                        text="Hippo Studios"
                        className="lg:text-xl 2xl:text-3xl text-[16px]"
                    />
                </Flex>

                <Flex className="flex-col justify-center space-y-2 ">
                    <Text
                        text="Looking for a Developer or CTO for you SaaS or Software?"
                        className="text-xs w-[180px] font-semibold text-center"
                    />
                    <Button className="bg-[#99B0FB] lg:px-4 px-[30px] py-[2px] border-[3px] border-black rounded-[10px] drop-shadow-feedShadow font-bold text-lg lg:text-base 2xl:text-lg cursor-pointer">
                        Chat to us
                    </Button>
                </Flex>
            </Flex>
        </Box>
    )
}

export default SponsoredSection
