// "use client";

// import type React from "react";

// import Link from "next/link";
// import { Upload, Globe, MapPin } from "lucide-react";
// import Image from "next/image";

// const LiveMap = () => {
//   return (
//     <iframe
//       src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.0670959784984!2d-73.98576578456585!3d40.74844044005727!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd14e118050c02303!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1677578442002!5m2!1sen!2sus"
//       width="100%"
//       height="100%"
//       style={{ border: 0 }}
//       allowFullScreen={true}
//       loading="lazy"
//       referrerPolicy="no-referrer-when-downgrade"
//     ></iframe>
//   );
// };

// export default function Report() {
//   return (
//     <div className="min-h-screen flex flex-col">
//       <header className="bg-gradient-to-r text-blue-500 border-b-2">
//         <div className="container mx-auto px-4 py-4">
//           <nav className="flex justify-between items-center">
//             <div className="flex items-center">
//               <Image
//                 width={200}
//                 height={200}
//                 src={"/assets/logo-street.png"}
//                 alt={""}
//                 className="w-10 h-10"
//               />
//               <h1 className="text-2xl font-bold">
//                 <span className="font-light">Street</span> Tweets
//               </h1>
//             </div>
//             <div className="hidden md:flex space-x-8">
//               <Link
//                 href="/"
//                 className="hover:border-b-2 hover:border-white transition-all"
//               >
//                 Home
//               </Link>
//               <Link
//                 href="/about"
//                 className="hover:border-b-2 hover:border-white transition-all"
//               >
//                 About
//               </Link>
//               <Link
//                 href="/dashboard"
//                 className="hover:border-b-2 hover:border-white transition-all"
//               >
//                 Dashboard
//               </Link>
//               <Link href="/report" className="border-b-2 border-blue-500">
//                 Report
//               </Link>
//               <Link
//                 href="/find-id"
//                 className="hover:border-b-2 hover:border-white transition-all"
//               >
//                 Find ID
//               </Link>
//               <Link
//                 href="/track"
//                 className="hover:border-b-2 hover:border-white transition-all"
//               >
//                 Track
//               </Link>
//             </div>
//           </nav>
//         </div>
//       </header>

//       <main className="flex-1 bg-gray-50 py-10">
//         <div className="container mx-auto px-4">
//           {/* Make a Report Section */}
//           <section className="mb-12">
//             <h2 className="text-3xl font-bold text-center mb-8">
//               Make a Report
//             </h2>
//             <div className="grid md:grid-cols-2 gap-6 mb-8">
//               {/* Report via X */}
//               <div className="bg-blue-100 rounded-lg p-6">
//                 <div className="flex items-start mb-4">
//                   <div className="bg-black p-1.5 rounded mr-3">
//                     <svg
//                       className="h-5 w-5 text-white"
//                       fill="currentColor"
//                       viewBox="0 0 24 24"
//                       aria-hidden="true"
//                     >
//                       <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
//                     </svg>
//                   </div>
//                   <div>
//                     <h3 className="font-semibold text-lg">Report via X</h3>
//                     <p className="text-sm mt-1">
//                       Use hashtag{" "}
//                       <span className="text-blue-500 font-medium">
//                         #MarkTheStreets
//                       </span>{" "}
//                       to automatically submit your report
//                     </p>
//                   </div>
//                 </div>
//               </div>

//               {/* Report via Website */}
//               <div className="bg-gray-200 rounded-lg p-6">
//                 <div className="flex items-start mb-4">
//                   <div className="bg-gray-400 p-1.5 rounded mr-3">
//                     <Globe className="h-5 w-5 text-white" />
//                   </div>
//                   <div>
//                     <h3 className="font-semibold text-lg">
//                       Report via Website
//                     </h3>
//                     <p className="text-sm mt-1">
//                       Submit your report directly through our website easily.
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Report Form */}
//             <div className="bg-white rounded-lg shadow-sm p-6 max-w-3xl mx-auto">
//               <div className="mb-6">
//                 <label className="block text-gray-700 mb-2">Upload Photo</label>
//                 <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
//                   <div className="flex justify-center mb-4">
//                     <Upload className="h-10 w-10 text-gray-400" />
//                   </div>
//                   <p className="text-gray-500 mb-4">
//                     Drag and drop your photo here or
//                   </p>
//                   <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-2 rounded-md transition-colors">
//                     Choose File
//                   </button>
//                 </div>
//               </div>

