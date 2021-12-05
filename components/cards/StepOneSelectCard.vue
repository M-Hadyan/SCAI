<template>
  <div class="row">
    <div class="col-md-6">
      <label class="card purple">
        <input
          v-model="cardType"
          name="cardType"
          id="madaClassic"
          class="radio"
          type="radio"
          checked=""
          @keyup.enter="next()"
        />

        <span class="credit-details">
          <span class="credit-type">{{ $t('madaClassic') }}</span>
          <span class="credit-cost"
            >$0<span class="slash">/</span>
            <abbr class="credit-cycle" title="month">mo</abbr></span
          >
          <span>1 team member</span>
        </span>
      </label>
    </div>

    <div class="col-md-6">
      <label class="card green">
        <input
          name="cardType"
          id="madaDigital"
          class="radio"
          type="radio"
          @keyup.enter="next()"
        />
        <span class="credit-details" aria-hidden="true">
          <span class="credit-type">{{ $t('madaDigital') }}</span>
          <span class="credit-cost"
            >$50<span class="slash">/</span
            ><span class="credit-cycle">mo</span></span
          >
          <span>5 team members</span>
        </span>
      </label>
    </div>

    <div class="d-flex justify-content-between border-top mt-10 pt-10 w-100">
      <div class="mr-2"></div>
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
    cardType: {
      get() {
        return this.$store.state.newCards.cardType
      },
      set(value) {
        this.SET_CARD_TYPE(value)
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
      SET_CARD_TYPE: 'newCards/SET_CARD_TYPE',
    }),
    ...mapActions({
      selectedCard: 'newCards/selectedCard',
    }),
    next() {
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
  width: 180px;
  height: 250px;
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
