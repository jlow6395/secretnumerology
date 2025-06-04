interface ErrorLog {
  id: string
  timestamp: Date
  error: Error
  context: string
  userId?: string
  url: string
  userAgent: string
}

class ErrorHandler {
  private static instance: ErrorHandler
  private errors: ErrorLog[] = []

  static getInstance(): ErrorHandler {
    if (!ErrorHandler.instance) {
      ErrorHandler.instance = new ErrorHandler()
    }
    return ErrorHandler.instance
  }

  logError(error: Error, context: string, userId?: string): void {
    const errorLog: ErrorLog = {
      id: crypto.randomUUID(),
      timestamp: new Date(),
      error,
      context,
      userId,
      url: window.location.href,
      userAgent: navigator.userAgent,
    }

    this.errors.push(errorLog)

    // Log to console in development
    if (process.env.NODE_ENV === "development") {
      console.error("Error logged:", errorLog)
    }

    // In production, send to error reporting service
    // this.sendToErrorService(errorLog)
  }

  getErrors(): ErrorLog[] {
    return this.errors
  }

  clearErrors(): void {
    this.errors = []
  }

  private sendToErrorService(errorLog: ErrorLog): void {
    // Implementation for sending to error reporting service
    // e.g., Sentry, LogRocket, etc.
  }
}

export const errorHandler = ErrorHandler.getInstance()

// Global error handler for unhandled promises
if (typeof window !== "undefined") {
  window.addEventListener("unhandledrejection", (event) => {
    errorHandler.logError(new Error(event.reason), "Unhandled Promise Rejection")
  })

  window.addEventListener("error", (event) => {
    errorHandler.logError(event.error, "Global Error Handler")
  })
}
