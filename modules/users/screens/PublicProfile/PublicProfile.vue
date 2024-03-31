<script setup lang="ts">
import PublicHeadline from '@/modules/users/components/PublicHeadline/PublicHeadline.vue'
import WidgetGroup from '~/modules/reports/components/Widget/Group/Group.vue'
import WidgetGroupLoader from '~/modules/reports/components/Widget/Group/LoaderGroup.vue'
import WidgetCondensed from '~/modules/reports/components/Widget/Condensed/Condensed.vue'
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
</template>
