import React from 'react';

interface ButtonProps {
    handleClick?: VoidFunction;
    buttonText: string;
    size: string; //big, small
    theme: string; //main, alt, negative
}

export const Button = ({ handleClick, buttonText, size, theme }: ButtonProps) => {
    const btnClass = `btn btn--${size} ${theme === 'main' ? '' : `btn--${theme}`}`;
    const btnTextClass = `btn__text btn__text--${size}`;

    return (
        <button className={btnClass} onClick={handleClick}>
            <span className={btnTextClass}>{buttonText}</span>
        </button>
    );
};

export default Button;
