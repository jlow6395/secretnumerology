import { errorHandler } from "./errorHandler"

export interface ApiError {
  status: number
  message: string
  code?: string
  details?: any
}

export class ApiErrorHandler {
  static handle(error: any, context: string): ApiError {
    let apiError: ApiError

    if (error.response) {
      // Server responded with error status
      apiError = {
        status: error.response.status,
        message: error.response.data?.message || "เกิดข้อผิดพลาดจากเซิร์ฟเวอร์",
        code: error.response.data?.code,
        details: error.response.data,
      }
    } else if (error.request) {
      // Network error
      apiError = {
        status: 0,
        message: "ไม่สามารถเชื่อมต่อกับเซิร์ฟเวอร์ได้",
        code: "NETWORK_ERROR",
      }
    } else {
      // Other error
      apiError = {
        status: 500,
        message: error.message || "เกิดข้อผิดพลาดที่ไม่ทราบสาเหตุ",
        code: "UNKNOWN_ERROR",
      }
    }

    // Log error
    errorHandler.logError(error, context)

    return apiError
  }

  static getErrorMessage(status: number): string {
    switch (status) {
      case 400:
        return "ข้อมูลที่ส่งมาไม่ถูกต้อง"
      case 401:
        return "กรุณาเข้าสู่ระบบใหม่"
      case 403:
        return "คุณไม่มีสิทธิ์เข้าถึงข้อมูลนี้"
      case 404:
        return "ไม่พบข้อมูลที่ต้องการ"
      case 429:
        return "คำขอมากเกินไป กรุณาลองใหม่ในภายหลัง"
      case 500:
        return "เซิร์ฟเวอร์มีปัญหา กรุณาลองใหม่ในภายหลัง"
      case 503:
        return "เซิร์ฟเวอร์ไม่พร้อมให้บริการ"
      default:
        return "เกิดข้อผิดพลาดที่ไม่ทราบสาเหตุ"
    }
  }
}
