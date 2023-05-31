import React from 'react'
import { Box, Button, Flex, Image, Text } from '../ui'
import FeedsData from './FeedsData'
import FeedTags from './FeedTags'
import FilterNews from './FilterNews'
import SearchFeeds from './SearchFeeds'
import { useState } from 'react'
import FeedPreview from './FeedPreview'
import SponsoredSection from './SponsoredSection'

interface FeedListProps {
    selectedItem?: number
    setSelectedItem: (value: number) => void
    data: {
        content: string
        date: string
        tags: string[]
        sources: string
        desc: string
    }[]
}

function FeedList({ selectedItem, setSelectedItem, data }: FeedListProps) {
    const [tags, setTags] = useState(['BTC', 'ETH', 'News'])
    return (
        <Box className="w-full mt-4 lg:mt-1">
            <Box className="block lg:hidden">
                {selectedItem ? (
                    <FeedPreview
                        setSelectedItem={setSelectedItem}
                        selectedItem={selectedItem}
                        data={data}
                    />
                ) : (
                    <>
                        <Flex className="justify-between">
                            <SearchFeeds setTags={setTags} />
                            <FilterNews />
                        </Flex>
                        <FeedTags tags={tags} setTags={setTags} />
                        <FeedsData
                            setSelectedItem={setSelectedItem}
                            selectedItem={selectedItem}
                            data={data}
                        />
                    </>
                )}
            </Box>

            <Flex className="justify-between hidden lg:flex">
                <SearchFeeds setTags={setTags} />
                <FilterNews />
            </Flex>
            <Box className="hidden lg:block">
                <FeedTags tags={tags} setTags={setTags} />
                <FeedsData
                    setSelectedItem={setSelectedItem}
                    selectedItem={selectedItem}
                    data={data}
                />
            </Box>
            <Box className="block  lg:hidden">
                <SponsoredSection />
            </Box>
        </Box>
    )
}

export default FeedList
