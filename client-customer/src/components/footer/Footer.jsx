import { Col, Row, Typography, Button, Input, Space } from "antd";
import React from "react";
import {
  FaMapMarkerAlt,
  FaFacebook,
  FaInstagram,
  FaTiktok,
} from "react-icons/fa";
import { FaSquarePhone } from "react-icons/fa6";
export default function Footer() {
  return (
    <div className="pt-20">
      <div className="bg-[#000000]">
        <div className="container-80 py-8">
          <Row gutter={52} className="flex items-center">
            <Col span={24} md={13}>
              <Typography className="text-white font-bold text-xl">
                CHÀO MỪNG ĐẾN VỚI CONVERSE VIETNAM
              </Typography>
              <Typography className="text-white text-sm mt-2">
                Hãy là người đầu tiên nhận được thông báo về những sản phẩm hay
                bộ sưu tập của chúng tôi trong thời gian sớm nhất từ
                <span className="text-red-500 font-bold"> CONVERSE</span>
              </Typography>
            </Col>
            <Col className="items-center mt-4 md:mt-0" span={24} md={11}>
              <Space className="w-full" direction="vertical" size="middle">
                <Space.Compact className="flex items-center">
                  <form className="w-full">
                    <div className="flex">
                      <div className="relative w-full">
                        <input
                          type="search"
                          id="search-dropdown"
                          className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg rounded-s-gray-100 rounded-s-2 border border-gray-300 focus:ring-red-500 focus:border-red-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-red-500"
                          placeholder="Nhập email"
                          required
                        />
                        <button
                          type="submit"
                          className="absolute top-0 end-0 p-2.5 h-full text-sm font-medium text-white bg-red-700 rounded-e-lg border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
                        >
                          <p>ĐĂNG KÝ NGAY</p>
                        </button>
                      </div>
                    </div>
                  </form>
                </Space.Compact>
              </Space>
            </Col>
          </Row>
        </div>
      </div>
      <div className="bg-[#000000] border-t-[1px] border-t-gray-500">
        <div className="container-80 py-8">
          <Row gutter={[32]} className="">
            <Col span={24} md={9}>
              <Typography className="uppercase text-[18px] font-bold text-white">
                Converse - VietNam{" "}
              </Typography>
              <div>
                <ul className="text-white mt-1 md:mt-2">
                  <li>
                    Tại đây, mỗi một dòng chữ, mỗi chi tiết và hình ảnh đều là
                    những bằng chứng mang dấu ấn lịch sử Converse 100 năm, và
                    đang không ngừng phát triển lớn mạnh.
                  </li>
                  <li className="flex items-center gap-2">
                    <FaMapMarkerAlt />
                    <a
                      href="https://maps.app.goo.gl/bCda2F1pS3TcRqcq6"
                      target="_blank"
                      rel="dofollow"
                    >
                      Converse, 11 Đ. Sư Vạn Hạnh, Phường 12, Quận 10, Hồ Chí
                      Minh
                    </a>
                  </li>
                </ul>
              </div>
            </Col>
            <Col className="mt-5 md:mt-0" span={12} md={5}>
              <Typography className="uppercase text-[18px] font-bold text-white">
                VỀ THƯƠNG HIỆU
              </Typography>
              <ul className="flex-row space-y-1 text-white mt-1">
                <li>Giới thiệu</li>
                <li>Điều khoản dịch vụ</li>
                <li>Bảo mật và điều khoản</li>
              </ul>
            </Col>
            <Col className="mt-5 md:mt-0" span={12} md={5}>
              <Typography className="uppercase text-[18px] font-bold text-white">
                LIÊN HỆ
              </Typography>
              <ul className="flex-row space-y-1 text-white mt-1 ">
                <li className="flex items-center gap-2">
                  <FaFacebook />
                  <a
                    href="https://www.facebook.com/converse.vietnam"
                    target="_blank"
                    rel="dofollow"
                  >
                    Facebook
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <FaInstagram />

                  <a
                    href="https://www.instagram.com/converse.vn/"
                    target="_blank"
                    rel="dofollow"
                  >
                    Instagram
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <FaTiktok />
                  <a
                    href="https://www.tiktok.com/@converse?lang=vi-VN"
                    target="_blank"
                    rel="dofollow"
                  >
                    Tiktok
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <FaSquarePhone />
                  0989891465
                </li>
              </ul>
            </Col>
            <Col className="mt-5 md:mt-0 text-center" span={24} md={5}>
              <Typography className="uppercase text-[18px] font-bold text-white">
                THÔNG TIN THÊM
              </Typography>
              <div className="mt-2 flex space-y-4 justify-center items-center flex-wrap space-x-10 md:space-x-0 md:inline-block">
                <div className="w-[130px] h-[50px]">
                  <img
                    className="object-cover w-full"
                    src="./logo-bct.png"
                    alt=""
                  />
                </div>
                <div className="w-[150px] h-[50px] mt-0 md:mt-5">
                  <img
                    className="object-cover "
                    src="./dmca_copyright_protected150c.png"
                    alt=""
                  />
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}
