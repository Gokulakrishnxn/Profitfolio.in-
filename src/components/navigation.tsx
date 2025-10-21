"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu, Home, BarChart3, BookOpen, User } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <>
      {/* Desktop Navigation */}
      <header className="hidden md:block sticky top-0 z-50 w-full border-b bg-white/80 dark:bg-black/80 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="text-xl font-bold text-black dark:text-white">
              Profitfolio
            </Link>

            {/* Desktop Navigation */}
            <nav className="flex items-center space-x-8">
              <Link href="/" className="text-sm font-medium hover:text-blue-600 transition-colors">
                Home
              </Link>
              <Link href="/my-portfolio" className="text-sm font-medium hover:text-blue-600 transition-colors">
                Portfolio
              </Link>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="text-sm font-medium hover:text-blue-600">
                    Strategy
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start">
                  <DropdownMenuItem asChild>
                    <Link href="/strategy/methodology">My Methodology</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/strategy/criteria">Stock Selection Criteria</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/strategy/philosophy">Investment Philosophy</Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <Link href="/blog" className="text-sm font-medium hover:text-blue-600 transition-colors">
                Blog
              </Link>
              <Link href="/about" className="text-sm font-medium hover:text-blue-600 transition-colors">
                About
              </Link>
            </nav>

            {/* CTA Buttons */}
            <div className="flex items-center space-x-4">
              <ThemeToggle />
              <Button variant="outline" size="sm">
                Sign In
              </Button>
              <Button size="sm" className="bg-green-600 hover:bg-green-700 text-white">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Dock Navigation */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/90 dark:bg-black/90 backdrop-blur-lg border-t border-slate-200 dark:border-slate-800">
        <div className="flex items-center justify-around py-2 px-4">
          <Link 
            href="/" 
            className={`flex flex-col items-center p-2 rounded-xl transition-all duration-200 ${
              isActive('/') 
                ? 'bg-blue-500 text-white shadow-lg' 
                : 'text-slate-600 dark:text-slate-400 hover:text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/20'
            }`}
          >
            <Home className="h-5 w-5 mb-1" />
            <span className="text-xs font-medium">Home</span>
          </Link>

          <Link 
            href="/my-portfolio" 
            className={`flex flex-col items-center p-2 rounded-xl transition-all duration-200 ${
              isActive('/my-portfolio') 
                ? 'bg-green-500 text-white shadow-lg' 
                : 'text-slate-600 dark:text-slate-400 hover:text-green-500 hover:bg-green-50 dark:hover:bg-green-900/20'
            }`}
          >
            <BarChart3 className="h-5 w-5 mb-1" />
            <span className="text-xs font-medium">Portfolio</span>
          </Link>

          <Link 
            href="/blog" 
            className={`flex flex-col items-center p-2 rounded-xl transition-all duration-200 ${
              isActive('/blog') 
                ? 'bg-purple-500 text-white shadow-lg' 
                : 'text-slate-600 dark:text-slate-400 hover:text-purple-500 hover:bg-purple-50 dark:hover:bg-purple-900/20'
            }`}
          >
            <BookOpen className="h-5 w-5 mb-1" />
            <span className="text-xs font-medium">Blog</span>
          </Link>

          <Link 
            href="/about" 
            className={`flex flex-col items-center p-2 rounded-xl transition-all duration-200 ${
              isActive('/about') 
                ? 'bg-orange-500 text-white shadow-lg' 
                : 'text-slate-600 dark:text-slate-400 hover:text-orange-500 hover:bg-orange-50 dark:hover:bg-orange-900/20'
            }`}
          >
            <User className="h-5 w-5 mb-1" />
            <span className="text-xs font-medium">About</span>
          </Link>

          <div className="flex flex-col items-center p-2 rounded-xl transition-all duration-200 text-slate-600 dark:text-slate-400 hover:text-slate-500">
            <ThemeToggle />
            <span className="text-xs font-medium mt-1">Theme</span>
          </div>
        </div>
      </div>

      {/* Mobile Top Header */}
      <header className="md:hidden sticky top-0 z-40 w-full border-b bg-white/80 dark:bg-black/80 backdrop-blur-sm">
        <div className="flex h-14 items-center justify-between px-4">
          <Link href="/" className="text-lg font-bold text-black dark:text-white">
            Profitfolio
          </Link>
          
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm" className="text-xs px-3">
              Sign In
            </Button>
            <Button size="sm" className="bg-green-600 hover:bg-green-700 text-white text-xs px-3">
              Subscribe
            </Button>
          </div>
        </div>
      </header>

      {/* Mobile Sheet Menu (for additional options) */}
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="sm" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-[300px] sm:w-[400px]">
          <div className="flex flex-col space-y-4 mt-8">
            <Link 
              href="/" 
              className="text-lg font-medium hover:text-blue-600 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/my-portfolio" 
              className="text-lg font-medium hover:text-blue-600 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Portfolio
            </Link>
            
            <div className="space-y-2">
              <h3 className="text-lg font-medium text-muted-foreground">Strategy</h3>
              <div className="pl-4 space-y-2">
                <Link 
                  href="/strategy/methodology" 
                  className="block text-sm hover:text-blue-600 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  My Methodology
                </Link>
                <Link 
                  href="/strategy/criteria" 
                  className="block text-sm hover:text-blue-600 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Stock Selection Criteria
                </Link>
                <Link 
                  href="/strategy/philosophy" 
                  className="block text-sm hover:text-blue-600 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Investment Philosophy
                </Link>
              </div>
            </div>

            <Link 
              href="/blog" 
              className="text-lg font-medium hover:text-blue-600 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Blog
            </Link>
            <Link 
              href="/about" 
              className="text-lg font-medium hover:text-blue-600 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}