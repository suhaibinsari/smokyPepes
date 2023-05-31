import { Box, Button, Flex, Text } from '@/components/ui'
import Image from 'next/image'
import { useState } from 'react'
import Dropdown from '../../public/dropdown.svg'
import RightArrow from '../../public/caseStudies/rightArrow.svg'

function FilterCaseStudies() {
    const data = [
        'How I bootstrapped my AI Start up to $20k MRR ',
        'How I raised $1.5m in Seed funding ',
        'How we raised $29m then blew it all on Drugs & Hookers',
    ]
    return (
        <Flex
            className="justify-center 
      lg:space-x-8 
      mt-4 bg-[#FFEBE5] 
      px-5 rounded-[20px] 
      border-[5px] 
      border-black 
      flex-col lg:flex-row"
            styles={{ alignItems: 'start' }}
        >
            <Flex
                className="flex-wrap justify-center mt-8 
  lg:flex-col lg:space-y-2 2xl:space-y-2 3xl:space-y-4
 gap-4 lg:gap-0"
            >
                <Button
                    className="hidden 
        lg:block 
        bg-white 
        lg:text-[18px] 2xl:text-[22px] text-[22px] 
        w-full px-4 
        py-[2px] 
        border-[3px] border-black rounded-[10px] 
        drop-shadow-feedShadow 
        font-black cursor-pointer mb-4"
                >
                    Filter By
                </Button>
                <FilterSection title="All Case Studies" />
                <FilterSection title="Revenue" />
                <FilterSection title="Funding" />
                <FilterSection title="Location" />
            </Flex>

            <Flex
                className="flex-col self-center pt-8 
  lg:space-x-12 lg:border-l lg:border-black lg:pt-4 2xl:pt-8 lg:pb-0 2xl:pb-5 3xl:pb-10
"
            >
                <Button
                    className="flex bg-[#99B0FB] 
          px-4 
          py-[2px] 
          border-[3px] border-black rounded-[10px] 
          text-[10px] lg:text-[18px] 2xl:text-[22px] text-lg 
          drop-shadow-feedShadow font-bold cursor-pointer 
          mb-6 lg:mb-4"
                >
                    All Case Studies
                </Button>

                {data.map((item, idx) => {
                    return (
                        <Box
                            className="border-[5px] border-black bg-white 
            pl-4 
            pt-3 lg:pt-1 2xl:pt-3
            pb-5 lg:pb-2 2xl:pb-2 3xl:pb-5
            relative rounded-[10px] 
            lg:w-[330px] max-w-[281px] 
            mb-5 lg:mb-2 2xl:mb-3"
                        >
                            <Text
                                text={item}
                                className="lg:text-xs 2xl:text-sm text-[14px] font-bold 
                mb-2 lg:mb-4 2xl:mb-2
                pl-2 lg:pl-1 2xl:pl-2"
                            />
                            <Image
                                src={RightArrow}
                                alt="arrow"
                                width={19}
                                height={17}
                                className="absolute bottom-1 right-2"
                            />
                        </Box>
                    )
                })}
            </Flex>
        </Flex>
    )
}

export default FilterCaseStudies

function FilterSection({ title }: { title: string }) {
    const [isCollapse, setIsCollapse] = useState(false)
    return (
        <Button
            onClick={() => setIsCollapse(!isCollapse)}
            className="bg-white 
      lg:w-[180px] 2xl:w-[219px] w-[125px] 
      flex 
      text-black 
      relative 
      font-medium 
      rounded-[10px] 
      text-xl lg:text-base 2xl:text-xl
      font-semibold 
      pr-1 
      py-1 
      text-center 
      inline-flex 
      items-center
      drop-shadow-tagShadow 
      border-[3px] border-black"
        >
            <Text
                text={title}
                className="3/4 w-full 
        lg:text-[15px] 2xl:text-[20px] text-[10px] 
        whitespace-nowrap"
            />
            <Flex className="justify-between w-1/4">
                <Box
                    className="w-[1px] 
        h-5 lg:h-5 2xl:h-10
        bg-black 
        mr-1 lg:mr-1"
                ></Box>
                <Image
                    src={Dropdown}
                    alt="dropdown"
                    width={31}
                    height={21}
                    className="w-[10px] h-[7px] lg:w-[21px] lg:h-[11px] 2xl:w-[31px] 2xl:h-[21px]"
                />
            </Flex>
        </Button>
    )
}
