import React from 'react'
import { Flex } from '../ui'
import CoverDetail from './CoverDetail'
import LatestNews from './LatestNews'

function CoverSection() {
    return (
        <Flex
            className="
      pt-[1.49rem] 
      pb-[30px] lg:pb-[20px] 
      justify-start lg:justify-center 
      items-center
      flex-col lg:flex-row 2xl:overflow-hidden 
      lg:overflow-hidden overflow-scroll"
            // styles={{ alignItems: "flex-start" }}
        >
            <CoverDetail />
            <LatestNews />
        </Flex>
    )
}

export default CoverSection
