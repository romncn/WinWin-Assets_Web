import React from "react"
import { Layout, Menu } from 'antd';
import { styled } from "../../style/Theme";
import Logo from "../../asset/Logo.svg";
import { CaretDownOutlined } from '@ant-design/icons';

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
                    <img src={Logo} width="40px" height="40px" />
                    <h5 style={{ fontWeight: "bold", paddingLeft: "20px", display: "inline-block" }}>บริษัท วินวิน แอสเสท จำกัด</h5>
                </div>
                <div className="menu-bar">
                    <Menu theme="light" mode="horizontal" >
                        <SubMenu key="1" icon={<CaretDownOutlined />} title="รู้จัก WIN WIN">
                            <SubMenuItem key="sub1_1">
                                <a href="/" target="winwin_whatis">
                                    WINWIN คืออะไร?
                                </a>
                            </SubMenuItem>
                            <SubMenuItem key="sub1_2">
                                <a href="/" target="winwin_portfolio">
                                    ผลงานที่ผ่านมา
                                </a>
                            </SubMenuItem>
                        </SubMenu>
                        <SubMenu key="2" icon={<CaretDownOutlined />} title="โครงการ">
                            <SubMenuItem key="sub2_1">
                                <a href="/" target="winwin_house">
                                    บ้านเดี่ยว
                                </a>
                            </SubMenuItem>
                            <SubMenuItem key="sub2_2">
                                <a href="/" target="winwin_town_home">
                                    ทาวน์โฮม
                                </a>
                            </SubMenuItem>
                            <SubMenuItem key="sub2_3">
                                <a href="/" target="winwin_condominium">
                                    คอนโดมิเนียม
                                </a>
                            </SubMenuItem>
                        </SubMenu>
                        <SubMenu key="3" icon={<CaretDownOutlined />} title="บริการ">
                            <SubMenuItem key="sub3_1">
                                <a href="/" target="winwin_service">
                                    บริการจาก WINWIN
                                </a>
                            </SubMenuItem>
                            <SubMenuItem key="sub3_2">
                                <a href="/" target="winwin_service_standards">
                                    มาตรฐานการบริการ
                                </a>
                            </SubMenuItem>
                        </SubMenu>
                        <Menu.Item key="4">
                            <a href="/" target="winwin_management_team">
                                คณะผู้บริหาร
                            </a>
                        </Menu.Item>
                        <Menu.Item key="5">
                            <a href="/" target="winwin_vision">
                                วิสัยทัศน์
                            </a>
                        </Menu.Item>
                    </Menu>
                </div>
            </Header>
        </Wrapper>
    )
}

export default Navbar