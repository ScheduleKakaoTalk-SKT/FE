<template>
  <div class="max-w-sm mx-auto">
    <li class="flex items-center border-b border-gray-200 py-3">
      <img
        src="https://atg-prod-scalar.s3.amazonaws.com/studentpower/media/user%20avatar.png"
        alt="avatar"
        class="w-14 h-14 rounded-full"
      />
      <div class="flex items-start justify-between w-full">
        <div class="pl-3 w-full">
          <p
            tabindex="0"
            class="focus:outline-none text-md font-semibold text-gray-800"
          >
            내이름
          </p>
        </div>
      </div>
    </li>
    <UDivider label="즐겨찾기" class="mt-5" />
    <ul>
      <li class="flex items-center border-b border-gray-200 py-3">
        <img
          src="https://atg-prod-scalar.s3.amazonaws.com/studentpower/media/user%20avatar.png"
          alt="avatar"
          class="w-12 h-12 rounded-full"
        />
        <div class="flex items-start justify-between w-full">
          <div class="pl-3 w-full">
            <p
              tabindex="0"
              class="focus:outline-none text-md font-medium text-gray-800"
            >
              친구이름
            </p>
          </div>
          <div role="button" aria-label="bookmark">
            <svg
              class="focus:outline-none"
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.5001 4.66667H17.5001C18.1189 4.66667 18.7124 4.9125 19.15 5.35009C19.5876 5.78767 19.8334 6.38117 19.8334 7V23.3333L14.0001 19.8333L8.16675 23.3333V7C8.16675 6.38117 8.41258 5.78767 8.85017 5.35009C9.28775 4.9125 9.88124 4.66667 10.5001 4.66667Z"
                stroke="#2C3E50"
                fill="red"
                stroke-width="1.25"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
      </li>
    </ul>
    <UDivider label="친구목록" class="mt-5" />
    <ul>
      <li class="flex items-center border-b border-gray-200 py-3">
        <img
          src="https://atg-prod-scalar.s3.amazonaws.com/studentpower/media/user%20avatar.png"
          alt="avatar"
          class="w-12 h-12 rounded-full"
        />
        <div class="flex items-start justify-between w-full">
          <div class="pl-3 w-full">
            <p
              tabindex="0"
              class="focus:outline-none text-md font-medium text-gray-800"
            >
              친구이름
            </p>
          </div>
          <div role="button" aria-label="bookmark">
            <svg
              class="focus:outline-none"
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.5001 4.66667H17.5001C18.1189 4.66667 18.7124 4.9125 19.15 5.35009C19.5876 5.78767 19.8334 6.38117 19.8334 7V23.3333L14.0001 19.8333L8.16675 23.3333V7C8.16675 6.38117 8.41258 5.78767 8.85017 5.35009C9.28775 4.9125 9.88124 4.66667 10.5001 4.66667Z"
                stroke="#2C3E50"
                stroke-width="1.25"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script lang="ts"></script>
<style></style>
