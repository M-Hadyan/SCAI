<template>
  <div class="aside aside-left d-flex aside-fixed" id="kt_aside">
    <!--begin::Primary-->
    <div
      class="aside-primary d-flex flex-column align-items-center flex-row-auto"
    >
      <!--begin::Brand-->
      <div
        class="
          aside-brand
          d-flex
          flex-column
          align-items-center
          flex-column-auto
          py-5 py-lg-12
        "
      >
        <!--begin::Logo-->
        <a href="/MFH/demo3/index.html">
          <img src="~/assets/images/logo.png" class="max-h-20px" />
        </a>
        <!--end::Logo-->
      </div>
      <!--end::Brand-->
      <!--begin::Nav Wrapper-->
      <div
        class="
          aside-nav
          d-flex
          flex-column
          align-items-center
          flex-column-fluid
          py-5
          scroll scroll-pull
          ps ps--active-y
        "
      >
        <!--begin::Nav-->
        <ul class="nav flex-column" role="tablist">
          <!--begin::Item-->
          <li
            class="nav-item mb-3"
            data-toggle="tooltip"
            data-placement="right"
            data-container="body"
            data-boundary="window"
            title=""
            data-original-title="Latest Projects"
          >
            <NuxtLink
              to="/"
              :class="
                $nuxt.$route.path == '/'
                  ? 'nav-link btn btn-icon btn-clean btn-lg active'
                  : 'nav-link btn btn-icon btn-clean btn-lg'
              "
              data-toggle="tab"
              data-target="#kt_aside_tab_1"
              role="tab"
            >
              <span class="svg-icon svg-icon-xl">
                <!--begin::Svg Icon | path:/MFH/theme/html/demo3/dist/assets/media/svg/icons/Layout/Layout-4-blocks.svg-->
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
                      x="4"
                      y="4"
                      width="7"
                      height="7"
                      rx="1.5"
                    ></rect>
                    <path
                      d="M5.5,13 L9.5,13 C10.3284271,13 11,13.6715729 11,14.5 L11,18.5 C11,19.3284271 10.3284271,20 9.5,20 L5.5,20 C4.67157288,20 4,19.3284271 4,18.5 L4,14.5 C4,13.6715729 4.67157288,13 5.5,13 Z M14.5,4 L18.5,4 C19.3284271,4 20,4.67157288 20,5.5 L20,9.5 C20,10.3284271 19.3284271,11 18.5,11 L14.5,11 C13.6715729,11 13,10.3284271 13,9.5 L13,5.5 C13,4.67157288 13.6715729,4 14.5,4 Z M14.5,13 L18.5,13 C19.3284271,13 20,13.6715729 20,14.5 L20,18.5 C20,19.3284271 19.3284271,20 18.5,20 L14.5,20 C13.6715729,20 13,19.3284271 13,18.5 L13,14.5 C13,13.6715729 13.6715729,13 14.5,13 Z"
                      fill="#000000"
                      opacity="0.3"
                    ></path>
                  </g>
                </svg>
                <!--end::Svg Icon-->
              </span>
            </NuxtLink>
          </li>
          <!--end::Item-->
          <!--begin::Item-->
          <li
            class="nav-item mb-3"
            data-toggle="tooltip"
            data-placement="right"
            data-container="body"
            data-boundary="window"
            title=""
            data-original-title="MFH Features"
          >
            <NuxtLink
              to="/cards"
              :class="
                $nuxt.$route.path == '/cards'
                  ? 'nav-link btn btn-icon btn-clean btn-lg active'
                  : 'nav-link btn btn-icon btn-clean btn-lg'
              "
              class="nav-link btn btn-icon btn-clean btn-lg"
              data-toggle="tab"
              data-target="#kt_aside_tab_2"
              role="tab"
            >
              <span class="svg-icon svg-icon-xl">
                <!--begin::Svg Icon | path:/MFH/theme/html/demo3/dist/assets/media/svg/icons/Communication/Group.svg-->
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
                    <rect
                      fill="#000000"
                      x="2"
                      y="8"
                      width="20"
                      height="3"
                    ></rect>
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
            </NuxtLink>
          </li>
          <!--end::Item-->
          <!--begin::Item-->
          <li
            class="nav-item mb-3"
            data-toggle="tooltip"
            data-placement="right"
            data-container="body"
            data-boundary="window"
            title=""
            data-original-title="Latest Reports"
          >
            <NuxtLink
              to="/profile"
              :class="
                $nuxt.$route.path == '/profile'
                  ? 'nav-link btn btn-icon btn-clean btn-lg active'
                  : 'nav-link btn btn-icon btn-clean btn-lg'
              "
              data-toggle="tab"
              data-target="#kt_aside_tab_3"
              role="tab"
            >
              <span class="svg-icon svg-icon-xl">
                <!--begin::Svg Icon | path:/MFH/theme/html/demo3/dist/assets/media/svg/icons/Communication/Group.svg-->
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
                    <polygon points="0 0 24 0 24 24 0 24"></polygon>
                    <path
                      d="M18,14 C16.3431458,14 15,12.6568542 15,11 C15,9.34314575 16.3431458,8 18,8 C19.6568542,8 21,9.34314575 21,11 C21,12.6568542 19.6568542,14 18,14 Z M9,11 C6.790861,11 5,9.209139 5,7 C5,4.790861 6.790861,3 9,3 C11.209139,3 13,4.790861 13,7 C13,9.209139 11.209139,11 9,11 Z"
                      fill="#000000"
                      fill-rule="nonzero"
                      opacity="0.3"
                    ></path>
                    <path
                      d="M17.6011961,15.0006174 C21.0077043,15.0378534 23.7891749,16.7601418 23.9984937,20.4 C24.0069246,20.5466056 23.9984937,21 23.4559499,21 L19.6,21 C19.6,18.7490654 18.8562935,16.6718327 17.6011961,15.0006174 Z M0.00065168429,20.1992055 C0.388258525,15.4265159 4.26191235,13 8.98334134,13 C13.7712164,13 17.7048837,15.2931929 17.9979143,20.2 C18.0095879,20.3954741 17.9979143,21 17.2466999,21 C13.541124,21 8.03472472,21 0.727502227,21 C0.476712155,21 -0.0204617505,20.45918 0.00065168429,20.1992055 Z"
                      fill="#000000"
                      fill-rule="nonzero"
                    ></path>
                  </g>
                </svg>
                <!--end::Svg Icon-->
              </span>
            </NuxtLink>
          </li>
          <!--end::Item-->
        </ul>
        <!--end::Nav-->
      </div>
    </div>
    <!--end::Primary-->
    <!--begin::Secondary-->
    <div class="aside-secondary d-flex flex-row-fluid">
      <!--begin::Workspace-->
      <div
        class="aside-workspace scroll scroll-push my-2 ps"
        style="height: 1636px; overflow: hidden"
      >
        <!--begin::Tab Content-->
        <div class="tab-content">
          <!--begin::Tab Pane-->
          <div
            class="tab-pane p-3 px-lg-7 py-lg-5 fade show active"
            id="kt_aside_tab_1"
          >
            <!--begin::Form-->
            <form class="p-2 p-lg-3">
              <div class="d-flex">
                <div class="input-icon h-40px">
                  <input
                    type="text"
                    class="
                      form-control form-control-lg form-control-solid
                      h-40px
                    "
                    placeholder="Search..."
                    id="generalSearch"
                  />
                  <span>
                    <span class="svg-icon svg-icon-lg">
                      <!--begin::Svg Icon | path:/MFH/theme/html/demo3/dist/assets/media/svg/icons/General/Search.svg-->
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
                          <path
                            d="M14.2928932,16.7071068 C13.9023689,16.3165825 13.9023689,15.6834175 14.2928932,15.2928932 C14.6834175,14.9023689 15.3165825,14.9023689 15.7071068,15.2928932 L19.7071068,19.2928932 C20.0976311,19.6834175 20.0976311,20.3165825 19.7071068,20.7071068 C19.3165825,21.0976311 18.6834175,21.0976311 18.2928932,20.7071068 L14.2928932,16.7071068 Z"
                            fill="#000000"
                            fill-rule="nonzero"
                            opacity="0.3"
                          ></path>
                          <path
                            d="M11,16 C13.7614237,16 16,13.7614237 16,11 C16,8.23857625 13.7614237,6 11,6 C8.23857625,6 6,8.23857625 6,11 C6,13.7614237 8.23857625,16 11,16 Z M11,18 C7.13400675,18 4,14.8659932 4,11 C4,7.13400675 7.13400675,4 11,4 C14.8659932,4 18,7.13400675 18,11 C18,14.8659932 14.8659932,18 11,18 Z"
                            fill="#000000"
                            fill-rule="nonzero"
                          ></path>
                        </g>
                      </svg>
                      <!--end::Svg Icon-->
                    </span>
                  </span>
                </div>
                <div
                  class="dropdown"
                  data-toggle="tooltip"
                  title=""
                  data-placement="left"
                  data-original-title="Quick actions"
                >
                  <a
                    href="#"
                    class="
                      btn btn-icon btn-default btn-hover-primary
                      ml-2
                      h-40px
                      w-40px
                      flex-shrink-0
                    "
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <span class="svg-icon svg-icon-lg">
                      <!--begin::Svg Icon | path:/MFH/theme/html/demo3/dist/assets/media/svg/icons/Code/Compiling.svg-->
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
                          <path
                            d="M2.56066017,10.6819805 L4.68198052,8.56066017 C5.26776695,7.97487373 6.21751442,7.97487373 6.80330086,8.56066017 L8.9246212,10.6819805 C9.51040764,11.267767 9.51040764,12.2175144 8.9246212,12.8033009 L6.80330086,14.9246212 C6.21751442,15.5104076 5.26776695,15.5104076 4.68198052,14.9246212 L2.56066017,12.8033009 C1.97487373,12.2175144 1.97487373,11.267767 2.56066017,10.6819805 Z M14.5606602,10.6819805 L16.6819805,8.56066017 C17.267767,7.97487373 18.2175144,7.97487373 18.8033009,8.56066017 L20.9246212,10.6819805 C21.5104076,11.267767 21.5104076,12.2175144 20.9246212,12.8033009 L18.8033009,14.9246212 C18.2175144,15.5104076 17.267767,15.5104076 16.6819805,14.9246212 L14.5606602,12.8033009 C13.9748737,12.2175144 13.9748737,11.267767 14.5606602,10.6819805 Z"
                            fill="#000000"
                            opacity="0.3"
                          ></path>
                          <path
                            d="M8.56066017,16.6819805 L10.6819805,14.5606602 C11.267767,13.9748737 12.2175144,13.9748737 12.8033009,14.5606602 L14.9246212,16.6819805 C15.5104076,17.267767 15.5104076,18.2175144 14.9246212,18.8033009 L12.8033009,20.9246212 C12.2175144,21.5104076 11.267767,21.5104076 10.6819805,20.9246212 L8.56066017,18.8033009 C7.97487373,18.2175144 7.97487373,17.267767 8.56066017,16.6819805 Z M8.56066017,4.68198052 L10.6819805,2.56066017 C11.267767,1.97487373 12.2175144,1.97487373 12.8033009,2.56066017 L14.9246212,4.68198052 C15.5104076,5.26776695 15.5104076,6.21751442 14.9246212,6.80330086 L12.8033009,8.9246212 C12.2175144,9.51040764 11.267767,9.51040764 10.6819805,8.9246212 L8.56066017,6.80330086 C7.97487373,6.21751442 7.97487373,5.26776695 8.56066017,4.68198052 Z"
                            fill="#000000"
                          ></path>
                        </g>
                      </svg>
                      <!--end::Svg Icon-->
                    </span>
                  </a>
                  <div
                    class="dropdown-menu dropdown-menu-md dropdown-menu-right"
                  >
                    <!--begin::Navigation-->
                    <ul class="navi navi-hover py-5">
                      <li class="navi-item">
                        <a href="#" class="navi-link">
                          <span class="navi-icon">
                            <i class="flaticon2-drop"></i>
                          </span>
                          <span class="navi-text">New Group</span>
                        </a>
                      </li>
                      <li class="navi-item">
                        <a href="#" class="navi-link">
                          <span class="navi-icon">
                            <i class="flaticon2-list-3"></i>
                          </span>
                          <span class="navi-text">Contacts</span>
                        </a>
                      </li>
                      <li class="navi-item">
                        <a href="#" class="navi-link">
                          <span class="navi-icon">
                            <i class="flaticon2-rocket-1"></i>
                          </span>
                          <span class="navi-text">Groups</span>
                          <span class="navi-link-badge">
                            <span
                              class="
                                label label-light-primary label-inline
                                font-weight-bold
                              "
                              >new</span
                            >
                          </span>
                        </a>
                      </li>
                      <li class="navi-item">
                        <a href="#" class="navi-link">
                          <span class="navi-icon">
                            <i class="flaticon2-bell-2"></i>
                          </span>
                          <span class="navi-text">Calls</span>
                        </a>
                      </li>
                      <li class="navi-item">
                        <a href="#" class="navi-link">
                          <span class="navi-icon">
                            <i class="flaticon2-gear"></i>
                          </span>
                          <span class="navi-text">Settings</span>
                        </a>
                      </li>
                      <li class="navi-separator my-3"></li>
                      <li class="navi-item">
                        <a href="#" class="navi-link">
                          <span class="navi-icon">
                            <i class="flaticon2-magnifier-tool"></i>
                          </span>
                          <span class="navi-text">Help</span>
                        </a>
                      </li>
                      <li class="navi-item">
                        <a href="#" class="navi-link">
                          <span class="navi-icon">
                            <i class="flaticon2-bell-2"></i>
                          </span>
                          <span class="navi-text">Privacy</span>
                          <span class="navi-link-badge">
                            <span
                              class="
                                label label-light-danger label-rounded
                                font-weight-bold
                              "
                              >5</span
                            >
                          </span>
                        </a>
                      </li>
                    </ul>
                    <!--end::Navigation-->
                  </div>
                </div>
              </div>
            </form>
            <!--end::Form-->
            <h3 class="p-2 p-lg-3 my-1 my-lg-3">{{ $t('cards') }}</h3>
            <!--begin::List-->
            <div class="list list-hover">
              <!--begin::Item-->
              <div
                v-for="card in newCardInfo"
                :key="card.id"
                :value="card.id"
                class="list-item hoverable p-2 p-lg-3 mb-2"
              >
                <div class="d-flex align-items-center">
                  <!--begin::Symbol-->
                  <div class="d-flex flex-column flex-grow-1 mr-2">
                    <div class="card">
                      <figure class="card__figure">
                        <img
                          src="~assets/images/white-logo.png"
                          class="card__figure--logo"
                        />
                      </figure>
                      <div class="card__reader">
                        <div
                          class="card__reader--risk card__reader--risk-one"
                        ></div>
                        <div
                          class="card__reader--risk card__reader--risk-two"
                        ></div>
                        <div
                          class="card__reader--risk card__reader--risk-three"
                        ></div>
                        <div
                          class="card__reader--risk card__reader--risk-four"
                        ></div>
                      </div>

                      <div class="card__name">{{ card.fullName }}</div>
                      <p class="card__number">{{ card.cardNumber }}</p>

                      <div class="card__CVV">{{ card.cvv }}</div>
                      <div class="card__flag">
                        <img
                          src="~/assets/images/visa.png"
                          class="max-h-20px card__visa"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <!--begin::End-->
              </div>
            </div>
            <!--end::Item-->
          </div>
          <!--end::List-->
        </div>
        <!--end::Tab Pane-->
      </div>
    </div>
    <!--end::Workspace-->
  </div>
  <!--end::Secondary-->
