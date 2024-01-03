<template>
  <CSidebar
    position="fixed"
    :unfoldable="sidebarUnfoldable"
    :visible="sidebarVisible"
    @visible-change="
                     (event) =>
                     $store.commit({
                     type: 'updateSidebarVisible',
                     value: event,
                     })
                     "
    >
    <CSidebarBrand>
    </CSidebarBrand>
    <CSidebarNav>
    <CNavItem> 
    <span class="ms-4">
    <CIcon size="lg" class="pt-2" :icon="icon.cilChart"/>
    <router-link
      :to="{ name: 'dashboards.index' }"
      class="ps-2 btn text-white"
      >Dashboard</router-link
    >
    </span>
    </CNavItem>
    <CNavItem> 
    <span class="ms-4">
    <CIcon size="lg" class="pt-2" :icon="icon.cilPeople"/>
    <router-link
      :to="{ name: 'customers.index' }"
      class="ps-2 btn text-white"
      >Customer</router-link
    >
    </span>
    </CNavItem>
    <CNavItem> 
    <span class="ms-4">
    <CIcon size="lg" class="pt-2" :icon="icon.cilNotes"/>
    <router-link
      :to="{ name: 'purchases.index' }"
      class="ps-2 btn text-white"
      >Purchase Records</router-link
    >
    </span>
    </CNavItem>
    </CSidebarNav>
  </CSidebar>
</template>

<script>
  import { computed } from 'vue'
import { useStore } from 'vuex'
import * as icon from '@coreui/icons';
import CIcon from '@coreui/icons-vue';
export default {
  name: 'AppSidebar',
  components: {
    CIcon
  },
  setup() {
    const store = useStore()
    return {
      sidebarUnfoldable: computed(() => store.state.sidebarUnfoldable),
      sidebarVisible: computed(() => store.state.sidebarVisible),
      icon,
    }
  },
}
</script>
