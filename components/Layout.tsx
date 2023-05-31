import { useRouter } from 'next/router'
import { ReactNode } from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import { Box } from './ui'

export default function Layout({ children }: { children: ReactNode }) {
    const router = useRouter()
    return (
        <Box className="flex flex-col h-full bg-yellow">
            <Navbar />
            <main>{children}</main>
            <Footer />
        </Box>
    )
}
