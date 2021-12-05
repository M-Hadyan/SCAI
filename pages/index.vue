<template>
  <div class="row">
    <Statistics />
    <Expenses />

    <Transactions />
    <Payments />
    <Bills />
  </div>
</template>

<script>
import Bills from '~/components/dashboard/Bills.vue'
import Expenses from '~/components/dashboard/Expenses.vue'
import Statistics from '~/components/dashboard/Statistics.vue'
import Transactions from '~/components/dashboard/Transactions.vue'
import Payments from '~/components/dashboard/Payments.vue'

export default {
  components: {
    Bills,
    Expenses,
    Statistics,
    Transactions,
    Payments,
  },
}
</script>
