import { arrayBuffer } from 'node:stream/consumers'
import React, { useState } from 'react'
import { Box, Flex, Text } from '../ui'

interface FeedsDataProps {
    selectedItem?: number
    setSelectedItem: (value: number) => void
    data?: { content: string; date: string; tags: string[]; sources: string }[]
}

function FeedsData({ selectedItem, setSelectedItem, data }: FeedsDataProps) {
    //   const data = {
    //     content: "Genco Shipping CEO sees positive signs out of China despite shipping rates falling",
    //     date: "4 Oct 22, 9:00",
    //     tags: ["btc,", "eth,", "news,", "ticker"],
    //     sources: "Finbold.",
    //   };

    return (
        <Box
            className="
    min-h-[390px] lg:min-h-[310px] 2xl:min-h-[390px] 
    overflow-y-scroll scrollbar-hide"
        >
            {data?.map((feed, idx) => (
                <Flex
                    key={idx}
                    className={`flex-col border-t border-black px-4 pt-3 ${
                        selectedItem && selectedItem - 1 === idx
                            ? 'bg-[#FFE6DE]'
                            : 'bg-white' && idx + 1 === data?.length
                            ? 'rounded-bl-3xl'
                            : 'rounded-bl-0'
                    }`}
                    onClick={() => setSelectedItem(idx + 1)}
                >
                    <Flex styles={{ alignItems: 'flex-start' }}>
                        <Text
                            text={feed.content}
                            className="
              text-xl lg:text-base 2xl:text-xl 
              text-[#11101A] 
              font-extrabold"
                        />
                        {/* {console.log(selectedItem, data.length === idx + 1)} */}
                        <Text
                            text={feed.date}
                            className="
              text-xs lg:text-[10px] 2xl:text-xs 
              text-light 
              whitespace-nowrap"
                        />
                    </Flex>

                    <Flex
                        className="justify-between w-full mt-10 
  lg:mt-5 2xl:mt-10"
                    >
                        <Flex className="space-x-1">
                            <Text
                                text="tags:"
                                className={'text-xs font-light'}
                            />
                            {feed.tags.map((tag) => (
                                <Text
                                    text={tag}
                                    className={'text-xs font-light'}
                                />
                            ))}
                        </Flex>
                        <Text
                            text={`sources: ${feed.sources}`}
                            className={'text-xs font-light'}
                        />
                    </Flex>
                </Flex>
            ))}
        </Box>
    )
}

export default FeedsData
