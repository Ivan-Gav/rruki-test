<template>
  <div>
    <div class="header">
      <button class="arrow" @click="toPrevMonth">
        <ArrowBackSVG />
      </button>
      <div class="month">{{ currentPage }}</div>
      <button class="arrow" @click="toNextMonth">
        <ArrowForthSVG />
      </button>
    </div>

    <div class="calender">
      <p class="weekday" v-for="day in weekDays" :key="day">{{ day }}</p>
      <template v-for="day in days" :key="day.date.toString()"
        ><MyCalenderDay
          :date="day.date"
          :selected="day.selected"
          :thisMonth="day.thismonth"
          @click-day="changeDate"
      /></template>
    </div>
  </div>
</template>

<script>
const today = new Date()
const defaultDate = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`
</script>

<script setup>
import { computed, ref, watchEffect } from 'vue'
import ArrowBackSVG from './icons/ArrowBackSVG.vue'
import ArrowForthSVG from './icons/ArrowForthSVG.vue'
import MyCalenderDay from './MyCalenderDay.vue'
import getCalenderPage from '@/utils/getCalenderPage'
import getDateString from '@/utils/getDateString'
import getDays from '@/utils/getDays'

const props = defineProps({
  date: { type: String, default: defaultDate },
  locale: { type: String, default: 'en-US' }
})

const selectedDate = ref(props.date)

const currentPage = computed(() => {
  return getDateString(selectedDate.value).date.toLocaleString(props.locale, {
    month: 'short',
    year: 'numeric'
  })
})

const weekDays = computed(() => {
  return getDays(props.locale)
})

const days = ref(getCalenderPage(selectedDate.value))

// refresh when another day is selected
watchEffect(() => {
  days.value = getCalenderPage(selectedDate.value)
})

const changeDate = (incomingDate) => {
  const newDate = `${incomingDate.getFullYear()}-${incomingDate.getMonth() + 1}-${incomingDate.getDate()}`
  console.log(newDate)
  selectedDate.value = newDate
}

const toPrevMonth = () => {
  selectedDate.value = getDateString(selectedDate.value).prevMonth
}

const toNextMonth = () => {
  selectedDate.value = getDateString(selectedDate.value).nextMonth
}
</script>

<style scoped>
.header {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.weekday {
  width: 100%;
  height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: lightgray;
}

.arrow {
  border: none;
  background-color: transparent;
}
.calender {
  display: grid;

  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(6, 1fr);
}
</style>
