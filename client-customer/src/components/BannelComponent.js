import React from "react";
import { Carousel } from "antd";
import { StarOutlined } from "@ant-design/icons";

const BannerComponent = () => {
  return (
    <div className="container-80">
      <Carousel>
        <div className="h-[450px]">
          <figure className="relative h-full">
            <img
              src="https://mauweb.monamedia.net/converse/wp-content/uploads/2019/05/slide-1.jpg"
              alt="Slide 1"
              className="w-full h-full object-cover relative"
            />
            <figcaption className="absolute w-[60%] h-full top-1/4 left-0 pl-16">
              <h1 className="text-white text-[55px] flex items-center font-bold tracking-wide">
                CONVERSE SNE
                <StarOutlined />
                KER
              </h1>
              <p className=" w-[90%] text-white text-base text-[#f1f1f1]">
                Converse All-Star là chiếc đầu tiên và đại diện cho phong cách
                Converse cổ điển. Đặc điểm nổi tiếng nhất là huy hiệu Converse
                All-Star và chữ ký của Chuck Taylor. Vị trí phổ biến là mắt cá
                chân-một ý tưởng do chính Chuck Taylor đề xuất.
              </p>
            </figcaption>
          </figure>
        </div>
        <div className="h-[450px]">
          <figure className="relative h-full">
            <img
              src="https://mauweb.monamedia.net/converse/wp-content/uploads/2019/05/slide-2.jpg"
              alt="Slide 1"
              className="w-full h-full object-cover relative"
            />
            <figcaption className="absolute w-[60%] h-full top-1/4 right-0 pl-24">
              <h1 className="text-white text-[55px] flex items-center font-bold tracking-wide">
                CONVERSE SNE
                <StarOutlined />
                KER
              </h1>
              <p className=" text-white text-base text-[#f1f1f1]">
                Mang trong mình thiết kế đơn giản, hoài cổ, không có quá nhiều
                chi tiết cầu kỳ, màu sắc lựa chọn đa dạng, đây sẽ là một dòng
                giày phù hợp với những bạn học sinh, sinh viên, hoặc những người
                ưa thích sự tối giản, tiện lợi.
              </p>
            </figcaption>
          </figure>
        </div>
        <div className="h-[450px]">
          <figure className="relative h-full">
            <img
              src="https://mauweb.monamedia.net/converse/wp-content/uploads/2019/05/slide-5.jpg"
              alt="Slide 1"
              className="w-full h-full object-cover relative"
            />
            <figcaption className="absolute w-[70%] h-full top-8 -left-10 pl-20">
              <h1 className="text-white text-[55px] flex items-center  font-bold tracking-wide">
                CONVERSE SNE
                <StarOutlined />
                KER
              </h1>
            </figcaption>
            <figcaption className="absolute w-1/3 h-full top-1/3 right-12 pl-16">
              <p className=" text-white text-base text-[#f1f1f1]">
                Các màu theo mùa có thiết kế và kiểu dáng giống với Converse cổ
                điển. Điểm khác biệt là màu sắc thay đổi theo mùa hoặc theo từng
                xu hướng. Có nhiều phiên bản màu khác nhau cho các màu theo mùa
                và mỗi màu tương ứng với một xu hướng. Thông báo sau được in
                đậm: “Thêm màu sắc cho cuộc sống của bạn”
              </p>
            </figcaption>
          </figure>
        </div>
      </Carousel>
    </div>
  );
};

export default BannerComponent;
