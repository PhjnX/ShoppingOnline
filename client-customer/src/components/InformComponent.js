// import React, { Component } from "react";
// import { Link } from "react-router-dom";
// import MyContext from "../contexts/MyContext";
// import { ShoppingCartOutlined } from "@ant-design/icons";
// import { Button } from "antd";

// class Inform extends Component {
//   static contextType = MyContext; // using this.context to access global state
//   render() {
//     return (
//       <div className="container-80 flex justify-end space-x-2 py-5 items-center">
//         <div className="">
//           {this.context.token === "" ? (
//             <div className="flex space-x-2">
//               <Button className="border-orange-500 text-orange-500">
//                 <Link to="/login">Login</Link>
//               </Button>
//               <Button className="border-blue-500 text-blue-500">
//                 <Link to="/signup">Sign-up</Link>
//               </Button>
//               <Button className="border-none">
//                 <Link to="/active">Active</Link>
//               </Button>
//             </div>
//           ) : (
//             <div className="flex items-center space-x-2">
//               <b>{this.context.customer.name}</b> <span>|</span>
//               <Link to="/home" onClick={() => this.lnkLogoutClick()}>
//                 Logout
//               </Link>
//               <span>|</span><Link to="/myprofile">My profile</Link> <span>|</span>
//               <div className="">
//                 <Link to="/mycart" className="text-2xl relative">
//                   <ShoppingCartOutlined />
//                   <b className="text-red-500 text-sm absolute bottom-[-10px] right-[-5px] z-10">
//                     {this.context.mycart.length}
//                   </b>
//                 </Link>
//               </div>
//               <span>|</span>
//               <div className="">

//               <Link to="/myorders">My Orders
//                 </Link>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     );
//   }
//   // event-handlers
//   lnkLogoutClick() {
//     this.context.setToken("");
//     this.context.setCustomer(null);
//     this.context.setMycart([]);
//   }
// }
// export default Inform;
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaSignInAlt, FaUser } from "react-icons/fa";
import { Dropdown, Menu, Avatar } from "antd";
import MyContext from "../contexts/MyContext";

class Inform extends Component {
  static contextType = MyContext;

  lnkLogoutClick = () => {
    this.context.setToken("");
    this.context.setCustomer(null);
    this.context.setMycart([]);
  };

  render() {
    const { customer, token, mycart } = this.context;

    const menu = (
      <Menu>
        <Menu.Item key="profile">
          <Link to="/myprofile" className="flex items-center">
            <FaUser size={20} className="mr-2 text-gray-400" />
            Thông tin cá nhân
          </Link>
        </Menu.Item>
        <Menu.Item key="orders">
          <Link to="/myorders" className="flex items-center">
            <FaUser size={20} className="mr-2 text-gray-400" />
            Đơn hàng của tôi
          </Link>
        </Menu.Item>
        <Menu.Item key="logout">
          <span
            onClick={this.lnkLogoutClick}
            className="flex items-center cursor-pointer"
          >
            <FaSignInAlt size={20} className="mr-2 text-gray-400" />
            Đăng xuất
          </span>
        </Menu.Item>
      </Menu>
    );

    const renderAvatar = () => {
      if (customer && customer.name) {
        const initial = customer.name.charAt(0).toUpperCase();
        return (
          <Avatar className="bg-[#e2b94c] text-white cursor-pointer">
            {initial}
          </Avatar>
        );
      }
      return <FaUser size={20} className="mr-2 text-[#fffc]" />;
    };

    return (
      <div className="flex justify-between items-center p-4">
        <div className="flex items-center">
          {token === "" ? (
            <Link to="/login" className="flex items-center">
              <FaUser size={20} className="mr-2 text-[#fffc]" />
            </Link>
          ) : (
            <div className="flex items-center mr-3">
              <Dropdown overlay={menu} trigger={["click"]}>
                <span className="flex items-center cursor-pointer">
                  {renderAvatar()}
                </span>
              </Dropdown>
            </div>
          )}
        </div>
        <div className="flex items-center">
          <Link to="/mycart" className="relative flex items-center">
            <FaShoppingCart size={20} className="text-[#fffc]" />
            <span className="absolute top-3 left-4 bg-[#e2b94c] text-white rounded-full px-1 text-xs">
              {mycart.length}
            </span>
          </Link>
        </div>
      </div>
    );
  }
}

export default Inform;
