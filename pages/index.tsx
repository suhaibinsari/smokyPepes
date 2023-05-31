import { Box } from '@/components/ui'
import CoverSection from '@components/Home/CoverSection'
import Head from 'next/head'

const Home = () => {
    return (
        <main>
            <Head>
                <title>Unicorn juice</title>
                <meta name="theme-color" content="#000000" />
                <meta property="og:title" content="Unicorn juice" />
                <meta name="description" content="Unicorn juice" />
                <meta name="og:description" content="Unicorn juice" />
                {/* <meta property="og:image" content={`${imageUrl.src}`} /> */}
            </Head>

            <Box className="h-full lg:px-24 px-[20px]">
                <CoverSection />
            </Box>
        </main>
    )
}

export default Home
