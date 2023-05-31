import React, { MouseEventHandler } from 'react'

interface BoxProps {
    children?: React.ReactNode
    className?: string
    style?: any
    onClick?: () => void
    onMouseOver?: () => void
    onMouseLeave?: () => void
    id?: string
    ref?: HTMLDivElement | null | any
}

const Box: React.FC<BoxProps> = ({
    children,
    className,
    style,
    onClick,
    onMouseOver,
    onMouseLeave,
    id,
}) => {
    return (
        <div
            className={className}
            style={style}
            onClick={onClick}
            onMouseOver={onMouseOver}
            onMouseLeave={onMouseLeave}
            id={id}
        >
            {children}
        </div>
    )
}

export default Box
