import React from "react"
import { cn } from "@/lib/utils"
import { AppleCard } from "./AppleCard"
import { AppleText } from "./AppleText"

interface AppleFormProps extends React.FormHTMLAttributes<HTMLFormElement> {
  title?: string
  description?: string
  children: React.ReactNode
  footer?: React.ReactNode
  variant?: "default" | "glass" | "floating"
  isLoading?: boolean
}

export const AppleForm = React.forwardRef<HTMLFormElement, AppleFormProps>(
  ({ className, title, description, children, footer, variant = "glass", isLoading, ...props }, ref) => {
    return (
      <AppleCard variant={variant} padding="lg" radius="xl" className={cn("w-full max-w-md mx-auto", className)}>
        <form ref={ref} className="space-y-6" {...props}>
          {/* Header */}
          {(title || description) && (
            <div className="text-center space-y-2">
              {title && (
                <AppleText as="h2" variant="heading" size="2xl" className="font-bold">
                  {title}
                </AppleText>
              )}
              {description && (
                <AppleText variant="body" color="secondary" size="sm">
                  {description}
                </AppleText>
              )}
            </div>
          )}

          {/* Form Content */}
          <div className="space-y-4">{children}</div>

          {/* Footer */}
          {footer && <div className="pt-4 border-t border-white/10">{footer}</div>}

          {/* Loading Overlay */}
          {isLoading && (
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm rounded-xl flex items-center justify-center">
              <div className="flex items-center gap-3 text-white">
                <svg className="animate-spin h-6 w-6" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
                <span>กำลังประมวลผล...</span>
              </div>
            </div>
          )}
        </form>
      </AppleCard>
    )
  },
)

AppleForm.displayName = "AppleForm"

// Form Field Wrapper
interface AppleFormFieldProps {
  children: React.ReactNode
  className?: string
}

export const AppleFormField: React.FC<AppleFormFieldProps> = ({ children, className }) => {
  return <div className={cn("space-y-2", className)}>{children}</div>
}

// Form Actions (Button Group)
interface AppleFormActionsProps {
  children: React.ReactNode
  className?: string
  direction?: "row" | "column"
}

export const AppleFormActions: React.FC<AppleFormActionsProps> = ({ children, className, direction = "column" }) => {
  return (
    <div
      className={cn(
        "flex gap-3",
        direction === "column" ? "flex-col" : "flex-row",
        direction === "row" && "justify-end",
        className,
      )}
    >
      {children}
    </div>
  )
}
