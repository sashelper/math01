import React, { PureComponent } from "react";
import Select from "react-select";
import { Card, Button, Form, Col } from "react-bootstrap";
import { OPTIONS_TYPE } from "./utility";

export default class FormParam extends PureComponent {
  onClickPrint = () => {
    window.print();
  };

  render() {
    const {
      scope,
      howMany,
      type,
      class01,
      name,
      time,
      copy,
      changeInput,
      handleOnChange,
      onClickCreate,
      onClickSaveParams,
    } = this.props;

    return (
      <Card className="no-print">
        <Card.Header className="text-center large-font">
          口算练习题在线生成工具
        </Card.Header>
        <Card.Body>
          <Form>
            <Form.Row>
              <Form.Group as={Col} controlId="formScope">
                <Form.Label>范围: {scope}以内</Form.Label>
                <Form.Control
                  value={scope}
                  onChange={(e) => changeInput(e, "scope")}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formHowMany">
                <Form.Label>题数</Form.Label>
                <Form.Control
                  placeholder="100"
                  value={howMany}
                  onChange={(e) => changeInput(e, "howMany")}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formtype">
                <Form.Label>题型</Form.Label>
                <Select
                  options={OPTIONS_TYPE}
                  onChange={handleOnChange}
                  name="type"
                  isMulti
                  value={type}
                />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} controlId="formName">
                <Form.Label>姓名</Form.Label>
                <Form.Control
                  value={name}
                  onChange={(e) => changeInput(e, "name")}
                />
              </Form.Group>
              <Form.Group as={Col} controlId="formClass">
                <Form.Label>班级</Form.Label>
                <Form.Control
                  value={class01}
                  onChange={(e) => changeInput(e, "class01")}
                />
              </Form.Group>
              <Form.Group as={Col} controlId="formTime">
                <Form.Label>时间（分钟）</Form.Label>
                <Form.Control
                  value={time}
                  onChange={(e) => changeInput(e, "time")}
                />
              </Form.Group>
              <Form.Group as={Col} controlId="formCopy">
                <Form.Label>份数</Form.Label>
                <Form.Control
                  value={copy}
                  onChange={(e) => changeInput(e, "copy")}
                />
              </Form.Group>
            </Form.Row>
          </Form>
          <div className="mb-2">
            <Button
              variant="primary"
              size="lg"
              onClick={() => onClickSaveParams()}
            >
              保存参数
            </Button>{" "}
            <Button variant="primary" size="lg" onClick={() => onClickCreate()}>
              生成习题
            </Button>{" "}
            <Button variant="primary" size="lg" onClick={this.onClickPrint}>
              打印
            </Button>
          </div>
        </Card.Body>
      </Card>
    );
  }
}
