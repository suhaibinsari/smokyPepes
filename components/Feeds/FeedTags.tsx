import React from 'react'
import { Box, Flex, Text } from '../ui'

export default function FeedTags({
    setTags,
    tags,
}: {
    setTags: (value: any) => void
    tags: string[]
}) {
    const removeTags = (idx: number) => {
        const tagetoremove = tags.splice(idx, 1)
        setTags(tags.filter((i) => i !== tagetoremove[0]))
    }
    return (
        <Flex
            className="
      scrollbar-hide 
      space-x-4 
      my-8 lg:my-6 2xl:my-8 
      ml-7 
      max-w-[325px] md:max-w-[600px] lg:max-w-[600px] 
      overflow-x-scroll
      drop-shadow-tagShadow"
        >
            {tags.length > 0 &&
                tags.map((tag, idx) => (
                    <Box
                        key={idx}
                        className="relative border-2 border-black rounded-[10px] px-7 py-2  drop-shadow-tagShadow"
                    >
                        <Text
                            text={tag}
                            className="text-[10px] font-semibold"
                        />
                        <span
                            className="absolute top-0 cursor-pointer right-2"
                            onClick={() => removeTags(idx)}
                        >
                            x
                        </span>
                    </Box>
                ))}
        </Flex>
    )
}
