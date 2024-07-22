import axios from "axios";
import React, { Component } from "react";
import withRouter from "../utils/withRouter";
import MyContext from "../contexts/MyContext";
import { Card, Button, Checkbox, Form, Input, Typography, message } from "antd";
const { Meta } = Card;

class ProductDetail extends Component {
  static contextType = MyContext; // using this.context to access global state
  constructor(props) {
    super(props);
    this.state = {
      product: null,
      txtQuantity: 1,
    };
  }
  render() {
    const prod = this.state.product;
    if (prod != null) {
      return (
        <div className=" bg-liner container-80 px-20 py-10 rounded-xl">
          <div className="flex-row xl:flex xl:space-x-12">
            <Card
              className="mx-auto xl:ml-0 w-[200px] sm:w-[300px]"
              hoverable
              cover={
                <img
                  src={"data:image/jpg;base64," + prod.image}
                  alt="hinh"
                  className="object-cover"
                />
              }
            >
              <div className="flex items-center pt-5 space-x-3 justify-center font-bold">
                <Typography className="text-[#d70018] font-bold text-[18px] leading-[1.1]">
                  {prod.price.toLocaleString() + "đ"}
                </Typography>
              </div>
            </Card>
            <form className=" mt-10 xl:mt-0">
              <div className="flex-row space-y-8">
                <Typography className="text-xl md:text-3xl text-red-400 font-bold text-center xl:text-start font-bold">
                  {prod.name}
                </Typography>
                <div>
                  <ul className="text-white list-disc font-bold">
                    <li className="mt-1 text-sm">
                      Thân giày vẫn được làm từ chất liệu Canvas được dệt tỉ mỉ
                      với những thớ đẹt chặt chẽ nhưng có độ mềm mại và thông
                      thoáng cho bạn cảm giác thoải mái.
                    </li>
                    <li className="mt-1 text-sm">
                      Đế giày cao su dày dặn với độ bền tuyệt hảo.
                    </li>
                    <li className="mt-1 text-sm">
                      Mặt đế vân kim cương giúp tạo độ bám và hạn chế tình trạng
                      trơn trượt hiệu quả.
                    </li>
                    <li className="mt-1 text-sm">
                      Giày có các khoen bằng kim loại để giúp đôi chân được
                      thông thoáng, không bị bí bách khi phải mang giày trong
                      thời gian dài.
                    </li>
                    <li className="mt-1 text-sm">
                      Tất cả đều hội tụ tinh hoa được chắt lọc sau nhiều năm tồn
                      tại trên thị trường của hãng giày Converse danh tiếng.
                    </li>
                  </ul>
                </div>
                <div>
                  <span className="text-left text-white mr-2 font-bold">
                    SỐ LƯỢNG:
                  </span>
                  <Input
                    className="w-[30%]"
                    type="number"
                    min="1"
                    max="99"
                    value={this.state.txtQuantity}
                    onChange={(e) => {
                      this.setState({ txtQuantity: e.target.value });
                    }}
                  ></Input>
                </div>
                <Button
                  className="bg-[#39045d] text-white font-bold transition-all duration-500 hover:text-[#d70018] hover:bg-[#4c055c]"
                  type="submit"
                  value="ADD TO CART"
                  onClick={(e) => this.btnAdd2CartClick(e)}
                >
                  Thêm vào giỏ hàng
                </Button>
              </div>
            </form>
          </div>
        </div>
      );
    }
    return <div />;
  }
  componentDidMount() {
    const params = this.props.params;
    this.apiGetProduct(params.id);
  }
  // apis
  apiGetProduct(id) {
    axios.get("/api/customer/products/" + id).then((res) => {
      const result = res.data;
      this.setState({ product: result });
    });
  }
  // event-handlers
  btnAdd2CartClick(e) {
    e.preventDefault();
    const product = this.state.product;
    const quantity = parseInt(this.state.txtQuantity);
    if (quantity) {
      const mycart = this.context.mycart;
      const index = mycart.findIndex((x) => x.product._id === product._id); // check if the _id exists in mycart
      if (index === -1) {
        // not found, push newItem
        const newItem = { product: product, quantity: quantity };
        mycart.push(newItem);
      } else {
        // increasing the quantity
        mycart[index].quantity += quantity;
      }
      this.context.setMycart(mycart);
      message.success(`Thêm thành công!`);
    } else {
      alert("Please input quantity");
    }
  }
}
export default withRouter(ProductDetail);
