import { Children } from "@/helpers/types"

export default function Box({ children }: Children) {
  return (
    <div className="transition-transform duration-500 transform translate-y-full hover:translate-y-0">
      {children}
    </div>
  )
}
