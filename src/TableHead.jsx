import React, { Component } from "react";
import { getTitle } from "./utility";

export default class TableHead extends Component {
  render() {
    const { scope, howMany, class01, name, time, type } = this.props;
    return (
      <thead>
        <tr>
          <th colSpan={5} className="text-center large-font">
            {getTitle(scope, type)}
          </th>
        </tr>
        <tr className="medium-font-1">
          <th>姓名：{name ? name : "____________"}</th>
          <th>
            班级：
            {class01 ? class01 : "____________"}
          </th>
          <th>20___年___月___日</th>
          <th>
            用时：
            {time ? time : "______"} 分钟
          </th>
          <th>做对：_____/{howMany} 题</th>
        </tr>
      </thead>
    );
  }
}
