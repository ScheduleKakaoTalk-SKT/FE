<template>
  <div
    class="flex bg-[#5655E2] justify-end items-center mx-auto max-w-sm h-10 px-3 py-6"
  >
    <UChip
      v-for="({ name, icon, count, link }, idx) in items"
      :key="idx"
      color="red"
      class="ml-2"
    >
      <UButton
        :icon="icon"
        class="bg-transparent text-white hover:bg-transparent p-0.5"
      />
    </UChip>
  </div>
</template>
<script setup lang="ts">
const items = [
  {
    name: 'notifications',
    icon: 'i-heroicons-bell',
    count: 0,
    link: '/chats',
  },
  {
    name: 'messages',
    icon: 'i-heroicons-chat-bubble-oval-left',
    count: 3,
    link: 'alerts',
  },
];
</script>
<style></style>
