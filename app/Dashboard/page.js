"use client"

import React from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { BarChart, Bell, Home, Search, Settings, Users } from "lucide-react"
import Link from "next/link"

export default function Dashboard() {
  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-900">
      {/* Sidebar */}
      <aside className="w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700">
        <div className="p-4">
          <h1 className="text-2xl font-bold text-amber-500 dark:text-amber-400">WraX</h1>
        </div>
        <nav className="mt-4">
          <Link href="#" className="flex items-center px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">
            <Home className="mr-3 h-5 w-5" />
            Dashboard
          </Link>
          <Link href="/Projects" className="flex items-center px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">
            <Users className="mr-3 h-5 w-5" />
            Projects
          </Link>
          <Link href="#" className="flex items-center px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">
            <BarChart className="mr-3 h-5 w-5" />
            Reports
          </Link>
          <Link href="/Settings" className="flex items-center px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">
            <Settings className="mr-3 h-5 w-5" />
            Settings
          </Link>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="flex items-center justify-between p-4 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center">
            <Input
              type="text"
              placeholder="Search..."
              className="w-64 mr-4"
              startAdornment={<Search className="h-5 w-5 text-gray-400" />}
            />
          </div>
          <div className="flex items-center">
            <Button variant="ghost" size="icon" className="mr-2">
              <Bell className="h-5 w-5" />
              <span className="sr-only">Notifications</span>
            </Button>
            <Avatar>
              <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="flex-1 overflow-y-auto p-4">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Project Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Issues</CardTitle>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="h-4 w-4 text-muted-foreground"
                >
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">128</div>
                <p className="text-xs text-muted-foreground">+14% from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Open Issues</CardTitle>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="h-4 w-4 text-muted-foreground"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">45</div>
                <p className="text-xs text-muted-foreground">-3% from last week</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Completed Issues</CardTitle>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="h-4 w-4 text-muted-foreground"
                >
                  <rect width="20" height="14" x="2" y="5" rx="2" />
                  <path d="M2 10h20" />
                </svg>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">83</div>
                <p className="text-xs text-muted-foreground">+19% from last month</p>
              </CardContent>
            </Card>
          </div>

          <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Recent Activities</h3>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow">
            <div className="p-4 border-b border-gray-200 dark:border-gray-700">
              <div className="flex items-center mb-2">
                <Avatar className="h-8 w-8 mr-2">
                  <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium text-gray-900 dark:text-gray-100">John Doe</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Created a new issue</p>
                </div>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300">Added Login page redesign to Project X</p>
            </div>
            <div className="p-4 border-b border-gray-200 dark:border-gray-700">
              <div className="flex items-center mb-2">
                <Avatar className="h-8 w-8 mr-2">
                  <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
                  <AvatarFallback>JS</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium text-gray-900 dark:text-gray-100">Jane Smith</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Commented on an issue</p>
                </div>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300">Left a comment on API integration bug</p>
            </div>
            <div className="p-4">
              <div className="flex items-center mb-2">
                <Avatar className="h-8 w-8 mr-2">
                  <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
                  <AvatarFallback>RJ</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium text-gray-900 dark:text-gray-100">Robert Johnson</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Closed an issue</p>
                </div>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300">Closed Update documentation in Project Y</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}