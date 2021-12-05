<template>
  <div class="row">
    <div class="col-md-12">
      <h4 class="mb-10 font-weight-bold text-dark">
        {{ $t('setupYourCurrentLocation') }}
      </h4>

      <div class="row">
        <div class="col-xl-6">
          <!--begin::Input-->
          <div class="form-group fv-plugins-icon-container">
            <label>{{ $t('addressLine1') }}</label>
            <input
            v-model="addressOne"
            @keyup.enter="next()"
              type="text"
              class="form-control form-control-solid form-control-lg"
              name="address1"
              placeholder="Address Line 1"
              value="Address Line 1"
            />
            <span class="form-text text-muted">Please enter your Address.</span>
            <div class="fv-plugins-message-container"></div>
          </div>
          <!--end::Input-->
        </div>
        <div class="col-xl-6">
          <!--begin::Input-->
          <div class="form-group">
            <label>{{ $t('addressLine2') }}</label>
            <input
            v-model="addressTwo"
            @keyup.enter="next()"

              type="text"
              class="form-control form-control-solid form-control-lg"
              name="address2"
              placeholder="Address Line 2"
              value="Address Line 2"
            />
            <span class="form-text text-muted">Please enter your Address.</span>
          </div>
          <!--end::Input-->
        </div>
      </div>

      <div class="row">
        <div class="col-xl-6">
          <!--begin::Input-->
          <div class="form-group fv-plugins-icon-container">
            <label>{{ $t('postcode') }}</label>
            <input
            v-model="postalCode"
            @keyup.enter="next()"
              type="text"
              class="form-control form-control-solid form-control-lg"
              name="postcode"
              placeholder="Postcode"
              value="3000"
            />
            <span class="form-text text-muted"
              >Please enter your Postcode.</span
            >
            <div class="fv-plugins-message-container"></div>
          </div>
          <!--end::Input-->
        </div>
        <div class="col-xl-6">
          <!--begin::Input-->
          <div class="form-group fv-plugins-icon-container">
            <label>{{ $t('city') }}</label>
            <input
            v-model="city"
            @keyup.enter="next()"
              type="text"
              class="form-control form-control-solid form-control-lg"
              name="city"
              placeholder="City"
              value="Riyadh"
            />
            <span class="form-text text-muted">Please enter your City.</span>
            <div class="fv-plugins-message-container"></div>
          </div>
          <!--end::Input-->
        </div>
      </div>
      <div class="row">
        <div class="col-xl-6">
          <!--begin::Input-->
          <div class="form-group fv-plugins-icon-container">
            <label>{{ $t('state') }}</label>
            <input
            v-model="state"
            @keyup.enter="next()"
              type="text"
              class="form-control form-control-solid form-control-lg"
              name="state"
              placeholder="State"
              value="Riyadh"
            />
            <span class="form-text text-muted">Please enter your State.</span>
            <div class="fv-plugins-message-container"></div>
          </div>
          <!--end::Input-->
        </div>
        <div class="col-xl-6">
          <!--begin::Select-->
          <div class="form-group fv-plugins-icon-container">

            <label for="country" class="form-label">{{ $t('country') }}</label>
            <select v-model="country" class="form-control form-control-solid form-control-lg" @keyup.enter="next()">
              <option value="">{{ $t('Saudi Arabia') }}</option>
              <option v-for="country in countries" :key="country.id" :value="country.name">
                {{ country.name }}
              </option>
            </select>
          </div>
        </div> 
      </div>
    </div>
    <div class="d-flex justify-content-between border-top mt-10 pt-10 w-100">
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
        <button
          data-wizard-type="action-next"
          class="btn btn-primary font-weight-bold text-uppercase px-9 py-4"
          @click="next()"
        >
          {{ $t('nextStep') }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapActions } from 'vuex'
