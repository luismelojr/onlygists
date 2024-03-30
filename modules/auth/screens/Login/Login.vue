<script setup lang="ts">
import SocialForm from '~/modules/auth/components/SocialForm/SocialForm.vue'
const loading = ref(false)

const handleGithubLogin = async () => {
  loading.value = true
  setTimeout(() => (loading.value = false), 2000)
}
</script>

<template>
  <section class="w-full h-screen flex flex-col items-center justify-center gap-5 bg-gray-50">
    <NuxtLink to="/">
      <Logo />
    </NuxtLink>
    <SocialForm :loading="loading" @wants-login-with-github="handleGithubLogin" />
  </section>
</template>
