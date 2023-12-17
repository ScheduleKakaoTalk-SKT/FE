// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/ui'],
  app: {
    head: {
      title: 'SKT - ScheduleKakaoTalk',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width-device-width, initial-scale-1' },
        {
          hid: 'description',
          name: 'description',
          content: 'SKT - ScheduleKakaoTalk meta desc',
        },
        { name: 'format-detection', content: 'telephone-no' },
      ],
      link: [],
      script: [],
    },
  },
});
