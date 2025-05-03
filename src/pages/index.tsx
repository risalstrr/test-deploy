"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Rocket,
  BarChart2,
  FileText,
  Activity,
  Plus,
  Check,
} from "lucide-react";
// import Lottie from "lottie-react";
// import RoadAnimation from "../../public/assets/damage-road-lottie.json";

const LiveMap = () => {
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.0670959784984!2d-73.98576578456585!3d40.74844044005727!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd14e118050c02303!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1677578442002!5m2!1sen!2sus"
      width="100%"
      height="100%"
      style={{ border: 0 }}
      allowFullScreen={true}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  );
};

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-gradient-to-r text-blue-500 border-b-2">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex justify-between items-center">
            <div className="flex items-center">
              <Image
                width={200}
                height={200}
                src={"/assets/logo-street.png"}
                alt={""}
                className="w-10 h-10"
              />
              <h1 className="text-2xl font-bold">
                <span className="font-light">Street</span> Tweets
              </h1>
            </div>
            <div className="hidden md:flex space-x-8">
              <Link href="/" className="border-b-2 border-blue-500">
                Home
              </Link>
              <Link
                href="/about"
                className="hover:border-b-2 hover:border-white transition-all"
              >
                About
              </Link>
              <Link
                href="/dashboard"
                className="hover:border-b-2 hover:border-white transition-all"
              >
                Dashboard
              </Link>
              <Link
                href="/report"
                className="hover:border-b-2 hover:border-white transition-all"
              >
                Report
              </Link>
              <Link
                href="/find-id"
                className="hover:border-b-2 hover:border-white transition-all"
              >
                Find ID
              </Link>
              <Link
                href="/track"
                className="hover:border-b-2 hover:border-white transition-all"
              >
                Track
              </Link>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-sky-400 to-blue-300 text-white relative overflow-hidden">
        <div className="absolute bottom-0 left-0 right-0 h-[650px] w-full rounded-t-full bg-blue-600/20" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                Better Road for All, Just
                <span className="border-b-4 border-white text-blue-900">
                  {" "}
                  One Tweet
                </span>{" "}
                Away
              </h2>
              <p className="text-lg opacity-90">
                Helps you identify and prioritize road repairs efficiently by
                analyzing real-time reports from X social media using AI-powered
                hashtag tracking.
              </p>
              <div className="bg-white w-1/2 rounded-full flex items-center p-1 pr-2 mt-8 shadow-lg">
                <div className="flex-1">
                  <div className="relative">
                    <div className="pointer-events-none absolute inset-y-0 pl-4 flex items-center px-2 text-gray-700">
                      Try on our website too!
                    </div>
                  </div>
                </div>
                <a
                  href="https://streettweets.vercel.app/report"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-500 text-white p-3 rounded-full hover:bg-blue-600 transition-colors"
                >
                  <Rocket className="h-5 w-5" />
                </a>
              </div>
            </div>
            <div className="hidden md:block">
              <Image
                src="/assets/mockup.png"
                alt="Road repair workers illustration"
                width={500}
                height={400}
                className="object-contain mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-blue-600 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <div className="border-r border-blue-400 last:border-0">
              <h3 className="text-5xl font-bold">10K+</h3>
              <p className="text-sm mt-2">Reports Analyzed</p>
            </div>
            <div className="border-r border-blue-400 last:border-0">
              <h3 className="text-5xl font-bold">90+</h3>
              <p className="text-sm mt-2">Cities Covered</p>
            </div>
            <div>
              <h3 className="text-5xl font-bold">95%</h3>
              <p className="text-sm mt-2">Accuracy in Issue Detection</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-12">
            Our Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Feature 1 */}
            <div className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="bg-blue-400 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <BarChart2 className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Dashboard</h3>
              <p className="text-gray-600">
                Monitor real-time road issue reports and track repair progress
                efficiently.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="border rounded-lg p-6 hover:shadow-lg transition-shadow bg-blue-500 text-white">
              <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <FileText className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Make a Report</h3>
              <p className="text-white/90">
                Easily report road damages with just a few clicks and help
                improve public safety.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="bg-blue-400 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Activity className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Track your Report</h3>
              <p className="text-gray-600">
                Stay updated on your report&apos;s status as it moves through
                the resolution process
              </p>
            </div>

            {/* Feature 4 */}
            <div className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="bg-blue-400 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Plus className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Many more!</h3>
              <p className="text-gray-600">
                Discover more features designed to enhance road monitoring and
                repair efforts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bot Response Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <Image
              src="/assets/child.png"
              alt="Illustration of real-time monitoring"
              width={600}
              height={400}
              className="w-full h-auto object-contain"
            />
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Real-Time AI Monitoring
              </h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Check className="h-5 w-5 text-green-500" />
                  </div>
                  <p className="ml-3 text-gray-600">
                    We provide an automated bot that instantly replies to
                    reports on X and seamlessly logs validated data into the
                    dashboard. Stay informed and take action faster with
                    real-time monitoring and automatic report tracking. Ensure
                    every road issue gets the attention it deserves with our
                    smart reporting system!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-600 text-white py-12 mt-auto">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Street Tweets</h3>

              <div className="flex space-x-4">
                <a href="#" className="hover:opacity-80 transition-opacity">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                    <span className="sr-only">Facebook</span>
                    <svg
                      className="h-4 w-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </a>
                <a href="#" className="hover:opacity-80 transition-opacity">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                    <span className="sr-only">Twitter</span>
                    <svg
                      className="h-4 w-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </div>
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Useful Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:underline">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Our Mission
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Our Team
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Address</h3>
              <div className="bg-white/10 rounded-lg overflow-hidden h-40">
                <LiveMap />
              </div>
            </div>
          </div>
          <div className="border-t border-blue-500 mt-8 pt-8 text-center text-sm opacity-80">
            <p>©2025 All Right Reserved</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
