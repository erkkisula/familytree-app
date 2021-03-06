import React from 'react';
import cx from 'classnames';
import Button from './Button';

interface PropTypes {
    text: string;
    open: boolean;
    handleClose: VoidFunction;
}

const Alert = ({ text, open, handleClose }: PropTypes) => {
    return (
        <div className={cx('alert-box', { open })}>
            <div className="alert-box__inner">
                <div className="alert-box__title">Alert</div>
                <div className="alert-box__text">{text}</div>
                <div className="alert-box__btn">
                    <Button buttonText="Close" handleClick={handleClose} size="small" theme="alt" />
                </div>
            </div>
        </div>
    );
};

export default Alert;
