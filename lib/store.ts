import { create } from "zustand"
import { persist } from "zustand/middleware"

interface NumerologyData {
  fullName: string
  birthDate: { day: number; month: number; year: number }
  lifePathNumber?: number
  expressionNumber?: number
  soulUrgeNumber?: number
}

interface AppState {
  // User data
  currentUser: NumerologyData | null
  savedProfiles: NumerologyData[]

  // UI state
  isLoading: boolean
  currentStep: number

  // Actions
  setCurrentUser: (user: NumerologyData) => void
  addProfile: (profile: NumerologyData) => void
  removeProfile: (index: number) => void
  setLoading: (loading: boolean) => void
  setCurrentStep: (step: number) => void
  reset: () => void
}

export const useAppStore = create<AppState>()(
  persist(
    (set, get) => ({
      currentUser: null,
      savedProfiles: [],
      isLoading: false,
      currentStep: 1,

      setCurrentUser: (user) => set({ currentUser: user }),
      addProfile: (profile) =>
        set((state) => ({
          savedProfiles: [...state.savedProfiles, profile],
        })),
      removeProfile: (index) =>
        set((state) => ({
          savedProfiles: state.savedProfiles.filter((_, i) => i !== index),
        })),
      setLoading: (loading) => set({ isLoading: loading }),
      setCurrentStep: (step) => set({ currentStep: step }),
      reset: () =>
        set({
          currentUser: null,
          isLoading: false,
          currentStep: 1,
        }),
    }),
    {
      name: "numerology-storage",
      partialize: (state) => ({
        currentUser: state.currentUser,
        savedProfiles: state.savedProfiles,
      }),
    },
  ),
)
