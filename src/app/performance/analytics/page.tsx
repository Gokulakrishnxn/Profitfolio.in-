import { Navigation } from "@/components/navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Alert, AlertDescription } from "@/components/ui/alert";

export default function PerformanceAnalyticsPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <Navigation />

      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Performance Analytics</h1>
          <p className="text-muted-foreground">
            Comprehensive analysis of portfolio performance, risk metrics, and benchmark comparisons
          </p>
        </div>

        {/* Key Metrics Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Total Return</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-green-600">+47.2%</div>
              <p className="text-xs text-muted-foreground">Since inception</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Annualized Return</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-blue-600">+18.5%</div>
              <p className="text-xs text-muted-foreground">CAGR</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Sharpe Ratio</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-purple-600">1.42</div>
              <p className="text-xs text-muted-foreground">Risk-adjusted</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Max Drawdown</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-red-600">-8.2%</div>
              <p className="text-xs text-muted-foreground">Peak to trough</p>
            </CardContent>
          </Card>
        </div>

        {/* Performance Tabs */}
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="benchmarks">vs Benchmarks</TabsTrigger>
            <TabsTrigger value="risk">Risk Analysis</TabsTrigger>
            <TabsTrigger value="sectors">Sector Performance</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
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
                  <CardTitle>Win/Loss Statistics</CardTitle>
                  <CardDescription>Success rate analysis</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Total Trades</span>
                    <span className="font-medium">40</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Winning Trades</span>
                    <span className="font-medium text-green-600">29 (73%)</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Losing Trades</span>
                    <span className="font-medium text-red-600">11 (27%)</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Average Win</span>
                    <span className="font-medium text-green-600">+8.5%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Average Loss</span>
                    <span className="font-medium text-red-600">-4.2%</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="benchmarks" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
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

              <Card>
                <CardHeader>
                  <CardTitle>Risk-Adjusted Returns</CardTitle>
                  <CardDescription>Performance per unit of risk</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Sharpe Ratio</span>
                    <div className="text-right">
                      <div className="font-bold text-green-600">1.42</div>
                      <div className="text-xs text-muted-foreground">vs 0.89 (Nifty)</div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Sortino Ratio</span>
                    <div className="text-right">
                      <div className="font-bold text-green-600">2.15</div>
                      <div className="text-xs text-muted-foreground">Downside risk</div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Calmar Ratio</span>
                    <div className="text-right">
                      <div className="font-bold text-green-600">2.25</div>
                      <div className="text-xs text-muted-foreground">vs max drawdown</div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Beta</span>
                    <div className="text-right">
                      <div className="font-bold text-blue-600">0.78</div>
                      <div className="text-xs text-muted-foreground">Market sensitivity</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="risk" className="space-y-6">
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
                    <span className="text-sm">VaR (95%)</span>
                    <span className="font-medium">-3.2%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">CVaR (95%)</span>
                    <span className="font-medium">-4.8%</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Risk Management</CardTitle>
                  <CardDescription>Current risk controls</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Position Size Limit</span>
                    <span className="font-medium">10% max</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Stop Loss</span>
                    <span className="font-medium">15%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Sector Limit</span>
                    <span className="font-medium">35% max</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Cash Reserve</span>
                    <span className="font-medium">5-10%</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="sectors" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Sector Performance</CardTitle>
                  <CardDescription>Returns by sector allocation</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Technology</span>
                    <div className="text-right">
                      <div className="font-bold text-green-600">+52.3%</div>
                      <div className="text-xs text-muted-foreground">35% allocation</div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Banking</span>
                    <div className="text-right">
                      <div className="font-bold text-green-600">+38.7%</div>
                      <div className="text-xs text-muted-foreground">25% allocation</div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Energy</span>
                    <div className="text-right">
                      <div className="font-bold text-green-600">+41.2%</div>
                      <div className="text-xs text-muted-foreground">20% allocation</div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Healthcare</span>
                    <div className="text-right">
                      <div className="font-bold text-green-600">+28.9%</div>
                      <div className="text-xs text-muted-foreground">15% allocation</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Top Performers by Sector</CardTitle>
                  <CardDescription>Best stocks in each sector</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">TCS (Technology)</span>
                    <span className="font-bold text-green-600">+45.2%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">HDFC Bank (Banking)</span>
                    <span className="font-bold text-green-600">+38.7%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">RELIANCE (Energy)</span>
                    <span className="font-bold text-green-600">+42.1%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">SUN PHARMA (Healthcare)</span>
                    <span className="font-bold text-green-600">+31.5%</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        {/* Performance Alert */}
        <Alert className="mt-8">
          <AlertDescription>
            <strong>Performance Disclaimer:</strong> Past performance does not guarantee future results. 
            All investments carry risk, and you may lose money. This analysis is for educational purposes only.
          </AlertDescription>
        </Alert>
      </main>
    </div>
  );
}
