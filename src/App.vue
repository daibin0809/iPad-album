<template>
  <div class="album-page">
    <album-show></album-show>
    <date-show :section="section"></date-show>
    <span
      v-if="!isFullScreen"
      class="album-fullscreen-btn"
      @click="setFullScreen"
    >
      <full-screen></full-screen>
    </span>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import AlbumShow from "./components/AlbumShow.vue";
import DateShow from "./components/DateShow.vue";
import FullScreen from "./components/icons/FullScreen.vue";
import { fullSreen } from "./utils";

const section = ref(`别人说你不行，是因为他自己做不到。
  你要尽全力保护你的梦想，那些嘲笑你的人，他们必定会失败，他们想把你变成和他们一样的人。
  如果你有梦想的话，就要努力去实现，就这样。`);
const isFullScreen = ref(false);

const setFullScreen = () => {
  fullSreen();
  isFullScreen.value = true;
};
</script>

<style lang="less" scoped>
.album-page {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  .album-fullscreen-btn {
    position: absolute;
    bottom: 10px;
    right: 10px;
    z-index: 1;
  }
}
</style>
