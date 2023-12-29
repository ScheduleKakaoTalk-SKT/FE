<template>
  <div class="max-w-sm mx-auto">
    <li v-for="i in 3" class="flex items-center border-b border-gray-200 py-3">
      <div class="flex items-start justify-between w-full">
        <div class="pl-3 w-full py-2">
          <p
            tabindex="0"
            class="focus:outline-none text-sm font-bold text-gray-800"
          >
            친구이름
          </p>
          <p
            tabindex="0"
            class="focus:outline-none text-sm font-light text-gray-800"
          >
            채팅방 내용
          </p>
        </div>
      </div>
    </li>
  </div>
  <FloatBtn content="+" />
</template>
<script setup>
import FloatBtn from '@/components/FloatBtn.vue';
</script>
<style></style>
