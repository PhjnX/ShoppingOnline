import axios from "axios";
import React, { Component } from "react";
import MyContext from "../contexts/MyContext";
import { Typography } from "antd";
import "./order.css";
class Order extends Component {
  static contextType = MyContext; // using this.context to access global state
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      order: null,
    };
  }
  render() {
    const orders = this.state.orders.map((item) => {
      return (
        <tr
          key={item._id}
          className=" bg-white border-b border-x transition-all hover:dark:bg-orange-200 hover:dark:border-orange-200 hover:dark:text-white text-center"
          onClick={() => this.trItemClick(item)}
        >
          <td
            data-lable="ID"
            className="break-words text-sm md:text-[16px] px-6 py-3 cursor-pointer text-gray-600  shadow lg:shadow-none"
          >
            {item._id}
          </td>
          <td
            data-lable="Date"
            className=" text-sm md:text-[16px] px-6 py-3 cursor-pointer text-gray-600  shadow lg:shadow-none"
          >
            {new Date(item.cdate).toLocaleString()}
          </td>
          <td
            data-lable="Name"
            className=" text-sm md:text-[16px] px-6 py-3 cursor-pointer text-gray-600  shadow lg:shadow-none"
          >
            {item.customer.name}
          </td>
          <td
            data-lable="Phone"
            className=" text-sm md:text-[16px] px-6 py-3 cursor-pointer text-gray-600  shadow lg:shadow-none"
          >
            {item.customer.phone}
          </td>
          <td
            data-lable="Total"
            className=" text-sm md:text-[16px] px-6 py-3 cursor-pointer text-gray-600  shadow lg:shadow-none"
          >
            {item.total}
          </td>
          <td
            data-lable="Status"
            className=" text-sm md:text-[16px] px-6 py-3 cursor-pointer text-gray-600 shadow lg:shadow-none"
          >
            {item.status}
          </td>
          <td
            data-lable="Action"
            className=" text-sm md:text-[16px] px-6 py-3 cursor-pointer text-gray-600  shadow lg:shadow-none"
          >
            {item.status === "ĐANG XỬ LÝ" ? (
              <div>
                <button
                  className="link font-bold px-3 py-1 bg-blue-500 transition-all hover:bg-blue-600 w-[30] h-[30] rounded text-gray-600 hover:text-gray-800"
                  onClick={() => this.lnkApproveClick(item._id)}
                >
                  CHẤP NHẬN
                </button>
                <span className="mx-1"></span>
                <button
                  className="link font-bold px-3 py-1 bg-red-400 transition-all hover:bg-red-600 w-[30] h-[30] rounded text-gray-800 "
                  onClick={() => this.lnkCancelClick(item._id)}
                >
                  HỦY
                </button>
              </div>
            ) : (
              <div>
                <button className="uppercase link font-bold px-3 py-1 bg-red-400 transition-all hover:bg-red-600 w-[30] h-[30] rounded text-gray-600 hover:text-gray-800">
                  ĐÃ XỬ LÝ
                </button>
              </div>
            )}
          </td>
        </tr>
      );
    });
    if (this.state.order) {
      var items = this.state.order.items.map((item, index) => {
        return (
          <tr
            key={item.product._id}
            className="bg-white border-b border-x transition-all hover:dark:bg-orange-200 hover:dark:border-orange-200 hover:dark:text-white text-center"
          >
            <td
              data-lable="Amount"
              className="text-sm md:text-[16px] px-6 py-3 cursor-pointer text-gray-600 shadow lg:shadow-none"
            >
              {index + 1}
            </td>
            <td
              data-lable="ID"
              className="break-words text-sm md:text-[16px] px-6 py-3 cursor-pointer text-gray-600 shadow lg:shadow-none"
            >
              {item.product._id}
            </td>
            <td
              data-lable="Name"
              className="text-sm md:text-[16px] px-6 py-3 cursor-pointer text-gray-600 shadow lg:shadow-none"
            >
              {item.product.name}
            </td>
            <td
              data-lable="Image"
              className="text-sm md:text-[16px] px-6 py-3 cursor-pointer text-gray-600 shadow lg:shadow-none"
            >
              <img
                className="object-cover h-[70px]  ml-auto"
                src={"data:image/jpg;base64," + item.product.image}
                width="70px"
                height="70px"
                alt=""
              />
            </td>
            <td
              data-lable="Price"
              className="text-sm md:text-[16px] px-6 py-3 cursor-pointer text-gray-600 shadow lg:shadow-none"
            >
              {item.product.price}
            </td>
            <td
              data-lable="Quantity"
              className="text-sm md:text-[16px] px-6 py-3 cursor-pointer text-gray-600 shadow lg:shadow-none"
            >
              {item.quantity}
            </td>
            <td
              data-lable="Total"
              className="text-sm md:text-[16px] px-6 py-3 cursor-pointer text-gray-600 shadow lg:shadow-none"
            >
              {item.product.price * item.quantity}
            </td>
          </tr>
        );
      });
    }
    return (
      <div>
        <div className="container-xl pt-8">
          <div className="text-center mb-5">
            <Typography className="text-[20px] font-bold font-montserrat">
              DANH SÁCH ĐẶT HÀNG
            </Typography>
          </div>
          <table
            className="w-full text-sm text-left text-gray-500 dark:text-gray-400 table"
            border="1"
          >
            <thead className="text-xs uppercase bg-[#f18634] text-black">
              <tr className="text-center">
                <th scope="col" className="px-6 py-3">
                  MÃ ĐƠN HÀNG
                </th>
                <th scope="col" className="px-6 py-3">
                  NGÀY/GIỜ
                </th>
                <th scope="col" className="px-6 py-3">
                  TÊN KH
                </th>
                <th scope="col" className="px-6 py-3">
                  SĐT
                </th>
                <th scope="col" className="px-6 py-3">
                  TỔNG
                </th>
                <th scope="col" className="px-6 py-3">
                  TRẠNG THÁI
                </th>
                <th scope="col" className="px-6 py-3">
                  PHÊ DUYỆT
                </th>
              </tr>
            </thead>
            <tbody id="tbodyCustumer">{orders}</tbody>
          </table>
        </div>
        {this.state.order ? (
          <div className="container-70 pt-8">
            <div className="text-center mb-5">
              <Typography className="text-[20px] font-bold font-montserrat">
                CHI TIẾT ĐẶT HÀNG
              </Typography>
            </div>
            <table
              className="w-full text-sm text-left text-gray-500 dark:text-gray-400 table"
              border="1"
            >
              <thead className="text-xs uppercase bg-[#f18634] text-black">
                <tr className="text-center">
                  <th scope="col" className="px-6 py-3">
                    STT
                  </th>
                  <th scope="col" className="px-6 py-3">
                    MÃ SẢN PHẨM
                  </th>
                  <th scope="col" className="px-6 py-3">
                    TÊN SẢN PHẨM
                  </th>
                  <th scope="col" className="px-6 py-3">
                    HÌNH ẢNH
                  </th>
                  <th scope="col" className="px-6 py-3">
                    GIÁ
                  </th>
                  <th scope="col" className="px-6 py-3">
                    SỐ LƯỢNG
                  </th>
                  <th scope="col" className="px-6 py-3">
                    GIÁ TỔNG
                  </th>
                </tr>
              </thead>
              <tbody id="tbodyCustumer">{items}</tbody>
            </table>
          </div>
        ) : (
          <div />
        )}
      </div>
    );
  }
  componentDidMount() {
    this.apiGetOrders();
  }
  // event-handlers
  trItemClick(item) {
    this.setState({ order: item });
  }
  // apis
  apiGetOrders() {
    const config = { headers: { "x-access-token": this.context.token } };
    axios.get("/api/admin/orders", config).then((res) => {
      const result = res.data;
      this.setState({ orders: result });
    });
  }
  // event-handlers
  lnkApproveClick(id) {
    this.apiPutOrderStatus(id, "ĐÃ XÁC NHẬN");
  }
  lnkCancelClick(id) {
    this.apiPutOrderStatus(id, "ĐÃ HỦY");
  }
  // apis
  apiPutOrderStatus(id, status) {
    const body = { status: status };
    const config = { headers: { "x-access-token": this.context.token } };
    axios.put("/api/admin/orders/status/" + id, body, config).then((res) => {
      const result = res.data;
      if (result) {
        this.apiGetOrders();
      } else {
        alert("SORRY BABY!");
      }
    });
  }
}
export default Order;
