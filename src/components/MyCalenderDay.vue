<template>
  <a :class="className" @click="onClick(date)">
    {{ date.getDate() }}
  </a>
</template>

<script setup>
import { computed } from 'vue'
const props = defineProps({
  date: Date,
  selected: Boolean,
  thisMonth: Boolean
})

const emit = defineEmits(['clickDay'])

const className = computed(() => {
  const classNames = [`day`]

  const today = new Date()

  if (props.date && props.selected) {
    classNames.push('selected')
  }
  if (props.date && props.thisMonth) {
    classNames.push('thismonth')
  }
  if (props.date && today.toDateString() === props.date.toDateString()) {
    classNames.push('today')
  }

  return classNames.join(' ')
})

const onClick = (date) => {
  console.log(date)
  emit('clickDay', date)
}
</script>

<style scoped>
.day {
  width: 2rem;
  height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: slategrey;
  opacity: 0.5;
  cursor: pointer;
}

.selected {
  background-color: red;
}

.thismonth {
  opacity: 1;
  color: black;
}

.today {
  background-color: aqua;
}
</style>
