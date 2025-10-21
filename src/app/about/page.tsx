import { Navigation } from "@/components/navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#000000] relative">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10 pointer-events-none"></div>
      <Navigation />

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              About My Investment Journey
            </h1>
            <p className="text-xl text-muted-foreground">
              Transparent, Educational, and Profitable - One Quarter at a Time
            </p>
          </div>

          {/* Personal Story */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">My Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  My investment journey began 5 years ago with a simple goal: to build wealth through 
                  disciplined, research-driven stock selection. What started as a personal experiment 
                  has evolved into a systematic approach that consistently outperforms market benchmarks.
                </p>
                <p>
                  I believe in transparency and education. That's why I document every decision, 
                  every win, and every loss. My goal is to help others learn from my experiences 
                  and develop their own successful investment strategies.
                </p>
                <p>
                  This website is my commitment to sharing knowledge, building a community of 
                  informed investors, and proving that consistent, disciplined investing can 
                  generate significant returns over time.
                </p>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-8 text-center">
              <div className="w-32 h-32 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-4xl font-bold">JD</span>
              </div>
              <h3 className="text-2xl font-semibold mb-2">John Doe</h3>
              <p className="text-muted-foreground mb-4">Investment Analyst & Portfolio Manager</p>
              <div className="flex flex-wrap justify-center gap-2">
                <Badge variant="secondary">CFA Level 2</Badge>
                <Badge variant="secondary">5+ Years Experience</Badge>
                <Badge variant="secondary">Value Investor</Badge>
              </div>
            </div>
          </div>

          {/* Investment Philosophy */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="text-2xl">My Investment Philosophy</CardTitle>
              <CardDescription>The principles that guide my investment decisions</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-2">🎯 Long-term Value Creation</h3>
                  <p className="text-sm text-muted-foreground">
                    Focus on companies with strong fundamentals, competitive advantages, 
                    and sustainable growth prospects.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">📊 Systematic Approach</h3>
                  <p className="text-sm text-muted-foreground">
                    Use data-driven analysis, sector rotation, and risk management 
                    to make consistent investment decisions.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">🛡️ Risk Management</h3>
                  <p className="text-sm text-muted-foreground">
                    Never risk more than 10% on a single position, maintain sector 
                    diversification, and use stop-losses.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">📚 Continuous Learning</h3>
                  <p className="text-sm text-muted-foreground">
                    Stay updated with market trends, learn from mistakes, and 
                    adapt strategies based on market conditions.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Credentials & Experience */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardHeader>
                <CardTitle>Education & Certifications</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm">CFA Level 2</span>
                  <Badge variant="outline">In Progress</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">MBA Finance</span>
                  <Badge variant="outline">Completed</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">NISM Certification</span>
                  <Badge variant="outline">Completed</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Technical Analysis</span>
                  <Badge variant="outline">Certified</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Investment Experience</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Years Active</span>
                  <span className="font-medium">5+ Years</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Total Trades</span>
                  <span className="font-medium">200+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Win Rate</span>
                  <span className="font-medium text-green-600">73%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Best Year</span>
                  <span className="font-medium text-green-600">+47.2%</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Why I Started This Journey */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="text-2xl">Why I Started This Journey</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              I started documenting my investment journey because I believe in the power of 
              transparency and education in finance. Too many people lose money in the stock 
              market due to lack of knowledge, emotional decisions, and following bad advice.
            </p>
            <p className="text-muted-foreground">
              My mission is to show that disciplined, research-driven investing can generate 
              consistent returns. By sharing my complete process - including both successes 
              and failures - I hope to help others develop their own successful investment strategies.
            </p>
            <p className="text-muted-foreground">
              This isn't about giving financial advice. It's about education, transparency, 
              and building a community of informed investors who make better financial decisions.
            </p>
            <div className="mt-6 p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-yellow-200 dark:border-yellow-800">
              <p className="text-sm text-yellow-800 dark:text-yellow-200">
                <strong>Disclaimer:</strong> The information provided on this website is for informational purposes only and reflects the personal investment strategy and decisions of the author. You should conduct your own research or consult with a licensed financial advisor before making any investment decisions. By using this website, you acknowledge and agree that any investment decisions you make are at your own risk. We are not liable for any losses or damages incurred directly or indirectly from the information provided here.
              </p>
            </div>
            </CardContent>
          </Card>

          {/* CTA Section */}
          <div className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to Follow My Journey?</h2>
            <p className="text-xl text-blue-100 mb-6">
              Get my quarterly stock picks, market analysis, and investment insights delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/portfolio">
                <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-blue-50">
                  View Portfolio
                </Button>
              </Link>
              <Link href="/blog">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  Read Blog
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
