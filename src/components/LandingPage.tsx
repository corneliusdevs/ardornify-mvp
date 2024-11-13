import { Button } from "@/components/ui/button";
import {
  AlignJustify,
  BadgeAlert,
  ShieldCheck,
  ShieldX,
  ShoppingBag,
  Star,
  ThumbsDown,
  Timer,
  VerifiedIcon,
} from "lucide-react";
import Image from "next/image";

export const ArdornifyLandingPage = () => {
  return (
    <div className="relative font-sans min-w-full max-w-screen-xl md:mx-auto">
      <div className="bg-white sticky top-0 z-20 p-2 shadow-md">
        <div className="mx-auto flex justify-between items-center overflow-hidden">
          <div className="overflow-hidden flex justify-center scale-[0.6] h-[60px] md:h-[60px]  items-center transform p-ml-0 sm:ml-[-20px]">
            <Image
              src="/ardornify-logo.png"
              alt="Logo"
              width={150}
              quality={100}
              height={150}
              objectFit="contain"
              className="flex justify-center items-center"
            />
          </div>
          <div className="text-slate-700">
            <AlignJustify strokeWidth={1} />
          </div>
        </div>
      </div>
      {/* HERO SECTION */}
      <div className="relative w-full h-[100vh] md:h-[90vh] bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black opacity-60"></div>
        <section className="absolute top-1/2 transform -translate-y-1/2 w-full text-center text-white px-6 sm:px-6 md:px-24">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 lg:mb-8 leading-tight">
            {`Revolutionizing Your Shopping Experience`}
          </h1>
          <p className="text-base sm:text-lg md:text-2xl mb-6 sm:mb-8 max-w-xl sm:max-w-3xl mx-auto">
            {`No more delays, poor quality, or unsafe transactions. Ardornify
            ensures you get what you pay for—on time, every time.`}
          </p>
          <Button variant={"outline"} className="bg-white text-red-500 text-lg px-10 py-8 rounded-lg transition-transform transform hover:scale-95 hover:text-red-500 duration-300 my-3 border border-red-500 w-fit">
            <div className="flex justify-center items-center py-2 break-all">
              <div>
                <ShoppingBag className="mr-2" />
              </div>

              <div className="">{`Start Shopping Securely`}</div>
            </div>
          </Button>
        </section>
      </div>

      {/* THE PROBLEM SECTION */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto text-center px-3">
          <h2 className="text-4xl font-bold text-gray-600 mb-6">The Problem</h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-12 px-3">
            {`Shopping online is more stressful than it should be. From delayed
            deliveries to unreliable vendors, these issues undermine the trust
            customers once had in e-commerce. Here's what's going wrong:`}
          </p>

          {/* Problem Breakdown Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-8 bg-white shadow-md rounded-lg transition-all hover:scale-105 transform duration-300">
              <div className="flex justify-center mb-4 ">
                <ShieldX className="text-red-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-700 mb-4">
                {`Delivery Delays`}
              </h3>
              <p className="text-gray-600">
                {`Your excitement to receive an order is ruined when it doesn't
                arrive on time. Delayed deliveries can cause frustration and
                missed plans.`}
              </p>
            </div>
            <div className="p-8 bg-white shadow-md rounded-lg transition-all hover:scale-105 transform duration-300">
              <div className="flex justify-center mb-4">
                <BadgeAlert className="text-red-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-700 mb-4">
                {`Unsafe Payments`}
              </h3>
              <p className="text-gray-600">
                {`Paying online should feel safe, but too often there are concerns
                about fraud and the risk of not receiving your purchase.`}
              </p>
            </div>
            <div className="p-8 bg-white shadow-md rounded-lg transition-all hover:scale-105 transform duration-300">
              <div className="flex justify-center mb-4">
                <ThumbsDown className="text-red-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-700 mb-4">
                {`Poor Quality Products`}
              </h3>
              <p className="text-gray-600">
                {`It’s disheartening when the product you ordered doesn't meet
                your expectations, leaving you disappointed and frustrated.`}
              </p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-12 px-3">
            <p className="text-lg text-gray-700 mb-4">
              {`These problems are real, but they don't have to be the norm. We
              can help you shop with confidence.`}
            </p>
            <Button
              variant={"outline"}
              className="bg-red-600 text-white text-lg px-10 py-8 rounded-lg transition-transform transform hover:scale-95 hover:text-red-500 duration-300 my-3 border border-red-500 w-fit"
            >
              <ShoppingBag />
              {`Shop Securely Now`}
            </Button>
          </div>
        </div>
      </section>

      {/* THE SOLUTION SECTION */}
      <section className="py-16 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-700 mb-6">
            {`The Solution`}
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-12 px-3">
            {`Say goodbye to online shopping worries. Ardornify connects trusted
            suppliers and delivery services, ensuring your shopping experience
            is smooth, secure, and reliable every time.`}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-3">
            <div className="p-8 bg-gray-100/30 shadow-md rounded-lg transform duration-500 hover:scale-95 hover:cursor-pointer">
              <div className="flex justify-center mb-4">
                <VerifiedIcon
                  size={40}
                  fill="white"
                  className="text-green-500"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                {`Verified Vendors`}
              </h3>
              <p className="text-gray-600">
               {` Only trusted, verified vendors are allowed in our marketplace,
                ensuring you get high-quality products from reputable sources.`}
              </p>
            </div>
            <div className="p-8 bg-gray-100/30 shadow-md rounded-lg transform duration-500 hover:scale-95 hover:cursor-pointer">
              <div className="flex justify-center mb-4">
                <Timer size={40} className="text-green-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                {`On-time Delivery`}
              </h3>
              <p className="text-gray-600">
                {`We track every delivery from start to finish, ensuring your
                orders arrive on time, every time.`}
              </p>
            </div>
            <div className="p-8 bg-gray-100/30 shadow-md rounded-lg transform duration-500 hover:scale-95 hover:cursor-pointer">
              <div className="flex justify-center mb-4">
                <ShieldCheck
                  size={40}
                  fill="white"
                  className="text-green-500"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Trust Score
              </h3>
              <p className="text-gray-600">
                {`Vendors and riders are rated based on trust, ensuring a safe
                shopping experience.`}
              </p>
            </div>
          </div>

          <div className="mt-12">
            <p className="text-lg text-gray-800 mb-4 px-3">
              {`With Ardornify, you're not just shopping. You're shopping with
              peace of mind.`}
            </p>
            <Button
              variant={"outline"}
              className="bg-red-500 text-white text-lg px-10 py-8 rounded-lg transition-transform transform hover:scale-95 hover:text-red-500 duration-300 my-3 border border-red-500 w-fit"
            >
              Get Started Now
            </Button>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL SECTION */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto text-center px-3">
          <h2 className="text-4xl font-bold text-gray-600 mb-6">
            What Our Customers Are Saying
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-8 bg-white shadow-md rounded-lg">
              <div className="flex justify-center items-center w-full mb-2">
                <Star size={40} className="text-yellow-100" fill="yellow" />
              </div>
              <p className="text-gray-600 mb-4">
               {` "Now, I can stay in the comfort of my home and get any product I
                want and not have to visit a physical store because of fear of
                being scammed. Thank you Ardornify!"`}
              </p>
              <p className="font-semibold text-gray-800">J{`Jane D.`}</p>
            </div>
            <div className="p-8 bg-white shadow-md rounded-lg">
              <div className="flex justify-center items-center w-full mb-2">
                <Star size={40} className="text-yellow-100" fill="yellow" />
              </div>
              <p className="text-gray-600 mb-4">
               {` "The peace of mind knowing that what I order is what I get is
                priceless. Ardornify has made online shopping stress-free for
                me."`}
              </p>
              <p className="font-semibold text-gray-800">{`John S.`}</p>
            </div>
            <div className="p-8 bg-white shadow-md rounded-lg">
              <div className="flex justify-center items-center w-full mb-2">
                <Star size={40} className="text-yellow-100" fill="yellow" />
              </div>
              <p className="text-gray-600 mb-4">
                {`"Ardornify's BuySafe policy helped my business find viable
                online customers who do not frustrate my payment on delivery
                service."`}
              </p>
              <p className="font-semibold text-gray-800">{`Amanda L.`}</p>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST SCORE SECTION */}
      <section className="py-16 bg-white text-center px-3">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-gray-700 mb-6">
            Our Trust Score
          </h2>
          <div className="text-xl font-semibold text-gray-800 mb-4">
            {`Rated 4.8/5 by over 1,000 happy customers`}
          </div>
          <div className="flex flex-col md:flex justify-center items-center gap-2">
            <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
            <p className="text-gray-600">{`Your trust is our top priority.`}</p>
          </div>
        </div>
      </section>

      {/* FOOTER SECTION */}
      <footer className="py-8 bg-gray-100 text-neutral-700 px-2">
        <div className="container mx-auto text-center">
          <p className="text-lg font-semibold mb-4">Ardornify</p>
          <p className="text-neutral-700 mb-6">
           {`Your trusted marketplace for safe and secure online shopping.`}
          </p>
          <div className="flex justify-center gap-8 mb-4">
            <a href="#" className="text-neutral-700 hover:text-white">
              About
            </a>
            <a href="#" className="text-neutral-700 hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="text-neutral-700 hover:text-white">
              Contact Us
            </a>
          </div>
          <p className="text-neutral-700 text-sm">
            &copy; {`2024 Ardornify. All rights reserved.`}
          </p>
        </div>
      </footer>
    </div>
  );
};

export default ArdornifyLandingPage;
