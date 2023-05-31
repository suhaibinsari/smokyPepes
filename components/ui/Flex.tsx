import React from 'react'

interface FlexProps {
    children: React.ReactNode
    className?: string
    onClick?: () => void
    styles?: any
}

const Flex: React.FC<FlexProps> = ({
    children,
    className,
    onClick,
    styles,
}) => {
    return (
        <div
            className={`flex items-center ${className}`}
            style={styles}
            onClick={onClick}
        >
            {children}
        </div>
    )
}

export default Flex
