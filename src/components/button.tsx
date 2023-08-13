import React from 'react';

export function Button(props: React.ButtonHTMLAttributes<HTMLButtonElement>) {
    return (
        <>
          <button type="button" {...props}>{props.children}</button>
        </>
    )
}
