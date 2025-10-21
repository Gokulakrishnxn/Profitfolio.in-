"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export function Dashboard() {
  const portfolioData = [
    { symbol: "AAPL", name: "Apple Inc.", shares: 50, price: 175.00, value: 8750.00, change: 12.5, changePercent: 12.5 },
    { symbol: "TSLA", name: "Tesla Inc.", shares: 25, price: 210.00, value: 5250.00, change: 8.3, changePercent: 8.3 },
    { symbol: "MSFT", name: "Microsoft Corp.", shares: 30, price: 330.00, value: 9900.00, change: 6.7, changePercent: 6.7 },
    { symbol: "GOOGL", name: "Alphabet Inc.", shares: 15, price: 140.00, value: 2100.00, change: -2.1, changePercent: -2.1 },
    { symbol: "AMZN", name: "Amazon.com Inc.", shares: 20, price: 150.00, value: 3000.00, change: 4.2, changePercent: 4.2 },
  ];

  const totalValue = portfolioData.reduce((sum, stock) => sum + stock.value, 0);
  const totalChange = portfolioData.reduce((sum, stock) => sum + (stock.value * stock.changePercent / 100), 0);
  const totalChangePercent = (totalChange / totalValue) * 100;

  return (
    <div className="space-y-6">
      {/* Portfolio Summary */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Value</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${totalValue.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">
              {totalChangePercent > 0 ? "+" : ""}{totalChangePercent.toFixed(2)}% from yesterday
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Today&apos;s Change</CardTitle>
          </CardHeader>
          <CardContent>
            <div className={`text-2xl font-bold ${totalChange >= 0 ? "text-green-600" : "text-red-600"}`}>
              {totalChange >= 0 ? "+" : ""}${totalChange.toLocaleString()}
            </div>
            <p className="text-xs text-muted-foreground">
              {totalChangePercent > 0 ? "+" : ""}{totalChangePercent.toFixed(2)}%
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Best Performer</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-lg font-bold">AAPL</div>
            <p className="text-xs text-green-600">+12.5%</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Worst Performer</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-lg font-bold">GOOGL</div>
            <p className="text-xs text-red-600">-2.1%</p>
          </CardContent>
        </Card>
      </div>

      {/* Portfolio Allocation */}
      <Card>
        <CardHeader>
          <CardTitle>Portfolio Allocation</CardTitle>
          <CardDescription>Distribution of your investments</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {portfolioData.map((stock) => {
            const percentage = (stock.value / totalValue) * 100;
            return (
              <div key={stock.symbol} className="space-y-2">
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-2">
                    <span className="font-medium">{stock.symbol}</span>
                    <Badge variant="outline">{percentage.toFixed(1)}%</Badge>
                  </div>
                  <span className="text-sm text-muted-foreground">${stock.value.toLocaleString()}</span>
                </div>
                <Progress value={percentage} className="h-2" />
              </div>
            );
          })}
        </CardContent>
      </Card>

      {/* Holdings Table */}
      <Card>
        <CardHeader>
          <CardTitle>Holdings</CardTitle>
          <CardDescription>Detailed view of your portfolio</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Symbol</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Shares</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Value</TableHead>
                <TableHead>Change</TableHead>
                <TableHead>Change %</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {portfolioData.map((stock) => (
                <TableRow key={stock.symbol}>
                  <TableCell className="font-medium">{stock.symbol}</TableCell>
                  <TableCell>{stock.name}</TableCell>
                  <TableCell>{stock.shares}</TableCell>
                  <TableCell>${stock.price.toFixed(2)}</TableCell>
                  <TableCell>${stock.value.toLocaleString()}</TableCell>
                  <TableCell className={stock.change >= 0 ? "text-green-600" : "text-red-600"}>
                    {stock.change >= 0 ? "+" : ""}${(stock.value * stock.changePercent / 100).toFixed(2)}
                  </TableCell>
                  <TableCell className={stock.changePercent >= 0 ? "text-green-600" : "text-red-600"}>
                    {stock.changePercent >= 0 ? "+" : ""}{stock.changePercent.toFixed(2)}%
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
