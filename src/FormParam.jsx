import React, { PureComponent } from "react";
import Select from "react-select";
import { Formik } from "formik";
import * as yup from "yup";
import { Card, Button, Form, Col, Table } from "react-bootstrap";
import { OPTIONS_TYPE } from "./utility";
import TableHead from "./TableHead";

const schema = yup.object({
  type: yup
    .array()
    .min(1, "至少选择一项")
    .of(
      yup
        .object()
        .shape({
          label: yup.string(),
          value: yup.string(),
        })
        .nullable()
    ),

  scope: yup.number().positive().integer().required("必填"),
  howMany: yup.number().positive().integer().lessThan(1001).required("必填"),
  copy: yup.number().positive().integer().lessThan(1001).required("必填"),
  name: yup.string().max(10, "长度须小于10个字符"),
  class01: yup.string().max(10, "长度须小于10个字符"),
  time: yup.number(),
  title: yup.string().max(50, "长度须小于50个字符"),
});

export default class FormParam extends PureComponent {
  onClickPrint = () => {
    window.print();
  };

  onClickSaveParams = (values) => {
    const { scope, howMany, type, class01, name, time, copy, title } = values;

    localStorage.setItem("type", JSON.stringify(type));
    localStorage.setItem("scope", scope);
    localStorage.setItem("howMany", howMany);
    localStorage.setItem("copy", copy);
    localStorage.setItem("name", name);
    localStorage.setItem("class01", class01);
    localStorage.setItem("time", time);
    localStorage.setItem("title", title);
  };

  render() {
    const {
      type,
      scope,
      howMany,
      copy,
      name,
      class01,
      time,
      title,
      onClickCreate,
    } = this.props;

    return (
      <Card className="no-print">
        <Card.Header className="text-center large-font">
          口算练习题在线生成工具
        </Card.Header>
        <Card.Body>
          <Formik
            validationSchema={schema}
            onSubmit={(values, { setSubmitting }) => {
              onClickCreate(values);
              setSubmitting(false);
            }}
            initialValues={{
              type,
              scope,
              howMany,
              copy,
              name,
              class01,
              time,
              title,
            }}
          >
            {({
              handleSubmit,
              handleChange,
              handleBlur,
              values,
              touched,
              isValid,
              errors,
              setFieldValue,
            }) => (
              <>
                <Form onSubmit={handleSubmit}>
                  <Form.Row>
                    <Form.Group as={Col} controlId="formtype" md={3}>
                      <Form.Label>题型*</Form.Label>
                      <Select
                        options={OPTIONS_TYPE}
                        onChange={(value) => {
                          setFieldValue("type", value);
                        }}
                        name="type"
                        className={
                          !values.type || !!errors.type ? "is-invalid" : null
                        }
                        isMulti
                        value={values.type}
                        error={errors.type}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.type}
                      </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} controlId="formScope" md={3}>
                      <Form.Label>范围*: {values.scope}以内</Form.Label>
                      <Form.Control
                        value={values.scope}
                        name="scope"
                        onChange={handleChange}
                        isInvalid={!!errors.scope}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.scope}
                      </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} controlId="formHowMany" md={3}>
                      <Form.Label>题数*</Form.Label>
                      <Form.Control
                        value={values.howMany}
                        name="howMany"
                        onChange={handleChange}
                        isInvalid={!!errors.howMany}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.howMany}
                      </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} controlId="formCopy" md={3}>
                      <Form.Label>份数*</Form.Label>
                      <Form.Control
                        value={values.copy}
                        name="copy"
                        onChange={handleChange}
                        isInvalid={!!errors.copy}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.copy}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Form.Row>
                  <Form.Row className="d-none d-md-flex">
                    <Form.Group as={Col} controlId="formName" md={3}>
                      <Form.Label>姓名</Form.Label>
                      <Form.Control
                        value={values.name}
                        onChange={handleChange}
                        name="name"
                        isInvalid={!!errors.name}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.name}
                      </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} controlId="formClass" md={3}>
                      <Form.Label>班级</Form.Label>
                      <Form.Control
                        value={values.class01}
                        name="class01"
                        onChange={handleChange}
                        isInvalid={!!errors.class01}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.class01}
                      </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} controlId="formTime" md={3}>
                      <Form.Label>时间（分钟）</Form.Label>
                      <Form.Control
                        value={values.time}
                        name="time"
                        onChange={handleChange}
                        isInvalid={!!errors.time}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.time}
                      </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} controlId="formTitle" md={3}>
                      <Form.Label>标题</Form.Label>
                      <Form.Control
                        value={values.title}
                        name="title"
                        onChange={handleChange}
                        isInvalid={!!errors.title}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.title}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Form.Row>
                  <Card className="d-none d-xl-flex">
                    <Card.Header>页眉预览</Card.Header>
                    <Card.Body>
                      <Table>
                        <TableHead
                          type={values.type}
                          scope={values.scope}
                          howMany={values.howMany}
                          name={values.name}
                          class01={values.class01}
                          time={values.time}
                          title={values.title}
                        />
                      </Table>
                    </Card.Body>
                  </Card>
                  <div className="mb-2">
                    <Button
                      variant="primary"
                      size="lg"
                      onClick={() => this.onClickSaveParams(values)}
                      disabled={!isValid}
                      className="d-none d-md-inline"
                    >
                      保存参数
                    </Button>{" "}
                    <Button
                      variant="primary"
                      size="lg"
                      type="submit"
                      disabled={!isValid}
                    >
                      生成习题
                    </Button>{" "}
                    <Button
                      variant="primary"
                      size="lg"
                      onClick={this.onClickPrint}
                      disabled={!isValid}
                    >
                      打印
                    </Button>
                  </div>
                </Form>
              </>
            )}
          </Formik>
        </Card.Body>
      </Card>
    );
  }
}
