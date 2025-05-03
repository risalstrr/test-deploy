import Image from "next/image";
import Link from "next/link";
// import Head from "next/head";

import { Download, ArrowUp, ChevronRight } from "lucide-react";

export default function Dashboard() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Header */}
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
              <Link href="/dashboard" className="border-b-2 border-blue-500">
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
      {/* Main Content */}
      <main className="flex-grow container mx-auto max-w-7xl px-4 py-8">
        {/* Dashboard Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">
              Monitoring Dashboard
            </h2>
            <p className="text-gray-500">Overview of report statistics</p>
          </div>
          <button className="mt-4 md:mt-0 flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors">
            <Download size={18} />
            <span>Download Report</span>
          </button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-gray-500 text-sm">Reports Received</h3>
              <div className="bg-blue-100 p-2 rounded-full">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19 5H5V19H19V5Z"
                    stroke="#1D4ED8"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-3xl font-bold">1,234</span>
              <div className="flex items-center text-green-500 text-sm mt-1">
                <ArrowUp size={14} />
                <span>12% from last month</span>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-gray-500 text-sm">In Progress</h3>
              <div className="bg-yellow-100 p-2 rounded-full">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="8"
                    stroke="#F59E0B"
                    strokeWidth="2"
                  />
                </svg>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-3xl font-bold">456</span>
              <div className="flex items-center text-green-500 text-sm mt-1">
                <ArrowUp size={14} />
                <span>5% from last month</span>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-gray-500 text-sm">Resolved Reports</h3>
              <div className="bg-green-100 p-2 rounded-full">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 12L10 17L19 8"
                    stroke="#10B981"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-3xl font-bold">789</span>
              <div className="flex items-center text-green-500 text-sm mt-1">
                <ArrowUp size={14} />
                <span>8% from last month</span>
              </div>
            </div>
          </div>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold mb-4">Report Distribution</h3>
            <div className="aspect-w-16 aspect-h-9 relative">
              <Image
                src="/placeholder.svg?height=300&width=400"
                alt="Heat map of report distribution"
                width={400}
                height={300}
                className="rounded-md"
              />
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold mb-4">Report Status</h3>
            <div className="flex flex-col items-center">
              <div className="relative w-48 h-48 mb-4">
                <DonutChart />
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold">2,479</p>
                <p className="text-gray-500 text-sm">Total Laporan</p>
              </div>
            </div>
          </div>
        </div>

        {/* Reports by Province and Latest Activity */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Reports by Province */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Reports by Province</h3>
              <button className="text-gray-400 hover:text-gray-600">
                <ChevronRight size={24} />
              </button>
            </div>
            <div className="h-64 w-full">
              <BarChart />
            </div>
          </div>

          {/* Latest Activity */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold mb-4">Latest Activity</h3>
            <div className="space-y-4">
              <ActivityItem
                type="new"
                id="12345"
                location="DKI Jakarta"
                time="5 minutes ago"
              />
              <ActivityItem
                type="resolved"
                id="12340"
                location="Jawa Barat"
                time="15 minutes ago"
              />
              <ActivityItem
                type="processing"
                id="12342"
                location="Jawa Timur"
                time="1 hour ago"
              />
            </div>

            <div className="mt-8 text-center">
              <h4 className="text-base font-medium mb-4">
                Specialize analytical features coming soon!
              </h4>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="flex items-center justify-center gap-2 border border-gray-300 bg-gray-100 hover:bg-gray-200 text-gray-700 px-6 py-2 rounded-md transition-colors">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H9"
                      stroke="#4B5563"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 15V3"
                      stroke="#4B5563"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M9 6L12 3L15 6"
                      stroke="#4B5563"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>Login</span>
                </button>
                <button className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md transition-colors">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16 21V19C16 17.9391 15.5786 16.9217 14.8284 16.1716C14.0783 15.4214 13.0609 15 12 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8.5 11C10.7091 11 12.5 9.20914 12.5 7C12.5 4.79086 10.7091 3 8.5 3C6.29086 3 4.5 4.79086 4.5 7C4.5 9.20914 6.29086 11 8.5 11Z"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M20 8V14"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M23 11H17"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>Register</span>
                </button>
              </div>
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
  );
}

// Component for activity items
function ActivityItem({
  type,
  id,
  location,
  time,
}: {
  type: string;
  id: string;
  location: string;
  time: string;
}) {
  const getIcon = () => {
    switch (type) {
      case "new":
        return (
          <div className="bg-blue-100 p-2 rounded-full">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19 5H5V19H19V5Z"
                stroke="#1D4ED8"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        );
      case "resolved":
        return (
          <div className="bg-green-100 p-2 rounded-full">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 12L10 17L19 8"
                stroke="#10B981"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        );
      case "processing":
        return (
          <div className="bg-yellow-100 p-2 rounded-full">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="12" cy="12" r="8" stroke="#F59E0B" strokeWidth="2" />
            </svg>
          </div>
        );
      default:
        return null;
    }
  };

  const getTitle = () => {
    switch (type) {
      case "new":
        return "New Report";
      case "resolved":
        return "Resolved Report";
      case "processing":
        return "Processing Report";
      default:
        return "Report";
    }
  };

  return (
    <div className="flex items-start gap-3">
      {getIcon()}
      <div>
        <p className="font-medium">
          {getTitle()} #{id}
        </p>
        <p className="text-gray-500 text-sm">{location}</p>
        <p className="text-gray-400 text-xs">{time}</p>
      </div>
    </div>
  );
}

