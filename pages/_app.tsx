import '@/styles/index.scss'
import 'react-toastify/dist/ReactToastify.css'

import { ThemeProvider } from '@material-tailwind/react'
import type { AppProps } from 'next/app'
import { ToastContainer } from 'react-toastify'
import Layout from '@/components/Layout'

export default function App({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider>
            <ToastContainer />
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </ThemeProvider>
    )
}
