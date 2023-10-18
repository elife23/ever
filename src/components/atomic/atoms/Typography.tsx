import React from 'react'

export type FontVariants = ["thin", "extralight", "light", "regular", "medium", "semibold", "bold", "extrabold", "black"];
export type FontVariant = FontVariants[number];


type Props = {
    fontVariation?: FontVariant,
    text?: React.ReactNode | string,
    className?: string,
    children: React.ReactNode | string,
}

function Typography({ children=null, fontVariation = "thin", className = "", text, ...rest }: Props) {

    return (
        <p className={`font-${fontVariation} ${className}`} {...rest}>
            {children}
        </p>
    )
}

export default Typography