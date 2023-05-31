import React from 'react'
import { Box, Flex, Text } from '../ui'

function PreviewHeader() {
    return (
        <Box className="px-4 mt-1 mb-3 border-b border-black">
            <BorderLines />
            <BorderLines />
            <Flex className="items-center justify-center space-x-4">
                <Box className="w-1/4 ">
                    <BorderLines />
                    <BorderLines />
                    <BorderLines />
                </Box>

                <Text
                    text="DAILY NEWS"
                    className="
          lg:text-[30px] 2xl:text-[35px] text-[26px] 
          font-semibold 
          w-2/4 
          text-center -mt-3"
                />

                <Box className="w-1/4">
                    <BorderLines />
                    <BorderLines />
                    <BorderLines />
                </Box>
            </Flex>
            <BorderLines />
            <BorderLines />
        </Box>
    )
}

export default PreviewHeader

const BorderLines = () => {
    return (
        <Box className="w-full h-[5px] bg-black mb-[12px] lg:mb-[8px] 2xl:mb-[8px]"></Box>
    )
}
