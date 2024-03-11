export default function getDays(locale) {
  const getDayName = (date, locale = 'en-US') => {
    return date.toLocaleDateString(locale, { weekday: 'short' })
  }

  return [
    '2024-03-11',
    '2024-03-12',
    '2024-03-13',
    '2024-03-14',
    '2024-03-15',
    '2024-03-16',
    '2024-03-17'
  ].map((day) => getDayName(new Date(day), locale))
}
