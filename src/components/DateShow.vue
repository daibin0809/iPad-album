<template>
  <div class="db-date-page">
    <span class="db-time">{{ getDate.time }}</span>
    <div class="db-date">
      <span>{{ getDate.date }}</span>
      <span>{{ getDate.week }}</span>
    </div>
    <div class="db-section">
      {{ props.section }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { formateDate, Week } from "@/utils";
import { computed, onBeforeMount, onMounted, ref } from "vue";

const props = defineProps(["section"]);

const timestamp = ref(+new Date());
const timer = ref(0);

const getDate = computed(() => {
  const date = formateDate(timestamp.value);
  return {
    date: `${date.year}年${date.month}月${date.day}日`,
    week: `星期${Week[date.week]}`,
    time: `${date.hours}:${date.minutes}:${date.seconds}`,
  };
});

onMounted(() => {
  refresh();
});
onBeforeMount(() => {
  cancelAnimationFrame(timer.value);
});

const refresh = () => {
  timestamp.value = +new Date();
  timer.value = requestAnimationFrame(refresh);
};
</script>
<style lang="less" scoped>
.db-date-page {
  display: flex;
  width: 100%;
  height: 100%;
  line-height: 1.5;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  // background-color: #fffbe7;
  // color: #40dfef;
  color: #fff;
  position: absolute;
  top: 0;
  z-index: 1;

  .db-time {
    font-size: 48px;
    font-weight: bold;
  }

  .db-date {
    margin-top: 10px;
    font-size: 18px;
  }

  .db-section {
    font-size: 20px;
    margin: 30px 20%;
    // color: #e78ea9;
    color: #fff;
    text-indent: 2em;
  }
}
</style>
