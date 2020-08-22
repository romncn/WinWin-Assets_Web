import React from "react"
import { Layout, Menu } from 'antd';
import { styled } from "../../style/Theme";
import { CaretDownOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";

const { Header } = Layout;
const { SubMenu } = Menu;

const Wrapper = styled(Layout)`

    .ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-item:hover, .ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-submenu:hover, .ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-item-active, .ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-submenu-active, .ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-item-open, .ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-submenu-open, .ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-item-selected, .ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-submenu-selected {
        .ant-menu-submenu-title:hover {
            color: ${props => (props.theme.color.basecolor)};
        }
        a {
            color: ${props => (props.theme.color.basecolor)};
        }
        color: ${props => (props.theme.color.basecolor)};
        border-bottom: 2px solid ${props => (props.theme.color.basecolor)};
    }
    .ant-layout-header{
        background: #FFFFFF;
        padding: 0 30px;
        display: flex;
        justify-content: space-between; 
        .logo {
            height: 100%;
        }
        .ant-menu-horizontal {
            border-bottom: none;
        }
    }
    .ant-menu-horizontal:not(.ant-menu-dark) {
        .ant-menu-item {
            margin: 0 60px;
        }
        .ant-menu-submenu {
            margin: 0 60px;
        }
    }
    
`
const SubMenuItem = styled(Menu.Item)`
    color: ${props => (props.theme.color.basecolor)};
    &:hover , &:active, &:focus {
        background: ${props => (props.theme.color.basecolor)};
        color: #FFFFFF;
        a {
            color: #FFFFFF; 
        }
    }
`

const Navbar: React.FC = () => {

    return (
        <Wrapper>
            <Header>
                <div className="logo">
                    <Link to="/">
                        <img src="/img/Logo.svg" width="40px" height="40px" />
                        <h5 style={{ fontWeight: "bold", paddingLeft: "20px", display: "inline-block", margin:"0px" }}>บริษัท วินวิน แอสเสท จำกัด</h5>
                    </Link>
                </div>
                <div className="menu-bar">
                    <Menu theme="light" mode="horizontal" >
                        <SubMenu key="1" icon={<CaretDownOutlined />} title="รู้จัก WIN WIN">
                            <SubMenuItem key="sub1_1">
                                <Link to="/whatis">
                                    WINWIN คืออะไร?
                                </Link>
                            </SubMenuItem>
                            <SubMenuItem key="sub1_2">
                                <Link to="/portfolio">
                                    ผลงานที่ผ่านมา
                                </Link>
                            </SubMenuItem>
                        </SubMenu>
                        <SubMenu key="2" icon={<CaretDownOutlined />} title="โครงการ">
                            <SubMenuItem key="sub2_1">
                                <Link to="/asset/house">
                                    บ้านเดี่ยว
                                </Link>
                            </SubMenuItem>
                            <SubMenuItem key="sub2_2">
                                <Link to="/asset/townhome">
                                    ทาวน์โฮม
                                </Link>
                            </SubMenuItem>
                            <SubMenuItem key="sub2_3">
                                <Link to="/asset/condominium">
                                    คอนโด
                                </Link>
                            </SubMenuItem>
                        </SubMenu>
                        <SubMenu key="3" icon={<CaretDownOutlined />} title="บริการ">
                            <SubMenuItem key="sub3_1">
                                <Link to="/service">
                                    บริการจาก WINWIN
                                </Link>
                            </SubMenuItem>
                            <SubMenuItem key="sub3_2">
                                <Link to="/standard-service">
                                    มาตรฐานการบริการ
                                </Link>
                            </SubMenuItem>
                        </SubMenu>
                        <Menu.Item key="4">
                            <Link to="/aboutus">
                                คณะผู้บริหาร
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="5">
                            <Link to="/vision">
                                วิสัยทัศน์
                            </Link>
                        </Menu.Item>
                    </Menu>
                </div>
            </Header>
        </Wrapper>
    )
}

export default Navbar