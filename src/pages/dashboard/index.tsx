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
          {/* Report Distribution */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Report Distribution</h3>
              <div className="flex items-center gap-2">
                <select className="text-sm border rounded-md px-2 py-1 bg-white">
                  <option>This Month</option>
                  <option>Last Month</option>
                  <option>This Year</option>
                </select>
                <button className="text-gray-400 hover:text-gray-600">
                  <ChevronRight size={24} />
                </button>
              </div>
            </div>
            <div className="relative">
              <HeatMapChart />
              <div className="absolute bottom-0 right-0 bg-white bg-opacity-90 p-2 rounded-tl-md flex items-center gap-2 text-xs">
                <span className="flex items-center gap-1">
                  <span className="inline-block w-3 h-3 bg-blue-200 rounded-sm"></span>
                  <span>Low</span>
                </span>
                <span className="flex items-center gap-1">
                  <span className="inline-block w-3 h-3 bg-blue-400 rounded-sm"></span>
                  <span>Medium</span>
                </span>
                <span className="flex items-center gap-1">
                  <span className="inline-block w-3 h-3 bg-blue-600 rounded-sm"></span>
                  <span>High</span>
                </span>
              </div>
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
          </div>
        </div>

        {/* Trend Analysis Chart */}
        <div className="mb-8">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex justify-between items-center mb-4">
              <div>
                <h3 className="text-lg font-semibold">
                  Report Trends & Response Time Analysis
                </h3>
                <p className="text-sm text-gray-500">
                  Track report volume and average response time over the past 12
                  months
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2">
                  <span className="inline-block w-3 h-3 bg-blue-500 rounded-full"></span>
                  <span className="text-sm text-gray-600">Reports</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="inline-block w-3 h-3 bg-green-500 rounded-full"></span>
                  <span className="text-sm text-gray-600">Resolved</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="inline-block w-3 h-3 bg-red-400 rounded-full"></span>
                  <span className="text-sm text-gray-600">Response Time</span>
                </div>
              </div>
            </div>
            <div className="h-80 w-full">
              <TrendChart />
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

// Heat Map Chart for Report Distribution
function HeatMapChart() {
  return (
    <div className="w-full h-[300px] overflow-hidden rounded-md">
      <svg viewBox="0 0 500 300" className="w-full h-full">
        {/* Indonesia map outline - simplified */}
        <path
          d="M50,150 C100,120 150,130 200,140 C250,150 300,120 350,130 C400,140 450,160 480,150"
          fill="none"
          stroke="#E5E7EB"
          strokeWidth="2"
        />

        {/* Heat map grid */}
        {Array.from({ length: 10 }).map((_, rowIndex) =>
          Array.from({ length: 15 }).map((_, colIndex) => {
            // Generate random heat value for demonstration
            const heatValue = Math.random();
            let fillColor = "#EFF6FF"; // Very low (blue-50)

            if (heatValue > 0.8) fillColor = "#1E40AF"; // Very high (blue-800)
            else if (heatValue > 0.6) fillColor = "#2563EB"; // High (blue-600)
            else if (heatValue > 0.4)
              fillColor = "#3B82F6"; // Medium (blue-500)
            else if (heatValue > 0.2) fillColor = "#60A5FA"; // Low (blue-400)
            else if (heatValue > 0.1) fillColor = "#93C5FD"; // Very low (blue-300)

            return (
              <rect
                key={`${rowIndex}-${colIndex}`}
                x={colIndex * 30 + 20}
                y={rowIndex * 25 + 20}
                width="25"
                height="20"
                fill={fillColor}
                rx="2"
                opacity={0.8 + heatValue * 0.2}
              />
            );
          })
        )}

        {/* City markers */}
        <circle cx="120" cy="100" r="4" fill="#1D4ED8" />
        <text x="120" y="90" fontSize="8" textAnchor="middle" fill="#1D4ED8">
          Jakarta
        </text>

        <circle cx="200" cy="120" r="4" fill="#1D4ED8" />
        <text x="200" y="110" fontSize="8" textAnchor="middle" fill="#1D4ED8">
          Surabaya
        </text>

        <circle cx="150" cy="80" r="4" fill="#1D4ED8" />
        <text x="150" y="70" fontSize="8" textAnchor="middle" fill="#1D4ED8">
          Bandung
        </text>

        <circle cx="300" cy="150" r="4" fill="#1D4ED8" />
        <text x="300" y="140" fontSize="8" textAnchor="middle" fill="#1D4ED8">
          Makassar
        </text>

        <circle cx="250" cy="100" r="4" fill="#1D4ED8" />
        <text x="250" y="90" fontSize="8" textAnchor="middle" fill="#1D4ED8">
          Semarang
        </text>

        {/* Annotations */}
        <circle cx="120" cy="100" r="15" fill="#1D4ED8" fillOpacity="0.2" />
        <circle cx="200" cy="120" r="20" fill="#1D4ED8" fillOpacity="0.2" />

        {/* Legend */}
        <text x="20" y="280" fontSize="10" fill="#4B5563" fontWeight="bold">
          Report Density
        </text>
        <text x="20" y="295" fontSize="8" fill="#6B7280">
          Based on geographic distribution of reports
        </text>
      </svg>
    </div>
  );
}

// Trend Chart for Report Trends and Response Time
function TrendChart() {
  return (
    <svg viewBox="0 0 800 400" className="w-full h-full">
      {/* Background grid */}
      {Array.from({ length: 6 }).map((_, i) => (
        <line
          key={`grid-h-${i}`}
          x1="60"
          y1={50 + i * 60}
          x2="750"
          y2={50 + i * 60}
          stroke="#E5E7EB"
          strokeWidth="1"
          strokeDasharray="5,5"
        />
      ))}
      {Array.from({ length: 13 }).map((_, i) => (
        <line
          key={`grid-v-${i}`}
          x1={60 + i * 55}
          y1="50"
          x2={60 + i * 55}
          y2="350"
          stroke="#E5E7EB"
          strokeWidth="1"
          strokeDasharray="5,5"
        />
      ))}

      {/* X and Y axes */}
      <line
        x1="60"
        y1="350"
        x2="750"
        y2="350"
        stroke="#9CA3AF"
        strokeWidth="2"
      />
      <line x1="60" y1="50" x2="60" y2="350" stroke="#9CA3AF" strokeWidth="2" />

      {/* Y-axis labels - left (reports) */}
      {Array.from({ length: 6 }).map((_, i) => (
        <text
          key={`y-label-${i}`}
          x="55"
          y={350 - i * 60}
          textAnchor="end"
          fontSize="10"
          fill="#6B7280"
        >
          {i * 50}
        </text>
      ))}

      {/* Y-axis labels - right (response time) */}
      {Array.from({ length: 6 }).map((_, i) => (
        <text
          key={`y2-label-${i}`}
          x="755"
          y={350 - i * 60}
          textAnchor="start"
          fontSize="10"
          fill="#F87171"
        >
          {i * 4}h
        </text>
      ))}

      {/* X-axis labels (months) */}
      {[
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
        "Jan",
        "Feb",
        "Mar",
        "Apr",
      ].map((month, i) => (
        <text
          key={`x-label-${i}`}
          x={60 + (i + 1) * 55}
          y="370"
          textAnchor="middle"
          fontSize="10"
          fill="#6B7280"
        >
          {month}
        </text>
      ))}

      {/* Data points for reports received */}
      <polyline
        points="
          115,290
          170,260
          225,240
          280,200
          335,180
          390,150
          445,170
          500,190
          555,160
          610,130
          665,120
          720,100
        "
        fill="none"
        stroke="#3B82F6"
        strokeWidth="3"
      />

      {/* Data points for reports resolved */}
      <polyline
        points="
          115,310
          170,280
          225,270
          280,230
          335,210
          390,180
          445,190
          500,210
          555,180
          610,150
          665,140
          720,120
        "
        fill="none"
        stroke="#10B981"
        strokeWidth="3"
      />

      {/* Area under reports received line */}
      <path
        d="
          M115,290
          L170,260
          L225,240
          L280,200
          L335,180
          L390,150
          L445,170
          L500,190
          L555,160
          L610,130
          L665,120
          L720,100
          L720,350
          L115,350
          Z
        "
        fill="#3B82F6"
        fillOpacity="0.1"
      />

      {/* Area under reports resolved line */}
      <path
        d="
          M115,310
          L170,280
          L225,270
          L280,230
          L335,210
          L390,180
          L445,190
          L500,210
          L555,180
          L610,150
          L665,140
          L720,120
          L720,350
          L115,350
          Z
        "
        fill="#10B981"
        fillOpacity="0.1"
      />

      <polyline
        points="
          115,200
          170,220
          225,240
          280,210
          335,190
          390,170
          445,150
          500,130
          555,120
          610,100
          665,90
          720,80
        "
        fill="none"
        stroke="#F87171"
        strokeWidth="3"
        strokeDasharray="5,3"
      />

      {[200, 220, 240, 210, 190, 170, 150, 130, 120, 100, 90, 80].map(
        (y, i) => (
          <circle
            key={`resp-point-${i}`}
            cx={115 + i * 55}
            cy={y}
            r="4"
            fill="#F87171"
          />
        )
      )}

      <circle cx="665" cy="120" r="6" fill="#3B82F6" fillOpacity="0.5" />
      <line
        x1="665"
        y1="120"
        x2="700"
        y2="90"
        stroke="#3B82F6"
        strokeWidth="1"
      />
      <rect
        x="700"
        y="70"
        width="80"
        height="40"
        rx="4"
        fill="white"
        stroke="#E5E7EB"
      />
      <text
        x="740"
        y="90"
        textAnchor="middle"
        fontSize="10"
        fill="#3B82F6"
        fontWeight="bold"
      >
        250 Reports
      </text>
      <text x="740" y="105" textAnchor="middle" fontSize="8" fill="#6B7280">
        March 2023
      </text>

      <rect
        x="555"
        y="50"
        width="165"
        height="300"
        fill="#3B82F6"
        fillOpacity="0.05"
      />
      <text
        x="637.5"
        y="40"
        textAnchor="middle"
        fontSize="10"
        fill="#3B82F6"
        fontWeight="bold"
      >
        Improved Response Time
      </text>
    </svg>
  );
}
