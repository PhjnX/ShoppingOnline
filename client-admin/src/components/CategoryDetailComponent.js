import axios from "axios";
import React, { Component } from "react";
import MyContext from "../contexts/MyContext";
import {
  Button,
  Checkbox,
  Col,
  Form,
  Input,
  Popconfirm,
  Space,
  Typography,
  message,
} from "antd";
import { QuestionCircleOutlined } from "@ant-design/icons";
class CategoryDetail extends Component {
  static contextType = MyContext; // using this.context to access global state
  constructor(props) {
    super(props);
    this.state = {
      txtID: "",
      txtName: "",
    };
  }
  render() {
    return (
      <div className="w-full text-end">
        <div className="text-center mb-5">
          <Typography className="text-[20px] font-bold">
            CATEGORY DETAIL
          </Typography>
        </div>
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="flex gap-5 text-center items-center">
            <label
              className="text-gray-700 text-sm font-bold mb-2 w-30"
              htmlFor="id"
            >
              MÃ DANH MỤC
            </label>
            <input
              type="text"
              value={this.state.txtID}
              onChange={(e) => {
                this.setState({ txtID: e.target.value });
              }}
              readOnly={true}
              className="w-70 shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:shadow-outline"
            />
          </div>
          <div className="flex gap-5 text-center items-center mt-5">
            <label
              className="text-gray-700 text-sm font-bold mb-2 w-30"
              htmlFor="name"
            >
              TÊN DANH MỤC
            </label>
            <input
              type="text"
              value={this.state.txtName}
              onChange={(e) => {
                this.setState({ txtName: e.target.value });
              }}
              className="w-70 shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:shadow-outline"
            />
          </div>
          <div className="flex mt-4 text-black justify-end">
            <Button
              className="px-3 py-2 bg-blue-500 transition-all hover:bg-blue-600 rounded font-bold text-[12px]"
              type="submit"
              onClick={(e) => this.btnAddClick(e)}
            >
              THÊM
            </Button>
            <Button
              className="px-3 py-2 bg-blue-500 transition-all hover:bg-blue-600 mx-5 rounded font-bold text-[12px]"
              type="submit"
              onClick={(e) => this.btnUpdateClick(e)}
            >
              CẬP NHẬT
            </Button>
            <Button
              className="px-3 py-2 bg-blue-500 transition-all hover:bg-blue-600 rounded font-bold text-[12px]"
              type="submit"
              onClick={(e) => this.btnDeleteClick(e)}
            >
              XÓA
            </Button>
          </div>
        </form>
      </div>
    );
  }
  componentDidUpdate(prevProps) {
    if (this.props.item !== prevProps.item) {
      this.setState({
        txtID: this.props.item._id,
        txtName: this.props.item.name,
      });
    }
  }
  // event-handlers
  btnAddClick(e) {
    e.preventDefault();
    const name = this.state.txtName;
    if (name) {
      const cate = { name: name };
      this.apiPostCategory(cate);
    } else {
      message.error("VUI LÒNG ĐIỀN DANH MỤC SẢN PHẨM!");
    }
  }
  // apis
  apiPostCategory(cate) {
    const config = { headers: { "x-access-token": this.context.token } };
    axios.post("/api/admin/categories", cate, config).then((res) => {
      const result = res.data;
      if (result) {
        message.success("THÊM THÀNH CÔNG!");
        this.apiGetCategories();
      } else {
        message.error("THÊM THẤT BẠI!");
      }
    });
  }
  apiGetCategories() {
    const config = { headers: { "x-access-token": this.context.token } };
    axios.get("/api/admin/categories", config).then((res) => {
      const result = res.data;
      this.props.updateCategories(result);
    });
  }
  btnUpdateClick(e) {
    e.preventDefault();
    const id = this.state.txtID;
    const name = this.state.txtName;
    if (id && name) {
      const cate = { name: name };
      this.apiPutCategory(id, cate);
    } else {
      message.error("VUI LÒNG ĐIỀN MÃ VÀ TÊN DANH MỤC!");
    }
  }
  // apis
  apiPutCategory(id, cate) {
    const config = { headers: { "x-access-token": this.context.token } };
    axios.put("/api/admin/categories/" + id, cate, config).then((res) => {
      const result = res.data;
      if (result) {
        message.success("CẬP NHẬT THÀNH CÔNG!");
        this.apiGetCategories();
      } else {
        message.error("CẬP NHẬT THẤT BẠI!");
      }
    });
  }
  btnDeleteClick(e) {
    e.preventDefault();
    if (window.confirm("BẠN CÓ CHẮC LÀ MUỐN XÓA?")) {
      const id = this.state.txtID;
      if (id) {
        this.apiDeleteCategory(id);
      } else {
        message.error("VUI LÒNG NHẬP MÃ DANH MỤC");
      }
    }
  }
  // apis
  apiDeleteCategory(id) {
    const config = { headers: { "x-access-token": this.context.token } };
    axios.delete("/api/admin/categories/" + id, config).then((res) => {
      const result = res.data;
      if (result) {
        message.success("Delete category successfully!");
        this.apiGetCategories();
      } else {
        message.error("XÓA THẤT BẠI!");
      }
    });
  }
}
export default CategoryDetail;
