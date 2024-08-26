import Main from "./Main"
import NavBar from "./NavBar"

export default function Header() {
    return (
        <div className="top-0 left-0 h-full w-[320px] bg-[#343a40] text-white">
            <Main />
            <NavBar />
        </div>
    )
}

// TODO: fixed