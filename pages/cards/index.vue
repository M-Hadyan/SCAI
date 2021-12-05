<template>
  <div class="card card-custom">
    <div class="card-body p-0">
      <div
        id="kt_wizard_v2"
        data-wizard-state="first"
        data-wizard-clickable="true"
        class="wizard wizard-2"
      >
        <div class="wizard-nav border-right py-8 px-8 py-lg-20 px-lg-10">
          <div class="wizard-steps">
            <div
              data-wizard-type="step"
              :data-wizard-state="currentStep == 1 ? 'current' : 'pending'"
              class="wizard-step"
            >
              <div class="wizard-wrapper">
                <div class="wizard-icon">
                  <span class="svg-icon svg-icon-2x"
                    ><svg
                      version="1.1"
                      viewBox="0 0 24 24"
                      height="24px"
                      width="24px"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <!-- Generator: Sketch 50.2 (55047) - http://www.bohemiancoding.com/sketch -->
                      <title xmlns="http://www.w3.org/2000/svg">
                        Stockholm-icons / Shopping / Credit-card
                      </title>
                      <desc xmlns="http://www.w3.org/2000/svg">
                        Created with Sketch.
                      </desc>
                      <defs xmlns="http://www.w3.org/2000/svg"></defs>
                      <g
                        xmlns="http://www.w3.org/2000/svg"
                        id="Stockholm-icons-/-Shopping-/-Credit-card"
                        stroke="none"
                        stroke-width="1"
                        fill="none"
                        fill-rule="evenodd"
                      >
                        <rect
                          id="bound"
                          x="0"
                          y="0"
                          width="24"
                          height="24"
                        ></rect>
                        <rect
                          id="Combined-Shape"
                          fill="#000000"
                          opacity="0.3"
                          x="2"
                          y="5"
                          width="20"
                          height="14"
                          rx="2"
                        ></rect>
                        <rect
                          id="Rectangle-59"
                          fill="#000000"
                          x="2"
                          y="8"
                          width="20"
                          height="3"
                        ></rect>
                        <rect
                          id="Rectangle-59-Copy"
                          fill="#000000"
                          opacity="0.3"
                          x="16"
                          y="14"
                          width="4"
                          height="2"
                          rx="1"
                        ></rect>
                      </g></svg
                  ></span>
                </div>
                <div class="wizard-label">
                  <h3 class="wizard-title">
                    {{ $t('newSubscription') }}
                  </h3>
                  <div class="wizard-desc">
                    {{ $t('setupYourCardDetails') }}
                  </div>
                </div>
              </div>
            </div>
            <div
              data-wizard-type="step"
              class="wizard-step"
              :data-wizard-state="currentStep == 2 ? 'current' : 'pending'"
            >
              <div class="wizard-wrapper">
                <div class="wizard-icon">
                  <span class="svg-icon svg-icon-2x"
                    ><svg
                      version="1.1"
                      viewBox="0 0 24 24"
                      height="24px"
                      width="24px"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g
                        xmlns="http://www.w3.org/2000/svg"
                        id="Stockholm-icons-/-General-/-User"
                        stroke="none"
                        stroke-width="1"
                        fill="none"
                        fill-rule="evenodd"
                      >
                        <polygon
                          id="Shape"
                          points="0 0 24 0 24 24 0 24"
                        ></polygon>
                        <path
                          d="M12,11 C9.790861,11 8,9.209139 8,7 C8,4.790861 9.790861,3 12,3 C14.209139,3 16,4.790861 16,7 C16,9.209139 14.209139,11 12,11 Z"
                          id="Mask"
                          fill="#000000"
                          fill-rule="nonzero"
                          opacity="0.3"
                        ></path>
                        <path
                          d="M3.00065168,20.1992055 C3.38825852,15.4265159 7.26191235,13 11.9833413,13 C16.7712164,13 20.7048837,15.2931929 20.9979143,20.2 C21.0095879,20.3954741 20.9979143,21 20.2466999,21 C16.541124,21 11.0347247,21 3.72750223,21 C3.47671215,21 2.97953825,20.45918 3.00065168,20.1992055 Z"
                          id="Mask-Copy"
                          fill="#000000"
                          fill-rule="nonzero"
                        ></path>
                      </g></svg
                  ></span>
                </div>
                <div class="wizard-label">
                  <h3 class="wizard-title">
                    {{ $t('SetupYourCardInfo') }}
                  </h3>
                  <div class="wizard-desc">
                    {{ $t('SetupYourCardInfo') }}
                  </div>
                </div>
              </div>
            </div>
            <div
              data-wizard-type="step"
              class="wizard-step"
              :data-wizard-state="currentStep == 3 ? 'current' : 'pending'"
            >
              <div class="wizard-wrapper">
                <div class="wizard-icon">
                  <span class="svg-icon svg-icon-2x"
                    ><svg
                      version="1.1"
                      viewBox="0 0 24 24"
                      height="24px"
                      width="24px"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <defs xmlns="http://www.w3.org/2000/svg"></defs>
                      <g
                        xmlns="http://www.w3.org/2000/svg"
                        id="Stockholm-icons-/-Map-/-Compass"
                        stroke="none"
                        stroke-width="1"
                        fill="none"
                        fill-rule="evenodd"
                      >
                        <rect
                          id="bound"
                          x="0"
                          y="0"
                          width="24"
                          height="24"
                        ></rect>
                        <path
                          d="M12,21 C7.02943725,21 3,16.9705627 3,12 C3,7.02943725 7.02943725,3 12,3 C16.9705627,3 21,7.02943725 21,12 C21,16.9705627 16.9705627,21 12,21 Z M14.1654881,7.35483745 L9.61055177,10.3622525 C9.47921741,10.4489666 9.39637436,10.592455 9.38694497,10.7495509 L9.05991526,16.197949 C9.04337012,16.4735952 9.25341309,16.7104632 9.52905936,16.7270083 C9.63705011,16.7334903 9.74423017,16.7047714 9.83451193,16.6451626 L14.3894482,13.6377475 C14.5207826,13.5510334 14.6036256,13.407545 14.613055,13.2504491 L14.9400847,7.80205104 C14.9566299,7.52640477 14.7465869,7.28953682 14.4709406,7.27299168 C14.3629499,7.26650974 14.2557698,7.29522855 14.1654881,7.35483745 Z"
                          id="Combined-Shape"
                          fill="#000000"
                        ></path>
                      </g></svg
                  ></span>
                </div>
                <div class="wizard-label">
                  <h3 class="wizard-title">
                    {{ $t('billingDetails') }}
                  </h3>
                  <div class="wizard-desc">
                    {{ $t('locateYourBillAddress') }}
                  </div>
                </div>
              </div>
            </div>
            <div
              data-wizard-type="step"
              class="wizard-step"
              :data-wizard-state="currentStep == 4 ? 'current' : 'pending'"
            >
              <div class="wizard-wrapper">
                <div class="wizard-icon">
                  <span class="svg-icon svg-icon-2x"
                    ><svg
                      version="1.1"
                      viewBox="0 0 24 24"
                      height="24px"
                      width="24px"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <defs xmlns="http://www.w3.org/2000/svg"></defs>
                      <g
                        xmlns="http://www.w3.org/2000/svg"
                        id="Stockholm-icons-/-General-/-Like"
                        stroke="none"
                        stroke-width="1"
                        fill="none"
                        fill-rule="evenodd"
                      >
                        <rect
                          id="bound"
                          x="0"
                          y="0"
                          width="24"
                          height="24"
                        ></rect>
                        <path
                          d="M9,10 L9,19 L10.1525987,19.3841996 C11.3761964,19.7920655 12.6575468,20 13.9473319,20 L17.5405883,20 C18.9706314,20 20.2018758,18.990621 20.4823303,17.5883484 L21.231529,13.8423552 C21.5564648,12.217676 20.5028146,10.6372006 18.8781353,10.3122648 C18.6189212,10.260422 18.353992,10.2430672 18.0902299,10.2606513 L14.5,10.5 L14.8641964,6.49383981 C14.9326895,5.74041495 14.3774427,5.07411874 13.6240179,5.00562558 C13.5827848,5.00187712 13.5414031,5 13.5,5 L13.5,5 C12.5694044,5 11.7070439,5.48826024 11.2282564,6.28623939 L9,10 Z"
                          id="Path-42"
                          fill="#000000"
                        ></path>
                        <rect
                          id="Rectangle-153"
                          fill="#000000"
                          opacity="0.3"
                          x="2"
                          y="9"
                          width="5"
                          height="11"
                          rx="1"
                        ></rect>
                      </g></svg
                  ></span>
                </div>
                <div class="wizard-label">
                  <h3 class="wizard-title">
                    {{ $t('completed') }}
                  </h3>
                  <div class="wizard-desc">{{ $t('reviewAndSubmit') }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="wizard-body py-8 px-8 py-lg-20 px-lg-10">
          <div class="row">
            <div class="offset-xxl-2 col-xxl-8">
              <keep-alive>
                <component :is="stepComponent()"></component>
              </keep-alive>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import StepOneSelectCard from '~/components/cards/StepOneSelectCard'
import StepTwoCardInformation from '~/components/cards/StepTwoCardInformation'
import StepThreeBillDetails from '~/components/cards/StepThreeBillDetails'
import StepFourReviewAndSubmit from '~/components/cards/StepFourReviewAndSubmit'

export default {
  components: {
    StepOneSelectCard,
    StepTwoCardInformation,
    StepThreeBillDetails,
    StepFourReviewAndSubmit,
  },
  computed: {
    currentStep() {
      return this.$store.state.newCards.step
    },
  },
  methods: {
    stepComponent() {
      switch (this.currentStep) {
        case 1:
          return 'StepOneSelectCard'
        case 2:
          return 'StepTwoCardInformation'
        case 3:
          return 'StepThreeBillDetails'
        case 4:
          return 'StepFourReviewAndSubmit'
        default:
          return 'StepOneSelectCard'
      }
    },
  },
}
</script>
