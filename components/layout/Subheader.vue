<template>
  <div>
    <!-- <div id="kt_header_mobile" class="header-mobile">
      <!--begin::Logo--
      <a href="/">
        <img
          src="~/assets/images/logo.png"
          class="logo-default max-h-30px"
          alt="STCPay"
        />
      </a>
      <!--end::Logo-->
      <!--begin::Toolbar--
      <div class="d-flex align-items-center">
        <button
          class="btn p-0 burger-icon burger-icon-left"
          id="kt_aside_mobile_toggle"
        >
          <span></span>
        </button>
      </div>
      <!--end::Toolbar--
    </div> -->
    <div class="subheader py-3 py-lg-8 subheader-transparent" id="kt_subheader">
      <div
        class="
          container
          d-flex
          align-items-center
          justify-content-between
          flex-wrap flex-sm-nowrap
        "
      >
        <!--begin::Info-->
        <div class="d-flex align-items-center mr-1">
          <!--begin::Page Heading-->
          <div class="d-flex align-items-baseline flex-wrap mr-5">
            <!--begin::Page Title-->
            <h2
              class="
                d-flex
                align-items-center
                text-dark
                font-weight-bold
                my-1
                mr-3
              "
            >
              {{ $t('dashboard') }}
            </h2>
            <!--end::Page Title-->
          </div>
          <!--end::Page Heading-->
        </div>
        <!--end::Info-->
        <!--begin::Toolbar-->
        <div class="d-flex align-items-center flex-wrap">
          <!--begin::Button-->
          <NuxtLink to="/cards"
            class="
              btn
              button-color
              btn-fixed-height
              font-weight-bold
              px-2 px-lg-5
              mr-2
            "
          >
            <span class="svg-icon svg-icon-lg">
              <!--begin::Svg Icon | path:/MFH/theme/html/demo3/dist/assets/media/svg/icons/Communication/Add-user.svg-->
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                width="24px"
                height="24px"
                viewBox="0 0 24 24"
                version="1.1"
              >
                <g
                  stroke="none"
                  stroke-width="1"
                  fill="none"
                  fill-rule="evenodd"
                >
                  <rect x="0" y="0" width="24" height="24"></rect>
                  <rect
                    fill="#000000"
                    opacity="0.3"
                    x="2"
                    y="5"
                    width="20"
                    height="14"
                    rx="2"
                  ></rect>
                  <rect fill="#000000" x="2" y="8" width="20" height="3"></rect>
                  <rect
                    fill="#000000"
                    opacity="0.3"
                    x="16"
                    y="14"
                    width="4"
                    height="2"
                    rx="1"
                  ></rect>
                </g>
              </svg>
              <!--end::Svg Icon-->
            </span>
            <span class="d-none d-md-inline">{{ $t('newCard') }}</span>
          </NuxtLink>
          <!--end::Button-->

          <!--begin::Button-->
          <NuxtLink to="/profile"
            class="btn btn-secondary btn-icon font-weight-bold"
            data-toggle="modal"
            data-target="#kt_chat_modal"
          >
            <span class="svg-icon svg-icon-lg">
              <img src="~/assets/images/user.png" height="42">
              <!--begin::Svg Icon | path:/MFH/theme/html/demo3/dist/assets/media/svg/icons/Communication/Group-chat.svg-->
              <!--end::Svg Icon-->
            </span>
          </NuxtLink>
          
          <!-- <DropdownLanguage /> -->
          <!--end::Button-->
        </div>
        <!--end::Toolbar-->
      </div>
    </div>
  </div>
</template>

<script>
import DropdownLanguage from '~/components/layout/DropdownLanguage.vue'

export default {
  components: {
    DropdownLanguage
  }
}
</script>

<style></style>
