import React from 'react'

interface FooterProps {
    children: React.ReactNode
    className?: string
}

const Footer: React.FC<FooterProps> = ({ children, className }) => {
    return <div className={`fixed bottom-4 ${className}`}>{children}</div>
}

export default Footer
