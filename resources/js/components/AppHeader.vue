<template>
  <CHeader position="sticky" class="mb-4 nav-tab">
    <CContainer fluid>
      <CHeaderToggler class="ps-1" @click="$store.commit('toggleSidebar')">
        <CIcon :icon="icon.cilMenu" size="lg" />
      </CHeaderToggler>
      <CHeaderNav class="d-none d-md-flex me-auto">
        <CNavItem>
          <router-link
            :to="{ name: 'dashboards.index' }"
            class="ps-2 btn text-secondary"
            >Dashboard</router-link
          >
        </CNavItem>
        <CNavItem>
          <router-link
            :to="{ name: 'customers.index' }"
            class="ps-2 btn text-secondary"
            >Customer</router-link
            >
        </CNavItem>
        <CNavItem>
    <router-link
      :to="{ name: 'purchases.index' }"
      class="ps-2 btn text-secondary"
      >Purchase Records</router-link
    >
        </CNavItem>
      </CHeaderNav>
      <CHeaderNav>
        <CDropdown variant="nav-item">
          <CDropdownToggle placement="bottom-end"class="py-0">
            {{ user.name }}
          </CDropdownToggle>
          <CDropdownMenu class="pt-0">
          <CDropdownItem >
          <form class="nav-link">
            <span @click="onClick">
              Log out
            </span>
          </form>
            </CDropdownItem>
          </CDropdownMenu>
        </CDropdown>
      </CHeaderNav>
    </CContainer>
    <CHeaderDivider />
  </CHeader>
</template>

<script>
import CIcon from '@coreui/icons-vue';
import * as icon from '@coreui/icons';
import { useRouter } from 'vue-router';
export default {
  props: ['user'],
  components: {
    CIcon
  },
  setup() {
    const router = useRouter();
    const onClick = (e) => {
      e.preventDefault();
      axios.post('/logout')
        .then((res) => {
          window.location.href = '/';
      });
    }
    return {
      icon,
      onClick
    }
  }
}
</script>
