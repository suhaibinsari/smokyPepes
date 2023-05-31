import React from 'react'
import { Box, Button } from '../ui'

function Signup() {
    return (
        <Box className="w-96 h-12 pl-[1px] drop-shadow-signupShadow border border-2 border-black rounded-lg relative ml-8">
            <input
                type="text"
                placeholder="Enter Your Email"
                onFocus={(e) => (e.target.placeholder = '')}
                onBlur={(e) => (e.target.placeholder = 'Enter Your Email')}
                className="w-3/4 h-full pl-4 text-black placeholder-black border-r-2 border-white placeholder:pl-auto placeholder:text-xl placeholder:font-semibold outline-0 rounded-md"
            />
            <Button className="absolute right-0 w-1/4 h-full py-2 pl-5 pr-4 text-xl text-white bg-black  rounded-md">
                Signup
            </Button>
        </Box>
    )
}

export default Signup
