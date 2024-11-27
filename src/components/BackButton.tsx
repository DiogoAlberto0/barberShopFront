'use client'
import { useRouter } from "next/navigation"
import { BackArrowIcon } from "./icons/BackArrowIcon"
import { IconButton } from "./Buttons/IconButton"


export const BackButton = () => {

    const router = useRouter()
    return (
        <IconButton
            onClick={() => router.back()}
            responsive={false}
            className="fixed left-8 bottom-8 z-50 opacity-40 hover:opacity-100"
            variant="accent"
            hover={false}
        >
            <BackArrowIcon className="h-5 w-5" responsive={false} />
        </IconButton>
    )
}