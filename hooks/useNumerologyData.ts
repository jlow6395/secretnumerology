"use client"

import { useState, useEffect } from 'react'
import { useAuth } from '@/lib/AuthContext'
import { calculateLifePathNumber, calculateTalentNumber, findRecurringNumbers } from '@/lib/numerology/core'
import { supabase } from '@/lib/supabaseClient'
import { toast } from 'sonner'

type NumerologyData = {
  lifePathNumber?: number
  talentNumber?: number
  recurringNumbers?: number[]
  interpretations: Record<string, any>
}

export function useNumerologyData() {
  const { dbUser, isLoading: isAuthLoading } = useAuth()
  const [numerologyData, setNumerologyData] = useState<NumerologyData | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const processNumerology = async () => {
      if (!dbUser || !dbUser.date_of_birth || !dbUser.full_name) {
        // Don't process if the user profile is incomplete
        if (!isAuthLoading) {
             setIsLoading(false)
        }
        return
      }

      setIsLoading(true)
      setError(null)

      try {
        const lifePath = calculateLifePathNumber(dbUser.date_of_birth)
        const talent = calculateTalentNumber(dbUser.date_of_birth)
        const recurring = findRecurringNumbers(dbUser.date_of_birth)

        const numbersToFetch = [lifePath, talent, ...recurring].filter(Boolean)
        const uniqueNumbers = [...new Set(numbersToFetch)];

        const { data: interpretations, error: dbError } = await supabase
            .from('numerology_interpretations')
            .select('*')
            .in('number', uniqueNumbers)

        if (dbError) {
          throw new Error(dbError.message)
        }

        const interpretationsMap = interpretations.reduce((acc, interp) => {
          const key = `${interp.type}_${interp.number}`;
          acc[key] = interp;
          return acc;
        }, {} as Record<string, any>);


        setNumerologyData({
          lifePathNumber: lifePath,
          talentNumber: talent,
          recurringNumbers: recurring,
          interpretations: interpretationsMap,
        })

      } catch (err: any) {
        console.error("Error processing numerology data:", err)
        setError('Failed to calculate or fetch numerology data.')
        toast.error("An error occurred while calculating your numbers.")
      } finally {
        setIsLoading(false)
      }
    }

    processNumerology()
  }, [dbUser, isAuthLoading])

  return { numerologyData, isLoading: isLoading || isAuthLoading, error }
}
