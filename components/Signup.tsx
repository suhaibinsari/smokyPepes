import { Box, Button, Flex } from './ui'

type Props = { text: string }

function Signup(props: Props) {
    return (
        <Box>
            <Flex className="relative flex items-center">
                <input
                    type="text"
                    placeholder="Enter Your Email"
                    onFocus={(e) => (e.target.placeholder = '')}
                    onBlur={(e) => (e.target.placeholder = 'Enter Your Email')}
                    className="outline-0 lg:pl-[12px] 2xl:pl-[16px] placeholder:text-[#11101A] lg:text-[12px] 2xl:text-[20px] text-[12px] font-semibold pl-2 pr-2 py-2 border-[#1A1B1C] border-2 rounded-md w-[220px]"
                />
                <Button className="flex rounded-md bg-[#1A1B1C] text-white text-[12px] lg:text-[12px] 2xl:text-[16px] py-[10px] 2xl:py-3 px-3 lg:px-[20px] font-semibold absolute -right-2">
                    {props.text}
                </Button>
            </Flex>
        </Box>
    )
}

export default Signup
