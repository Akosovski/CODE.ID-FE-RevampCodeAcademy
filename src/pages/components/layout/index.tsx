/* eslint-disable @next/next/no-sync-scripts */
import React, { ReactNode } from 'react'

interface LayoutProps {
    children: ReactNode
}
export default function Layout(props: LayoutProps) {
    const { children } = props
    return (
        <div>
            <div>
                {children}
            </div>
        </div>
    )
}