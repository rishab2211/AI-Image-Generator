import { Sparkles } from "lucide-react"
import Link from "next/link"

const Logo = () => {
  return (
    <div className=" p-1 rounded-md">
        <Link href={"/"} className="flex items-center gap-2 " >
        <Sparkles className="size-8 " strokeWidth={1.5} />
        <span className="text-lg font-semibold " >AI-Image-Generator</span>
        </Link>
    </div>
  )
}

export default Logo