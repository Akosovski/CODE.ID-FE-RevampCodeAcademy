/* eslint-disable @next/next/no-sync-scripts */
import LandingPage from "./LandingPage";
import AppLayout from "./AppLayout";
import Header from "./Header";

export default function Layout(props:any) {
    const { children } = props
    return (
        <div>
            <Header/>
            <div className="flex flex-row mx-auto w-screen overflow-scroll">
                <div className="sm:px-0">
                    <AppLayout/>
                </div>
                <div className="grow sm:px-0 md:h-full lg:h-screen">
                    {children}
                </div>
            </div>
        </div>
    )
}