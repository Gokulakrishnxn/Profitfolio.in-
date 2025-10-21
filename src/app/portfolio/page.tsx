import { Navigation } from "@/components/navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { TrendingUp, TrendingDown, DollarSign, Target, BarChart3, PieChart } from "lucide-react";

export default function PortfolioPage() {
  const initialCapital = 1000000; // Rs. 10 Lakhs
  const currentValue = 1470000; // Rs. 14.7 Lakhs
  const totalReturn = ((currentValue - initialCapital) / initialCapital) * 100;
  
  const portfolioData = [
    { symbol: "RELIANCE", name: "Reliance Industries", shares: 50, price: 2500.00, value: 125000.00, change: 18.5, changePercent: 18.5, quarter: "Q4 2024" },
    { symbol: "TCS", name: "Tata Consultancy Services", shares: 30, price: 3266.67, value: 98000.00, change: 15.2, changePercent: 15.2, quarter: "Q4 2024" },
    { symbol: "INFOSYS", name: "Infosys Limited", shares: 40, price: 2225.00, value: 89000.00, change: 12.8, changePercent: 12.8, quarter: "Q4 2024" },
    { symbol: "HDFC", name: "HDFC Bank", shares: 25, price: 1600.00, value: 40000.00, change: 8.3, changePercent: 8.3, quarter: "Q4 2024" },
    { symbol: "ICICIBANK", name: "ICICI Bank", shares: 35, price: 1142.86, value: 40000.00, change: 6.7, changePercent: 6.7, quarter: "Q4 2024" },
    { symbol: "SUNPHARMA", name: "Sun Pharma", shares: 20, price: 1200.00, value: 24000.00, change: 4.2, changePercent: 4.2, quarter: "Q4 2024" },
  ];

  const totalValue = portfolioData.reduce((sum, stock) => sum + stock.value, 0);
  const totalChange = portfolioData.reduce((sum, stock) => sum + (stock.value * stock.changePercent / 100), 0);
  const totalChangePercent = (totalChange / totalValue) * 100;

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <Navigation />

      <main className="container mx-auto px-4 py-8">
        {/* Dashboard Header */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h1 className="text-4xl font-bold mb-2">Portfolio Dashboard</h1>
              <p className="text-muted-foreground">
                Tracking Rs. 10 Lakhs investment across 10 carefully selected stocks each quarter
              </p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <BarChart3 className="w-4 h-4 mr-2" />
                Analytics
              </Button>
              <Button size="sm" className="bg-green-600 hover:bg-green-700">
                <Target className="w-4 h-4 mr-2" />
                Add Position
              </Button>
            </div>
          </div>
        </div>

        {/* Key Metrics Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium">Total Value</CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">₹{currentValue.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">Current portfolio value</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium">Total Return</CardTitle>
                <TrendingUp className="h-4 w-4 text-green-600" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-green-600">+{totalReturn.toFixed(1)}%</div>
              <p className="text-xs text-muted-foreground">From Rs. 10L initial capital</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium">Win Rate</CardTitle>
                <Target className="h-4 w-4 text-blue-600" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-blue-600">73%</div>
              <p className="text-xs text-muted-foreground">Successful trades</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium">Sharpe Ratio</CardTitle>
                <BarChart3 className="h-4 w-4 text-purple-600" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-purple-600">1.42</div>
              <p className="text-xs text-muted-foreground">Risk-adjusted return</p>
            </CardContent>
          </Card>
        </div>

        {/* Investment Summary */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-blue-600 dark:text-blue-400 font-medium">Initial Capital</p>
                  <p className="text-2xl font-bold text-blue-700 dark:text-blue-300">₹10,00,000</p>
                  <p className="text-xs text-blue-600 dark:text-blue-400">Starting investment</p>
                </div>
                <DollarSign className="h-8 w-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-green-600 dark:text-green-400 font-medium">Total Profit</p>
                  <p className="text-2xl font-bold text-green-700 dark:text-green-300">₹4,70,000</p>
                  <p className="text-xs text-green-600 dark:text-green-400">Absolute gain</p>
                </div>
                <TrendingUp className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-purple-50 dark:bg-purple-900/20 border-purple-200 dark:border-purple-800">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-purple-600 dark:text-purple-400 font-medium">Current Value</p>
                  <p className="text-2xl font-bold text-purple-700 dark:text-purple-300">₹14,70,000</p>
                  <p className="text-xs text-purple-600 dark:text-purple-400">Total portfolio value</p>
                </div>
                <Target className="h-8 w-8 text-purple-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Today's Change</p>
                  <p className="text-2xl font-bold text-green-600">+₹24,000</p>
                  <p className="text-xs text-green-600">+1.0%</p>
                </div>
                <TrendingUp className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Best Performer</p>
                  <p className="text-2xl font-bold">RELIANCE</p>
                  <p className="text-xs text-green-600">+18.5%</p>
                </div>
                <TrendingUp className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Worst Performer</p>
                  <p className="text-2xl font-bold">SUNPHARMA</p>
                  <p className="text-xs text-red-600">+4.2%</p>
                </div>
                <TrendingDown className="h-8 w-8 text-red-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Portfolio Tabs */}
        <Tabs defaultValue="holdings" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="holdings">Current Holdings</TabsTrigger>
            <TabsTrigger value="performance">Performance</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="quarterly">Quarterly Picks</TabsTrigger>
          </TabsList>

          <TabsContent value="holdings" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Current Holdings</CardTitle>
                    <CardDescription>Your current portfolio positions</CardDescription>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      Export
                    </Button>
                    <Button size="sm" className="bg-green-600 hover:bg-green-700">
                      Add Position
                    </Button>
                  </div>
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
                        <TableHead>Actions</TableHead>
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
                          <TableCell>
                            <div className="flex gap-1">
                              <Button variant="ghost" size="sm">Edit</Button>
                              <Button variant="ghost" size="sm" className="text-red-600 hover:text-red-700">Sell</Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="performance" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Performance Timeline</CardTitle>
                  <CardDescription>Portfolio value over time</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Q1 2024</span>
                      <div className="flex items-center space-x-2">
                        <Progress value={85} className="w-32" />
                        <span className="text-sm font-medium">+15.8%</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Q2 2024</span>
                      <div className="flex items-center space-x-2">
                        <Progress value={20} className="w-32" />
                        <span className="text-sm font-medium text-red-600">-2.1%</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Q3 2024</span>
                      <div className="flex items-center space-x-2">
                        <Progress value={65} className="w-32" />
                        <span className="text-sm font-medium">+8.2%</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Q4 2024</span>
                      <div className="flex items-center space-x-2">
                        <Progress value={90} className="w-32" />
                        <span className="text-sm font-medium">+12.5%</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Benchmark Comparison</CardTitle>
                  <CardDescription>Performance vs major indices</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">My Portfolio</span>
                    <div className="text-right">
                      <div className="font-bold text-green-600">+47.2%</div>
                      <div className="text-xs text-muted-foreground">Total Return</div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Nifty 50</span>
                    <div className="text-right">
                      <div className="font-bold text-blue-600">+28.5%</div>
                      <div className="text-xs text-muted-foreground">+18.7% Alpha</div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Sensex</span>
                    <div className="text-right">
                      <div className="font-bold text-blue-600">+26.8%</div>
                      <div className="text-xs text-muted-foreground">+20.4% Alpha</div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Nifty IT</span>
                    <div className="text-right">
                      <div className="font-bold text-blue-600">+32.1%</div>
                      <div className="text-xs text-muted-foreground">+15.1% Alpha</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Risk Metrics</CardTitle>
                  <CardDescription>Portfolio risk analysis</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Volatility (Annual)</span>
                    <span className="font-medium">18.5%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Max Drawdown</span>
                    <span className="font-medium text-red-600">-8.2%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Sharpe Ratio</span>
                    <span className="font-medium text-green-600">1.42</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Beta</span>
                    <span className="font-medium text-blue-600">0.78</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Sector Allocation</CardTitle>
                  <CardDescription>Portfolio diversification</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Technology</span>
                    <div className="text-right">
                      <div className="font-bold">35%</div>
                      <div className="text-xs text-muted-foreground">₹840,000</div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Banking</span>
                    <div className="text-right">
                      <div className="font-bold">25%</div>
                      <div className="text-xs text-muted-foreground">₹600,000</div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Energy</span>
                    <div className="text-right">
                      <div className="font-bold">20%</div>
                      <div className="text-xs text-muted-foreground">₹480,000</div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Healthcare</span>
                    <div className="text-right">
                      <div className="font-bold">15%</div>
                      <div className="text-xs text-muted-foreground">₹360,000</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="quarterly" className="space-y-6">
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-2">Quarterly Investment Strategy</h3>
              <p className="text-muted-foreground">
                Each quarter, I invest Rs. 10 Lakhs across 10 carefully selected stocks, tracking performance and documenting insights.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="border-green-200 dark:border-green-800">
                <CardHeader>
                  <CardTitle className="text-lg text-green-600">Q4 2024</CardTitle>
                  <CardDescription>Current Quarter</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-green-600">+12.5%</div>
                  <p className="text-sm text-muted-foreground">10 stocks picked</p>
                  <div className="mt-2 space-y-1">
                    <div className="text-xs">Top Pick: RELIANCE (+18.5%)</div>
                    <div className="text-xs">Worst: SUNPHARMA (+4.2%)</div>
                    <div className="text-xs">Investment: ₹10,00,000</div>
                    <div className="text-xs">Return: ₹1,25,000</div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-blue-200 dark:border-blue-800">
                <CardHeader>
                  <CardTitle className="text-lg text-blue-600">Q3 2024</CardTitle>
                  <CardDescription>Previous Quarter</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-green-600">+8.2%</div>
                  <p className="text-sm text-muted-foreground">10 stocks picked</p>
                  <div className="mt-2 space-y-1">
                    <div className="text-xs">Top Pick: TCS (+15.2%)</div>
                    <div className="text-xs">Worst: ICICIBANK (+6.7%)</div>
                    <div className="text-xs">Investment: ₹10,00,000</div>
                    <div className="text-xs">Return: ₹82,000</div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-red-200 dark:border-red-800">
                <CardHeader>
                  <CardTitle className="text-lg text-red-600">Q2 2024</CardTitle>
                  <CardDescription>Second Quarter</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-red-600">-2.1%</div>
                  <p className="text-sm text-muted-foreground">10 stocks picked</p>
                  <div className="mt-2 space-y-1">
                    <div className="text-xs">Top Pick: INFOSYS (+12.8%)</div>
                    <div className="text-xs">Worst: HDFC (+8.3%)</div>
                    <div className="text-xs">Investment: ₹10,00,000</div>
                    <div className="text-xs">Loss: ₹21,000</div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-green-200 dark:border-green-800">
                <CardHeader>
                  <CardTitle className="text-lg text-green-600">Q1 2024</CardTitle>
                  <CardDescription>First Quarter</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-green-600">+15.8%</div>
                  <p className="text-sm text-muted-foreground">10 stocks picked</p>
                  <div className="mt-2 space-y-1">
                    <div className="text-xs">Top Pick: RELIANCE (+18.5%)</div>
                    <div className="text-xs">Worst: SUNPHARMA (+4.2%)</div>
                    <div className="text-xs">Investment: ₹10,00,000</div>
                    <div className="text-xs">Return: ₹1,58,000</div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Quarterly Performance Summary</CardTitle>
                <CardDescription>Total returns across all quarters</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">+47.0%</div>
                    <p className="text-sm text-muted-foreground">Total Return</p>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">₹4,70,000</div>
                    <p className="text-sm text-muted-foreground">Total Profit</p>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">₹14,70,000</div>
                    <p className="text-sm text-muted-foreground">Current Value</p>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-orange-600">75%</div>
                    <p className="text-sm text-muted-foreground">Win Rate</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Performance Alert */}
        <Alert className="mt-8">
          <AlertDescription>
            <strong>Important Disclaimer:</strong> The information provided on this website is for informational purposes only and reflects the personal investment strategy and decisions of the author. You should conduct your own research or consult with a licensed financial advisor before making any investment decisions. By using this website, you acknowledge and agree that any investment decisions you make are at your own risk. We are not liable for any losses or damages incurred directly or indirectly from the information provided here.
          </AlertDescription>
        </Alert>
      </main>
    </div>
  );
}
