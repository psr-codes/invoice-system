"use client";
import React, { useState, useEffect } from "react";
import ItemsList from "./ItemsList";

const Form = () => {
    const [user, setUser] = useState({
        name: "",
        email: "",
        phone: "",
    });
    const [item, setItem] = useState({
        itemName: "",
        price: "",
        quantity: "",
    });

    const [itemList, setItemList] = useState([]);

    const handleOnUserChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };
    const handleOnItemChange = (e) => {
        setItem({ ...item, [e.target.name]: e.target.value });
    };

    const handleAddItem = () => {
        const newItem = {
            itemName: item.itemName,
            price: item.price,
            quantity: item.quantity,
        };

        setItemList([...itemList, newItem]);

        setItem({
            itemName: "",
            price: "",
            quantity: "",
        });
    };
    useEffect(() => {
        console.log(user);
    }, [user]);
    useEffect(() => {
        console.log(item);
    }, [item]);

    useEffect(() => {
        console.log(itemList);
    }, [itemList]);

    return (
        <>
            <div className="lg:container lg:mx-auto grid grid-cols-9 lg:grid-cols-12">
                <div className="col-span-9 lg:col-span-8 xl:col-span-7 bg-white h-auto lg:h-screen relative lg:px-10 p-6 lg:py-12">
                    <p>
                        <svg
                            className="inline"
                            width="6"
                            height="10"
                            viewBox="0 0 6 10"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M5 1L1 5L5 9"
                                stroke="#4B5563"
                                strokeWidth="1.25"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                        <span className="cursor-pointer text-gray-500 font-normal text-base ml-2.5">
                            Back
                        </span>
                    </p>
                    <h3 className="font-semibold text-gray-800 text-4xl mt-2">
                        Checkout
                    </h3>

                    <div className="mt-7 lg:mt-20">
                        <p className="font-normal text-sm text-gray-600 mb-3">
                            Your details
                        </p>
                        <h3 className="text-2xl text-gray-800 font-medium">
                            Enter your details
                        </h3>

                        <form className="mt-8" autoComplete="off">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                                <input
                                    aria-label="name"
                                    type="text"
                                    name="name"
                                    className="border-b-2 border-gray-300 pb-3 text-base text-gray-600 font-normal placeholder-gray-600 focus:outline-none"
                                    id="name"
                                    placeholder="Your name"
                                    value={user.name}
                                    onChange={handleOnUserChange}
                                />
                                <input
                                    aria-label="email"
                                    className="border-b-2 border-gray-300 pb-3 text-base text-gray-600 font-normal placeholder-gray-600 focus:outline-none"
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="Email address"
                                    value={user.email}
                                    onChange={handleOnUserChange}
                                />

                                <input
                                    aria-label="phone"
                                    className="border-b-2 border-gray-300 pb-3 text-base text-gray-600 font-normal placeholder-gray-600 focus:outline-none"
                                    type="text"
                                    name="phone"
                                    id="phone"
                                    placeholder="Phone Number"
                                    value={user.phone}
                                    onChange={handleOnUserChange}
                                />
                            </div>
                        </form>
                    </div>
                    <div className="mt-7 lg:mt-20">
                        <div className="my-5 py-5 ">
                            <ItemsList itemList={itemList} setItemList={setItemList} user={user}/>
                        </div>
                        <p className="font-normal text-sm text-gray-600 mb-3">
                            Item details
                        </p>

                        <h3 className="text-2xl text-gray-800 font-medium">
                            Add items details
                        </h3>

                        <form className="mt-8" autoComplete="off">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                                <input
                                    aria-label="itemName"
                                    type="text"
                                    name="itemName"
                                    className="border-b-2 border-gray-300 pb-3 text-base text-gray-600 font-normal placeholder-gray-600 focus:outline-none"
                                    id="itemName"
                                    placeholder="Item name"
                                    value={item.itemName}
                                    onChange={handleOnItemChange}
                                />
                                <input
                                    aria-label="price"
                                    className="border-b-2 border-gray-300 pb-3 text-base text-gray-600 font-normal placeholder-gray-600 focus:outline-none"
                                    type="text"
                                    name="price"
                                    id="price"
                                    placeholder="Item Price"
                                    value={item.price}
                                    onChange={handleOnItemChange}
                                />

                                <input
                                    aria-label="quantity"
                                    className="border-b-2 border-gray-300 pb-3 text-base text-gray-600 font-normal placeholder-gray-600 focus:outline-none"
                                    type="text"
                                    name="quantity"
                                    id="quantity"
                                    placeholder="Quantity"
                                    value={item.quantity}
                                    onChange={handleOnItemChange}
                                />
                            </div>
                        </form>
                        <button
                            className={`mx-2 my-2 bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-6 py-2 text-xs ${
                                item.itemName === "" ||
                                item.price === "" ||
                                item.quantity === ""
                                    ? "opacity-50"
                                    : ""
                            }`}
                            onClick={handleAddItem}
                            disabled={
                                item.itemName === "" ||
                                item.price === "" ||
                                item.quantity === ""
                            }
                        >
                            Add Item
                        </button>
                    </div>
                </div>

                {/* <div className="relative col-span-9 lg:col-span-4 xl:col-span-5 bg-gray-100 lg:h-auto xl:h-screen px-8 py-14 xl:px-12 xl:py-20">
                    <h3 className="font-semibold text-gray-800 text-4xl my-5">
                        Order Summary
                    </h3>

                    <div className="flex flex-1">
                        <h3 className="text-gray-800 font-semibold text-2xl">
                            Items
                        </h3>
                        <div className="flex-auto"></div>
                        <h5 className="text-gray-600 hover:text-gray-800 cursor-pointer text-base font-normal underline">
                            Edit Cart
                        </h5>
                    </div>
                    <div className="mt-7 flex flex-1 text-gray-800 text-lg font-normal">
                        <h3>North wolf bag</h3>
                        <h3 className="flex-auto text-right pr-4 md:pr-5 lg:pr-4">
                            1x
                        </h3>
                        <h3>$9,000</h3>
                    </div>
                    <div className="mt-5 flex flex-1 text-gray-800 text-lg font-normal">
                        <h3>LW Sneakers</h3>
                        <h3 className="flex-auto text-right pr-7 md:pr-9 lg:pr-7">
                            1x
                        </h3>
                        <h3>$740</h3>
                    </div>
                    <div className="mt-5 flex flex-1 text-gray-800 text-lg font-normal">
                        <h3>Luxe card holder</h3>
                        <h3 className="flex-auto text-right pr-7 md:pr-9 lg:pr-7">
                            1x
                        </h3>
                        <h3>$500</h3>
                    </div>
                    <div className="-bottom-7 px-8 xl:px-12 pb-5 md:-bottom-96 bg-gray-100 md:pt-80 md:pb-10 lg:pb-10 lg:pt-0 lg:mt-0 lg:bottom-0 absolute left-0 w-full text-lg font-medium text-gray-800">
                        <span
                            aria-label="Total"
                            className="float-left text-2xl text-gray-800 font-normal"
                        >
                            Total
                        </span>
                        <span
                            aria-label="Total Price"
                            className="float-right font-semibold text-gray-800 text-2xl"
                        >
                            $9,000
                        </span>
                        <div className="clear-both"></div>
                    </div>
                </div> */}
            </div>
        </>
    );
};

export default Form;
