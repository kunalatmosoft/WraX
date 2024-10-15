"use client"

import React from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { AlertCircle, Check, ChevronDown, Users } from 'lucide-react'

export default function AddProjectPage() {
  return (
    <div className="container mx-auto p-4 space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Create Project</h1>
        <Button>Cancel</Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Project Details</CardTitle>
          <CardDescription>Provide basic information about your project.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="project-name">Project name</Label>
            <Input id="project-name" placeholder="Enter project name" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="project-key">Project key</Label>
            <Input id="project-key" placeholder="e.g., PRJ" />
            <p className="text-sm text-muted-foreground">This will be used as the prefix for all issue keys.</p>
          </div>
          <div className="space-y-2">
            <Label htmlFor="project-description">Project description</Label>
            <Textarea id="project-description" placeholder="Describe your project" />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Project Lead</CardTitle>
          <CardDescription>Select the project lead for this project.</CardDescription>
        </CardHeader>
        <CardContent>
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select project lead" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="john-doe">
                <div className="flex items-center">
                  <Avatar className="h-6 w-6 mr-2">
                    <AvatarImage src="/placeholder.svg?height=24&width=24" alt="John Doe" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  John Doe
                </div>
              </SelectItem>
              <SelectItem value="jane-smith">
                <div className="flex items-center">
                  <Avatar className="h-6 w-6 mr-2">
                    <AvatarImage src="/placeholder.svg?height=24&width=24" alt="Jane Smith" />
                    <AvatarFallback>JS</AvatarFallback>
                  </Avatar>
                  Jane Smith
                </div>
              </SelectItem>
            </SelectContent>
          </Select>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Project Type</CardTitle>
          <CardDescription>Choose the type of project you want to create.</CardDescription>
        </CardHeader>
        <CardContent>
          <RadioGroup defaultValue="scrum">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="scrum" id="scrum" />
              <Label htmlFor="scrum">Scrum</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="kanban" id="kanban" />
              <Label htmlFor="kanban">Kanban</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="bug-tracking" id="bug-tracking" />
              <Label htmlFor="bug-tracking">Bug Tracking</Label>
            </div>
          </RadioGroup>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Project Settings</CardTitle>
          <CardDescription>Configure additional settings for your project.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center space-x-2">
            <Checkbox id="private-project" />
            <Label htmlFor="private-project">Make this a private project</Label>
          </div>
          <div className="space-y-2">
            <Label htmlFor="default-assignee">Default assignee</Label>
            <Select>
              <SelectTrigger id="default-assignee">
                <SelectValue placeholder="Select default assignee" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="project-lead">Project Lead</SelectItem>
                <SelectItem value="unassigned">Unassigned</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Project Template</CardTitle>
          <CardDescription>Choose a template to start with some predefined issues and workflows.</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="scrum">
            <TabsList>
              <TabsTrigger value="scrum">Scrum</TabsTrigger>
              <TabsTrigger value="kanban">Kanban</TabsTrigger>
              <TabsTrigger value="basic">Basic</TabsTrigger>
            </TabsList>
            <TabsContent value="scrum" className="space-y-4">
              <h3 className="text-lg font-semibold">Scrum Template</h3>
              <p>Includes epics, user stories, and sprint planning features.</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Backlog</li>
                <li>Sprint Planning</li>
                <li>Active Sprint Board</li>
                <li>Burndown Chart</li>
              </ul>
            </TabsContent>
            <TabsContent value="kanban" className="space-y-4">
              <h3 className="text-lg font-semibold">Kanban Template</h3>
              <p>Focuses on continuous delivery and managing flow of work.</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Kanban Board</li>
                <li>Work in Progress Limits</li>
                <li>Cumulative Flow Diagram</li>
              </ul>
            </TabsContent>
            <TabsContent value="basic" className="space-y-4">
              <h3 className="text-lg font-semibold">Basic Template</h3>
              <p>A simple setup for general project management.</p>
              <ul className="list-disc list-inside space-y-1">
                <li>To Do</li>
                <li>In Progress</li>
                <li>Done</li>
              </ul>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Invite Team Members</CardTitle>
          <CardDescription>Add team members to your project.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex space-x-2">
            <Input placeholder="Enter email addresses" className="flex-grow" />
            <Button>
              <Users className="mr-2 h-4 w-4" />
              Invite
            </Button>
          </div>
          <div className="space-y-2">
            <Label>Team Members</Label>
            <div className="flex flex-wrap gap-2">
              <div className="flex items-center bg-secondary text-secondary-foreground rounded-full px-3 py-1 text-sm">
                <Avatar className="h-6 w-6 mr-2">
                  <AvatarImage src="/placeholder.svg?height=24&width=24" alt="John Doe" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                John Doe
                <Button variant="ghost" size="sm" className="ml-2 h-4 w-4 p-0">
                  <Check className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex items-center bg-secondary text-secondary-foreground rounded-full px-3 py-1 text-sm">
                <Avatar className="h-6 w-6 mr-2">
                  <AvatarImage src="/placeholder.svg?height=24&width=24" alt="Jane Smith" />
                  <AvatarFallback>JS</AvatarFallback>
                </Avatar>
                Jane Smith
                <Button variant="ghost" size="sm" className="ml-2 h-4 w-4 p-0">
                  <Check className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="flex justify-between items-center">
        <Button variant="outline">
          <AlertCircle className="mr-2 h-4 w-4" />
          Save as Draft
        </Button>
        <Button>
          <Check className="mr-2 h-4 w-4" />
          Create Project
        </Button>
      </div>
    </div>
  )
}