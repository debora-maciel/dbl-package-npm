import React, { ComponentProps } from 'react';

interface CardProp extends ComponentProps<"div"> {
    children?: any;
    theme?: 'dark' | 'light';
}

export function Card({ children, ...rest }: CardProp): JSX.Element {
    const sxMain: React.CSSProperties = {
        width: '100%',
        height: '100%',
        boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
        borderRadius: '7px',
        padding: '10px',
        display: 'flex',
        flexDirection: 'column'
    }

    return (
        <div {...rest} style={sxMain}>
            {children}
        </div>
    )
}

export function CardTitle({ children, ...rest }: CardProp): JSX.Element {
    const sxMain: React.CSSProperties = {
        width: '100%',
        height: '100%',
        padding: '10px',
        fontWeight: 700,
        whiteSpace: 'break-spaces'
    }

    return (
        <div {...rest} style={sxMain}>
            {children}
        </div>
    )
}


export function CardContent({ children, ...rest }: CardProp): JSX.Element {
    const sxMain: React.CSSProperties = {
        width: '100%',
        height: '100%',
        textAlign: 'left',
        padding: '0 15px'
    }

    return (
        <div {...rest} style={sxMain}>
            {children}
        </div>
    )
}


export function CardFooter({ children, ...rest }: CardProp): JSX.Element {
    const sxMain: React.CSSProperties = {
        width: '100%',
        height: '100%',
    }

    return (
        <div {...rest} style={sxMain}>
            {children}
        </div>
    )
}