import axios from "axios";
import React, { Component } from "react";
import { Navigate } from "react-router-dom";
import MyContext from "../contexts/MyContext";
import { Typography } from "antd";

class Myorders extends Component {
  static contextType = MyContext; // using this.context to access global state
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      order: null,
    };
  }
  render() {
    if (this.context.token === "") return <Navigate replace to="/login" />;
    const orders = this.state.orders.map((item) => {
      return (
        <tr
          key={item._id}
          className="datatable"
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
            className=" text-sm md:text-[16px] px-6 py-3 cursor-pointer text-gray-600  shadow lg:shadow-none"
          >
            {item.status}
          </td>
        </tr>
      );
    });
    if (this.state.order) {
      var items = this.state.order.items.map((item, index) => {
        return (
          <tr
            key={item.product._id}
            className=" bg-white border-b border-x transition-all hover:dark:bg-orange-200 hover:dark:border-orange-200 hover:dark:text-white text-center"
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
              data-lable="Image"
              className=" text-sm md:text-[16px] px-6 py-3 cursor-pointer text-gray-600  shadow lg:shadow-none"
            >
              <img
                src={"data:image/jpg;base64," + item.product.image}
                className="ml-auto"
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
              data-lable="Total"
              className=" text-sm md:text-[16px] px-6 py-3 cursor-pointer text-gray-600  shadow lg:shadow-none"
            >
              {item.product.price * item.quantity}
            </td>
          </tr>
        );
      });
    }
    return (
      <div>
        <div className="container-70">
          <div className="text-center mb-5">
            <Typography className="text-[20px] font-bold font-montserrat">
              ORDER LIST
            </Typography>
          </div>

          <table
            className="w-full text-sm text-left text-gray-500 dark:text-gray-400 table"
            border="1"
          >
            <thead className="text-xs uppercase bg-[#f18634] text-black">
              <tr className="text-center">
                <th className="px-6 py-3">ID</th>
                <th className="px-6 py-3">Creation date</th>
                <th className="px-6 py-3">Cust.name</th>
                <th className="px-6 py-3">Cust.phone</th>
                <th className="px-6 py-3">Total</th>
                <th className="px-6 py-3">Status</th>
              </tr>
            </thead>
            <tbody className="text-center">{orders}</tbody>
          </table>
        </div>
        {this.state.order ? (
          <div className="container-80">
            <div className="text-center mb-5">
              <Typography className="text-[20px] font-bold font-montserrat">
                Chi tiết đặt hàng
              </Typography>
            </div>

            <table
              className="w-full text-sm text-left text-gray-500 dark:text-gray-400 table"
              border="1"
            >
              <thead className="text-xs uppercase bg-[#f18634] text-black">
                <tr className="text-center">
                  <th className="px-6 py-3">No.</th>
                  <th className="px-6 py-3">Prod.ID</th>
                  <th className="px-6 py-3">Prod.name</th>
                  <th className="px-6 py-3">Image</th>
                  <th className="px-6 py-3">Price</th>
                  <th className="px-6 py-3">Quantity</th>
                  <th className="px-6 py-3">Amount</th>
                </tr>
              </thead>

              <tbody className="text-center">{items}</tbody>
            </table>
          </div>
        ) : (
          <div />
        )}
      </div>
    );
  }
  componentDidMount() {
    if (this.context.customer) {
      const cid = this.context.customer._id;
      this.apiGetOrdersByCustID(cid);
    }
  }
  // event-handlers
  trItemClick(item) {
    this.setState({ order: item });
  }
  // apis
  apiGetOrdersByCustID(cid) {
    const config = { headers: { "x-access-token": this.context.token } };
    axios.get("/api/customer/orders/customer/" + cid, config).then((res) => {
      const result = res.data;
      this.setState({ orders: result });
    });
  }
}
export default Myorders;
