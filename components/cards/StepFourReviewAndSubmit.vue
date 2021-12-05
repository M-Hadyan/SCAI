<template>
  <div>
    <h4 class="mb-10 font-weight-bold text-dark">
      {{ $t('reviewYourDetailsAndSubmit') }}
    </h4>
    <div class="mb-5 pb-5 text-dark">
      <div class="font-weight-bold mb-3 blockTitle">{{ $t('accountDetails') }}</div>
      <div class="itemData">
        {{ $t('nameOnCard') }} <span class="showData"> {{ fullName }} </span>
      </div>
      <div class="itemData">
        {{ $t('City') }} <span class="showData">{{ city }}</span>
      </div>
      <div class="itemData">
        {{ $t('state') }} <span class="showData">{{ state }}</span>
      </div>
      <div class="itemData">
        {{ $t('country') }} <span class="showData">{{ country }}</span>
      </div>
      <div class="itemData">
        {{ $t('addressLine1') }} <span class="showData"> {{ addressOne }}</span>
      </div>
      <div class="itemData">
        {{ $t('addressLine1') }} <span class="showData"> {{ addressTwo }}</span>
      </div>
    </div>

    <div class="d-flex justify-content-between border-top pt-10">
      <div class="mr-2">
        <button
          @click="previous()"
          class="
            btn btn-light-primary
            font-weight-bold
            text-uppercase
            px-9
            py-4
          "
        >
          {{ $t('back') }}
        </button>
      </div>
      <div>
        <!-- @click="showAlert" -->
        <button
          data-wizard-type="action-next"
          @click="next()"
          class="btn btn-success font-weight-bold text-uppercase px-9 py-4"
        >
          {{ $t('submit') }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapActions } from 'vuex'
export default {
  computed: {
    newCardInfo: {
      get() {
        return this.$store.state.newCards.newCardInfo
      },
    },
    cardType: {
      get() {
        return this.$store.state.newCards.cardType
      },
    },
    countries: {
      get() {
        return this.$store.state.newCards.countries
      },
    },
    addressOne: {
      get() {
        return this.$store.state.newCards.addressOne
      },
    },
    addressTwo: {
      get() {
        return this.$store.state.newCards.addressTwo
      },
    },
    postalCode: {
      get() {
        return this.$store.state.newCards.postalCode
      },
    },
    city: {
      get() {
        return this.$store.state.newCards.city
      },
    },
    state: {
      get() {
        return this.$store.state.newCards.state
      },
    },
    country: {
      get() {
        return this.$store.state.newCards.country
      },
    },
    fullName: {
      get() {
        return this.$store.state.newCards.fullName
      },
    },
    pin: {
      get() {
        return this.$store.state.newCards.pin
      },
    },
    confirmPin: {
      get() {
        return this.$store.state.newCards.confirmPin
      },
    },

    message: {
      get() {
        return this.$store.state.newCards.message
      },
    },
    loading: {
      get() {
        return this.$store.state.newCards.loading
      },
    },
  },
  mounted() {
    this.getNewCardInfo()
  },

  methods: {
    ...mapActions({
      getNewCardInfo: 'newCards/getNewCardInfo',
      addNewCard: 'newCards/addNewCard',
      cardInformation: 'newCards/cardInformation',
    }),
    next() {
      if (!false) {
        if (!this.loading) {
          this.addNewCard()
        }
      } else {
        this.$v.$touch()
      }
    },
    previous() {
      if (!false) {
        if (!this.loading) {
          this.cardInformation()
        }
      } else {
        this.$v.$touch()
      }
    },
  },
}
</script>

<style scoped>
.blockTitle{
  font-size: 18px;

}
.itemData {
  background: #f6f6f6;
  padding: 10px;
  justify-content: space-between;
  display: flex;
  border-bottom: 1px solid #fff;
  font-weight: 500;
}
.showData {
  font-weight: 700;
  width: 75%;
}
</style>
