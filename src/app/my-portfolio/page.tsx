"use client";

import { useState } from "react";
import { Navigation } from "@/components/navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { TrendingUp, DollarSign, Target, BarChart3, Star, RefreshCw } from "lucide-react";
import { usePortfolioData } from "@/hooks/use-portfolio-data";

export default function MyPortfolioPage() {
  const { data, loading, error, refetch } = usePortfolioData();
  const [currentQuarterIndex, setCurrentQuarterIndex] = useState(0);
  
  // Use live data or fallback to static data
  const portfolioData = data?.holdings || [];
  const quarterlyData = data?.quarterlyData || [];
  const summary = data?.summary || {
    initialCapital: 1000000,
    currentValue: 1470000,
    totalReturn: 47.0,
    winRate: 75,
  };

  // Define quarters with sample data
  const quarters = [
    {
      id: "Q4-2024",
      name: "Q4 2024",
      status: "active",
      investment: 1000000,
      return: 125000,
      returnPercent: 12.5,
      stocks: [
        { symbol: "RELIANCE", name: "Reliance Industries", shares: 50, price: 2500.00, value: 125000.00, change: 18.5, changePercent: 18.5 },
        { symbol: "TCS", name: "Tata Consultancy Services", shares: 30, price: 3266.67, value: 98000.00, change: 15.2, changePercent: 15.2 },
        { symbol: "INFOSYS", name: "Infosys Limited", shares: 40, price: 2225.00, value: 89000.00, change: 12.8, changePercent: 12.8 },
        { symbol: "HDFC", name: "HDFC Bank", shares: 25, price: 1600.00, value: 40000.00, change: 8.3, changePercent: 8.3 },
        { symbol: "ICICIBANK", name: "ICICI Bank", shares: 35, price: 1142.86, value: 40000.00, change: 6.7, changePercent: 6.7 },
        { symbol: "SUNPHARMA", name: "Sun Pharma", shares: 20, price: 1200.00, value: 24000.00, change: 4.2, changePercent: 4.2 },
      ]
    },
    {
      id: "Q3-2024",
      name: "Q3 2024",
      status: "completed",
      investment: 1000000,
      return: 82000,
      returnPercent: 8.2,
      stocks: [
        { symbol: "TCS", name: "Tata Consultancy Services", shares: 40, price: 3000.00, value: 120000.00, change: 15.2, changePercent: 15.2 },
        { symbol: "INFOSYS", name: "Infosys Limited", shares: 35, price: 2000.00, value: 70000.00, change: 12.8, changePercent: 12.8 },
        { symbol: "HDFC", name: "HDFC Bank", shares: 30, price: 1500.00, value: 45000.00, change: 8.3, changePercent: 8.3 },
        { symbol: "ICICIBANK", name: "ICICI Bank", shares: 40, price: 1000.00, value: 40000.00, change: 6.7, changePercent: 6.7 },
        { symbol: "RELIANCE", name: "Reliance Industries", shares: 25, price: 2200.00, value: 55000.00, change: 10.5, changePercent: 10.5 },
        { symbol: "SUNPHARMA", name: "Sun Pharma", shares: 25, price: 1100.00, value: 27500.00, change: 5.2, changePercent: 5.2 },
      ]
    },
    {
      id: "Q2-2024",
      name: "Q2 2024",
      status: "completed",
      investment: 1000000,
      return: -21000,
      returnPercent: -2.1,
      stocks: [
        { symbol: "INFOSYS", name: "Infosys Limited", shares: 45, price: 1800.00, value: 81000.00, change: 12.8, changePercent: 12.8 },
        { symbol: "HDFC", name: "HDFC Bank", shares: 35, price: 1400.00, value: 49000.00, change: 8.3, changePercent: 8.3 },
        { symbol: "ICICIBANK", name: "ICICI Bank", shares: 45, price: 950.00, value: 42750.00, change: 6.7, changePercent: 6.7 },
        { symbol: "RELIANCE", name: "Reliance Industries", shares: 30, price: 2000.00, value: 60000.00, change: -5.2, changePercent: -5.2 },
        { symbol: "TCS", name: "Tata Consultancy Services", shares: 25, price: 2800.00, value: 70000.00, change: -8.5, changePercent: -8.5 },
        { symbol: "SUNPHARMA", name: "Sun Pharma", shares: 30, price: 1000.00, value: 30000.00, change: -12.3, changePercent: -12.3 },
      ]
    },
    {
      id: "Q1-2024",
      name: "Q1 2024",
      status: "completed",
      investment: 1000000,
      return: 158000,
      returnPercent: 15.8,
      stocks: [
        { symbol: "RELIANCE", name: "Reliance Industries", shares: 40, price: 2200.00, value: 88000.00, change: 18.5, changePercent: 18.5 },
        { symbol: "TCS", name: "Tata Consultancy Services", shares: 35, price: 2800.00, value: 98000.00, change: 15.2, changePercent: 15.2 },
        { symbol: "INFOSYS", name: "Infosys Limited", shares: 50, price: 1800.00, value: 90000.00, change: 12.8, changePercent: 12.8 },
        { symbol: "HDFC", name: "HDFC Bank", shares: 40, price: 1300.00, value: 52000.00, change: 8.3, changePercent: 8.3 },
        { symbol: "ICICIBANK", name: "ICICI Bank", shares: 50, price: 900.00, value: 45000.00, change: 6.7, changePercent: 6.7 },
        { symbol: "SUNPHARMA", name: "Sun Pharma", shares: 35, price: 1000.00, value: 35000.00, change: 4.2, changePercent: 4.2 },
      ]
    }
  ];

  const currentQuarter = quarters[currentQuarterIndex];


  if (loading) {
    return (
      <div className="min-h-screen bg-white dark:bg-black flex items-center justify-center">
        <div className="text-center">
          <RefreshCw className="h-8 w-8 animate-spin mx-auto mb-4" />
          <p className="text-muted-foreground">Loading portfolio data...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-white dark:bg-black flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 mb-4">Error loading portfolio data: {error}</p>
          <Button onClick={refetch} variant="outline">
            <RefreshCw className="h-4 w-4 mr-2" />
            Retry
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-[#000000] relative">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern-enhanced opacity-30 dark:opacity-20 pointer-events-none"></div>
      <Navigation />

      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-16 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10 blur-3xl"></div>
          <div className="relative">
            <h1 className="text-6xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-pulse">
              Portfolio Dashboard
            </h1>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 mb-6">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-green-400">Live Portfolio Tracking</span>
            </div>
            <p className="text-2xl font-semibold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              One Quarter at a Time - Transparent, Educational, and Profitable
            </p>
            <p className="text-lg text-muted-foreground mb-8 max-w-5xl mx-auto leading-relaxed">
              This website showcases my personal sample stock portfolio, where I track and share the performance of investments made with an initial capital of Rs. 10 Lakhs. Each quarter, I invest in 10 carefully selected stocks, documenting the profit or loss for each stock and the overall portfolio.
            </p>
          </div>
        </div>

        {/* Investment Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <Card className="group relative overflow-hidden bg-gradient-to-br from-blue-500/10 via-blue-600/5 to-indigo-500/10 dark:from-blue-500/20 border-blue-500/30 hover:border-blue-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-1">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent"></div>
            <CardContent className="relative p-8">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-xl bg-blue-500/20 group-hover:bg-blue-500/30 transition-colors">
                  <DollarSign className="h-8 w-8 text-blue-400" />
                </div>
                <div className="text-right">
                  <p className="text-sm font-semibold text-blue-300 mb-1">Initial Capital</p>
                  <p className="text-xs text-blue-400/70">Starting investment</p>
                </div>
              </div>
              <div className="text-4xl font-bold text-blue-100 mb-2 group-hover:scale-105 transition-transform">
                ₹{summary.initialCapital.toLocaleString()}
              </div>
              <div className="w-full bg-blue-500/20 rounded-full h-2">
                <div className="bg-gradient-to-r from-blue-400 to-blue-500 h-2 rounded-full w-full"></div>
              </div>
            </CardContent>
          </Card>

          <Card className="group relative overflow-hidden bg-gradient-to-br from-green-500/10 via-emerald-600/5 to-teal-500/10 dark:from-green-500/20 border-green-500/30 hover:border-green-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-green-500/20 hover:-translate-y-1">
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent"></div>
            <CardContent className="relative p-8">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-xl bg-green-500/20 group-hover:bg-green-500/30 transition-colors">
                  <TrendingUp className="h-8 w-8 text-green-400" />
                </div>
                <div className="text-right">
                  <p className="text-sm font-semibold text-green-300 mb-1">Total Profit</p>
                  <p className="text-xs text-green-400/70">Absolute gain</p>
                </div>
              </div>
              <div className="text-4xl font-bold text-green-100 mb-2 group-hover:scale-105 transition-transform">
                ₹{(summary.currentValue - summary.initialCapital).toLocaleString()}
              </div>
              <div className="w-full bg-green-500/20 rounded-full h-2">
                <div className="bg-gradient-to-r from-green-400 to-emerald-500 h-2 rounded-full w-full"></div>
              </div>
            </CardContent>
          </Card>

          <Card className="group relative overflow-hidden bg-gradient-to-br from-purple-500/10 via-violet-600/5 to-fuchsia-500/10 dark:from-purple-500/20 border-purple-500/30 hover:border-purple-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20 hover:-translate-y-1">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent"></div>
            <CardContent className="relative p-8">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-xl bg-purple-500/20 group-hover:bg-purple-500/30 transition-colors">
                  <Target className="h-8 w-8 text-purple-400" />
                </div>
                <div className="text-right">
                  <p className="text-sm font-semibold text-purple-300 mb-1">Current Value</p>
                  <p className="text-xs text-purple-400/70">Total portfolio value</p>
                </div>
              </div>
              <div className="text-4xl font-bold text-purple-100 mb-2 group-hover:scale-105 transition-transform">
                ₹{summary.currentValue.toLocaleString()}
              </div>
              <div className="w-full bg-purple-500/20 rounded-full h-2">
                <div className="bg-gradient-to-r from-purple-400 to-violet-500 h-2 rounded-full w-full"></div>
              </div>
            </CardContent>
          </Card>
        </div>


        {/* Key Performance Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="group relative overflow-hidden bg-gradient-to-br from-emerald-500/10 to-green-600/5 border-emerald-500/20 hover:border-emerald-400/40 transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/10 hover:-translate-y-1">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="p-2 rounded-lg bg-emerald-500/20 group-hover:bg-emerald-500/30 transition-colors">
                  <TrendingUp className="h-5 w-5 text-emerald-400" />
                </div>
                <div className="text-right">
                  <p className="text-sm font-semibold text-emerald-300">Total Return</p>
                  <p className="text-xs text-emerald-400/70">From Rs. 10L capital</p>
                </div>
              </div>
              <div className="text-3xl font-bold text-emerald-100 group-hover:scale-105 transition-transform">
                +{summary.totalReturn.toFixed(1)}%
              </div>
            </CardContent>
          </Card>

          <Card className="group relative overflow-hidden bg-gradient-to-br from-blue-500/10 to-cyan-600/5 border-blue-500/20 hover:border-blue-400/40 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-1">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="p-2 rounded-lg bg-blue-500/20 group-hover:bg-blue-500/30 transition-colors">
                  <Target className="h-5 w-5 text-blue-400" />
                </div>
                <div className="text-right">
                  <p className="text-sm font-semibold text-blue-300">Win Rate</p>
                  <p className="text-xs text-blue-400/70">Successful quarters</p>
                </div>
              </div>
              <div className="text-3xl font-bold text-blue-100 group-hover:scale-105 transition-transform">
                75%
              </div>
            </CardContent>
          </Card>

          <Card className="group relative overflow-hidden bg-gradient-to-br from-amber-500/10 to-orange-600/5 border-amber-500/20 hover:border-amber-400/40 transition-all duration-300 hover:shadow-xl hover:shadow-amber-500/10 hover:-translate-y-1">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="p-2 rounded-lg bg-amber-500/20 group-hover:bg-amber-500/30 transition-colors">
                  <Star className="h-5 w-5 text-amber-400" />
                </div>
                <div className="text-right">
                  <p className="text-sm font-semibold text-amber-300">Best Quarter</p>
                  <p className="text-xs text-amber-400/70">Q1 2024</p>
                </div>
              </div>
              <div className="text-3xl font-bold text-amber-100 group-hover:scale-105 transition-transform">
                +15.8%
              </div>
            </CardContent>
          </Card>

          <Card className="group relative overflow-hidden bg-gradient-to-br from-violet-500/10 to-purple-600/5 border-violet-500/20 hover:border-violet-400/40 transition-all duration-300 hover:shadow-xl hover:shadow-violet-500/10 hover:-translate-y-1">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="p-2 rounded-lg bg-violet-500/20 group-hover:bg-violet-500/30 transition-colors">
                  <BarChart3 className="h-5 w-5 text-violet-400" />
                </div>
                <div className="text-right">
                  <p className="text-sm font-semibold text-violet-300">Sharpe Ratio</p>
                  <p className="text-xs text-violet-400/70">Risk-adjusted return</p>
                </div>
              </div>
              <div className="text-3xl font-bold text-violet-100 group-hover:scale-105 transition-transform">
                1.42
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Portfolio Tabs */}
        <Tabs defaultValue="current" className="space-y-8">
          <div className="relative">
            <TabsList className="grid w-full grid-cols-4 bg-gradient-to-r from-slate-800/50 to-slate-700/50 border border-slate-600/30 p-1 rounded-xl">
              <TabsTrigger 
                value="current" 
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-purple-500 data-[state=active]:text-white data-[state=active]:shadow-lg transition-all duration-300"
              >
                Current Holdings
              </TabsTrigger>
              <TabsTrigger 
                value="quarterly"
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-emerald-500 data-[state=active]:to-teal-500 data-[state=active]:text-white data-[state=active]:shadow-lg transition-all duration-300"
              >
                Quarterly Performance
              </TabsTrigger>
              <TabsTrigger 
                value="strategy"
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-amber-500 data-[state=active]:to-orange-500 data-[state=active]:text-white data-[state=active]:shadow-lg transition-all duration-300"
              >
                Investment Strategy
              </TabsTrigger>
              <TabsTrigger 
                value="insights"
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-violet-500 data-[state=active]:to-purple-500 data-[state=active]:text-white data-[state=active]:shadow-lg transition-all duration-300"
              >
                Key Insights
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="current" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Current Holdings (Q4 2024)</CardTitle>
                    <CardDescription>10 carefully selected stocks for this quarter</CardDescription>
                  </div>
                  <Badge variant="outline" className="text-green-600 border-green-600">
                    Active Quarter
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="rounded-md border">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Symbol</TableHead>
                        <TableHead>Company</TableHead>
                        <TableHead>Shares</TableHead>
                        <TableHead>Price</TableHead>
                        <TableHead>Value</TableHead>
                        <TableHead>Change</TableHead>
                        <TableHead>Change %</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {portfolioData.map((stock) => (
                        <TableRow key={stock.symbol} className="hover:bg-muted/50">
                          <TableCell className="font-medium">{stock.symbol}</TableCell>
                          <TableCell>{stock.name}</TableCell>
                          <TableCell>{stock.shares}</TableCell>
                          <TableCell>₹{stock.price.toFixed(2)}</TableCell>
                          <TableCell>₹{stock.value.toLocaleString()}</TableCell>
                          <TableCell className={stock.change >= 0 ? "text-green-600" : "text-red-600"}>
                            {stock.change >= 0 ? "+" : ""}₹{(stock.value * stock.changePercent / 100).toFixed(2)}
                          </TableCell>
                          <TableCell className={stock.changePercent >= 0 ? "text-green-600" : "text-red-600"}>
                            {stock.changePercent >= 0 ? "+" : ""}{stock.changePercent.toFixed(2)}%
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="quarterly" className="space-y-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {quarterlyData.map((quarter) => (
                <Card key={quarter.quarter} className={`border-2 ${
                  quarter.status === 'active' 
                    ? 'border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-900/20' 
                    : quarter.returnPercent >= 0 
                      ? 'border-blue-200 dark:border-blue-800' 
                      : 'border-red-200 dark:border-red-800'
                }`}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">{quarter.quarter}</CardTitle>
                      {quarter.status === 'active' && (
                        <Badge className="bg-green-600">Active</Badge>
                      )}
                    </div>
                    <CardDescription>
                      {quarter.status === 'active' ? 'Current Quarter' : 'Completed Quarter'}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold mb-2">
                      <span className={quarter.returnPercent >= 0 ? "text-green-600" : "text-red-600"}>
                        {quarter.returnPercent >= 0 ? "+" : ""}{quarter.returnPercent.toFixed(1)}%
                      </span>
                    </div>
                    <div className="space-y-1 text-sm">
                      <div className="flex justify-between">
                        <span>Investment:</span>
                        <span>₹{quarter.investment.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Return:</span>
                        <span className={quarter.return >= 0 ? "text-green-600" : "text-red-600"}>
                          {quarter.return >= 0 ? "+" : ""}₹{Math.abs(quarter.return).toLocaleString()}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span>Top Pick:</span>
                        <span className="font-medium">{quarter.topPick}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Worst Pick:</span>
                        <span className="font-medium">{quarter.worstPick}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="strategy" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Investment Philosophy</CardTitle>
                  <CardDescription>My approach to stock selection</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                      <div>
                        <p className="font-medium">Fundamental Analysis</p>
                        <p className="text-sm text-muted-foreground">Focus on strong financials, growth prospects, and competitive advantages</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                      <div>
                        <p className="font-medium">Sector Rotation</p>
                        <p className="text-sm text-muted-foreground">Diversify across different sectors based on market cycles</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-purple-600 rounded-full mt-2"></div>
                      <div>
                        <p className="font-medium">Risk Management</p>
                        <p className="text-sm text-muted-foreground">Maximum 10% allocation per stock, stop-loss at 15%</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-orange-600 rounded-full mt-2"></div>
                      <div>
                        <p className="font-medium">Quarterly Rebalancing</p>
                        <p className="text-sm text-muted-foreground">Fresh stock selection every quarter based on current market conditions</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Selection Criteria</CardTitle>
                  <CardDescription>How I choose my 10 stocks each quarter</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div>
                      <p className="font-medium mb-2">Financial Health</p>
                      <Progress value={85} className="h-2" />
                      <p className="text-xs text-muted-foreground mt-1">Strong balance sheet and cash flow</p>
                    </div>
                    <div>
                      <p className="font-medium mb-2">Growth Potential</p>
                      <Progress value={75} className="h-2" />
                      <p className="text-xs text-muted-foreground mt-1">Revenue and earnings growth</p>
                    </div>
                    <div>
                      <p className="font-medium mb-2">Valuation</p>
                      <Progress value={70} className="h-2" />
                      <p className="text-xs text-muted-foreground mt-1">Reasonable price-to-earnings ratio</p>
                    </div>
                    <div>
                      <p className="font-medium mb-2">Market Position</p>
                      <Progress value={90} className="h-2" />
                      <p className="text-xs text-muted-foreground mt-1">Industry leadership and moat</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="insights" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Key Learnings</CardTitle>
                  <CardDescription>Insights from my investment journey</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                      <p className="font-medium text-green-800 dark:text-green-200">Diversification Works</p>
                      <p className="text-sm text-green-700 dark:text-green-300">Spreading risk across sectors reduces volatility</p>
                    </div>
                    <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                      <p className="font-medium text-blue-800 dark:text-blue-200">Patience Pays</p>
                      <p className="text-sm text-blue-700 dark:text-blue-300">Long-term holding beats frequent trading</p>
                    </div>
                    <div className="p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                      <p className="font-medium text-purple-800 dark:text-purple-200">Research is Key</p>
                      <p className="text-sm text-purple-700 dark:text-purple-300">Thorough analysis before investment decisions</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Performance Analysis</CardTitle>
                  <CardDescription>What drives my returns</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Technology Sector</span>
                      <span className="font-medium text-green-600">+52.3%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Banking Sector</span>
                      <span className="font-medium text-green-600">+38.7%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Energy Sector</span>
                      <span className="font-medium text-green-600">+41.2%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Healthcare Sector</span>
                      <span className="font-medium text-green-600">+28.9%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        {/* Disclaimer */}
        <Alert className="mt-8">
          <AlertDescription>
            <strong>Important Disclaimer:</strong> The information provided on this website is for informational purposes only and reflects the personal investment strategy and decisions of the author. You should conduct your own research or consult with a licensed financial advisor before making any investment decisions. By using this website, you acknowledge and agree that any investment decisions you make are at your own risk. We are not liable for any losses or damages incurred directly or indirectly from the information provided here.
          </AlertDescription>
        </Alert>
      </main>
    </div>
  );
}
