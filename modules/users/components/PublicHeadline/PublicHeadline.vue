<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    name: string
    avatarUrl: string
    bio?: string
    city: string
    state?: string
  }>(),
  {
    name: 'Luis Henrique',
    avatarUrl: 'https://github.com/luismelojr.png',
    bio: 'Desenvolvedor back-end',
    city: 'Aparecida de Goiania',
    state: 'GO',
  },
)
</script>
<template>
  <div class="w-full flex flex-col gap-2 justify-center items-center">
    <div class="w-24 md:w-32 rounded-full overflow-hidden">
      <img :src="props.avatarUrl" alt="foto do usuario" class="w-full" />
    </div>
    <h1 class="font-[Inter] text-gray-700 text-center font-bold text-2xl md:text-3xl">{{ props.name }}</h1>
    <p class="font-[Inter] text-gray-700 text-center font-regular md:text-lg" v-if="props.bio">{{ props.bio }}</p>
    <p class="font-[Inter] font-regular text-gray-500 text-sm md:text-base" v-if="props.city && props.state">
      <i class="pi pi-map-marker" />
      {{ props.city }}, {{ props.state }}
    </p>
  </div>
</template>
