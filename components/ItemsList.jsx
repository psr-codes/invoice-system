import React from "react";
import Link from "next/link";

export default function ItemsList({ itemList, setItemList, user }) {
    console.log("itemList", itemList);
    return (
        <div className=" py-12shadow-lg w-full mx-auto">
            {/* Desktop Responsive Start */}
            <div className="hidden sm:flex flex-col justify-start items-start w-[80vw] mx-auto ">
                <div className="pl-4 lg:px-5 2xl:px-10 flex flex-row justify-center items-end space-x-4">
                    <h1 className="text-4xl font-semibold leading-9 text-gray-800">
                        Items
                    </h1>
                    <p className="text-base leading-4 text-gray-600 pb-1">
                        (12 Items)
                    </p>
                </div>
                <table className=" mx-auto mt-16 py-5 whitespace-nowrap  border-2 border-sky-500 shadow-lg w-full">
                    <thead
                        aria-label="table heading"
                        className="w-full h-16 text-left py-6 bg-gray-50 border-gray-200 border-b "
                    >
                        <tr>
                            <th className="text-base font-medium leading-4 text-gray-600 2xl:pl-10 pl-2 lg:pl-5">
                                PRODUCT
                            </th>
                            <th className="text-base font-medium leading-4 text-gray-600 pl-6 lg:pl-10 2xl:pl-26">
                                PRICE
                            </th>
                            <th className="text-base font-medium leading-4 text-gray-600 pl-6 lg:pl-10 2xl:pl-26">
                                QUANTITY
                            </th>
                            <th className="text-base font-medium leading-4 text-gray-600 pl-6 lg:pl-10 2xl:pl-26">
                                TOTAL
                            </th>

                            <th className="text-base font-medium leading-4 text-gray-600 pl-6 lg:pl-10 2xl:pl-40">
                                EDIT
                            </th>
                            <th className="text-base font-medium leading-4 text-gray-600 2xl:pl-28 2xl:pr-20 pr-4 lg:pr-10" />
                        </tr>
                    </thead>
                    <tbody className="w-full text-left py-3 my-3">
                        {itemList &&
                            itemList.map((item, index) => {
                                const handleRemoveItem = () => {
                                    const updatedItemList = [...itemList];

                                    updatedItemList.splice(index, 1);

                                    setItemList(updatedItemList);
                                };
                                let total = item.price * item.quantity;
                                return (
                                    <tr className="border-gray-200 border-b  " key={item}>
                                        <th className="mt-10 text-base font-medium leading-4 text-gray-600 pl-6 lg:pl-10 2xl:pl-26">
                                            <p className=" text-base leading-4 text-gray-800">
                                                {item.itemName}
                                            </p>
                                        </th>
                                        <th className="my-10  pl-6 lg:pl-10 2xl:pl-26">
                                            <p className>{item.price} </p>
                                        </th>
                                        <th className="my-10 text-base font-medium leading-4 text-gray-600 pl-6 lg:pl-10 2xl:pl-26">
                                            <p className>{item.quantity} </p>
                                        </th>
                                        <th className="my-10 text-base font-medium leading-4 text-gray-600 pl-6 lg:pl-10 2xl:pl-26">
                                            <p className>{total}</p>
                                        </th>
                                        <th className="my-10 pl-4 lg:pl-12  2xl:pl-28 pr-4 2xl:pr-20">
                                            <button
                                                className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-800 text-base leading-none text-red-600 hover:text-red-800"
                                                onClick={handleRemoveItem}
                                            >
                                                Remove Item
                                            </button>
                                        </th>
                                    </tr>
                                );
                            })}
                    </tbody>
                </table>
                <div className=" flex items-end justify-end text-base border border-red-500 w-full pr-5 font-bold leading-4 text-gray-600 2xl:pl-10 pl-2 lg:pl-5 mt-3">
                    <div className="flex items-center justify-center  my-2 py-2 mx-2">
                        Grand Total:
                        {itemList.length > 0
                            ? itemList.reduce(
                                  (acc, item) =>
                                      acc + item.price * item.quantity,
                                  0
                              )
                            : 0}
                    </div>
                    <div>
                        <Link
                            // href={{
                            //     pathname: "/invoice",
                            //     query: {
                            //         itemList: JSON.stringify(itemList),
                            //         user: JSON.stringify(user),
                            //     },
                            // }}
                            href="/invoice"
                            className="mx-2 my-2 bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-6 py-2 text-xs"
                        >
                            Generate Invoice
                        </Link>
                    </div>
                </div>
            </div>
            {/* Desktop Responsive End */}
            {/* Mobile Responsive Start */}
            <div className=" flex justify-center items-center">
                <div className="sm:hidden flex flex-col justify-start items-start ">
                    <div className="px-4 lg:px-10 2xl:px-20 flex flex-row justify-start items-end space-x-4">
                        <p className="text-4xl font-semibold leading-9 text-gray-800">
                            Favourites
                        </p>
                        <p className="text-base leading-4 text-gray-600 pb-1">
                            (12 Items)
                        </p>
                    </div>
                    <div className="border-gray-200 border-b pb-10">
                        <div className="px-4 flex flex-col jusitfy-center items-start mt-10">
                            <div>
                                <img
                                    src="https://i.ibb.co/bHgJDpd/imani-bahati-Lx-Vx-PA1-LOVM-unsplash-2.png"
                                    alt="shoe"
                                />
                            </div>
                        </div>
                        <div className="px-4 mt-6 flex justify-between w-full flex jusitfy-center items-center">
                            <div>
                                <p className="w-36 text-base leading-6 text-gray-800">
                                    Jet black sportsmen shoes
                                </p>
                            </div>
                            <div>
                                <p className="text-base font-semibold leading-4 text-gray-800">
                                    $90
                                </p>
                            </div>
                        </div>
                        <div className="px-4 mt-6 flex justify-between w-full flex jusitfy-center items-center">
                            <div>
                                <a
                                    href="javascript:void(0)"
                                    className="hover:underline text-base font-medium leading-none focus:outline-none focus:underline  text-gray-800"
                                >
                                    {" "}
                                    View details
                                </a>
                            </div>
                            <div>
                                <button className="focus:outline-none focus:ring-red-800 focus:ring-offset-2 focus:ring-2 text-base leading-none text-red-600 hover:text-red-800">
                                    <p>Remove Item</p>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="border-gray-200 border-b pb-10">
                        <div className="px-4 flex flex-col jusitfy-center items-start mt-10">
                            <div>
                                <img
                                    src="https://i.ibb.co/6y62DnT/daniel-storek-JM-q-KEd1-GMI-unsplash-1-1.png"
                                    alt="shoes"
                                />
                            </div>
                        </div>
                        <div className="px-4 mt-6 flex justify-between w-full flex jusitfy-center items-center">
                            <div>
                                <p className="w-36 text-base leading-6 text-gray-800">
                                    Jet black sportsmen shoes
                                </p>
                            </div>
                            <div>
                                <p className="text-base font-semibold leading-4 text-gray-800">
                                    $90
                                </p>
                            </div>
                        </div>
                        <div className="px-4 mt-6 flex justify-between w-full flex jusitfy-center items-center">
                            <div>
                                <a
                                    href="javascript:void(0)"
                                    className="hover:underline text-base font-medium leading-none focus:outline-none focus:underline  text-gray-800"
                                >
                                    {" "}
                                    View details
                                </a>
                            </div>
                            <div>
                                <button className="focus:outline-none focus:ring-red-800 focus:ring-offset-2 focus:ring-2 text-base leading-none text-red-600 hover:text-red-800">
                                    <p>Remove Item</p>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="border-gray-200 border-b pb-10">
                        <div className="px-4 flex flex-col jusitfy-center items-start mt-10">
                            <div>
                                <img
                                    src="https://i.ibb.co/LR5LyDw/charles-deluvio-1-nx1-QR5d-TE-unsplash-1-1.png"
                                    alt="glasses"
                                />
                            </div>
                        </div>
                        <div className="px-4 mt-6 flex justify-between w-full flex jusitfy-center items-center">
                            <div>
                                <p className="w-36 text-base leading-6 text-gray-800">
                                    Jet black sportsmen shoes
                                </p>
                            </div>
                            <div>
                                <p className="text-base font-semibold leading-4 text-gray-800">
                                    $90
                                </p>
                            </div>
                        </div>
                        <div className="px-4 mt-6 flex justify-between w-full flex jusitfy-center items-center">
                            <div>
                                <a
                                    href="javascript:void(0)"
                                    className="hover:underline text-base font-medium leading-none focus:outline-none focus:underline  text-gray-800"
                                >
                                    {" "}
                                    View details
                                </a>
                            </div>
                            <div>
                                <button className="focus:outline-none focus:ring-red-800 focus:ring-offset-2 focus:ring-2 text-base leading-none text-red-600 hover:text-red-800">
                                    <p>Remove Item</p>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="border-gray-200 border-b pb-10">
                        <div className="px-4 flex flex-col jusitfy-center items-start mt-10">
                            <div>
                                <img
                                    src="https://i.ibb.co/XzvpLZz/rocknwool-8-Lsy75-Lq-GVc-unsplash-1-4.png"
                                    alt="girl"
                                />
                            </div>
                        </div>
                        <div className="px-4 mt-6 flex justify-between w-full flex jusitfy-center items-center">
                            <div>
                                <p className="w-36 text-base leading-6 text-gray-800">
                                    Jet black sportsmen shoes
                                </p>
                            </div>
                            <div>
                                <p className="text-base font-semibold leading-4 text-gray-800">
                                    $90
                                </p>
                            </div>
                        </div>
                        <div className="px-4 mt-6 flex justify-between w-full flex jusitfy-center items-center">
                            <div>
                                <a
                                    href="javascript:void(0)"
                                    className="hover:underline text-base font-medium leading-none focus:outline-none focus:underline  text-gray-800"
                                >
                                    {" "}
                                    View details
                                </a>
                            </div>
                            <div>
                                <button className="focus:outline-none focus:ring-red-800 focus:ring-offset-2 focus:ring-2 text-base leading-none text-red-600 hover:text-red-800">
                                    <p>Remove Item</p>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Mobile Responsive End */}
        </div>
    );
}
