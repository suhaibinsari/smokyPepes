import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { Box, Flex, Text, Button } from '../ui'

function LatestNews() {
    const router = useRouter()
    const data = {
        content:
            'A bode of confidence for bulls as Bitcoin supply on exchanges hits a 4-year low',
        tags: ['btc,', 'eth,', 'news,', 'ticker'],
        sources: 'Finbold.',
    }

    return (
        <Box
            className="
    lg:w-2/4 w-full 
    mt-[50px] lg:mt-0"
        >
            <p
                className="
        lg:text-xl 2xl:text-3xl text-[20px] 
      font-semibold 
      mb-5 lg:mb-2 2xl:mb-5
      text-center"
            >
                Latest News : {`${new Date().toDateString()}`}
            </p>
            <Flex
                className="flex-col 
  space-y-5 lg:space-y-2 2xl:space-y-5"
            >
                {Array(3)
                    .fill(data)
                    .map((item, index) => (
                        <Box
                            key={index}
                            onClick={() => router.push('/feed')}
                            className="bg-white 
              px-8 lg:px-5 2xl:px-8
              py-4 lg:py-2 2xl:py-2 3xl:py-4
              border 
              border-[3px] 
              border-black 
              rounded-[20px] 
              drop-shadow-newsShadow 
              cursor-pointer"
                        >
                            <Text
                                text={data.content}
                                className={
                                    'lg:text-base 2xl:text-2xl text-[12px] font-semibold mb-12 lg:mb-6 2xl:mb-10 3xl:mb-12'
                                }
                            />

                            <Flex className="justify-between">
                                <Flex className="space-x-1">
                                    <Text
                                        text="tags:"
                                        className="text-[8px] lg:text-sm 2xl:text-base"
                                    />
                                    {data.tags.map((tag) => (
                                        <Text
                                            text={tag}
                                            className={
                                                'lg:text-sm 2xl:text-base text-[8px] font-light'
                                            }
                                        />
                                    ))}
                                </Flex>
                                <Text
                                    text={`sources: ${data.sources}`}
                                    className={
                                        'lg:text-sm 2xl:text-base text-[8px] font-light'
                                    }
                                />
                            </Flex>
                        </Box>
                    ))}

                <Button
                    className="bg-[#5F84FF] md:px-14 px-[22px] md:py-4 py-2 border-[5px] border-black rounded-[20px] 
          drop-shadow-feedShadow font-bold flex items-center justify-center 
          lg:text-lg 2xl:text-2xl text-[12px] cursor-pointer text-white"
                    onClick={() => router.push('/feed')}
                >
                    See Feed
                </Button>
            </Flex>
        </Box>
    )
}

export default LatestNews
