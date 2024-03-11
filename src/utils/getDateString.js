export default function getDateString(dateString) {
  const y = Number(dateString.split('-')[0])
  const m = Number(dateString.split('-')[1])
  const d = Number(dateString.split('-')[2])

  const date = new Date(y, m - 1, d)

  const prev = new Date(y, m - 1, 0)
  const prevMonth = `${prev.getFullYear()}-${prev.getMonth() + 1}-01`

  const next = new Date(y, m, 1)
  const nextMonth = `${next.getFullYear()}-${next.getMonth() + 1}-01`

  return { prevMonth, nextMonth, date }
}
