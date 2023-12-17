<template class="h-[100dvh] mx-auto flex max-w-sm">
  <div class="flex justify-center font-bold text-xl">Welcome!</div>

  <UTabs
    :items="items"
    class="max-w-sm mx-auto"
    @submit.prevent="onSubmitLogin"
  >
    <template #login="{ item }">
      <p
        class="flex justify-center mb-7 text-base font-semibold leading-6 text-gray-900 dark:text-white"
      >
        {{ item.label }}
      </p>

      <UFormGroup label="아이디" name="id" class="mb-3">
        <UInput v-model="loginForm.id" required />
      </UFormGroup>
      <UFormGroup label="비밀번호" name="password">
        <UInput v-model="loginForm.password" required type="password" />
      </UFormGroup>

      <UButton
        block
        type="submit"
        class="p-3 mt-5 bg-[#5655E2] hover:bg-[#473078]"
      >
        로그인
      </UButton>
    </template>

    <template #join="{ item }" @submitter.prevent="onSubmitJoin">
      <h3
        class="flex justify-center mb-7 text-base font-semibold leading-6 text-gray-900 dark:text-white"
      >
        {{ item.label }}
      </h3>

      <UFormGroup label="아이디" name="id" required class="mb-3">
        <UInput v-model="joinForm.id" required />
      </UFormGroup>
      <UFormGroup label="닉네임" name="nickname" required class="mb-3">
        <UInput v-model="joinForm.nickname" required />
      </UFormGroup>
      <UFormGroup label="비밀번호" name="password" required class="mb-3">
        <UInput v-model="joinForm.password" type="password" required />
      </UFormGroup>
      <UFormGroup label="비밀번호 확인" name="password" required>
        <UInput v-model="joinForm.confirmedPassword" type="password" required />
      </UFormGroup>

      <UButton
        block
        type="submit"
        class="p-3 mt-5 bg-[#5655E2] hover:bg-[#473078]"
      >
        회원가입
      </UButton>
    </template>
  </UTabs>
</template>
<script setup lang="ts">
import type { FormSubmitEvent } from '@nuxt/ui/dist/runtime/types';

const items = [
  {
    slot: 'login',
    label: '로그인',
  },
  {
    slot: 'join',
    label: '회원가입',
  },
];

const loginForm = ref({ id: undefined, password: undefined });
const joinForm = reactive({
  id: '',
  nickname: '',
  password: '',
  confirmedPassword: '',
});

const validate = (state: any) => {
  const errors = [];
  if (!state.id)
    errors.push({ path: 'id', message: '아이디는 필수 입력입니다.' });
  if (!state.password)
    errors.push({ path: 'password', message: '비밀번호는 필수 입력입니다.' });
  return errors;
};

async function onSubmitLogin(e: FormSubmitEvent<any>) {
  const errors = validate(loginForm);
  if (errors.length > 0) {
    console.log(errors);
    return;
  }

  try {
    const response = await fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(loginForm),
    });

    const data = await response.json();
    console.log(data);
  } catch (error: any) {
    console.log(error.message);
  }
}

async function onSubmitJoin(e: FormSubmitEvent<any>) {
  console.log(e.data);
}
</script>
<style lang=""></style>
