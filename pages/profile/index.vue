<template>
  <div class="row">
    <ProfileTabs />
    <PersonalInfo />
  </div>
</template>

<script>
import ProfileTabs from '~/components/profile/ProfileTabs.vue'
import PersonalInfo from '~/components/profile/PersonalInfo.vue'

export default {
  components: { ProfileTabs, PersonalInfo },
}
</script>
