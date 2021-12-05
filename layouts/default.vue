<template>
  <div
    class="
      header-fixed header-tablet-and-mobile-fixed
      aside-fixed aside-secondary-enabled
    "
  >
    <div class="d-flex flex-column flex-root">
      <div class="d-flex flex-row flex-column-fluid page">
        <div class="d-flex flex-column flex-row-fluid wrapper">
          <Sidebar />
          <div class="d-flex flex-column flex-column-fluid">
            <HeaderMobile />
            <Subheader />

            <div class="d-flex flex-column-fluid">
              <!--begin::Container-->
              <div class="container">
                <Nuxt />

                <Footer />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from '~/components/layout/Sidebar.vue'
import Subheader from '~/components/layout/Subheader.vue'
import Footer from '~/components/layout/Footer.vue'
import HeaderMobile from '~/components/layout/HeaderMobile.vue'

export default {
  components: {
    Sidebar,
    Subheader,
    HeaderMobile,
    Footer,
  },
}
</script>
