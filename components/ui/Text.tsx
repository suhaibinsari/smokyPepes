import React from 'react'

interface TextProps {
    text: string | React.ReactNode
    className?: string
    onClick?: () => void
    styles?: any
}

const Text: React.FC<TextProps> = ({ text, className, onClick, styles }) => {
    return (
        <p
            className={`font-[Rubik] ${className}`}
            onClick={onClick}
            style={styles}
        >
            {text}
        </p>
    )
}

export default Text