//               <div className="mb-6">
//                 <label htmlFor="location" className="block text-gray-700 mb-2">
//                   Location
//                 </label>
//                 <div className="flex">
//                   <input
//                     type="text"
//                     id="location"
//                     placeholder="Enter location"
//                     className="flex-1 border border-gray-300 rounded-l-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   />
//                   <button className="bg-blue-100 hover:bg-blue-200 text-blue-600 px-4 py-2 rounded-r-md flex items-center transition-colors">
//                     <MapPin className="h-4 w-4 mr-2" />
//                     Use GPS
//                   </button>
//                 </div>
//               </div>

//               <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md transition-colors">
//                 Submit Report
//               </button>
//             </div>
//           </section>
//         </div>
//       </main>

//       {/* Footer */}
//       <footer className="bg-blue-600 text-white py-12">
//         <div className="container mx-auto px-4">
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             <div>
//               <h3 className="text-xl font-bold mb-4">Street Tweets</h3>

//               <div className="flex space-x-4">
//                 <a href="#" className="hover:opacity-80 transition-opacity">
//                   <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
//                     <span className="sr-only">Facebook</span>
//                     <svg
//                       className="h-4 w-4"
//                       fill="currentColor"
//                       viewBox="0 0 24 24"
//                       aria-hidden="true"
//                     >
//                       <path
//                         fillRule="evenodd"
//                         d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
//                         clipRule="evenodd"
//                       />
//                     </svg>
//                   </div>
//                 </a>
//                 <a href="#" className="hover:opacity-80 transition-opacity">
//                   <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
//                     <span className="sr-only">Twitter</span>
//                     <svg
//                       className="h-4 w-4"
//                       fill="currentColor"
//                       viewBox="0 0 24 24"
//                       aria-hidden="true"
//                     >
//                       <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
//                     </svg>
//                   </div>
//                 </a>
//               </div>
//             </div>
//             <div>
//               <h3 className="text-xl font-bold mb-4">Useful Links</h3>
//               <ul className="space-y-2">
//                 <li>
//                   <a href="#" className="hover:underline">
//                     About Us
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" className="hover:underline">
//                     Privacy Policy
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" className="hover:underline">
//                     Our Mission
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" className="hover:underline">
//                     Our Team
//                   </a>
//                 </li>
//               </ul>
//             </div>
//             <div>
//               <h3 className="text-xl font-bold mb-4">Address</h3>
//               <div className="bg-white/10 rounded-lg overflow-hidden h-40">
//                 <LiveMap />
//               </div>
//             </div>
//           </div>
//           <div className="border-t border-blue-500 mt-8 pt-8 text-center text-sm opacity-80">
//             <p>©2025 All Right Reserved</p>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// }

"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Globe } from "lucide-react";

