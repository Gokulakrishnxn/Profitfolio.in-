"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Navigation } from "@/components/navigation";
import { TrendingUp, TrendingDown, DollarSign, Target, BarChart3, Calendar, Activity, BookOpen, Shield, Zap, Globe, Play, CheckCircle, Mail } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      // Reset after 3 seconds
      setTimeout(() => {
        setIsSubscribed(false);
        setEmail("");
      }, 3000);
    }
  };
  return (
        <div className="min-h-screen bg-white dark:bg-[#000000] relative">
          {/* Background Grid Pattern */}
          <div className="absolute inset-0 bg-grid-pattern-enhanced opacity-30 dark:opacity-20 pointer-events-none"></div>
          <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-blue-900/20 dark:via-indigo-900/20 dark:to-purple-900/20"></div>
        <div className="container mx-auto relative">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 mb-6">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-blue-600 dark:text-blue-400">Live Portfolio Tracking</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
              Track Your Investment Journey with{" "}
                <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                  Transparency
                </span>
            </h1>
            
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Join thousands of investors who trust our transparent approach to portfolio management. 
              Get real-time insights, quarterly performance tracking, and educational content.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/my-portfolio">
                  <Button size="lg" className="text-lg px-8 py-4 bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white shadow-lg hover:shadow-xl transition-all duration-300">
                  <BarChart3 className="w-5 h-5 mr-2" />
                  View Dashboard
                </Button>
              </Link>
              <Link href="/about">
                <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800">
                  <Play className="w-5 h-5 mr-2" />
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Performance Card - Centered Overlap */}
      <div className="relative -mt-32 mb-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <Card className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 shadow-2xl dark:shadow-green-500/20 rounded-xl overflow-hidden transform hover:scale-105 transition-all duration-300 hover:shadow-3xl relative">
              {/* Subtle Grid Pattern on Card */}
              <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10 pointer-events-none rounded-xl"></div>
              <CardHeader className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 p-8 border-b border-gray-200 dark:border-gray-700">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <CardTitle className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Portfolio Performance</CardTitle>
                    <CardDescription className="text-lg text-gray-600 dark:text-gray-400">Real-time tracking of your investment journey</CardDescription>
                  </div>
                  <div className="flex items-center gap-3">
                    <Badge className="bg-green-500/20 text-green-600 dark:text-green-400 border-green-500/30 px-4 py-2 text-sm font-medium">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                      Live Data
                    </Badge>
                    <div className="text-right">
                      <p className="text-sm text-gray-500 dark:text-gray-400">Last Updated</p>
                      <p className="text-sm font-medium text-gray-900 dark:text-white">2 mins ago</p>
                    </div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="p-8 space-y-10">
                {/* Key Metrics Dashboard */}
                <div className="bg-gradient-to-r from-blue-50 to-green-50 dark:from-blue-900/10 dark:to-green-900/10 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">Portfolio Overview</h3>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg border border-blue-200 dark:border-blue-700">
                      <div className="flex items-center justify-between mb-4">
                        <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                          <DollarSign className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                        </div>
                        <div className="text-right">
                          <p className="text-sm text-blue-600 dark:text-blue-400 font-medium">Total Value</p>
                          <p className="text-xs text-gray-500 dark:text-gray-400">Current Portfolio</p>
                        </div>
                      </div>
                      <p className="text-4xl font-bold text-blue-700 dark:text-blue-300 mb-2">₹14.7L</p>
                      <div className="flex items-center gap-2">
                        <TrendingUp className="h-4 w-4 text-green-600 dark:text-green-400" />
                        <span className="text-sm text-green-600 dark:text-green-400 font-medium">+₹4.7L from initial</span>
                      </div>
                    </div>
                    
                    <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg border border-green-200 dark:border-green-700">
                      <div className="flex items-center justify-between mb-4">
                        <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-lg">
                          <TrendingUp className="h-6 w-6 text-green-600 dark:text-green-400" />
                        </div>
                        <div className="text-right">
                          <p className="text-sm text-green-600 dark:text-green-400 font-medium">Total Returns</p>
                          <p className="text-xs text-gray-500 dark:text-gray-400">Since Inception</p>
                        </div>
                      </div>
                      <p className="text-4xl font-bold text-green-700 dark:text-green-300 mb-2">+47%</p>
                      <div className="flex items-center gap-2">
                        <Target className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                        <span className="text-sm text-blue-600 dark:text-blue-400 font-medium">Above Market</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Current Holdings Dashboard */}
                <div className="mb-10">
                  <div className="flex items-center justify-between mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Current Holdings</h3>
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-sm text-green-600 dark:text-green-400 font-medium">Live Data</span>
                      <div className="text-sm text-gray-500 dark:text-gray-400">• 5 stocks</div>
                    </div>
                  </div>
                  
                  {/* Holdings Table */}
                  <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg">
                    <div className="grid grid-cols-12 gap-6 p-6 bg-gray-100 dark:bg-gray-700 text-sm font-semibold text-gray-600 dark:text-gray-300">
                      <div className="col-span-4">Company</div>
                      <div className="col-span-2 text-center">Shares</div>
                      <div className="col-span-2 text-center">Price</div>
                      <div className="col-span-2 text-center">Value</div>
                      <div className="col-span-2 text-center">Change</div>
                    </div>
                    
                    <div className="divide-y divide-gray-200 dark:divide-gray-700">
                      {/* Reliance Industries */}
                      <div className="grid grid-cols-12 gap-6 p-6 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                        <div className="col-span-4 flex items-center space-x-3">
                          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center shadow-lg">
                            <div className="text-white font-bold text-lg">R</div>
                          </div>
                          <div>
                            <p className="font-semibold text-gray-900 dark:text-white">Reliance Industries</p>
                            <div className="flex items-center gap-2">
                              <span className="text-xs text-gray-500 dark:text-gray-400">RELIANCE</span>
                              <span className="text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-2 py-1 rounded">NSE</span>
                            </div>
                          </div>
                        </div>
                        <div className="col-span-2 text-center">
                          <p className="font-medium text-gray-900 dark:text-white">50</p>
                        </div>
                        <div className="col-span-2 text-center">
                          <p className="font-medium text-gray-900 dark:text-white">₹2,500</p>
                        </div>
                        <div className="col-span-2 text-center">
                          <p className="font-semibold text-gray-900 dark:text-white">₹1,25,000</p>
                        </div>
                        <div className="col-span-2 text-center">
                          <div className="flex items-center justify-center space-x-1">
                            <TrendingUp className="w-4 h-4 text-green-600 dark:text-green-400" />
                            <span className="text-green-600 dark:text-green-400 font-semibold">+18.5%</span>
                          </div>
                        </div>
                      </div>
                      
                      {/* TCS */}
                      <div className="grid grid-cols-12 gap-6 p-6 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                        <div className="col-span-4 flex items-center space-x-3">
                          <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center shadow-lg">
                            <div className="text-white font-bold text-lg">T</div>
                          </div>
                          <div>
                            <p className="font-semibold text-gray-900 dark:text-white">Tata Consultancy Services</p>
                            <div className="flex items-center gap-2">
                              <span className="text-xs text-gray-500 dark:text-gray-400">TCS</span>
                              <span className="text-xs bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 px-2 py-1 rounded">NSE</span>
                            </div>
                          </div>
                        </div>
                        <div className="col-span-2 text-center">
                          <p className="font-medium text-gray-900 dark:text-white">30</p>
                        </div>
                        <div className="col-span-2 text-center">
                          <p className="font-medium text-gray-900 dark:text-white">₹3,267</p>
                        </div>
                        <div className="col-span-2 text-center">
                          <p className="font-semibold text-gray-900 dark:text-white">₹98,000</p>
                        </div>
                        <div className="col-span-2 text-center">
                          <div className="flex items-center justify-center space-x-1">
                            <TrendingUp className="w-4 h-4 text-green-600 dark:text-green-400" />
                            <span className="text-green-600 dark:text-green-400 font-semibold">+15.2%</span>
                          </div>
                        </div>
                      </div>
                      
                      {/* Infosys */}
                      <div className="grid grid-cols-12 gap-6 p-6 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                        <div className="col-span-4 flex items-center space-x-3">
                          <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center shadow-lg">
                            <div className="text-white font-bold text-lg">I</div>
                          </div>
                          <div>
                            <p className="font-semibold text-gray-900 dark:text-white">Infosys Limited</p>
                            <div className="flex items-center gap-2">
                              <span className="text-xs text-gray-500 dark:text-gray-400">INFOSYS</span>
                              <span className="text-xs bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 px-2 py-1 rounded">NSE</span>
                            </div>
                          </div>
                        </div>
                        <div className="col-span-2 text-center">
                          <p className="font-medium text-gray-900 dark:text-white">40</p>
                        </div>
                        <div className="col-span-2 text-center">
                          <p className="font-medium text-gray-900 dark:text-white">₹2,225</p>
                        </div>
                        <div className="col-span-2 text-center">
                          <p className="font-semibold text-gray-900 dark:text-white">₹89,000</p>
                        </div>
                        <div className="col-span-2 text-center">
                          <div className="flex items-center justify-center space-x-1">
                            <TrendingUp className="w-4 h-4 text-green-600 dark:text-green-400" />
                            <span className="text-green-600 dark:text-green-400 font-semibold">+12.8%</span>
                          </div>
                        </div>
                      </div>
                      
                      {/* HDFC Bank */}
                      <div className="grid grid-cols-12 gap-6 p-6 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                        <div className="col-span-4 flex items-center space-x-3">
                          <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center shadow-lg">
                            <div className="text-white font-bold text-lg">H</div>
                          </div>
                          <div>
                            <p className="font-semibold text-gray-900 dark:text-white">HDFC Bank</p>
                            <div className="flex items-center gap-2">
                              <span className="text-xs text-gray-500 dark:text-gray-400">HDFC</span>
                              <span className="text-xs bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 px-2 py-1 rounded">NSE</span>
                            </div>
                          </div>
                        </div>
                        <div className="col-span-2 text-center">
                          <p className="font-medium text-gray-900 dark:text-white">25</p>
                        </div>
                        <div className="col-span-2 text-center">
                          <p className="font-medium text-gray-900 dark:text-white">₹1,600</p>
                        </div>
                        <div className="col-span-2 text-center">
                          <p className="font-semibold text-gray-900 dark:text-white">₹40,000</p>
                        </div>
                        <div className="col-span-2 text-center">
                          <div className="flex items-center justify-center space-x-1">
                            <TrendingUp className="w-4 h-4 text-green-600 dark:text-green-400" />
                            <span className="text-green-600 dark:text-green-400 font-semibold">+8.3%</span>
                          </div>
                        </div>
                      </div>
                      
                      {/* ICICI Bank */}
                      <div className="grid grid-cols-12 gap-6 p-6 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                        <div className="col-span-4 flex items-center space-x-3">
                          <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-lg flex items-center justify-center shadow-lg">
                            <div className="text-white font-bold text-lg">I</div>
                          </div>
                          <div>
                            <p className="font-semibold text-gray-900 dark:text-white">ICICI Bank</p>
                            <div className="flex items-center gap-2">
                              <span className="text-xs text-gray-500 dark:text-gray-400">ICICIBANK</span>
                              <span className="text-xs bg-cyan-100 dark:bg-cyan-900/30 text-cyan-600 dark:text-cyan-400 px-2 py-1 rounded">NSE</span>
                            </div>
                          </div>
                        </div>
                        <div className="col-span-2 text-center">
                          <p className="font-medium text-gray-900 dark:text-white">35</p>
                        </div>
                        <div className="col-span-2 text-center">
                          <p className="font-medium text-gray-900 dark:text-white">₹1,143</p>
                        </div>
                        <div className="col-span-2 text-center">
                          <p className="font-semibold text-gray-900 dark:text-white">₹40,000</p>
                        </div>
                        <div className="col-span-2 text-center">
                          <div className="flex items-center justify-center space-x-1">
                            <TrendingUp className="w-4 h-4 text-green-600 dark:text-green-400" />
                            <span className="text-green-600 dark:text-green-400 font-semibold">+6.7%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Summary Stats */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 p-6 rounded-xl text-center shadow-lg border border-blue-200 dark:border-blue-700">
                      <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <BarChart3 className="w-6 h-6 text-white" />
                      </div>
                      <p className="text-sm text-blue-600 dark:text-blue-400 font-medium mb-2">Total Holdings</p>
                      <p className="text-3xl font-bold text-blue-700 dark:text-blue-300">5</p>
                    </div>
                    <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 p-6 rounded-xl text-center shadow-lg border border-green-200 dark:border-green-700">
                      <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <TrendingUp className="w-6 h-6 text-white" />
                      </div>
                      <p className="text-sm text-green-600 dark:text-green-400 font-medium mb-2">Avg. Return</p>
                      <p className="text-3xl font-bold text-green-700 dark:text-green-300">+12.3%</p>
                    </div>
                    <div className="bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 p-6 rounded-xl text-center shadow-lg border border-orange-200 dark:border-orange-700">
                      <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <DollarSign className="w-6 h-6 text-white" />
                      </div>
                      <p className="text-sm text-orange-600 dark:text-orange-400 font-medium mb-2">Total Value</p>
                      <p className="text-3xl font-bold text-orange-700 dark:text-orange-300">₹3.92L</p>
                    </div>
                  </div>
                </div>

                {/* Quarterly Performance Dashboard */}
                <div className="mb-10">
                  <div className="flex items-center justify-between mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Quarterly Performance</h3>
                    <div className="flex items-center gap-3">
                      <Calendar className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                      <span className="text-sm text-gray-600 dark:text-gray-400 font-medium">4 Quarters Tracked</span>
                    </div>
                  </div>
                  
                  {/* Quarterly Performance Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
                    {/* Q4 2024 - Current Quarter */}
                    <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 border-2 border-green-200 dark:border-green-700 p-8 rounded-2xl shadow-lg">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                          <p className="text-sm font-semibold text-green-700 dark:text-green-300">Q4 2024</p>
                        </div>
                        <Badge className="bg-green-500/20 text-green-700 dark:text-green-300 border-green-500/30 text-xs">Current</Badge>
                      </div>
                      <div className="space-y-2">
                        <p className="text-3xl font-bold text-green-800 dark:text-green-200">+12.5%</p>
                        <p className="text-sm text-green-600 dark:text-green-400">₹1,25,000 profit</p>
                        <p className="text-xs text-green-600 dark:text-green-400">6 stocks • 3 months</p>
                      </div>
                    </div>
                    
                    {/* Q3 2024 */}
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 border border-blue-200 dark:border-blue-700 p-8 rounded-2xl shadow-lg">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <TrendingUp className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                          <p className="text-sm font-semibold text-blue-700 dark:text-blue-300">Q3 2024</p>
                        </div>
                        <Badge className="bg-blue-500/20 text-blue-700 dark:text-blue-300 border-blue-500/30 text-xs">Completed</Badge>
                      </div>
                      <div className="space-y-2">
                        <p className="text-3xl font-bold text-blue-800 dark:text-blue-200">+8.2%</p>
                        <p className="text-sm text-blue-600 dark:text-blue-400">₹82,000 profit</p>
                        <p className="text-xs text-blue-600 dark:text-blue-400">5 stocks • 3 months</p>
                      </div>
                    </div>
                    
                    {/* Q2 2024 */}
                    <div className="bg-gradient-to-br from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/20 border border-red-200 dark:border-red-700 p-8 rounded-2xl shadow-lg">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <TrendingDown className="w-4 h-4 text-red-600 dark:text-red-400" />
                          <p className="text-sm font-semibold text-red-700 dark:text-red-300">Q2 2024</p>
                        </div>
                        <Badge className="bg-red-500/20 text-red-700 dark:text-red-300 border-red-500/30 text-xs">Completed</Badge>
                      </div>
                      <div className="space-y-2">
                        <p className="text-3xl font-bold text-red-800 dark:text-red-200">-2.1%</p>
                        <p className="text-sm text-red-600 dark:text-red-400">₹21,000 loss</p>
                        <p className="text-xs text-red-600 dark:text-red-400">4 stocks • 3 months</p>
                      </div>
                    </div>
                    
                    {/* Q1 2024 */}
                    <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 border border-purple-200 dark:border-purple-700 p-8 rounded-2xl shadow-lg">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <TrendingUp className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                          <p className="text-sm font-semibold text-purple-700 dark:text-purple-300">Q1 2024</p>
                        </div>
                        <Badge className="bg-purple-500/20 text-purple-700 dark:text-purple-300 border-purple-500/30 text-xs">Completed</Badge>
                      </div>
                      <div className="space-y-2">
                        <p className="text-3xl font-bold text-purple-800 dark:text-purple-200">+15.8%</p>
                        <p className="text-sm text-purple-600 dark:text-purple-400">₹1,58,000 profit</p>
                        <p className="text-xs text-purple-600 dark:text-purple-400">6 stocks • 3 months</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Performance Summary */}
                  <div className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-6 text-center">Performance Summary</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-3">
                          <Target className="w-8 h-8 text-green-600 dark:text-green-400" />
                        </div>
                        <p className="text-2xl font-bold text-gray-900 dark:text-white">75%</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Win Rate</p>
                      </div>
                      <div className="text-center">
                        <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-3">
                          <BarChart3 className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                        </div>
                        <p className="text-2xl font-bold text-gray-900 dark:text-white">+47%</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Total Returns</p>
                      </div>
                      <div className="text-center">
                        <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center mx-auto mb-3">
                          <Calendar className="w-8 h-8 text-orange-600 dark:text-orange-400" />
                        </div>
                        <p className="text-2xl font-bold text-gray-900 dark:text-white">4</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Quarters</p>
                      </div>
                    </div>
                  </div>
                </div>

                <Link href="/my-portfolio">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    <BarChart3 className="w-4 h-4 mr-2" />
                    View Full Dashboard
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-900/20">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
              Why Choose Profitfolio?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Our platform provides everything you need to make informed investment decisions with complete transparency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Activity className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Real-time Tracking</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Monitor your portfolio performance with live updates and comprehensive analytics.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Target className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Quarterly Strategy</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Systematic quarterly investment approach with 10 carefully selected stocks.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <BookOpen className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Educational</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Learn from transparent documentation of investment decisions and outcomes.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <BarChart3 className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Performance Analytics</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Detailed performance metrics, win rates, and risk-adjusted returns.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-teal-100 dark:bg-teal-900/30 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Shield className="w-6 h-6 text-teal-600" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Risk Management</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Systematic risk assessment and portfolio diversification strategies.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-pink-100 dark:bg-pink-900/30 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Globe className="w-6 h-6 text-pink-600" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Global Insights</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Market insights and sector analysis for informed investment decisions.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">₹14.7L</div>
              <p className="text-gray-600 dark:text-gray-300">Portfolio Value</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">+47%</div>
              <p className="text-gray-600 dark:text-gray-300">Total Returns</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">75%</div>
              <p className="text-gray-600 dark:text-gray-300">Win Rate</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">4</div>
              <p className="text-gray-600 dark:text-gray-300">Quarters</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Start Your Investment Journey?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of investors who trust our transparent approach to portfolio management.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/my-portfolio">
              <Button size="lg" className="text-lg px-8 py-4 bg-white text-blue-600 hover:bg-gray-100 shadow-lg">
                <BarChart3 className="w-5 h-5 mr-2" />
                View Dashboard
              </Button>
            </Link>
            <Link href="/about">
              <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-blue-600">
                <BookOpen className="w-5 h-5 mr-2" />
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-900/20">
        <div className="container mx-auto">
          <Card className="max-w-4xl mx-auto bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700">
            <CardContent className="p-12 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Stay Updated
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                Get quarterly portfolio updates, market insights, and investment strategies delivered to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <Input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="flex-1 bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-600"
                />
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
                  Subscribe
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-gray-200 dark:border-gray-800">
        <div className="container mx-auto text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              Profitfolio
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Transparent, Educational, and Profitable Investment Journey
            </p>
          </div>
          
          <div className="mb-8">
            <Alert className="max-w-4xl mx-auto">
              <AlertDescription>
                <strong>Important Disclaimer:</strong> The information provided on this website is for informational purposes only and reflects the personal investment strategy and decisions of the author. You should conduct your own research or consult with a licensed financial advisor before making any investment decisions. By using this website, you acknowledge and agree that any investment decisions you make are at your own risk. We are not liable for any losses or damages incurred directly or indirectly from the information provided here.
              </AlertDescription>
            </Alert>
          </div>
          
          <p className="text-sm text-gray-500 dark:text-gray-400">
            © 2024 Profitfolio. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}