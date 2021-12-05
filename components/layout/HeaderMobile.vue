<template>
  <div
    id="kt_header_mobile"
    class="header-mobile align-items-center mb-3"
   
  >
   <!-- v-bind:class="headerClasses" -->
    <!--begin::Logo-->
    <a href="/">
      <img alt="Logo" src="~/assets/images/logo.png" class="logo-default max-h-30px" />
    </a>
    <!--end::Logo-->
    <!--begin::Toolbar-->
    <div class="d-flex align-items-center">
      <button
        class="btn p-0 burger-icon burger-icon-left"
        id="kt_aside_mobile_toggle"
      >
        <span></span>
      </button>
    </div>
    <!--end::Toolbar-->
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    // ...mapGetters(["layoutConfig", "getClasses"]),

    /**
     * Get header logo
     * @returns {string}
     */


    /**
     * Get classes for mobile header
     * @returns {null|*}
     */
    // headerClasses() {
    //   const classes = this.getClasses("header_mobile");
    //   if (typeof classes !== "undefined") {
    //     return classes.join(" ");
    //   }
    //   return null;
    // },

    /**
     * Check if the left aside menu is enabled
     * @returns {boolean}
     */
    // asideEnabled() {
    //   return !!this.layoutConfig("aside.self.display");
    // }
  }
};
</script>
