<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    loading: boolean
  }>(),
  {
    loading: true,
  },
)
</script>

<template>
  <template v-if="props.loading">
    <Skeleton width="100%" height="15rem" />
    <Skeleton width="100%" height="15rem" />
    <Skeleton width="100%" height="15rem" />
    <Skeleton width="100%" height="15rem" />
  </template>
  <slot v-else />
</template>
