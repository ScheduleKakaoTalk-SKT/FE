<script setup>
const search = async (q) => {
  const users = await $fetch('baseUrl/friend/add', {
    params: { q },
  });

  return users
    .map((user) => ({ id: user.id, label: user.name, suffix: user.email }))
    .filter(Boolean);
};

const selected = ref([]);
</script>

<template>
  <USelectMenu
    v-model="selected"
    :searchable="search"
    placeholder="친구 검색"
    multiple
    by="id"
  />
</template>
