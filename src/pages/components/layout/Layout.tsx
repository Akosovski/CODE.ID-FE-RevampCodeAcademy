import LandingPage from "./LandingPage";
import AppLayout from "./AppLayout";
import Header from "./Header";

export default function Layout(props:any) {
    const { children } = props
    return (
        <div>
            <Header/>
            <div className="flex flex-row mx-auto w-screen">
                <div className="sm:px-0">
                    <AppLayout/>
                </div>
                <div className="grow sm:px-0">
                    {children}
                </div>
            </div>
        </div>
    )
}