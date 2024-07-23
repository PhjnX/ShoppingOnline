import React, { Component } from "react";
import MyContext from "../contexts/MyContext";
import CartUtil from "../utils/CartUtil";
import axios from "axios";
import withRouter from "../utils/withRouter";
import { Typography } from "antd";

class Mycart extends Component {
  static contextType = MyContext; // using this.context to access global state
  render() {
    const mycart = this.context.mycart.map((item, index) => {
      return (
        <tr
          className=" bg-white border-b border-x transition-all hover:dark:bg-orange-200 hover:dark:border-orange-200 hover:dark:text-white text-center"
          key={item.product._id}
        >
          <td
            data-lable="No."
            className="break-words text-sm md:text-[16px] px-6 py-3 cursor-pointer text-gray-600  shadow lg:shadow-none"
          >
            {index + 1}
          </td>
          <td
            data-lable="ID"
            className="break-words text-sm md:text-[16px] px-6 py-3 cursor-pointer text-gray-600  shadow lg:shadow-none"
          >
            {item.product._id}
          </td>
          <td
            data-lable="Name"
            className=" text-sm md:text-[16px] px-6 py-3 cursor-pointer text-gray-600  shadow lg:shadow-none"
          >
            {item.product.name}
          </td>
          <td
            data-lable="Category"
            className=" text-sm md:text-[16px] px-6 py-3 cursor-pointer text-gray-600  shadow lg:shadow-none"
          >
            {item.product.category.name}
          </td>
          <td
            data-lable="Image"
            className=" text-sm md:text-[16px] px-6 py-3 cursor-pointer text-gray-600  shadow lg:shadow-none"
          >
            <img
              src={"data:image/jpg;base64," + item.product.image}
              width="70px"
              height="70px"
              alt=""
            />
          </td>
          <td
            data-lable="Price"
            className=" text-sm md:text-[16px] px-6 py-3 cursor-pointer text-gray-600  shadow lg:shadow-none"
          >
            {item.product.price}
          </td>
          <td
            data-lable="Quantity"
            className=" text-sm md:text-[16px] px-6 py-3 cursor-pointer text-gray-600  shadow lg:shadow-none"
          >
            {item.quantity}
          </td>
          <td
            data-lable="Amount"
            className=" text-sm md:text-[16px] px-6 py-3 cursor-pointer text-gray-600  shadow lg:shadow-none"
          >
            {item.product.price * item.quantity}
          </td>
          <td>
            <button
              className="uppercase link font-bold px-3 py-1 bg-red-400 transition-all hover:bg-red-600 w-[30] h-[30] rounded text-gray-600 hover:text-gray-800"
              onClick={() => this.lnkRemoveClick(item.product._id)}
            >
              XÓA
            </button>
          </td>
        </tr>
      );
    });
    return (
      <div className="container-80">
        <div className="text-center mb-5">
          <Typography className="text-[20px] font-bold font-montserrat">
            DANH SÁCH SẢN PHẨM
          </Typography>
        </div>
        <table
          className="w-full text-sm text-left text-gray-500 dark:text-gray-400 table"
          border="1"
        >
          <thead className="text-xs uppercase bg-[#f18634] text-black">
            <tr className="text-center">
              <th className="px-6 py-3">STT</th>
              <th className="px-6 py-3">MÃ SẢN PHẨM</th>
              <th className="px-6 py-3">TÊN SẢN PHẨM</th>
              <th className="px-6 py-3">LOẠI SẢN PHẨM</th>
              <th className="px-6 py-3">HÌNH ẢNH</th>
              <th className="px-6 py-3">GIÁ</th>
              <th className="px-6 py-3">SỐ LƯỢNG</th>
              <th className="px-6 py-3">GIÁ TỔNG</th>
              <th className="px-6 py-3">TRẠNG THÁI</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {mycart}
            <tr>
              <td
                className=" text-sm md:text-[16px] px-6 py-3 cursor-pointer text-gray-600  shadow lg:shadow-none"
                colSpan="6"
              ></td>
              <td className=" text-sm md:text-[16px] px-6 py-3 cursor-pointer text-gray-600  shadow lg:shadow-none">
                TỔNG
              </td>
              <td
                data-lable="Total"
                className=" text-sm md:text-[16px] px-6 py-3 cursor-pointer text-gray-600  shadow lg:shadow-none"
              >
                {CartUtil.getTotal(this.context.mycart)}
              </td>
              <td className=" text-sm md:text-[16px] px-6 py-3 cursor-pointer text-gray-600  shadow lg:shadow-none">
                <button
                  className="uppercase link font-bold px-3 py-1 bg-blue-500 transition-all hover:bg-blue-600 w-[30] h-[30] rounded text-gray-600 hover:text-gray-800"
                  onClick={() => this.lnkCheckoutClick()}
                >
                  THANH TOÁN
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
  // event-handlers
  lnkRemoveClick(id) {
    const mycart = this.context.mycart;
    const index = mycart.findIndex((x) => x.product._id === id);
    if (index !== -1) {
      // found, remove item
      mycart.splice(index, 1);
      this.context.setMycart(mycart);
    }
  }
  // event-handlers
  lnkCheckoutClick() {
    if (window.confirm("BẠN CÓ CHẮC LÀ MUỐN THANH TOÁN?")) {
      if (this.context.mycart.length > 0) {
        const total = CartUtil.getTotal(this.context.mycart);
        const items = this.context.mycart;
        const customer = this.context.customer;
        if (customer) {
          this.apiCheckout(total, items, customer);
        } else {
          this.props.navigate("/login");
        }
      } else {
        alert("GIỎ HÀNG CỦA BẠN ĐANG TRỐNG");
      }
    }
  }
  // apis
  apiCheckout(total, items, customer) {
    const body = { total: total, items: items, customer: customer };
    const config = { headers: { "x-access-token": this.context.token } };
    axios.post("/api/customer/checkout", body, config).then((res) => {
      const result = res.data;
      if (result) {
        alert("CẢM ƠN BẠN ĐÃ MUA HÀNG!");
        this.context.setMycart([]);
        this.props.navigate("/home");
      } else {
        alert("THANH TOÁN THẤT BẠI!");
      }
    });
  }
}
export default withRouter(Mycart);
