import React, { ReactNode } from 'react'
import Header from '../header'
import Footer from '../footer'

interface LayoutProps {
    children: ReactNode
}
export default function Layout(props: LayoutProps) {
    const { children } = props
    return (
        <div>
            <Header />
            <div>
                {children}
            </div>
            <Footer />
        </div>
    )
}