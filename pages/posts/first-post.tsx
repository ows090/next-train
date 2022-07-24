import Head from "next/head";
import Link from "next/link";
import React, { FC } from "react";
import Alert from "../../components/Alert";
import Layout from "../../components/Layout";

function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>FirstPost</h1>
      <Alert type="error" />
      <Alert type="success" />
      <Link href={"/"}>
        <a>Back to home</a>
      </Link>
    </Layout>
  );
}

export default FirstPost;
