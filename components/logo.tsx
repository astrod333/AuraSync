import { cn } from '@/lib/utils'
import Image from 'next/image'

export const Logo = ({ className }: { className?: string }) => {
    return (
        <Image
            src="/CS_Ellipse_8.png"
            alt="Logo"
            width={25}
            height={25}
            className={cn('size-7 w-7', className)}
        />
    )
}

export const LogoStroke = ({ className }: { className?: string }) => {
    return (
        <Image
            src="/CS_Ellipse_8.png"
            alt="Logo"
            width={25}
            height={25}
            className={cn('size-7 w-7', className)}
        />
    )
}
