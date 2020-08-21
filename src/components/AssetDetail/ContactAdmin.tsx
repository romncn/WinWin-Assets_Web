import React, { useState } from "react";
import { styled } from "../../style/Theme";
import emailjs from "emailjs-com";
import { Row, Col, Form, Input, Button, Space } from "antd";
import { CommentOutlined } from "@ant-design/icons";
import { Container } from "../components/Grid";

const ContainerBox = styled(Container)`
  padding-left: 0px;
  padding-right: 0px;
`;

const ContactBox = styled.div`
  background-color: #fafafa;
`;

const FormBox = styled.div`
  padding: 20px 20px 10px 20px;
  @media screen and (min-width: 992px) {
    padding: 50px 50px 20px 50px;
  }
`;

const Icon = styled.div`
  font-size: 150px;
  color: ${(props) => props.theme.color.basecolor};
`;

const InputText = styled(Input)`
  border: 1px solid #c3c3c3;
  background-color: transparent;
  &:hover,
  &:focus {
    border-color: #843a39;
  }
`;

const InputTextArea = styled(Input.TextArea)`
  border: 1px solid #c3c3c3;
  background-color: transparent;
  &:hover,
  &:focus {
    border-color: #843a39;
  }
`;

const ButtonSubmit = styled(Button)`
  width: 100%;
  color: white;
  background: #843a39;
  border-color: #843a39;
  &:hover,
  &:focus {
    color: #843a39;
    background: #fff;
    border-color: #843a39;
  }
`;

type ContactProps = {
  assetname: string;
};

export interface IForm {
  firstname: string;
  lastname: string;
  email: string;
  phonenumber: string;
  detail: string;
}

const ContactAdmin: React.FunctionComponent<ContactProps> = ({ assetname }) => {
  const [form] = Form.useForm();
  const [formContact, setFormContact] = useState<IForm>({
    firstname: "",
    lastname: "",
    email: "",
    phonenumber: "",
    detail: "",
  });

  const sendEmail = (event: any) => {
    // let data = new FormData();
    // data.append(
    //   "user_name",
    //   formContact.firstname + " " + formContact.lastname
    // );
    // data.append("user_phone", formContact.phonenumber);
    // data.append("email", formContact.email);
    // data.append("asset_name", assetname);
    let data = {
      user_name: formContact.firstname + " " + formContact.lastname,
      user_phone: formContact.phonenumber,
      email: formContact.email,
      asset_name: assetname
    }
    emailjs
      .send("gmail", "winwinform", data, "user_TrNSWK27wszTjEUslSoMG")
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    // emailjs.sendForm('', '', )
  };

  return (
    <div>
      <ContainerBox>
        <ContactBox>
          <Row align="middle">
            <Col span={24} lg={12}>
              <div style={{ textAlign: "center" }}>
                <Icon>
                  <CommentOutlined />
                </Icon>
                <h3>ติดต่อเจ้าหน้าที่</h3>
              </div>
            </Col>
            <Col span={24} lg={12}>
              <FormBox>
                <Form
                  form={form}
                  layout={"vertical"}
                  onFinish={(event) => sendEmail(event)}
                >
                  <Form.Item
                    label="ชื่อ"
                    name="firtname"
                    rules={[
                      {
                        required: true,
                        message: "กรุณากรอกชื่อของคุณ",
                      },
                    ]}
                  >
                    <InputText
                      value={formContact.firstname}
                      onChange={(e) =>
                        setFormContact({
                          ...formContact,
                          firstname: e.target.value,
                        })
                      }
                    />
                  </Form.Item>
                  <Form.Item
                    label="นามสกุล"
                    name="lastname"
                    rules={[
                      {
                        required: true,
                        message: "กรุณากรอกนามสกุลของคุณ",
                      },
                    ]}
                  >
                    <InputText
                      value={formContact.lastname}
                      onChange={(e) =>
                        setFormContact({
                          ...formContact,
                          lastname: e.target.value,
                        })
                      }
                    />
                  </Form.Item>
                  <Form.Item
                    label="อีเมลล์"
                    name="email"
                    rules={[
                      {
                        required: true,
                        message: "กรุณากรอกอีเมลล์ของคุณ",
                      },
                    ]}
                  >
                    <InputText
                      value={formContact.email}
                      onChange={(e) =>
                        setFormContact({
                          ...formContact,
                          email: e.target.value,
                        })
                      }
                    />
                  </Form.Item>
                  <Form.Item
                    label="เบอร์โทร"
                    name="phonenumber"
                    rules={[
                      {
                        required: true,
                        message: "กรุณากรอกเบอร์โทรติดต่อกลับของคุณ",
                      },
                    ]}
                  >
                    <InputText
                      value={formContact.phonenumber}
                      onChange={(e) =>
                        setFormContact({
                          ...formContact,
                          phonenumber: e.target.value,
                        })
                      }
                    />
                  </Form.Item>
                  <Form.Item
                    label="รายละเอียด"
                    name="detail"
                    rules={[
                      {
                        required: true,
                        message: "กรุณากรอกรายละเอียด",
                      },
                    ]}
                  >
                    <InputTextArea
                      autoSize={{ minRows: 3, maxRows: 5 }}
                      value={formContact.detail}
                      onChange={(e) =>
                        setFormContact({
                          ...formContact,
                          detail: e.target.value,
                        })
                      }
                    />
                  </Form.Item>
                  <Form.Item>
                    <ButtonSubmit htmlType="submit">ส่งข้อมูล</ButtonSubmit>
                  </Form.Item>
                </Form>
              </FormBox>
            </Col>
          </Row>
        </ContactBox>
        <form className="contact-form" onSubmit={sendEmail}>
          <input type="hidden" name="contact_number" />
          <label>Name</label>
          <input type="text" name="user_name" />
          <label>Email</label>
          <input type="email" name="user_email" />
          <label>Message</label>
          <textarea name="message" />
          <input type="submit" value="Send" />
        </form>
      </ContainerBox>
    </div>
  );
};

export default ContactAdmin;
