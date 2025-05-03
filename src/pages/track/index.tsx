/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Mail,
  Search,
  Send,
  PenToolIcon as Tool,
  Check,
  Edit,
} from "lucide-react";
import Image from "next/image";

export default function Track() {
  const [reportId, setReportId] = useState("");
  const [reportData, setReportData] = useState<any>(null);
  const [trackError, setTrackError] = useState("");
  const [trackLoading, setTrackLoading] = useState(false);

  const handleTrack = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!reportId.trim()) {
      setTrackError("Report ID cannot be empty.");
      return;
    }

    setTrackError("");
    setTrackLoading(true);
    setReportData(null);

    try {
      const res = await fetch(
        `https://542a-202-158-77-58.ngrok-free.app/get-report-by-id?report_id=${reportId}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData?.detail || "Failed to fetch report");
      }

      const data = await res.json();
      setReportData(data);
    } catch (err: any) {
      setTrackError(err.message || "Unexpected error occurred");
    } finally {
      setTrackLoading(false);
    }
  };

  const getStatusStep = (status: string) => {
    const steps = ["received", "validated", "sent", "in_progress", "completed"];
    return steps.indexOf(status?.toLowerCase());
  };

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
              <Link href="/report">Report</Link>
              <Link href="/find-id">Find ID</Link>
              <Link href="/track" className="border-b-2 border-blue-500">
                Track
              </Link>
            </div>
          </nav>
        </div>
      </header>

      <main className="flex-1 bg-gray-50 py-10">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-center mb-8">
            Track Your Report
          </h2>

          <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
            <form onSubmit={handleTrack} className="flex">
              <input
                type="text"
                placeholder="Enter Report ID"
                value={reportId}
                onChange={(e) => setReportId(e.target.value)}
                className="flex-1 border border-gray-300 rounded-l-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-r-md transition-colors"
              >
                Track
              </button>
            </form>
            {trackError && (
              <p className="text-red-500 mt-4 text-sm">{trackError}</p>
            )}
          </div>

          {trackLoading && (
            <p className="text-center text-gray-500">Loading report data...</p>
          )}

          {reportData && (
            <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-semibold text-lg">Report Status</h3>
                <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-1 rounded">
                  ID: #{reportData.report_id}
                </span>
              </div>

              <div className="space-y-6 mb-8">
                {[
                  { label: "Report Received", icon: <Mail /> },
                  { label: "Validation", icon: <Search /> },
                  { label: "Sent to Authority", icon: <Send /> },
                  { label: "In Progress", icon: <Tool /> },
                  { label: "Completed", icon: <Check /> },
                ].map((step, index) => {
                  const currentStep = getStatusStep(reportData.status);
                  const isDone = index <= currentStep;
                  return (
                    <div className="flex items-center" key={index}>
                      <div
                        className={`rounded-full p-2 mr-4 ${
                          isDone ? "bg-blue-600" : "bg-gray-300"
                        }`}
                      >
                        {step.icon}
                      </div>
                      <div className="flex-1">
                        <div
                          className={`h-2 ${
                            isDone ? "bg-blue-600" : "bg-gray-200"
                          } rounded-full`}
                        ></div>
                      </div>
                      <div
                        className={`ml-4 text-sm ${
                          isDone ? "text-green-500" : "text-gray-500"
                        }`}
                      >
                        {step.label}
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="font-semibold mb-3">Report Details</h4>
                  <div className="space-y-2 text-sm">
                    <p>
                      <span className="text-gray-600">Location:</span>{" "}
                      {reportData.location}
                    </p>
                    <p>
                      <span className="text-gray-600">Submitted:</span>{" "}
                      {new Date(reportData.created_at).toLocaleDateString()}
                    </p>
                    <p>
                      <span className="text-gray-600">Username:</span>{" "}
                      {reportData.username ?? "Anonymous"}
                    </p>
                    <p>
                      <span className="text-gray-600">Severity:</span>{" "}
                      <span
                        className={`px-2 py-1 text-xs rounded-full ${
                          reportData.severity === "severe"
                            ? "bg-red-100 text-red-800"
                            : "bg-yellow-100 text-yellow-800"
                        }`}
                      >
                        {reportData.severity}
                      </span>
                    </p>
                  </div>

                  {reportData.image_url && (
                    <div className="mt-4">
                      <Image
                        width={200}
                        height={200}
                        src={reportData.image_url}
                        alt="Reported"
                        className="w-full h-auto rounded-md border"
                      />
                    </div>
                  )}

                  <button className="flex items-center text-blue-600 mt-3 text-sm">
                    <Edit className="h-4 w-4 mr-1" />
                    Update Information
                  </button>
                </div>

                <div className="bg-gray-100 rounded-lg p-4">
                  <div className="flex items-start">
                    <Search className="h-5 w-5 text-gray-600 mt-1 mr-2" />
                    <div>
                      <h4 className="font-semibold mb-1">
                        Can&apos;t find your Report ID?
                      </h4>
                      <p className="text-sm text-gray-600">
                        Don&apos;t worry —{" "}
                        <Link
                          href="/find-id"
                          className="text-blue-600 hover:underline"
                        >
                          find it here
                        </Link>{" "}
                        to look it up now.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
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
