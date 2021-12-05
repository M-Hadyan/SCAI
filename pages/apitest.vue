<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-8">

            <!-- <form @submit="sendData">
              <strong>fullname:</strong>
              <input type="text" class="form-control" v-model="fullname" />
              <!-- <input type="text" class="form-control" v-model="id" /> --
              <button class="btn btn-success mt-5">Submit</button>
            </form> -->

            <!-- <h3>Disolay data from API:</h3>
             <select v-model="cardAmount" class="form-control" @keyup.enter="next()">
              <option value="">{{ $t('choose') }}</option>
              <option v-for="card in cardsList" :key="card.id" :value="card.id">
                {{ card.cardAmount }}
              </option>
            </select> -->
          <div class="card" data-v-6b51f97a="">
            <figure class="card__figure" data-v-6b51f97a="">
              <img src="~assets/images/white-logo.png" class="card__figure--logo" data-v-6b51f97a="">
            </figure>
            <div class="card__reader" data-v-6b51f97a="">
              <div class="card__reader--risk card__reader--risk-one" data-v-6b51f97a=""></div> 
              <div class="card__reader--risk card__reader--risk-two" data-v-6b51f97a=""></div> 
              <div class="card__reader--risk card__reader--risk-three" data-v-6b51f97a=""></div> 
              <div class="card__reader--risk card__reader--risk-four" data-v-6b51f97a=""></div>
            </div> 
            <p class="card__number" data-v-6b51f97a="">5032 9334 3764 XXXX</p> 
            <div class="card__dates" data-v-6b51f97a="">
              <span class="card__dates--first" data-v-6b51f97a="">08/20</span> 
              <span class="card__dates--second" data-v-6b51f97a="">09/24</span>
            </div> 
            <p class="card__name" data-v-6b51f97a="">MOHAMMED BINHADYAN</p>
            <p data-v-6b51f97a=""></p>
            <div class="card__flag" data-v-6b51f97a="">
              <div class="card__flag--globe" data-v-6b51f97a=""></div> 
              <div class="card__flag--red" data-v-6b51f97a=""></div> 
              <div class="card__flag--yellow" data-v-6b51f97a=""></div>
            </div>
          </div>

      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapActions } from 'vuex'
export default {
  computed: {
    cardAmount: {
      get() {
        return this.$store.state.userCardsInformation.cardAmount
      },
      set(value) {
        this.SET_CARD_AMOUNT(value)
      },
    },

    cardsList: {
      get() {
        return this.$store.state.userCardsInformation.cardsList
      },
    },
  },
  mounted() {
    this.getUserCardsInformation()
  },
  methods: {
    ...mapMutations({
      SET_CARD_AMOUNT: 'userCardsInformation/SET_CARD_AMOUNT',

    }),
    ...mapActions({
      getUserCardsInformation: 'userCardsInformation/getUserCardsInformation',
    }),
  },
}

// export default {
//   data() {
//     return {
//       fullname: null,
//       id: null,
//     }
//   },

//   methods: {
//     //Would like to use the button to do this:
//     async sendData() {
//       this.$axios
//         .$post('https://6105934e4b92a000171c5f74.mockapi.io/api/v2/Orders', {
//           fullname: this.fullname,
//           id: this.id
//         })
//         .then(function (response) {
//           console.log(response)
//         })
//         .catch(function (error) {
//           console.log(error)
//         })
//     },
//   },
// }
</script>

<style scoped>


.card {
  height: 222px;
  width: 350px;
  background: #4f008c;
  border-radius: 10px;
  margin: 10px auto;
  position: relative;
  /* filter: drop-shadow(3px 3px 3px rgba(0, 0, 0, 0.6)); */
  transform: translateY(calc(50% - 10px));
}

.card__figure {
  position: relative;
  height: 40px;
  margin: 0;
}

.card__figure::after {
  content: "PLATINUM";
  font-size: 1em;
  letter-spacing: 4px;
  color: var(--white);
  position: absolute;
  width: 100%;
  text-align: center;
  bottom: calc(-100% - 15px);
}

.card__figure--logo {
  --widthLogo: 130px;
  width: var(--widthLogo);
  position: absolute;
  right: 50%;
  transform: translate(calc(var(--widthLogo) / 2), 20px);
}

.card__reader {
  width: 50px;
  height: 40px;
  background: radial-gradient(#d9a56c, #b18457);
  border-radius: 5px;
  position: absolute;
  top: 50%;
  transform: translate(33px, -40px);
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

.card__reader--risk-one {
  transform: translate(37px, 15px);
}

.card__reader--risk-two {
  transform: translate(15px, 30px);
}

.card__reader--risk-three {
  transform: translate(-37px, -15px);
}

.card__reader--risk-four {
  transform: translate(-15px, -30px);
}

.card__number {
  font-family: var(--font);
  font-size: 1.15em;
  font-weight: normal;
  color: var(--white);
  letter-spacing: 2.5px;
  text-align: center;
  margin-left: -20px;
  margin-top: 80px;
  z-index: 1;
  position: relative;
  filter: drop-shadow(1px 1px 1px rgba(0, 0, 0, 0.3));
}

.card__number::before,
.card__number::after {
  font-family: Arial;
  color: rgba(0, 0, 0, 0.4);
  font-size: 0.4em;
  position: absolute;
  letter-spacing: 0px;
}

.card__number::before {
  content: "5032";
  transform: translate(15px, 22px);
}

.card__number::after {
  content: "Valid thru";
  width: 80px;
  transform: translate(-215px, 22px);
}

.card__dates {
  position: absolute;
  width: 40%;
  font-size: .9em;
  display: flex;
  justify-content: space-between;
  color: var(--white);
  font-family: var(--font);
  bottom: 22%;
  transform: translate(60px, 0px);
}

.card__dates span {
  filter: drop-shadow(1px 1px 1px rgba(0, 0, 0, 0.3));
}

.card__name {
  font-family: var(--font);
  font-size: .9em;
  font-weight: normal;
  color: var(--white);
  letter-spacing: 2.5px;
  transform: translate(35px, 25px);
  position: relative;
  filter: drop-shadow(1px 1px 1px rgba(0, 0, 0, 0.3));
}

.card__flag {
  right: 30px;
  top: 45%;
  border-radius: 25px;
  transform: translate(0, -28px);
  position: absolute;
  height: 110px;
  width: 80px;
  border: 1px solid rgba(0, 0, 0, 0.3);
}

.card__flag--globe {
  --margin: 5px;
  width: calc(100% - (var(--margin) * 2));
  background-color: #b7b2b8;
  height: 50%;
  border-radius: 20px;
  margin: var(--margin);
  background: repeating-linear-gradient(
    0deg,
    #dbd1dc,
    #dbd1dc 5px,
    #b2aab5 7px,
    #b2aab5 5px
  );
}

.card__flag--globe::after,
.card__flag--globe::before {
  content: "\f0ac";
  font-family: FontAwesome;
  color: rgba(0, 0, 0, 0.2);
  font-size: 3em;
  top: 6px;
  left: 2px;
  position: absolute;
}

.card__flag--globe::after {
  transform: translateX(10px);
}

.card__flag--globe::before {
  transform: translateX(25px);
}

.card__flag--red {
  position: absolute;
  left: 5px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #ce0e1d;
}

.card__flag--yellow {
  position: absolute;
  right: 5px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #e39833;
}

.card__flag--yellow::after {
  content: "MasterCard";
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
  color: #FFF;
}

.assign a::hover {
  color: var(--purple);
}

</style>
