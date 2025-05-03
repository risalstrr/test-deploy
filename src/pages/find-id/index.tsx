/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";

type Report = {
  report_id: string;
  username: string | null;
  created_at: string;
  location: string;
  severity: string;
  status: string;
  message: string;
  text: string;
};

export default function FindId() {
  const [reports, setReports] = useState<Report[]>([]);
  const [filteredReports, setFilteredReports] = useState<Report[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [newestReport, setNewestReport] = useState<Report | null>(null);
  const [newestLoading, setNewestLoading] = useState(false);
  const [newestError, setNewestError] = useState("");

  const [searchUsername, setSearchUsername] = useState("");

  const fetchReports = async () => {
    setLoading(true);
    setError("");

    try {
      const res = await fetch(
        "https://542a-202-158-77-58.ngrok-free.app/get-all-reports",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!res.ok) {
        throw new Error("Failed to fetch reports");
      }

      const data = await res.json();
      setReports(data || []);
      setFilteredReports(data || []);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const fetchNewestReport = async () => {
    setNewestLoading(true);
    setNewestError("");

    try {
      const res = await fetch(
        "https://542a-202-158-77-58.ngrok-free.app/poll-scrape",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!res.ok) {
        throw new Error("Failed to fetch newest report");
      }

      const data = await res.json();
      setNewestReport(data);
    } catch (err: any) {
      setNewestError(err.message);
    } finally {
      setNewestLoading(false);
    }
  };

  const handleSearch = () => {
    const query = searchUsername.toLowerCase().replace(/^@/, "");
    const filtered = reports.filter((report) =>
      (report.username || "").toLowerCase().includes(query)
    );
    setFilteredReports(filtered);
  };

  useEffect(() => {
    fetchReports();
    fetchNewestReport();
  }, []);

  return (
    <>
      <Head>
        <title>Find ID - Street Tweets</title>
        <meta
          name="description"
          content="Find your report ID on Street Tweets"
        />
      </Head>

      <div className="min-h-screen flex flex-col bg-gray-50">
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
                <Link
                  href="/"
                  className="hover:border-b-2 hover:border-white transition-all"
                >
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
                <Link href="/find-id" className="border-b-2 border-blue-500">
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

        <main className="flex-grow">
          <div className="container mx-auto px-4 py-12">
            <div className="max-w-3xl mx-auto">
              <h1 className="text-3xl font-bold text-center mb-12">
                Find Your Report ID
              </h1>

              <div className="bg-white rounded-lg shadow-md p-6 mb-12">
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Enter Your X Username"
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={searchUsername}
                    onChange={(e) => setSearchUsername(e.target.value)}
                  />
                  <button
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md"
                    onClick={handleSearch}
                  >
                    Find
                  </button>
                </div>
              </div>

              {/* Newest Report */}
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-center text-blue-600 mb-6">
                  The Newest Report
                </h2>

                {newestLoading && (
                  <p className="text-center text-gray-500">
                    Loading newest report...
                  </p>
                )}
                {newestError && (
                  <p className="text-center text-red-500">{newestError}</p>
                )}
                {newestReport && (
                  <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-100">
                    <div className="flex items-center gap-2">
                      <span className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold bg-sky-100 text-sky-800">
                        {newestReport.status}
                      </span>
                      <span className="font-medium">
                        ID #{newestReport.report_id}
                      </span>
                    </div>
                    <h3>Description: {newestReport.text}</h3>
                    <div>{newestReport.message}</div>
                    <div className="mt-1 text-sm text-gray-600">
                      Submitted by{" "}
                      <Link href="#" className="text-blue-500 hover:underline">
                        @{newestReport.username ?? "anonymous"}
                      </Link>{" "}
                      <span className="text-gray-400 text-xs">
                        {new Date(newestReport.created_at).toLocaleString()}
                      </span>
                    </div>
                  </div>
                )}
              </div>

              {/* Recent Reports */}
              <div className="space-y-4 mt-12">
                <h2 className="text-2xl font-semibold text-center text-blue-600 mb-6">
                  Recent Report Updates
                </h2>

                {loading && (
                  <p className="text-center text-gray-500">Loading...</p>
                )}
                {error && <p className="text-center text-red-500">{error}</p>}
                {!loading && filteredReports.length === 0 && (
                  <p className="text-center text-gray-500">No reports found.</p>
                )}

                {filteredReports.map((report) => (
                  <div
                    key={report.report_id}
                    className="bg-white rounded-lg shadow-sm p-4 border border-gray-100"
                  >
                    <div className="flex items-center gap-2">
                      <span className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold bg-sky-100 text-sky-800">
                        {report.status}
                      </span>
                      <span className="font-medium">
                        ID #{report.report_id}
                      </span>
                    </div>
                    <div className="mt-1 text-sm text-gray-600">
                      Submitted by{" "}
                      <Link href="#" className="text-blue-500 hover:underline">
                        @{report.username ?? "anonymous"}
                      </Link>{" "}
                      <span className="text-gray-400 text-xs">
                        {new Date(report.created_at).toLocaleString()}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
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
    </>
  );
}
