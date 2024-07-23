import React from "react";

export default function AboutUs() {
  return (
    <div className="flex items-center space-x-10 container-80">
      <div className="w-1/2">
        <img
          className="w-full h-full object-cover rounded"
          src="//bizweb.dktcdn.net/100/039/880/files/converse-keith-haring.jpg?v=1621555619770"
          alt="introduction_image"
        />
      </div>
      <div className="w-1/2">
        <h1 className="text-4xl texxt-[#1c1c1c] font-bold mb-7">
          Đôi lời về Converse Shoe
        </h1>
        <p className="text-gray-500 text-base leading-6">
          "Converse là thương hiệu giày thể thao nổi tiếng được thành lập vào
          năm 1908, với tiền thân là một công ty giày của Mỹ chuyên sản xuất
          giày bằng vật liệu cao su. Trải qua nhiều giai đoạn thăng trầm, năm
          2003, Converse trở thành công ty con của Nike, Inc. Bên cạnh giày thể
          thao, Converse cũng thiết kế các sản phẩm thời trang khác như áo thun,
          đồng hồ, túi xách,..."
        </p>
      </div>
    </div>
  );
}
