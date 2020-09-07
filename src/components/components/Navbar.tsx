import React, { useEffect } from "react";
import { Layout, Menu } from "antd";
import { Container } from "./Grid";
import { styled } from "../../style/Theme";
import { CaretDownOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const { SubMenu } = Menu;

const Bar = styled.div`

  width: 100%;
  text-align: center;
  justify-content: center;
  .ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-item,
  .ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-submenu {
    &:hover,
    &:active,
    &:focus {
      color: ${props => (props.theme.color.basecolor)};
      border-bottom: 2px solid ${props => (props.theme.color.basecolor)};
    }
    a, .ant-menu-submenu-title {
      &:hover,
      &:active,
      &:focus {
      color: ${props => (props.theme.color.basecolor)};
      }
    }
  }
  .ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-item-open,
  .ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-submenu-open,
  .ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-item-selected,
  .ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-submenu-selected {
    color: ${props => (props.theme.color.basecolor)};
    border-bottom: 2px solid ${props => (props.theme.color.basecolor)};
     a {
      color: ${props => (props.theme.color.basecolor)};
     }
  }
  @media screen and (min-width: 1250px) {
    display: flex;
    width: 100%;
    justify-content: space-between;
  }
`;

const Logo = styled.div`
  display: inline-block;
`;

const MenuBar = styled.div`
  display: inline-block;
  justify-content: initial;
  .ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-item,
  .ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-submenu {
    margin: 0 20px;
  }
  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    .ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-item,
    .ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-submenu {
      margin: 0 10px;
    }
  }
`;

const SubMenuItem = styled(Menu.Item)`
  &:hover,
  &:active,
  &:focus {
    background: ${(props) => props.theme.color.basecolor};
    a {
      color: white;
    }
  }
`;

const Navbar: React.FC = () => {
  useEffect(() => {
    console.log('debug');
  }, [])
  return (
    <div style={{ borderBottom: "1px solid black" }}>
      <Container>
        <Bar>
          <Logo>
            <Link to="/">
              <img src="/img/Logo.svg" width="40px" height="40px" />
              <h4
                style={{
                  fontWeight: "bold",
                  padding: "10px 0px 0px 20px",
                  display: "inline-block",
                  margin: "0px",
                }}
              >
                บริษัท วินวิน แอสเสท จำกัด
              </h4>
            </Link>
          </Logo>
          <MenuBar>
            <Menu theme="light" mode="horizontal" style={{ height: "50px" }} defaultOpenKeys={['1']} defaultSelectedKeys={['whatis']}>
            {/* <Menu theme="light" mode="horizontal" style={{ height: "50px" }}> */}
              <SubMenu
                key="1"
                icon={<CaretDownOutlined />}
                title="รู้จัก WIN WIN"
              >
                <SubMenuItem key="whatis" >
                  <Link to="/whatis">WINWIN คืออะไร?</Link>
                </SubMenuItem>
                <SubMenuItem key="portfolio">
                  <Link to="/portfolio">ผลงานที่ผ่านมา</Link>
                </SubMenuItem>
              </SubMenu>
              <SubMenu key="2" icon={<CaretDownOutlined />} title="โครงการ">
                <SubMenuItem key="asset_house">
                  <Link to="/asset/house">บ้านเดี่ยว</Link>
                </SubMenuItem>
                <SubMenuItem key="asset_townhome">
                  <Link to="/asset/townhome">ทาวน์โฮม</Link>
                </SubMenuItem>
                <SubMenuItem key="asset_condiminium">
                  <Link to="/asset/condominium">คอนโด</Link>
                </SubMenuItem>
              </SubMenu>
              <SubMenu key="3" icon={<CaretDownOutlined />} title="บริการ">
                <SubMenuItem key="service">
                  <Link to="/service">บริการจาก WINWIN</Link>
                </SubMenuItem>
                <SubMenuItem key="standard_service">
                  <Link to="/standard-service">มาตรฐานการบริการ</Link>
                </SubMenuItem>
              </SubMenu>
              <Menu.Item key="4">
                <Link to="/aboutus">คณะผู้บริหาร</Link>
              </Menu.Item>
              <Menu.Item key="5">
                <Link to="/vision">วิสัยทัศน์</Link>
              </Menu.Item>
            </Menu>
          </MenuBar>
        </Bar>
      </Container>
    </div>
  );
};

export default Navbar;
