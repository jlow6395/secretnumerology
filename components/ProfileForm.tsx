"use client"

import { useState, useEffect, useCallback } from "react"
import { useAuth } from "@/lib/AuthContext"
import { supabase } from "@/lib/supabaseClient"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { toast } from "sonner"
import { Switch } from "@/components/ui/switch"

export default function ProfileForm() {
  const { user, dbUser, isLoading: isAuthLoading, refreshDbUser } = useAuth()
  const [fullName, setFullName] = useState("")
  const [dateOfBirth, setDateOfBirth] = useState("")
  const [isUnlocked, setIsUnlocked] = useState(false)
  const [saving, setSaving] = useState(false)

  useEffect(() => {
    if (dbUser) {
      setFullName(dbUser.full_name || "")
      setDateOfBirth(dbUser.date_of_birth || "")
      setIsUnlocked(dbUser.unlocked || false)
    }
  }, [dbUser])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!user) return

    setSaving(true)

    const { error } = await supabase
      .from("profiles")
      .upsert({
        id: user.id, // Use the real user ID from Supabase Auth
        full_name: fullName,
        date_of_birth: dateOfBirth,
        updated_at: new Date().toISOString(),
      })

    if (error) {
      toast.error(`Error updating profile: ${error.message}`)
    } else {
      toast.success("Profile updated successfully!")
      await refreshDbUser()
    }

    setSaving(false)
  }

  const handleToggleUnlock = async () => {
    if (!user) return
    
    setSaving(true)
    const newUnlockState = !isUnlocked
    
    const { data, error } = await supabase
      .from("profiles")
      .update({ unlocked: newUnlockState })
      .eq("id", user.id)
      .select("unlocked")
      .single()

    if (error) {
      toast.error(`Error updating status: ${error.message}`)
    } else if (data) {
      setIsUnlocked(data.unlocked)
      toast.info(`Access level changed to: ${data.unlocked ? "Advanced" : "Basic"}`)
      await refreshDbUser()
    }
    
    setSaving(false)
  }
  
  const loading = isAuthLoading;

  if (loading) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Your Profile</CardTitle>
                <CardDescription>Loading your profile data...</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="space-y-2">
                    <Label htmlFor="fullName">Full Name</Label>
                    <Input id="fullName" disabled placeholder="Loading..."/>
                </div>
                <div className="space-y-2">
                    <Label htmlFor="dob">Date of Birth</Label>
                    <Input id="dob" type="date" disabled/>
                </div>
            </CardContent>
            <CardFooter>
                <Button disabled>Loading...</Button>
            </CardFooter>
        </Card>
    )
  }

  return (
    <div className="grid gap-8 md:grid-cols-3">
      <Card className="md:col-span-2">
        <form onSubmit={handleSubmit}>
          <CardHeader>
            <CardTitle>Your Profile</CardTitle>
            <CardDescription>
              This information is used to calculate your numerology readings.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="fullName">Full Name</Label>
              <Input
                id="fullName"
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Enter your full name"
                required
                className="bg-white dark:bg-gray-800"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="dob">Date of Birth</Label>
              <Input
                id="dob"
                type="date"
                value={dateOfBirth}
                onChange={(e) => setDateOfBirth(e.target.value)}
                required
                className="bg-white dark:bg-gray-800"
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button type="submit" disabled={saving || loading || !user}>
              {saving ? "Saving..." : "Save Profile"}
            </Button>
          </CardFooter>
        </form>
      </Card>

      <Card className="md:col-span-1">
        <CardHeader>
          <CardTitle>Developer Tools</CardTitle>
          <CardDescription>
            Simulate a premium user for testing purposes.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between p-4 border rounded-lg">
              <Label htmlFor="unlock-switch" className="font-medium">
                Advanced Access
              </Label>
            <Switch
              id="unlock-switch"
              checked={isUnlocked}
              onCheckedChange={handleToggleUnlock}
              disabled={saving || loading || !user}
            />
          </div>
        </CardContent>
      </Card>
    </div>
  )
} 