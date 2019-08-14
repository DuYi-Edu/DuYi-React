import { useEffect } from "react"
import reset from "./resetScroll"

export default function useScroll(pathname) {
    useEffect(reset, [pathname])
}