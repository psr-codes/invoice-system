"use client";
import React, { useState, useEffect } from "react";
import ItemsList from "./ItemsList";

import { useAppContext } from '@/context/AppContext'


const Form = () => {
    // const [user, setUser] = useState({
    //     name: "",
    //     email: "",
    //     phone: "",
    // });
    // const [item, setItem] = useState({
    //     itemName: "",
    //     price: "",
    //     quantity: "",
    // });

    // const [itemList, setItemList] = useState([]);
    const { user, setUser, item, setItem, itemList, setItemList } = useAppContext();


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

            
            </div>
        </>
    );
};

export default Form;
