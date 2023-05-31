import Image from 'next/image'
import React from 'react'
import { Box, Button, Flex, Text } from '../ui'
import PreviewContent from './PreviewContent'
import PreviewHeader from './PreviewHeader'
import SponsoredSection from './SponsoredSection'

interface FeedPreviewProps {
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
function FeedPreview({
    setSelectedItem,
    selectedItem,
    data,
}: FeedPreviewProps) {
    return (
        <Box className="w-full border-black lg:border-l">
            <PreviewHeader />
            <PreviewContent
                setSelectedItem={setSelectedItem}
                selectedItem={selectedItem}
                data={data}
            />
            <Box className="hidden  lg:block">
                <SponsoredSection />
            </Box>
        </Box>
    )
}

export default FeedPreview
