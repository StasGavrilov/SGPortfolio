import Image from "next/image"
import Link from "next/link"

import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faCode } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function Main() {
    return (
        <div className='p-[40px] bg-[#00000011] flex items-center justify-center flex-col'>
            <Image
                height={120}
                width={120}
                src={'/images/profile.jpg'}
                alt={'profile'}
                className="rounded-full w-[120px] h-[120px] object-cover"
            />

            <div className="flex flex-col text-center mt-2">
                <span className="text-[27px] font-semibold">Stas Gavrilov</span>
                <span className="text-[14px] text-[#9e9e9e] font-normal">Web developer</span>
            </div>

            <div>
                <Link
                    href={"https://www.linkedin.com/in/stas-gavrilov-0a16b4195/"}
                    target="_blank"
                    className="m-1"
                >
                    <FontAwesomeIcon icon={faLinkedin} />
                </Link>
                <Link
                    href={"https://github.com/StasGavrilov"}
                    target="_blank"
                    className="m-1"
                >
                    <FontAwesomeIcon icon={faGithub} />
                </Link>
                <Link
                    href={"https://leetcode.com/u/stasgavrilov485/"}
                    target="_blank"
                    className="m-1"
                >
                    <FontAwesomeIcon icon={faCode} />
                </Link>
            </div>
        </div>
    )
}
