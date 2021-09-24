<template>
  <main>
    <Navigation />
    <router-view />
    <Footer />
  </main>
</template>

<script>
import Navigation from "@/components/Navigation.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: {
    Navigation,
    Footer,
  },
};
</script>
