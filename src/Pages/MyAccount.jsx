import React, { useState } from "react";
import { Nav, ProductDetails } from "../Components";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { updatePassword } from "../Redux/slices/Authslice";

function MyAccount() {
  const user = useSelector((state) => state?.auth?.user);
  const orderList = useSelector((state) => state?.auth?.orders);

  const dispatch = useDispatch();

  const [showPass, setShowPass] = useState(false);

  const [updateData, setUpdateData] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [openPopup, setOpenPopup] = useState(false);
  const [orderData, setOrderData] = useState({});

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (
      !updateData.confirmPassword ||
      !updateData.newPassword ||
      !updateData.oldPassword
    ) {
      alert("All Fields are Mandatory");
      return;
    }
    if (updateData.confirmPassword !== updateData.newPassword) {
      alert("Both Password should be same");
      return;
    }
    const productOrdred = dispatch(updatePassword(updateData));
    if (productOrdred) {
      alert("Product Ordered successfully");
    }
  };

  const handleInputChange = (e) => {
    setUpdateData({
      ...updateData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      {user ? (
        <div className="w-full flex flex-col items-center justify-around relative">
          {/* Nav Bar section */}
          <Nav />
          {/* Body section */}
          <div className="w-full flex flex-col md:flex-row items-center justify-around">
            {/* Password update section */}
            <div className="w-full md:w-2/5 flex">
              <form
                className="w-[90]% md:w-[350px]  flex flex-col gap-4 capitalize items-center  justify-around mx-auto my-[100px] bg_gr py-5 
            rounded-xl
            "
                onSubmit={handleFormSubmit}
              >
                <h1 className="font-semibold text-3xl">Update Password</h1>
                <h3 className="font-semibold text-xl">Email</h3>
                <h3 className="w-[80%] text-center bg-slate-200 rounded-md lowercase">
                  {user.email}
                </h3>
                <label
                  htmlFor="oldpassword"
                  className="w-[80%] text-left font-semibold"
                >
                  {" "}
                  Old password:
                </label>
                <div className="w-[80%] bg-white rounded-md flex ">
                  <input
                    type={`${!showPass ? "text" : "password"}`}
                    name="oldPassword"
                    id="oldpassword"
                    className="w-[80%] rounded-md px-2 text-sm py-1 outline-none bg-transparent"
                    placeholder="Enter Your oldpassword"
                    onChange={handleInputChange}
                    value={updateData.oldPassword}
                  />
                  <button
                    className="w-[20%] h-full block text-center text-xl"
                    type="button"
                    onClick={() => setShowPass(!showPass)}
                  >
                    {!showPass ? <AiFillEyeInvisible /> : <AiFillEye />}
                  </button>
                </div>
                <label
                  htmlFor="newPassword"
                  className="w-[80%] text-left font-semibold"
                >
                  New Password:
                </label>
                <div className="w-[80%] bg-white rounded-md flex ">
                  <input
                    type={`${!showPass ? "text" : "password"}`}
                    name="newPassword"
                    id="newPassword"
                    className="w-[80%] rounded-md px-2 text-sm py-1 outline-none bg-transparent"
                    placeholder="Enter Your New Password"
                    onChange={handleInputChange}
                    value={updateData.newPassword}
                  />
                  <button
                    className="w-[20%] h-full block text-center text-xl"
                    type="button"
                    onClick={() => setShowPass(!showPass)}
                  >
                    {!showPass ? <AiFillEyeInvisible /> : <AiFillEye />}
                  </button>
                </div>
                <label
                  htmlFor="confirmPassword"
                  className="w-[80%] text-left font-semibold"
                >
                  confirm Password:
                </label>
                <div className="w-[80%] bg-white rounded-md flex ">
                  <input
                    type={`${!showPass ? "text" : "Password"}`}
                    name="confirmPassword"
                    id="confirmPassword"
                    className="w-[80%] rounded-md px-2 text-sm py-1 outline-none bg-transparent"
                    placeholder="Confirm Your Password"
                    onChange={handleInputChange}
                    value={updateData.confirmPassword}
                  />
                  <button
                    className="w-[20%] h-full block text-center text-xl"
                    type="button"
                    onClick={() => setShowPass(!showPass)}
                  >
                    {!showPass ? <AiFillEyeInvisible /> : <AiFillEye />}
                  </button>
                </div>
                <button
                  className="w-4/5 bg-orange-400 text-white font-semibold rounded-md shadow-md hover:bg-orange-600 py-2"
                  type="submit"
                >
                  Update Password
                </button>
              </form>
            </div>

            {/* Order Details Section */}
            <div className="w-full md:w-2/5 flex flex-col items-center justify-between">
              <h1 className="font-semibold text-2xl capitalize my-3 ">
                Order Details
              </h1>

              <div className="w-full flex flex-col gap-4 items-center justify-around overflow-scrool">
                {orderList?.map((order) => (
                  <div
                    key={order?.id}
                    className="w-full md:w-[350px] h-[150px] border-2 flex items-center justify-around p-3 rounded-md "
                  >
                    <img
                      src={order?.image}
                      alt="image"
                      className="w-[150px] h-[120px] rounded-md"
                    />
                    <div className="w-[150px] h-full flex flex-col items-center justify-around">
                      <h1 className="font-bold text-blue-500 text-[14px]">
                        {order.title}
                      </h1>
                      <div className="flex font-semibold items-center justify-between w-full text-[13px]">
                        <h3 className="text-yellow-900">${order.price}</h3>{" "}
                        <h3>
                          Quantity 
                          <span className="p-1 bg-white rounded-md">
                            {order.quantity || 1}
                          </span>
                        </h3>
                      </div>
                      <button
                        className="px-3 py-1 bg-orange-400 text-white font-semibold rounded-md shadow-md hover:bg-orange-600"
                        onClick={() => {
                          setOpenPopup(true);
                          setOrderData(order);
                        }}
                      >
                        Details
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {openPopup ? (
            <ProductDetails
              data={orderData}
              onClose={() => setOpenPopup(false)}
            />
          ) : (
            <></>
          )}
        </div>
      ) : (
        "Login To get Your Account details"
      )}
    </>
  );
}

export default MyAccount;
