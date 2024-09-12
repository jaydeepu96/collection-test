"use client";
import { NextPage } from "next";
import Head from "next/head";
import ProductGrid from "@/components/ProductGrid";

export default function Home() {
  return (
    <>
      <Head>
        <title>Product Showcase</title>
        <meta
          name="description"
          content="A beautiful product showcase with animations"
        />
      </Head>
      <main className="min-h-screen bg-gray-100 py-12">
        <ProductGrid />
      </main>
    </>
  );
}
