import axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Card, Button, Typography } from "antd";
import BannerComponent from "./BannelComponent";
const { Meta } = Card;
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newprods: [],
      hotprods: [],
    };
  }
  render() {
    const newprods = this.state.newprods.map((item) => {
      return (
        <Col>
          <Card
            hoverable
            style={{
              width: 240,
            }}
            cover={
              <img
                src={"data:image/jpg;base64," + item.image}
                className="w-full h-[250px] object-cover"
                alt={item.name}
              />
            }
          >
            <Meta
              className="text-left h-full pt-1 text-[#d70018]"
              title={item.name}
            />
            <div className="flex items-center space-x-2 mt-2  text-center">
              <Typography className="text-[#d70018] font-bold text-[18px] leading-[1.1]">
                {item.price.toLocaleString() + "đ"}
              </Typography>
            </div>
            <Button className="border-orange-500 text-orange-500 w-full mt-3">
              <Link to={"/product/" + item._id}>Chi tiết sản phẩm</Link>
            </Button>
          </Card>
        </Col>
      );
    });
    const hotprods = this.state.hotprods.map((item) => {
      return (
        <Col className="mt-5 xl:mt-0" span={24} md={12} xl={6}>
          <Card
            className="mx-auto"
            hoverable
            style={{
              width: 240,
            }}
            cover={
              <img
                src={"data:image/jpg;base64," + item.image}
                className="w-full h-[250px] object-cover"
                alt={item.name}
              />
            }
          >
            <Meta
              className="text-left h-full pt-1 text-[#d70018]"
              title={item.name}
            />
            <div className="flex items-end space-x-2 mt-2">
              <Typography className="text-[#d70018] font-bold text-[18px] leading-[1.1]">
                {item.price.toLocaleString() + "đ"}
              </Typography>
              <Typography className="line-through text-[#707070] font-bold text-sm">
                {item.price.toLocaleString() + "đ"}
              </Typography>
            </div>
            <Button className="border-orange-500 text-orange-500 w-full mt-3">
              <Link to={"/product/" + item._id}>Chi tiết sản phẩm</Link>
            </Button>
          </Card>
        </Col>
      );
    });
    return (
      <div>
        <div className="mb-10">
          <BannerComponent />
        </div>
        {this.state.hotprods.length > 0 ? (
          <div className="container-80">
            <div className="p-5 bg-liner rounded-xl">
              <div className="mb-3">
                <img
                  className="object-cover mx-auto"
                  src="./hot-sale-use-for-home-page.png"
                  alt=""
                />
              </div>
              <Row gutter={[32, 32]} className="grid grid-cols-4 gap-7">
                {/* flex-row  flex-wrap xl:flex  sm:justify-normal */}
                {hotprods}
              </Row>
            </div>
          </div>
        ) : (
          <div />
        )}
        <div className="container-80 pt-10">
          <div className="rounded-sm">
            <div className="mb-6">
              {" "}
              <Typography className="font-bold text-[#444] text-3xl">
                Sản phẩm mới
              </Typography>
            </div>
            <Row gutter={[32, 32]} className="grid grid-cols-5 gap-7">
              {newprods}
            </Row>
          </div>
        </div>
      </div>
    );
  }
  componentDidMount() {
    this.apiGetNewProducts();
    this.apiGetHotProducts();
  }
  // apis
  apiGetNewProducts() {
    axios.get("/api/customer/products/new").then((res) => {
      const result = res.data;
      this.setState({ newprods: result });
    });
  }
  apiGetHotProducts() {
    axios.get("/api/customer/products/hot").then((res) => {
      const result = res.data;
      this.setState({ hotprods: result });
    });
  }
}
export default Home;
