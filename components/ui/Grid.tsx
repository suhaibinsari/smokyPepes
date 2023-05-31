import React from 'react'

const Grid = ({
    children,
    className,
}: {
    children: React.ReactNode
    className?: string
}) => {
    return (
        <div className={`grid gap-4 md:grid-cols-2 ${className}`}>
            {children}
        </div>
    )
}

export default Grid
