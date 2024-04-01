<script setup lang="ts">
import PublicHeadline from '@/modules/users/components/PublicHeadline/PublicHeadline.vue'
import WidgetGroup from '@/modules/reports/components/Widget/Group/Group.vue'
import WidgetGroupLoader from '@/modules/reports/components/Widget/Group/LoaderGroup.vue'
import WidgetCondensed from '@/modules/reports/components/Widget/Condensed/Condensed.vue'
import GistCardGroup from '@/modules/gists/components/Card/Group/Group.vue'
import GistCardLoader from '~/modules/gists/components/Card/Group/LoaderGroup.vue'
import GistCardItem from '@/modules/gists/components/Card/Item/Item.vue'

const route = useRoute()
const router = useRouter()
const handleNavigateToDetail = (id: string) => {
  const {username} = route.params
  router.push(`/${username}/gists/${id}`)
}

</script>

<template>
  <PublicHeadline />
  <WidgetGroup>
    <WidgetGroupLoader :loading="false" :amount="3">
      <WidgetCondensed label="Gists total" :value="10" />
      <WidgetCondensed label="Gists gratuitos" :value="7" />
      <WidgetCondensed label="Gists pagos" :value="3" />
    </WidgetGroupLoader>
  </WidgetGroup>
  <WidgetDefault class="w-full" title="Todos os gists">
    <GistCardGroup>
      <GistCardLoader :loading="false">
        <GistCardItem
          @tap="handleNavigateToDetail"
          id="1"
          title="useCurrentUser.ts"
          description="Hook para controlar o **store** do usuário"
          :price="15"
          lang="typescript"
        />
      </GistCardLoader>
    </GistCardGroup>
  </WidgetDefault>
</template>
