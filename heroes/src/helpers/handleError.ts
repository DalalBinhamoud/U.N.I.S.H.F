import { message } from 'antd'

export const handleError = (error: any) => {
  if (error.response !== undefined) {
    if (
      error.response.data.message !== undefined &&
      error.response.data.message !== 'Violations exist' &&
      error.response.data.message !== 'Input Validation Error'
    ) {
      message.error({
        content: error.response.data.message,
        key: 'updatable',
      })
    }
    if (error.response.data.businessRulesViolations !== undefined) {
      error.response.data.businessRulesViolations.forEach(
        (businessRulesViolation: string, index: number) => {
          message.error({
            content: businessRulesViolation,
            duration: 5,
            key: index,
          })
        },
      )
    }
    if (error.response.data.inputValidationErrors !== undefined) {
      error.response.data.inputValidationErrors.forEach(
        (inputValidationError: any, index: number) => {
          message.error({
            content: inputValidationError.message,
            duration: 5,
            key: index,
          })
        },
      )
    }
  }
}
