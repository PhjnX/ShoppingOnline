import React from "react";

export default function AboutComment() {
  return (
    <section className="text-gray-600 body-font container-80">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
          <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
            <div className="w-24 h-24 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
              <img
                src="//bizweb.dktcdn.net/thumb/large/100/419/301/products/171118c8.jpg?v=1613990958450"
                alt=""
              />
            </div>
            <div className="flex-grow">
              <p className="leading-relaxed text-base">
                Chuck 70s, một trong những sản phẩm mang đậm chất vintage với
                những chi tiết mang lại nét hoài cố cho dòng giày vốn để hồi
                tưởng những năm tháng huy hoàng của nhà giày bóng rổ
              </p>
              <h2 className="text-gray-900 text-lg title-font mt-3 font-bold italic">
                Converse Chuck 70s
              </h2>
            </div>
          </div>

          <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
            <div className="w-24 h-24 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
              <img
                src="https://i.ibb.co/G90brSB/Remove-bg-ai-1721230666389.png"
                alt=""
              />
            </div>
            <div className="flex-grow">
              <p className="leading-relaxed text-base">
                All Star Classic Kid, thiết kế từ chất liệu vải canvas nhẹ, có
                zip bên hông tạo cảm giác thoải mái và an toàn cho trẻ em khi
                mang giúp trẻ có thể vận động một cách tốt nhất.
              </p>
              <h2 className="text-gray-900 text-lg title-font mt-3 font-bold italic">
                Converse All Star Classic Kid
              </h2>
            </div>
          </div>

          <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
            <div className="w-24 h-24 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
              <img
                src="https://converse.ca/media/catalog/product/cache/f9d46213ae1d882c35b397bec3e31308/c/o/config150148c-prem_100_c_2nd.jpg"
                alt=""
                className="object-cover w-full h-full"
              />
            </div>
            <div className="flex-grow">
              <p className="leading-relaxed text-base">
                Chuck II High Top,thiết kế trẻ trung, năng động kết hợp với chất
                liệu bền đẹp, mềm mại, mang lại cảm giác êm ái trên từng bước
                chân, giúp người mang tự tin thể hiện phong cách cá nhân.
              </p>
              <h2 className="text-gray-900 text-lg title-font mt-3 font-bold italic">
                Converse Chuck II High Top
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
