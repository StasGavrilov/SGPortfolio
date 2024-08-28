import Link from "next/link"

export default function NavBar() {
    const navigation = [
        { label: 'About Me', target: '/about' },
        { label: 'Resume', target: '/resume' },
        { label: 'Portfolio', target: '/portfolio' },
        { label: 'Contact', target: '/contact' },
    ]

    return (
        <ul className="text-right p-10 flex flex-col">
            {navigation.map(nav => (
                <li key={nav.label} className="relative text-4 mt-[15px] group">
                    <Link href={nav.target}>
                        <span className="relative inline-block">
                            {nav.label}
                            <span
                                className="absolute left-0 top-1/2 transform translate-x-[-120px] -translate-y-1/2 h-[2px] w-[45px] bg-[#50575e]
                                    transition-all duration-300 opacity-0 group-hover:translate-x-[-60px] group-hover:opacity-100"
                            />
                        </span>
                    </Link>
                </li>
            ))}
        </ul>
    )
}
