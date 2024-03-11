export default function getCalenderPage(date) {
  const y = Number(date.split('-')[0])
  const m = Number(date.split('-')[1])
  const d = Number(date.split('-')[2])

  const first = new Date(y, m - 1, 1)
  const last = new Date(y, m, 0)

  const page = Array.from({ length: last.getDate() }, (_, index) => {
    const date = new Date(y, m - 1, index + 1)

    return {
      date,
      selected: date.getDate() === d,
      thismonth: true
    }
  })

  const prevLength = first.getDay() === 0 ? 6 : first.getDay() - 1
  const nextLength = last.getDay() === 0 ? 0 : 7 - last.getDay()

  let prev = []
  let next = []

  if (prevLength) {
    prev = Array.from({ length: prevLength }, (_, i) => {
      return {
        date: new Date(y, m - 1, 0 - i),
        selected: false,
        thismonth: false
      }
    }).reverse()
  }

  if (nextLength) {
    next = Array.from({ length: nextLength }, (_, i) => {
      return {
        date: new Date(y, m, 1 + i),
        selected: false,
        thismonth: false
      }
    })
  }

  const out = [...prev, ...page, ...next]
  console.log(out)
  return [...prev, ...page, ...next]
}
