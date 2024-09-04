import Main from "./Main"
import NavBar from "./NavBar"

interface HeaderProps {
    children: React.ReactNode;
}

export default function Header({ children }: HeaderProps) {
    return (
        <div className="relative h-full w-full">
            <div className="absolute top-0 left-0 h-full w-[320px] bg-[#343a40] text-white">
                <Main />
                <NavBar />
            </div>

            <div className="ml-[320px] w-full h-full">
                {children}
            </div>
        </div>
    )
}