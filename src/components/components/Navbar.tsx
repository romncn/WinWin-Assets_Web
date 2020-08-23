import React from "react"
import { Layout, Menu } from 'antd';
import { styled } from "../../style/Theme";
import { CaretDownOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";

const { Header } = Layout;
const { SubMenu } = Menu;

type MenuProps = {
    selected: boolean;
};

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
    .ant-menu {
        font-size: 16px;
    }
    .ant-layout-header {
            background: white;
            padding: 0 30px;
            .logo {
                height: 100%;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            .ant-menu-horizontal {
                display: flex;
                align-items: center;
                justify-content: center;
            }
        }
    .ant-menu-horizontal:not(.ant-menu-dark) {
        .ant-menu-item {
            margin: 0 10px;
        }
        .ant-menu-submenu {
            margin: 0 10px;
        }
    }
    @media screen and (min-width: 1180px) {
        .ant-layout-header{
            background: white;
            display: flex;
            justify-content: space-between;
            .logo {
                display: flex;
                height: 100%;
            }
            .ant-menu-horizontal {
                position: relative;
                border-bottom: none;
            }
        }
        .ant-menu-horizontal:not(.ant-menu-dark) {
            .ant-menu-item {
                margin: 0 40px;
            }
            .ant-menu-submenu {
                margin: 0 40px;
            }
        }
    }
    
`
const SubMenuItem = styled(Menu.Item)`
    &:hover , &:active, &:focus {
        background: ${props => (props.theme.color.basecolor)};
        a {
            color: white;
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
                        <h4 style={{ fontWeight: "bold", paddingLeft: "20px", display: "inline-block", margin: "0px" }}>บริษัท วินวิน แอสเสท จำกัด</h4>
                    </Link>
                </div>
                <span className="menu-bar">
                    <Menu theme="light" mode="horizontal" >
                        <SubMenu key="1" icon={<CaretDownOutlined />} title="รู้จัก WIN WIN">
                            <SubMenuItem  key="whatis">
                                <Link to="/whatis">
                                    WINWIN คืออะไร?
                                </Link>
                            </SubMenuItem>
                            <SubMenuItem key="portfolio">
                                <Link to="/portfolio">
                                    ผลงานที่ผ่านมา
                                </Link>
                            </SubMenuItem>
                        </SubMenu>
                        <SubMenu key="2" icon={<CaretDownOutlined />} title="โครงการ">
                            <SubMenuItem key="asset_house">
                                <Link to="/asset/house">
                                    บ้านเดี่ยว
                                </Link>
                            </SubMenuItem>
                            <SubMenuItem key="asset_townhome">
                                <Link to="/asset/townhome">
                                    ทาวน์โฮม
                                </Link>
                            </SubMenuItem>
                            <SubMenuItem key="asset_condiminium">
                                <Link to="/asset/condominium">
                                    คอนโด
                                </Link>
                            </SubMenuItem>
                        </SubMenu>
                        <SubMenu key="3" icon={<CaretDownOutlined />} title="บริการ">
                            <SubMenuItem key="service">
                                <Link to="/service">
                                    บริการจาก WINWIN
                                </Link>
                            </SubMenuItem>
                            <SubMenuItem key="standard_service">
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
                </span>
            </Header>
        </Wrapper>
    )
}

export default Navbar