</template>

<script>
import { mapActions } from 'vuex'
export default {
  computed: {
    newCardInfo: {
      get() {
        return this.$store.state.newCards.newCardInfo
      },
    },
  },
  mounted() {
    this.getNewCardInfo()
  },
  methods: {
    ...mapActions({
      getNewCardInfo: 'newCards/getNewCardInfo',
    }),
  },
}
</script>

<style scoped>
.card {
  width: 180px;
  height: 250px;
  background: #4f008c;
  border-radius: 10px;
  position: relative;
}

.card__figure {
  position: relative;
  height: 40px;
  margin: 0;
}

.name {
  color: #fff;
}

.card__figure--logo {
  --widthLogo: 67px;
  width: var(--widthLogo);
  position: absolute;
  left: -10%;
  transform: translate(calc(var(--widthLogo) / 2), 69px);
}

.card__reader {
  width: 20px;
  height: 30px;
  background: radial-gradient(#e0e0de, #d8d6d6);
  border-radius: 5px;
  position: absolute;
  top: 29%;
  transform: translate(66px, -44px);
  overflow: hidden;
}

.card__reader--risk {
  width: 50px;
  height: 40px;
  border-radius: 13px;
  background: transparent;
  border: 1px solid #666;
  position: absolute;
  z-index: 0;
}
.card__CVV {
  transform: translate(19px, 18px);
  color: #fff;
  font-weight: bold;
}

.card__reader--risk-one {
  transform: translate(37px, 15px);
}

.card__reader--risk-two {
  transform: translate(15px, 30px);
}

.card__reader--risk-three {
  transform: translate(-37px, -15px);
}

.card__visa {
  transform: translate(-15px, 0px);
}
.card__reader--risk-four {
  transform: translate(-15px, -30px);
}

.card__number {
  font-family: var(--font);
  font-size: 0.8em;
  font-weight: bold;
  color: #00c48c;
  letter-spacing: 2.5px;
  text-align: center;
  margin-top: 96px;
  z-index: 1;
  font-weight: bold;
  position: relative;
  filter: drop-shadow(1px 1px 1px rgba(0, 0, 0, 0.3));
}

.card__number::before,
.card__number::after {
  font-family: Arial;
  color: rgba(0, 0, 0, 0.4);
  font-size: 0.9em;
  position: absolute;
  letter-spacing: 0px;
}

.card__name {
  font-family: var(--font);
  font-size: 0.9em;
  font-weight: bold;
  color: var(--white);
  letter-spacing: 1px;
  transform: translate(21px, 81px);
  position: relative;
  filter: drop-shadow(1px 1px 1px rgba(0, 0, 0, 0.3));
}

.card__flag {
  right: 10px;
  top: 91%;
  border-radius: 25px;
  transform: translate(0, -28px);
  position: absolute;
  width: 50px;
}

.card__flag--red {
  position: absolute;
  left: 5px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #ce0e1d;
}

.card__flag--yellow {
  position: absolute;
  right: 5px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #e39833;
}

.card__flag--yellow::after {
  content: 'MasterCard';
  position: absolute;
  font-size: 0.7em;
  top: 50%;
  transform: translate(-25px, -7px);
  font-family: var(--masterFont);
  font-style: italic;
  font-weight: 800;
  color: var(--white);
  filter: drop-shadow(1px 1px 1px rgba(0, 0, 0, 0.5));
}

.assign {
  text-align: center;
  margin-top: 113px;
  font-family: var(--masterFont);
  color: #fff;
  font-size: 0.8em;
  filter: drop-shadow(1px 1px 1px rgba(0, 0, 0, 0.3));
}

.assign a {
  text-decoration: none;
  font-weight: 700;
  color: #fff;
}

.assign a::hover {
  color: var(--purple);
}
</style>
