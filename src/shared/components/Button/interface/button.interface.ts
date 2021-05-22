import React from 'react';

export default interface IButton {
    onClick: () => void;
    style?: React.CSSProperties;
}
