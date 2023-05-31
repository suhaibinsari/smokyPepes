import React from 'react'

interface ImageProps {
    src: string
    alt: string
    width?: number
    height?: number
    w?: number
    h?: number
    className?: string
}

const Image: React.FC<ImageProps> = ({
    src,
    alt,
    width,
    height,
    h,
    className,
    w,
}) => {
    return (
        <img
            src={src}
            alt={alt}
            width={w || width}
            height={h || height}
            className={className}
        />
    )
}

export default Image
