import { Button } from "@/components/ui/button";
import { ArrowRight, CreditCard, Database } from "lucide-react";
import Image from "next/image";
import { RiSpeakLine } from "react-icons/ri";
import { MdAccessTime } from "react-icons/md";
import { FaRegQuestionCircle } from "react-icons/fa";
import { SignedIn, SignedOut } from "@clerk/nextjs";

export default function HomePage() {
  return (
    <main>
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-4">
            <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
              <h1 className="text-2xl font-bold text-gray-900 tracking-tight sm:text-5xl md:text-6xl">
                Search Emails Using Everyday Language
                <span className="block text-[#9f78e3] mt-2 md:text-5xl">
                  Natural Language
                  <br />
                  Inbox Search
                </span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                Your inbox should understand you. Mail Whisperer uses natural
                language search so you can say “show me the invoice from last
                month” and get results right away.
              </p>
              <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
                {
                  <>
                    <SignedOut>
                      <a href="/sign-up">
                        <Button
                          size="lg"
                          variant="outline"
                          className="text-lg rounded-full cursor-pointer"
                        >
                          Start talking to your inbox
                          <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                      </a>
                    </SignedOut>
                    <SignedIn>
                      <a
                        target="_blank"
                        href="https://chromewebstore.google.com/detail/mail-whisperer/ljipbmijgefcceoiloefkhilhighadif"
                      >
                        <Button
                          size="lg"
                          variant="outline"
                          className="text-lg rounded-full cursor-pointer"
                        >
                          Download the extension and get searching!
                          <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                      </a>
                    </SignedIn>
                  </>
                }
              </div>
            </div>
            <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
              <Image
                alt="app example image"
                width="1080"
                height="1080"
                src="/images/lp-ex2-smol.png"
                className="ml-5"
              ></Image>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-3 lg:gap-8">
            <div>
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-[#9f78e3] text-white">
                <RiSpeakLine className="w-7 h-7" />
              </div>
              <div className="mt-5">
                <h2 className="text-lg font-medium text-gray-900">
                  Search Emails Like You Talk
                </h2>
                <p className="mt-2 text-base text-gray-500">
                  Struggling to remember Gmail’s exact search operators? Just
                  type what you want in plain English, and Mail Whisperer
                  generates the correct search for you instantly.
                </p>
              </div>
            </div>

            <div className="mt-10 lg:mt-0">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-[#9f78e3] text-white">
                <MdAccessTime className="w-7 h-7" />
              </div>
              <div className="mt-5">
                <h2 className="text-lg font-medium text-gray-900">
                  Save Hours Every Month
                </h2>
                <p className="mt-2 text-base text-gray-500">
                  Instead of scrolling endlessly or digging through labels, get
                  the exact search you need in seconds — leaving you more time
                  for the work that matters.
                </p>
              </div>
            </div>

            <div className="mt-10 lg:mt-0">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-[#9f78e3] text-white">
                <FaRegQuestionCircle className="w-6 h-6" />
              </div>
              <div className="mt-5">
                <h2 className="text-lg font-medium text-gray-900">
                  No More Guesswork
                </h2>
                <p className="mt-2 text-base text-gray-500">
                  Instead of fumbling with Gmail’s advanced operators or trying
                  different keywords until something works, Mail Whisperer gets
                  it right the first time — saving you the back-and-forth
                  hassle.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                Haven’t downloaded the Mail Whisperer Chrome extension yet?
              </h2>
              <p className="mt-3 max-w-3xl text-lg text-gray-500">
                Add Mail Whisperer now and make Gmail search as easy as asking a
                question.
              </p>
            </div>
            <div className="mt-8 lg:mt-0 flex justify-center lg:justify-end">
              <a
                href="https://chromewebstore.google.com/detail/mail-whisperer/ljipbmijgefcceoiloefkhilhighadif"
                target="_blank"
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg rounded-full cursor-pointer"
                >
                  Get it on the Chrome Store now!
                  <ArrowRight className="ml-3 h-6 w-6" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
