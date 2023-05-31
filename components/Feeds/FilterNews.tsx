import Image from 'next/image'
import React, { useState } from 'react'
import Dropdown from '../../public/dropdown.svg'
import { Box, Button } from '../ui'

function FilterNews() {
    const [isCollapse, setIsCollapse] = useState(false)
    return (
        <Box className="relative mr-4">
            <Button
                onClick={() => setIsCollapse(!isCollapse)}
                className="
        flex 
        text-black
        border-2 border-black 
        relative 
        font-medium rounded-lg 
        lg:text-sm 2xl:text-xl text-[12px] 
        lg:pl-3 2xl:pl-6 pl-2 
        lg:pr-4 2xl:pr-4 pr-2 
        py-1 
        text-center 
        inline-flex 
        items-center 
        drop-shadow-tagShadow"
            >
                Latest News
                <Box
                    className="w-[1px] 
        2xl:h-10 h-5 
        bg-black 
        lg:ml-8 
        lg:mr-4 
        mx-2"
                ></Box>
                <Image
                    src={Dropdown}
                    alt="dropdown"
                    width={22}
                    height={10}
                    className={
                        'relative w-[22px] h-[10px] 2xl:w-[31px] 2xl:h-[21px]'
                    }
                />
            </Button>

            {isCollapse && (
                <Box
                    id="dropdown"
                    className="absolute z-10 bg-white rounded-lg shadow 
  right-0
 divide-y divide-gray-100 w-44 dark:bg-gray-700"
                >
                    <ul
                        className="py-2 text-sm text-gray-700 dark:text-gray-200"
                        aria-labelledby="dropdownDefaultButton"
                    >
                        <li onClick={() => setIsCollapse(!isCollapse)}>
                            <a
                                href="#"
                                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                            >
                                Oldest news
                            </a>
                        </li>
                    </ul>
                </Box>
            )}
        </Box>
    )
}

export default FilterNews
