import React from 'react'
import { Box, Button, Flex, Text } from '../ui'
import { FaAngleLeft } from 'react-icons/fa'
interface PreviewContentProps {
    setSelectedItem: (value: number) => void
    selectedItem: number
    data: {
        content: string
        date: string
        tags: string[]
        sources: string
        desc: string
    }[]
}
function PreviewContent({
    setSelectedItem,
    selectedItem,
    data,
}: PreviewContentProps) {
    return (
        <Flex
            className="flex-col justify-between mb-5 
  lg:mb-0"
        >
            <Flex
                onClick={() => setSelectedItem(0)}
                className="
        lg:hidden 
        self-start 
        ml-4 
        bg-[#ED278F] 
        items-center 
        rounded-[20px] 
        px-[12px] 
        py-[6px] 
        mb-[16px]"
            >
                <FaAngleLeft className="w-[20px] h-[20px]" />
                <Button>Back</Button>
            </Flex>
            <Flex
                className="
      lg:justify-center justify-between 
      lg:space-x-36 
      lg:pr-24 
      w-full 
      lg:mb-2 2xl:mb-3 
      px-[50px]"
            >
                <Text
                    text={`Tags: ${data[
                        (selectedItem && selectedItem - 1) || 0
                    ].tags.join(' ')}`}
                    className="
          lg:text-sm 2xl:text-lg text-[12px] 
          text-[#000101] 
          font-light"
                />
                <Text
                    text={`source: ${
                        data[(selectedItem && selectedItem - 1) || 0].sources
                    }`}
                    className="
          text-xs 
          text-[#000101] 
          font-light"
                />
            </Flex>

            <Text
                className="
        lg:text-lg 2xl:text-3xl text-[22px] 
        font-extrabold 
        lg:ml-16 ml-[39px]
        lg:mr-9 mr-[23px]"
                text={`${
                    data[(selectedItem && selectedItem - 1) || 0].content
                }`}
            />
            <Text
                className="
        2xl:text-[22px] text-[16px] 
        lg:ml-16 
        lg:mr-24 
        mx-[43px] 
        lg:mt-2 2xl:mt-2 mt-[29px]"
                text={`${data[(selectedItem && selectedItem - 1) || 0].desc}`}
            />
            <Button
                className="bg-[#FFE6DE] 
        mt-20 lg:mt-3 2xl:mt-3 
        w-149 h-49 
        px-4 
        py-2 
        text-[14px] lg:text-[14px] 2xl:text-lg
        lg:rounded-[10px] rounded-[20px] 
        border-[3px] border-black 
        drop-shadow-feedShadow 
        font-bold  cursor-pointer"
            >
                See Full Story
            </Button>
        </Flex>
    )
}

export default PreviewContent
