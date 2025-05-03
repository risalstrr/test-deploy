import { MapPin, Search, BarChart3, Bot, Mail } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className={`min-h-screen bg-white text-gray-800 font-sans`}>
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
              <Link href="/about" className="border-b-2 border-blue-500">
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
      <section className="bg-[#1566C3]/10 py-16 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold text-[#1566C3] mb-6">
            About Us
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl font-medium text-gray-700">
            Empowering Cities with Smarter Road Maintenance
          </p>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#1566C3]/5 rounded-full -mr-32 -mt-32"></div>
        <div className="absolute bottom-0 left-0 w-40 h-40 bg-[#1566C3]/5 rounded-full -ml-20 -mb-20"></div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        {/* Introduction */}
        <section className="max-w-4xl mx-auto mb-16 animate-fadeIn">
          <p className="text-lg leading-relaxed mb-8">
            At Street Tweets, we believe that better roads start with better
            data. Our platform harnesses the power of AI-driven hashtag analysis
            to detect, prioritize, and monitor road issues reported by citizens
            on social media—especially through Twitter.
          </p>
          <p className="text-lg leading-relaxed">
            What started as a response to inefficient public infrastructure
            reporting has grown into a nationwide initiative that improves
            transparency, responsiveness, and urban mobility across more than 90
            cities in Indonesia.
          </p>
        </section>

        {/* Mission */}
        <section className="max-w-4xl mx-auto mb-16 bg-[#1566C3]/5 p-8 rounded-2xl">
          <h2 className="text-3xl font-bold text-[#1566C3] mb-6">
            Our Mission
          </h2>
          <p className="text-lg leading-relaxed">
            To revolutionize how governments and citizens collaborate in solving
            road-related issues by delivering real-time insights, automated
            reporting, and data-driven decision support.
          </p>
        </section>

        {/* What We Do */}
        <section className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-[#1566C3] mb-8">What We Do</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 flex items-start space-x-4 group">
              <div className="bg-[#1566C3]/10 p-3 rounded-full group-hover:bg-[#1566C3] group-hover:text-white transition-colors duration-300">
                <Search className="h-6 w-6 text-[#1566C3] group-hover:text-white" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Analyze Social Media</h3>
                <p>
                  Analyze social media reports using AI to identify road damage
                  signals
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 flex items-start space-x-4 group">
              <div className="bg-[#1566C3]/10 p-3 rounded-full group-hover:bg-[#1566C3] group-hover:text-white transition-colors duration-300">
                <MapPin className="h-6 w-6 text-[#1566C3] group-hover:text-white" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Map Hotspots</h3>
                <p>
                  Map hotspots of road issues to help public works departments
                  prioritize faster
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 flex items-start space-x-4 group">
              <div className="bg-[#1566C3]/10 p-3 rounded-full group-hover:bg-[#1566C3] group-hover:text-white transition-colors duration-300">
                <BarChart3 className="h-6 w-6 text-[#1566C3] group-hover:text-white" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Provide Analytics</h3>
                <p>
                  Provide dashboards and analytics for ongoing monitoring and
                  impact assessment
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 flex items-start space-x-4 group">
              <div className="bg-[#1566C3]/10 p-3 rounded-full group-hover:bg-[#1566C3] group-hover:text-white transition-colors duration-300">
                <Bot className="h-6 w-6 text-[#1566C3] group-hover:text-white" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Real-time Responses</h3>
                <p>
                  Enable real-time bot responses to acknowledge and process
                  community complaints instantly
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why It Matters */}
        <section className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-[#1566C3] mb-6">
            Why It Matters
          </h2>
          <div className="bg-gradient-to-br from-[#1566C3]/5 to-[#1566C3]/10 p-8 rounded-2xl">
            <p className="text-lg leading-relaxed mb-4">
              Potholes, cracks, and other road issues may seem minor—but
              collectively, they impact commuting time, public safety, and
              infrastructure longevity. Traditional reporting systems are often
              slow and inefficient. That&apos;s where Street Tweets comes in.
            </p>
            <p className="text-lg leading-relaxed font-medium">
              We turn digital voices into actionable data that keeps our roads
              safer and more reliable.
            </p>
          </div>
        </section>

        {/* Contact */}
        <section className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#1566C3] mb-6">
            Want to collaborate or learn more?
          </h2>
          <div className="flex flex-col md:flex-row gap-6">
            <a
              href="mailto:support@streettweets.id"
              className="flex items-center gap-2 text-lg hover:text-[#1566C3] transition-colors"
            >
              <Mail className="h-5 w-5" />
              <span>support@streettweets.id</span>
            </a>

            <div className="flex gap-4">
              <a
                href="#"
                className="bg-[#1566C3] text-white px-4 py-2 rounded-md hover:bg-[#1566C3]/90 transition-colors"
              >
                Follow on X
              </a>
              <a
                href="#"
                className="bg-[#1566C3] text-white px-4 py-2 rounded-md hover:bg-[#1566C3]/90 transition-colors"
              >
                Instagram
              </a>
              <a
                href="#"
                className="bg-[#1566C3] text-white px-4 py-2 rounded-md hover:bg-[#1566C3]/90 transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
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
