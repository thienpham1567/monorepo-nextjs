import {
  format,
  formatDistance,
  formatRelative,
  addDays,
  parseISO,
  isValid,
} from 'date-fns'

export const formatDate = (
  date: Date | string,
  formatStr: string = 'PPP'
): string => {
  const dateObj = typeof date === 'string' ? parseISO(date) : date
  if (!isValid(dateObj)) return 'Invalid date'
  return format(dateObj, formatStr)
}

export const formatDateTime = (date: Date | string): string => {
  const dateObj = typeof date === 'string' ? parseISO(date) : date
  return format(dateObj, 'PPP p')
}

export const formatRelativeTime = (date: Date | string): string => {
  const dateObj = typeof date === 'string' ? parseISO(date) : date
  return formatDistance(dateObj, new Date(), { addSuffix: true })
}

export const formatRelativeDate = (date: Date | string): string => {
  const dateObj = typeof date === 'string' ? parseISO(date) : date
  return formatRelative(dateObj, new Date())
}

export const addDaysToDate = (date: Date, days: number): Date => {
  return addDays(date, days)
}

export const isValidDate = (date: unknown): boolean => {
  return date instanceof Date && isValid(date)
}
