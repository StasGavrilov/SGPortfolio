import Image from "next/image"
import Link from "next/link"
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faCode } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function Main() {
    return (
        <div className='p-10 bg-[#00000011] flex flex-col items-center justify-center'>
            <Link href={'/'}>
                <Image
                    height={120}
                    width={120}
                    src={'/images/profile.jpg'}
                    alt={'profile'}
                    className="rounded-full w-[120px] h-[120px] object-cover mt-1"
                />
            </Link>

            <div className="text-center mt-2">
                <h3 className="text-[27px] font-semibold">Stas Gavrilov</h3>
                <h5 className="text-[14px] text-[#9e9e9e] font-normal">Web developer</h5>
            </div>

            <div className="text-[#9e9e9e] mt-[15px]">
                <Link href={"https://www.linkedin.com/in/stas-gavrilov-0a16b4195/"} target="_blank">
                    <FontAwesomeIcon icon={faLinkedin} className="w-4 h-4 mr-4" />
                </Link>
                <Link href={"https://github.com/StasGavrilov"} target="_blank">
                    <FontAwesomeIcon icon={faGithub} className="w-4 h-4 mr-4" />
                </Link>
                <Link href={"https://leetcode.com/u/stasgavrilov485/"} target="_blank">
                    <FontAwesomeIcon icon={faCode} className="w-4 h-4" />
                </Link>
            </div>
        </div>
    )
}
