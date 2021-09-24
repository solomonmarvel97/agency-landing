<template>
  <main>
    <hero/>
    <awards/>
    <case_study/>
    <services/>
    <technologies/>
    <process/>
    <top_clients/>
    <pricing_plan/>
    <insights/>
    <testimonials/>
    <contact/>
  </main>
</template>

<script>
import header from './__header.vue'
import awards from './__awards.vue'
import case_study from './__case_study.vue'
import services from './__services.vue'
import technologies from './__technologies.vue'
import process from './__process.vue'
import top_clients from './__top_clients.vue'
import pricing_plan from './__pricing_plan.vue'
import insights from './__insights.vue'
import testimonials from './__testimonials.vue'
import contact from './__contact.vue'

export default {
  components: {
    'hero': header,
    awards,
    case_study,
    services,
    technologies,
    process,
    top_clients,
    pricing_plan,
    insights,
    testimonials,
    contact
  }
}
</script>
