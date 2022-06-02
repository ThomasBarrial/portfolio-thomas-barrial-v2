import React from "react";
import Layout from "../src/components/layout/Layout";
import Meta from "../src/components/SEO/Meta";

function index(): JSX.Element {
    return (
        <Layout>
            <Meta pageTitle="" title="" description="" keywords="" />
            <div className="h-screen w-screen flex items-center justify-center">
                <h1 className="text-xl font-bold">Thomas Barrial</h1>
            </div>
        </Layout>
    );
}

export default index;
