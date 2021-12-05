<template>
  <div class="row">
    <div class="col-md-12">
      <div class="form-group">
        <label>{{ $t('nameOnCard') }}</label>
        <input
          v-model="fullName"
          type="text"
          name="fname"
          value=""
          class="form-control form-control-solid form-control-lg"
          
          @keyup.enter="next()"
        />
      </div>
    </div>

    <div class="col-xl-6">
      <!--begin::Input-->
      <div class="form-group fv-plugins-icon-container">
        <label>{{ $t('password') }}</label>
        <input
          v-model="pin"
          type="password"
          class="form-control form-control-solid form-control-lg"
          name="pin"
          placeholder="4 Digits"
          @keyup.enter="next()"
        />
        <span class="form-text text-muted"
          >Please enter your pin number.</span
        >
        <div class="fv-plugins-message-container"></div>
      </div>
      <!--end::Input-->
    </div>
    <div class="col-xl-6">
      <!--begin::Input-->
      <div class="form-group fv-plugins-icon-container">
        <label>{{ $t('confirmPassword ') }}</label>
        <input
          v-model="confirmPin"
          type="password"
          class="form-control form-control-solid form-control-lg"
          name="confirmPin"
          placeholder="pin code"
          @keyup.enter="next()"
        />
        <span class="form-text text-muted"
          >Please enter your confirmation pin.</span
        >
        <div class="fv-plugins-message-container"></div>
      </div>
      <!--end::Input-->
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
    fullName: {
      get() {
        return this.$store.state.newCards.fullName
      },
      set(value) {
        this.SET_FULLNAME(value)
      },
    },
    pin: {
      get() {
        return this.$store.state.newCards.pin
      },
      set(value) {
        this.SET_PIN(value)
      },
    },
    confirmPin: {
      get() {
        return this.$store.state.newCards.confirmPin
      },
      set(value) {
        this.SET_CONFIRM_PIN(value)
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

  methods: {
    ...mapMutations({
      SET_FULLNAME: 'newCards/SET_FULLNAME',
      SET_PIN: 'newCards/SET_PIN',
      SET_CONFIRM_PIN: 'newCards/SET_CONFIRM_PIN',
    }),
    ...mapActions({
      cardInformation: 'newCards/cardInformation',
      firstStep: 'newCards/firstStep',
    }),
    next() {
      if (true) {
        if (!this.loading) {
          this.cardInformation()
        }
      } else {
        this.$v.$touch()
      }
    },
     previous() {
      if (!false) {
        if (!this.loading) {
          this.firstStep()
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
