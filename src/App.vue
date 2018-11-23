<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import storage from './model/storage.js'
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods:{
    // getdata(){
    //     var data = storage.get('userinfo');
    //     alert(data)
    // },
  },
  mounted(){
    // this.getdata();
  }
}
</script>

<style lang="scss">
  #app{
    height: 100%;
  }
</style>
