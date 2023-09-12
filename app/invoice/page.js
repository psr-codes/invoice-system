'use client'
import { useSearchParams } from 'next/navigation'
import React from "react";

import InvoicePDF from "@/components/InvoicePDF"

const page = () => {
    const searchParams = useSearchParams()

    const user = searchParams.get('user')
    const itemList = searchParams.get('itemList')

    return <>
        this is home page
        <InvoicePDF user={user} itemList={itemList} />
    </>;
};

export default page;

