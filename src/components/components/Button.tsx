import React from "react"
import { Button as AntButton } from 'antd';
import { styled } from "../../style/Theme";

const DefaultButton = styled(AntButton)`
    border-radius: 4px;
    opacity: 1;
    width: 248px;
    height: 42px;
    text-align: center;
    font-size: 14px;
`;
const PrimaryButton = styled(DefaultButton)`
    background:  ${props => (props.theme.color.basecolor)};
    border:  ${props => (props.theme.color.basecolor)};
    color: #F7F7F7;
    &:hover , &:active {
        color: #F7F7F7;
        border: 1.5px solid #702928;
        background: #702928;
    }
`;

const OutlineButton = styled(DefaultButton)`
    color: ${props => (props.theme.color.basecolor)};
    border: 1.5px solid  ${props => (props.theme.color.basecolor)};
    &:hover , &:active {
        color:  ${props => (props.theme.color.basecolor)};
        border: 1.5px solid  ${props => (props.theme.color.basecolor)};
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