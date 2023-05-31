import React, { useState } from 'react'
import { Box, Button, Flex } from '../ui'

function Signup({ setTags }: { setTags: (value: any) => void }) {
    const [searchtag, setSearchtag] = useState('')
    return (
        <form
            onSubmit={(e) => {
                e.preventDefault()
                setTags((pre_state: string[]) => [...pre_state, searchtag])
                setSearchtag('')
            }}
        >
            {/* <Box className='md:px-6 px-4 w-[203px]'>
        <Flex
          className='flex border-2 border-[#1A1B1C] rounded-[10px] md:w-fit items-center bg-[#FFFFFF]
        shadow-[0px_8px_8px_rgba(0,0,0,0.25)]
        '
        >
          <input
            placeholder='Search News/ Tags'
            onFocus={(e) => (e.target.placeholder = "")}
            onBlur={(e) => (e.target.placeholder = "Search News/ Tags")}
            onChange={(e) => setSearchtag(e.target.value)}
            value={searchtag}
            className='outline-0 md:pl-[16px] placeholder:text-[#11101A] md:text-[20px] font-semibold
            text-[12px] pl-2 pr-2'
          />
          <Button
            className='flex rounded-l-[10px] rounded-r-[5px] bg-[#1A1B1C] text-[#FFFFFF] text-[12px] py-[8px] px-[12px]
            md:py-[12px] md:px-[20px] md:text-[16px]'
          >
            Search
          </Button>
        </Flex>
      </Box> */}
            <Box
                className="
      lg:w-50 2xl:w-80 
      lg:h-10 2xl:h-12 h-8 
      pl-[1px] 
      drop-shadow-signupShadow 
      border border-2 border-black rounded-lg relative 
      ml-3"
            >
                <input
                    placeholder="Search News/ Tags"
                    onFocus={(e) => (e.target.placeholder = '')}
                    onBlur={(e) => (e.target.placeholder = 'Search News/ Tags')}
                    onChange={(e) => setSearchtag(e.target.value)}
                    value={searchtag}
                    className="
          placeholder-black 
          placeholder:pl-auto 
          2xl:placeholder:text-xl placeholder:text-[12px] 
          placeholder:font-semibold 
          pl-4 
          outline-0 
          text-black 
          h-full 
          lg:w-3/4 
          border-r-2 border-white rounded-md"
                />
                <Button
                    className="
        absolute right-0 
        bg-black 
        h-full 
        text-sm lg:text-[16px] 2xl:text-xl
        lg:py-1 2xl:py-2 
        pl-5 lg:pl-4 2xl:pl-5 
        pr-4 
        lg:w-[35%] 2xl:w-[31%] 
        rounded-md 
        text-white "
                >
                    Search
                </Button>
            </Box>
        </form>
    )
}

export default Signup
