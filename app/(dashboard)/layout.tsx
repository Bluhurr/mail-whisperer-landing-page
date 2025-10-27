"use client";

import Link from "next/link";
import { Suspense } from "react";
import Image from "next/image";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

function UserMenu() {
  return (
    <>
      <SignedIn>
        <div className="flex gap-10 items-center">
          <div className="flex gap-8">
            <Link
              href="/"
              className="text-sm font-medium text-gray-700 hover:text-gray-900"
            >
              Home
            </Link>
            <Link
              href="/pricing"
              className="text-sm font-medium text-gray-700 hover:text-gray-900"
            >
              Plans
            </Link>
          </div>
          <UserButton></UserButton>
        </div>
      </SignedIn>
      <SignedOut>
        <Link
          href="/pricing"
          className="text-sm font-medium text-gray-700 hover:text-gray-900"
        >
          Plans
        </Link>
        <Link
          href="/sign-up"
          className="text-sm font-medium text-gray-700 hover:text-gray-900"
        >
          <button className="text-[#3e2863] bg-[#b08feb] rounded-full font-bold text-sm sm:text-base py-2 px-4 sm:px-5 cursor-pointer">
            Create an Account
          </button>
        </Link>
        <Link
          href="/sign-in"
          className="text-sm font-medium text-gray-700 hover:text-gray-900"
        >
          <button className="text-[#3e2863] bg-[#b08feb] rounded-full font-bold text-sm sm:text-base py-2 px-4 sm:px-5 cursor-pointer">
            Sign In
          </button>
        </Link>
      </SignedOut>
    </>
  );
}

function Header() {
  return (
    <header className="border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo.png"
            alt="logo image"
            width="40"
            height="40"
          ></Image>
          <span className="ml-4 text-xl font-semibold text-gray-900">
            Mail Whisperer
          </span>
        </Link>
        <div className="flex items-center space-x-4">
          <Suspense fallback={<div className="h-9" />}>
            <UserMenu />
          </Suspense>
        </div>
      </div>
    </header>
  );
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section className="flex flex-col min-h-screen">
      <Header />
      {children}
    </section>
  );
}
