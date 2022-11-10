import { getShortAddress } from "../../utils";
import { ethers } from "ethers";
import { useNavigate } from "react-router-dom";

const Status = {
  0: { text: "PENDING", color: "orange" },
  1: { text: "SHIPPED", color: "yellow" },
  2: { text: "DELIVERED", color: "green" },
  3: { text: "DISPUTTED", color: "red" },
  4: { text: "REFUNDED", color: "blue" },
};

const OrderRow = ({ order, isSold }) => {
  const navigate = useNavigate();
  const shortAddress = getShortAddress(
    isSold ? order.buyer : order.item.seller
  );
  const orderedAt = new Date(order.orderedAt * 1000).toLocaleString();
  const status = Status[order.status];

  const performShipping = async () => {};
  const confirmDelivery = async () => {};
  const disputeOrder = async () => {};

  return (
    <tr>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <a
          onClick={() => navigate("/orders/" + order.id)}
          className="cursor-pointer"
        >
          <p className="text-blue-900 whitespace-no-wrap underline">
            {parseInt(order.id, 16)}
          </p>
        </a>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <div className="flex items-center">
          <div className="flex-shrink-0 w-10 h-10">
            <img
              className="w-full h-full rounded-full"
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
              alt=""
            />
          </div>
          <div className="ml-3">
            <p className="text-gray-900 whitespace-no-wrap">{shortAddress}</p>
          </div>
        </div>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <a
          onClick={() => {
            navigate("/productdetails/" + order.item.id);
          }}
          className="cursor-pointer"
        >
          <p className="text-blue-900 whitespace-no-wrap underline">
            {order.item.title}
          </p>
        </a>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">{orderedAt}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">
          {ethers.utils.formatEther(order.amount)}
        </p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">{order.quantity}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <span
          className={
            "relative inline-block px-3 py-1 font-semibold text-" +
            status.color +
            "-900 leading-tight"
          }
        >
          <span
            aria-hidden
            className={
              "bg-" +
              status.color +
              "-200 absolute inset-0 opacity-50 rounded-full"
            }
          ></span>
          <span className="relative">{status.text}</span>
        </span>
      </td>
    </tr>
  );
};

export default OrderRow;