export default {
  computed: {
     countries: {
      get() {
        return this.$store.state.newCards.countries
      },
    },
    addressOne: {
      get() {
        return this.$store.state.newCards.addressOne
      },
      set(value) {
        this.SET_ADDRESS_ONE(value)
      },
    },
    addressTwo: {
      get() {
        return this.$store.state.newCards.addressTwo
      },
      set(value) {
        this.SET_ADDRESS_TWO(value)
      },
    },
    postalCode: {
      get() {
        return this.$store.state.newCards.postalCode
      },
      set(value) {
        this.SET_POSTAL_CODE(value)
      },
    },
    city: {
      get() {
        return this.$store.state.newCards.city
      },
      set(value) {
        this.SET_CITY(value)
      },
    },
    state: {
      get() {
        return this.$store.state.newCards.state
      },
      set(value) {
        this.SET_STATE(value)
      },
    },
    country: {
      get() {
        return this.$store.state.newCards.country
      },
      set(value) {
        this.SET_COUNTRY(value)
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
    this.getAllCountries()
  },

  methods: {
    ...mapMutations({
      SET_ADDRESS_ONE: 'newCards/SET_ADDRESS_ONE',
      SET_ADDRESS_TWO: 'newCards/SET_ADDRESS_TWO',
      SET_POSTAL_CODE: 'newCards/SET_POSTAL_CODE',
      SET_CITY: 'newCards/SET_CITY',
      SET_STATE: 'newCards/SET_STATE',
      SET_COUNTRY: 'newCards/SET_COUNTRY',
    }),
    ...mapActions({
      getAllCountries: 'newCards/getAllCountries',
      billInformation: 'newCards/billInformation',
      selectedCard: 'newCards/selectedCard',
    }),
    next() {
      if (!false) {
        if (!this.loading) {
          this.billInformation()
        }
      } else {
        this.$v.$touch()
      }
    },
     previous() {
      if (!false) {
        if (!this.loading) {
          this.selectedCard()
        }
      } else {
        this.$v.$touch()
      }
    },
  },
}
</script>

<style scoped>
.card {
  border-radius: var(--card-radius);
  position: relative;
  padding: 1.25rem;
  box-shadow: 0px 0px 30px 0px rgb(82 63 105 / 5%);
  border: 0;
  border-radius: 0.42rem;
  color: #fff;
}
/* .card:hover {
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.15);
} */

.radio {
  font-size: inherit;
  margin: 0;
  position: absolute;
  right: calc(var(--card-padding) + var(--radio-border-width));
  top: calc(var(--card-padding) + var(--radio-border-width));
}

.credit-details {
  border: var(--radio-border-width) solid var(--color-gray);
  border-radius: var(--card-radius);
  cursor: pointer;
  display: flex;
  flex-direction: column;
  padding: var(--card-padding);
  transition: border-color 0.2s ease-out;
}

.card:hover .credit-details {
  border-color: var(--color-dark-gray);
}

.radio:checked ~ .credit-details {
  border-color: var(--color-green);
}

.radio:focus ~ .credit-details {
  box-shadow: 0 0 0 2px var(--color-dark-gray);
}

.radio:disabled ~ .credit-details {
  color: var(--color-dark-gray);
  cursor: default;
}

.radio:disabled ~ .credit-details .credit-type {
  color: var(--color-dark-gray);
}

.card:hover .radio:disabled ~ .credit-details {
  border-color: var(--color-gray);
  box-shadow: none;
}

.card:hover .radio:disabled {
  border-color: var(--color-gray);
}

.credit-type {
  color: var(--color-green);
  font-size: 1.5rem;
  font-weight: bold;
  line-height: 1em;
}

.credit-cost {
  font-size: 2.5rem;
  font-weight: bold;
  padding: 0.5rem 0;
}

.slash {
  font-weight: normal;
}

.credit-cycle {
  font-size: 2rem;
  font-variant: none;
  border-bottom: none;
  cursor: inherit;
  text-decoration: none;
}
.hidden-visually {
  border: 0;
  clip: rect(0, 0, 0, 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
}

.green {
  background: #00c48c;
}
.purple {
  background: #4f008c;
}
input[type='radio'],
input[type='checkbox'] {
  right: 10px;
}
</style>
