// import axios from 'axios';
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Tooltip, Input } from "antd";
import { FaSearch } from "react-icons/fa";
import withRouter from "../utils/withRouter";
import Inform from "./InformComponent";
import BackToTop from "./BackToTop";
import axios from "axios";
import Swal from "sweetalert2";
class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      txtKeyword: "",
      arrow: "Show",
      isVisible: false,
    };
    this.btnSearchClick = this.btnSearchClick.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
  }

  btnSearchClick(e) {
    e.preventDefault();
    if (!this.state.txtKeyword) {
      Swal.fire({
        icon: "warning",
        title: "Lỗi",
        text: "Vui lòng nhập tên sản phẩm cần tìm",
        confirmButtonColor: "#21499a",
      });
      return;
    }
    this.props.navigate("/product/search/" + this.state.txtKeyword);
  }

  handleFormSubmit(e) {
    e.preventDefault();
    if (!this.state.txtKeyword) {
      Swal.fire({
        icon: "warning",
        title: "Lỗi",
        text: "Vui lòng nhập tên sản phẩm cần tìm",
        confirmButtonColor: "#21499a",
      });
      return;
    }
    this.btnSearchClick(e);
  }

  componentDidMount() {
    this.apiGetCategories();
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll() {
    if (window.scrollY > 300) {
      this.setState({ isVisible: true });
    } else {
      this.setState({ isVisible: false });
    }
  }

  apiGetCategories() {
    axios.get("/api/customer/categories").then((res) => {
      const result = res.data;
      this.setState({ categories: result });
    });
  }

  render() {
    const { txtKeyword, arrow, isVisible } = this.state;
    const { location } = this.props;

    const mergedArrow = () => {
      if (arrow === "Hide") {
        return false;
      }
      if (arrow === "Show") {
        return true;
      }
      return {
        pointAtCenter: true,
      };
    };

    const cates = this.state.categories.map((item) => {
      return (
        <li
          key={item._id}
          className={`text-custom text-14.4 font-bold tracking-0.288 leading-23.04 text-left uppercase ${
            isVisible ? "text-[#fff]" : "text-[#fff]"
          } `}
        >
          <Link to={"/product/category/" + item._id}>{item.name}</Link>
        </li>
      );
    });

    return (
      <div className="overflow-hidden relative pb-28">
        {location.pathname === "/home" ? (
          <div
            className={`w-full z-10 ${
              isVisible ? "bg-black" : "bg-black"
            } fixed top-0 left-0 right-0`}
          >
            <div className="container-80 flex items-center justify-between">
              <Link
                to="/"
                className="text-white text-4xl font-bold leading-8 py-5 uppercase cursor-pointer"
              >
                <div className="bg-white rounded-sm">
                  <img
                    src="https://www.converse.vn/static/version1716217646/frontend/Converse/vietnam/en_US/images/converse.svg"
                    title=""
                    alt=""
                    className="w-[170px] "
                  ></img>
                </div>
              </Link>
              <div className="flex-grow flex justify-center">
                <ul className="flex items-center space-x-4">
                  <li
                    className={`text-custom text-14.4 font-bold tracking-0.288 leading-23.04 text-left uppercase ${
                      isVisible ? "text-[#fff]" : "text-[#fff]"
                    } `}
                  >
                    <Link to="/introduction">GIỚI THIỆU</Link>
                  </li>
                  {cates}
                  <li
                    className={`text-custom text-14.4 font-bold tracking-0.288 leading-23.04 text-left uppercase ${
                      isVisible ? "text-[#fff]" : "text-[#fff]"
                    } `}
                  >
                    <Link to="/contact">liên hệ</Link>
                  </li>
                </ul>
              </div>
              <div className="">
                <Tooltip
                  placement="bottomRight"
                  title={
                    <form className="" onSubmit={this.handleFormSubmit}>
                      <Input
                        type="text"
                        placeholder="Nhập tên sản phẩm bạn muốn tìm...."
                        className="keyword custom-input w-full"
                        value={txtKeyword}
                        required
                        onChange={(e) =>
                          this.setState({ txtKeyword: e.target.value })
                        }
                        suffix={
                          <FaSearch
                            onClick={this.btnSearchClick}
                            style={{ color: "#777", cursor: "pointer" }}
                          />
                        }
                      />
                    </form>
                  }
                  arrow={mergedArrow()}
                >
                  <FaSearch
                    size={20}
                    className="cursor-pointer"
                    style={{ color: "#fffc" }}
                  />
                </Tooltip>
              </div>
              <div className="float-clear" />
              <div className="">
                <Inform />
              </div>
            </div>
          </div>
        ) : (
          <div
            className={`w-full z-10 ${
              isVisible ? "bg-black" : "bg-black"
            } fixed top-0 left-0 right-0`}
          >
            <div className="container-80 flex items-center justify-between">
              <Link
                to="/"
                className="text-white text-4xl font-bold leading-8 py-5 uppercase cursor-pointer"
              >
                <div className="bg-white rounded-sm">
                  <img
                    src="https://www.converse.vn/static/version1716217646/frontend/Converse/vietnam/en_US/images/converse.svg"
                    title=""
                    alt=""
                    className="w-[170px] "
                  ></img>
                </div>
              </Link>
              <div className="flex-grow flex justify-center">
                <ul className="flex items-center space-x-4">
                  <li
                    className={`text-custom text-14.4 font-bold tracking-0.288 leading-23.04 text-left uppercase ${
                      isVisible ? "text-[#fff]" : "text-[#fff]"
                    } `}
                  >
                    <Link to="/introduction">GIỚI THIỆU</Link>
                  </li>
                  {cates}
                  <li
                    className={`text-custom text-14.4 font-bold tracking-0.288 leading-23.04 text-left uppercase ${
                      isVisible ? "text-[#fff]" : "text-[#fff]"
                    } `}
                  >
                    <Link to="/contact">liên hệ</Link>
                  </li>
                </ul>
              </div>
              <div className="">
                <Tooltip
                  placement="bottomRight"
                  title={
                    <form className="" onSubmit={this.handleFormSubmit}>
                      <Input
                        type="text"
                        placeholder="Nhập tên sản phẩm bạn muốn tìm...."
                        className="keyword custom-input w-full"
                        value={txtKeyword}
                        required
                        onChange={(e) =>
                          this.setState({ txtKeyword: e.target.value })
                        }
                        suffix={
                          <FaSearch
                            onClick={this.btnSearchClick}
                            style={{ color: "#777", cursor: "pointer" }}
                          />
                        }
                      />
                    </form>
                  }
                  arrow={mergedArrow()}
                >
                  <FaSearch
                    size={20}
                    className="cursor-pointer"
                    style={{ color: "#fffc" }}
                  />
                </Tooltip>
              </div>
              <div className="float-clear" />
              <div className="">
                <Inform />
              </div>
            </div>
          </div>
        )}
        <BackToTop />
      </div>
    );
  }
}

export default withRouter(Menu);
