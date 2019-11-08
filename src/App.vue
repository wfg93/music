<template>
  <div id="app">
    <navigation></navigation>
    <Thesidebar></Thesidebar>
    <!--<Ontheright></Ontheright>-->
    <div class="sidebar"><router-view/></div>
    <bottomof class="bottomof"></bottomof>
  </div>
</template>

<script>
  import navigation from './components/navigation'
  import Thesidebar from  './components/Thesidebar'
  import bottomof from  './components/bottomof'


  export default {
  name: 'App',
    components:{
      navigation,
      Thesidebar,
      bottomof
    },
}
</script>

<style>
  * {
    margin: 0;
    padding: 0;
  }
  ul {
    list-style: none;
  }
.sidebar{
  width: 89%;
  height: 44px;
  margin: 60px 0px 0px 202px;
}
  .bottomof{
    position: fixed;
    bottom: 0px;
    left: 0px;
  }

</style>