export default function Report() {
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [location, setLocation] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [showModal, setShowModal] = useState(false);
  const [reportInfo, setReportInfo] = useState({
    message: "",
    image_url: "",
    location: "",
    damage_level: "",
    report_id: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!imageFile || !location) {
      alert("Please provide both location and image.");
      return;
    }

    setIsLoading(true); // mulai loading

    const formData = new FormData();
    formData.append("location", location);
    formData.append("image", imageFile);

    try {
      const res = await fetch(
        "https://hackvidia-rawrxd-122248001451.us-central1.run.app/submit_report",
        {
          method: "POST",
          body: formData,
        }
      );

      if (res.ok) {
        const data = await res.json();
        setReportInfo(data);
        setShowModal(true);
        setLocation("");
        setImageFile(null);
      } else {
        const data = await res.json();
        alert("Error: " + (data.detail || "Failed to submit"));
      }
    } catch (error) {
      alert("Failed to submit: " + error);
    } finally {
      setIsLoading(false); // selesai loading
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      {showModal && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6 text-center relative">
            <h2 className="text-xl font-bold text-green-600 mb-4">
              ✅ {reportInfo.message}
            </h2>
            <Image
              src={reportInfo.image_url}
              alt="Damage preview"
              width={200}
              height={200}
              className="w-full h-48 object-cover rounded mb-4"
            />
            <p className="text-gray-800 mb-2">
              📍 <strong>Location:</strong> {reportInfo.location}
            </p>
            <p className="text-gray-800 mb-2">
              ⚠️ <strong>Severity:</strong> {reportInfo.damage_level}
            </p>
            <p className="text-gray-800 mb-2">
              🆔 <strong>Your Report ID:</strong> {reportInfo.report_id}
            </p>
            <button
              className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
              onClick={() => setShowModal(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}

      <header className="bg-gradient-to-r text-blue-500 border-b-2">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex justify-between items-center">
            <div className="flex items-center">
              <Image
                width={200}
                height={200}
                src={"/assets/logo-street.png"}
                alt="Street Tweets Logo"
                className="w-10 h-10"
              />
              <h1 className="text-2xl font-bold">
                <span className="font-light">Street</span> Tweets
              </h1>
            </div>
            <div className="hidden md:flex space-x-8">
              <Link href="/">Home</Link>
              <Link href="/about">About</Link>
              <Link href="/dashboard">Dashboard</Link>
              <Link href="/report" className="border-b-2 border-blue-500">
                Report
              </Link>
              <Link href="/find-id">Find ID</Link>
              <Link href="/track">Track</Link>
            </div>
          </nav>
        </div>
      </header>

      <main className="flex-1 bg-gray-50 py-10">
        <div className="container mx-auto px-4">
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-center mb-8">
              Make a Report
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {/* Report via X */}
              <div className="bg-blue-100 rounded-lg p-6">
                <div className="flex items-start mb-4">
                  <div className="bg-black p-1.5 rounded mr-3">
                    <svg
                      className="h-5 w-5 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Report via X</h3>
                    <p className="text-sm mt-1">
                      Use hashtag{" "}
                      <span className="text-blue-500 font-medium">
                        #MarkTheStreets
                      </span>{" "}
                      to submit reports automatically.
                    </p>
                  </div>
                </div>
              </div>

              {/* Report via Website */}
              <div className="bg-gray-200 rounded-lg p-6">
                <div className="flex items-start mb-4">
                  <div className="bg-gray-400 p-1.5 rounded mr-3">
                    <Globe className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">
                      Report via Website
                    </h3>
                    <p className="text-sm mt-1">
                      Submit your report directly via this form.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Report Form */}
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-lg shadow-sm p-6 max-w-3xl mx-auto"
            >
              <div className="mb-6">
                <label className="block text-gray-700 mb-2">Upload Photo</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => setImageFile(e.target.files?.[0] || null)}
                  className="block w-full border border-gray-300 rounded-md p-2"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="location" className="block text-gray-700 mb-2">
                  Location
                </label>
                <div className="flex">
                  <input
                    type="text"
                    id="location"
                    placeholder="Enter location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="flex-1 border border-gray-300 rounded-md px-4 py-2"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className={`w-full py-3 rounded-md transition-colors ${
                  isLoading
                    ? "bg-gray-400 cursor-not-allowed text-white"
                    : "bg-blue-600 hover:bg-blue-700 text-white"
                }`}
              >
                {isLoading ? "Submitting..." : "Submit Report"}
              </button>
            </form>
          </section>
        </div>
      </main>

      <footer className="bg-[#1566C3] text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h2 className="text-2xl font-bold">Street Tweets</h2>
              <p className="text-sm mt-1">
                Empowering Cities with Smarter Road Maintenance
              </p>
            </div>
            <div>
              <p>
                &copy; {new Date().getFullYear()} Street Tweets. All rights
                reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
