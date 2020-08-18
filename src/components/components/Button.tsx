import React from "react"
import { Button as AntButton } from 'antd';
import styled from 'styled-components';

const DefaultButton = styled(AntButton)`
    border-radius: 4px;
    opacity: 1;
    width: 248px;
    height: 42px;
    text-align: center;
    font-size: 16px;
`;
const PrimaryButton = styled(DefaultButton)`
    background: #843A39;
    border: #843A39;
    color: #F7F7F7;
    &:hover , &:active {
        color: #F7F7F7;
        border: 1.5px solid #702928;
        background: #702928;
    }
`;

const OutlineButton = styled(DefaultButton)`
    color: #843A39;
    border: 1.5px solid #843A39;
    &:hover , &:active {
        color: #843A39;
        border: 1.5px solid #843A39;
        background: #F7F7F7;
    }
`;

interface Props {
    onClick?: any;
    children?: any;
    type?: string;
    htmlType?: "button" | "submit" | "reset";
};

const Button: React.FC<Props> = ({ onClick, children, type="primary", htmlType }) => {
    return (
        <>
            {type === "primary" ?
                <PrimaryButton type="primary" onClick={onClick} htmlType={htmlType}>
                    {children}
                </PrimaryButton>
                : null}
            {type === "outline" ?
                <OutlineButton onClick={onClick} htmlType={htmlType}>
                    {children}
                </OutlineButton>
                : null}
        </>
    )
}

export default Button;