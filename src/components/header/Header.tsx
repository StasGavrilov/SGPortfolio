import Main from "./Main"
import NavBar from "./NavBar"
import { Children } from "@/helpers/types"

export default function Header({ children }: Children) {
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