// Donut Chart with updated colors
function DonutChart() {
  return (
    <svg viewBox="0 0 100 100" className="w-full h-full">
      <circle cx="50" cy="50" r="40" fill="white" />
      {/* Donut segments - Updated colors */}
      <path d="M50,10 A40,40 0 0,1 90,50 L50,50 Z" fill="#1D4ED8" />{" "}
      {/* Blue */}
      <path d="M90,50 A40,40 0 0,1 50,90 L50,50 Z" fill="#10B981" />{" "}
      {/* Green */}
      <path d="M50,90 A40,40 0 0,1 10,50 L50,50 Z" fill="#F59E0B" />{" "}
      {/* Yellow */}
      {/* Inner circle for donut hole */}
      <circle cx="50" cy="50" r="25" fill="white" />
      {/* Labels */}
      <text x="75" y="40" fontSize="3" fill="#1D4ED8" fontWeight="bold">
        1,234
      </text>
      <text x="75" y="44" fontSize="2" fill="#1D4ED8">
        Reports Received
      </text>
      <text x="50" y="75" fontSize="3" fill="#10B981" fontWeight="bold">
        789
      </text>
      <text x="50" y="79" fontSize="2" fill="#10B981">
        Resolved Reports
      </text>
      <text x="25" y="40" fontSize="3" fill="#F59E0B" fontWeight="bold">
        456
      </text>
      <text x="25" y="44" fontSize="2" fill="#F59E0B">
        In Progress
      </text>
    </svg>
  );
}

// Bar Chart with updated colors
function BarChart() {
  return (
    <svg viewBox="0 0 500 200" className="w-full h-full">
      {/* Horizontal grid lines */}
      <line x1="40" y1="20" x2="480" y2="20" stroke="#E5E7EB" strokeWidth="1" />
      <line x1="40" y1="60" x2="480" y2="60" stroke="#E5E7EB" strokeWidth="1" />
      <line
        x1="40"
        y1="100"
        x2="480"
        y2="100"
        stroke="#E5E7EB"
        strokeWidth="1"
      />
      <line
        x1="40"
        y1="140"
        x2="480"
        y2="140"
        stroke="#E5E7EB"
        strokeWidth="1"
      />
      <line
        x1="40"
        y1="180"
        x2="480"
        y2="180"
        stroke="#E5E7EB"
        strokeWidth="1"
      />

      {/* Y-axis labels */}
      <text x="35" y="20" textAnchor="end" fontSize="8" fill="#6B7280">
        1000
      </text>
      <text x="35" y="60" textAnchor="end" fontSize="8" fill="#6B7280">
        750
      </text>
      <text x="35" y="100" textAnchor="end" fontSize="8" fill="#6B7280">
        500
      </text>
      <text x="35" y="140" textAnchor="end" fontSize="8" fill="#6B7280">
        250
      </text>
      <text x="35" y="180" textAnchor="end" fontSize="8" fill="#6B7280">
        0
      </text>

      {/* Bars - First set (blue) */}
      <rect x="50" y="120" width="15" height="60" fill="#1D4ED8" />
      <rect x="90" y="20" width="15" height="160" fill="#1D4ED8" />
      <rect x="130" y="80" width="15" height="100" fill="#1D4ED8" />
      <rect x="170" y="60" width="15" height="120" fill="#1D4ED8" />
      <rect x="210" y="80" width="15" height="100" fill="#1D4ED8" />
      <rect x="250" y="100" width="15" height="80" fill="#1D4ED8" />
      <rect x="290" y="120" width="15" height="60" fill="#1D4ED8" />
      <rect x="330" y="140" width="15" height="40" fill="#1D4ED8" />
      <rect x="370" y="120" width="15" height="60" fill="#1D4ED8" />
      <rect x="410" y="160" width="15" height="20" fill="#1D4ED8" />

      {/* Bars - Second set (yellow) */}
      <rect x="70" y="100" width="15" height="80" fill="#F59E0B" />
      <rect x="110" y="160" width="15" height="20" fill="#F59E0B" />
      <rect x="150" y="80" width="15" height="100" fill="#F59E0B" />
      <rect x="190" y="140" width="15" height="40" fill="#F59E0B" />
      <rect x="230" y="40" width="15" height="140" fill="#F59E0B" />
      <rect x="270" y="160" width="15" height="20" fill="#F59E0B" />
      <rect x="310" y="140" width="15" height="40" fill="#F59E0B" />
      <rect x="350" y="100" width="15" height="80" fill="#F59E0B" />
      <rect x="390" y="120" width="15" height="60" fill="#F59E0B" />
      <rect x="430" y="160" width="15" height="20" fill="#F59E0B" />

      {/* X-axis labels */}
      <text x="60" y="195" textAnchor="middle" fontSize="6" fill="#6B7280">
        Jawa Barat
      </text>
      <text x="100" y="195" textAnchor="middle" fontSize="6" fill="#6B7280">
        Jawa Timur
      </text>
      <text x="140" y="195" textAnchor="middle" fontSize="6" fill="#6B7280">
        Jawa Tengah
      </text>
      <text x="180" y="195" textAnchor="middle" fontSize="6" fill="#6B7280">
        DKI Jakarta
      </text>
      <text x="220" y="195" textAnchor="middle" fontSize="6" fill="#6B7280">
        NTT
      </text>
      <text x="260" y="195" textAnchor="middle" fontSize="6" fill="#6B7280">
        NTB
      </text>
      <text x="300" y="195" textAnchor="middle" fontSize="6" fill="#6B7280">
        Aceh
      </text>
      <text x="340" y="195" textAnchor="middle" fontSize="6" fill="#6B7280">
        Banten
      </text>
      <text x="380" y="195" textAnchor="middle" fontSize="6" fill="#6B7280">
        Bengkulu
      </text>
      <text x="420" y="195" textAnchor="middle" fontSize="6" fill="#6B7280">
        Lampung
      </text>
    </svg>
  );
}
