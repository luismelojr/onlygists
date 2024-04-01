<script setup lang="ts">
import { computed } from 'vue'

const {render} = useMarkdown()

const emit = defineEmits<{
  (e: 'tap', id: string): void
}>()

const props = withDefaults(defineProps<{
  id: string
  title: string
  description: string
  price: number
  lang: string
}>(), {
  id: '123',
  title: 'useCurrentUser.ts',
  description: 'Hook para controlar o **usuário** logado',
  price: 10,
  lang: 'typescript'
})

const isFree = computed(() => props.price === 0)

const description = computed(() => render(props.description))

const amount = computed(() => Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(props.price))

const handleClick = () => {
  emit('tap', props.id)
}
</script>

<template>
  <div class="card">
    <Card>
      <template #title>
        <div class="flex flex-wrap gap-2">
          {{props.title}}
          <Chip :label="props.lang" icon="pi pi-bolt" class="text-sm"/>
        </div>
      </template>
      <template #content>
        <div v-html="description" />
      </template>
      <template #footer>
        <Button
          @click="handleClick"
          label="Baixar gratuitamente"
          class="w-full" icon="pi pi-download"
          icon-pos="right"
          v-if="isFree"
        />
        <Button
          @click="handleClick"
          :label="'Comprar por ' + amount"
          class="w-full" icon="pi pi-shopping-cart"
          icon-pos="right"
          v-else
        />
      </template>
    </Card>
  </div>
</template>