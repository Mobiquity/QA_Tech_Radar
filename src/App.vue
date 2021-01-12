<template>
  <b-container-fluid id="app">
    <AppNavBar></AppNavBar>
      <router-view>
        <Home></Home>
      </router-view>
    <AppFooter></AppFooter>
  </b-container-fluid>
</template>

<script>
import { Vue, Component } from 'vue-property-decorator'
import Home from '@/views/Home.vue'
import AppNavBar from '@/components/AppNavBar.vue'
import AppFooter from '@/components/AppFooter.vue'

@Component({
  components: {
    Home,
    AppNavBar,
    AppFooter
  }
})
export default class App extends Vue {}

</script>
