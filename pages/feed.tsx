import FeedPreview from '@/components/Feeds/FeedPreview'
import FeedList from '@/components/Feeds/FeedsList'
import { Box, Flex } from '@/components/ui'
import React from 'react'

function feeds() {
    const [data, setData] = React.useState([
        {
            content:
                'Genco Shipping CEO sees positive signs out of China despite shipping rates falling',
            date: '4 Oct 22, 9:00',
            desc: 'A notable consumer pullback is cropping up in ocean shipping, as evidenced by the constantly falling shipping rates across the world. ',
            tags: ['btc,', 'eth,', 'news,', 'ticker'],
            sources: 'Finbold.',
        },
        {
            content:
                'Genco Shipping CEO sees positive signs out of China despite shipping rates falling',
            date: '4 Oct 22, 9:00',
            desc: 'A notable consumer pullback is cropping up in ocean shipping, as evidenced by the constantly falling shipping rates across the world. ',
            tags: ['btc,', 'ethereum,', 'news,', 'ticker'],
            sources: 'Finbold.',
        },
        {
            content:
                'Genco Shipping CEO sees positive signs out of China despite shipping rates falling',
            desc: 'A notable consumer pullback is cropping up in ocean shipping, as evidenced by the constantly falling shipping rates across the world. ',
            date: '4 Oct 22, 9:00',
            tags: ['btc,', 'eth,', 'news,', 'ticker'],
            sources: 'Finbold.',
        },
        {
            content:
                'Genco Shipping CEO sees positive signs out of China despite shipping rates falling',
            desc: 'A notable consumer pullback is cropping up in ocean shipping, as evidenced by the constantly falling shipping rates across the world. ',
            date: '4 Oct 22, 9:00',
            tags: ['btc,', 'eth,', 'news,', 'ticker'],
            sources: 'Finbold.',
        },
        {
            content:
                'Genco Shipping CEO sees positive signs out of China despite shipping rates falling',
            desc: 'A notable consumer pullback is cropping up in ocean shipping, as evidenced by the constantly falling shipping rates across the world. ',
            date: '4 Oct 22, 9:00',
            tags: ['btc,', 'eth,', 'news,', 'ticker'],
            sources: 'Finbold.',
        },
        {
            content:
                'Genco Shipping CEO sees positive signs out of China despite shipping rates falling',
            desc: 'A notable consumer pullback is cropping up in ocean shipping, as evidenced by the constantly falling shipping rates across the world. ',
            date: '4 Oct 22, 9:00',
            tags: ['btc,', 'eth,', 'news,', 'ticker'],
            sources: 'Finbold.',
        },
    ])
    const [selectedItem, setSelectedItem] = React.useState<number>(0)
    return (
        <Box
            className="flex 
    lg:h-[78vh] h-[68vh]
    mt-2 
    scrollbar-hide lg:overflow-hidden overflow-scroll
    justify-center 
    items-start lg:items-center"
        >
            <Flex
                className="flex-col justify-start mx-4 mt-5 mb-12 bg-white border border-black 
  lg:justify-center lg:mx-8 h-fit
 rounded-3xl lg:flex-row
"
            >
                <FeedList
                    selectedItem={selectedItem}
                    setSelectedItem={setSelectedItem}
                    data={data}
                />
                <Box className="hidden lg:block">
                    <FeedPreview
                        setSelectedItem={setSelectedItem}
                        selectedItem={selectedItem}
                        data={data}
                    />
                </Box>
            </Flex>
        </Box>
    )
}

export default feeds
