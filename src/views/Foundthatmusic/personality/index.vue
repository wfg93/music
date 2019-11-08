<template>
<div>
  <shuffling></shuffling>
  <Recommendtheplaylist></Recommendtheplaylist>
  <thehost></thehost>
  <exclusive></exclusive>
  <recommendedmv></recommendedmv>
  <looklive></looklive>
</div>
</template>

<script>
  import shuffling from './shuffling'
  import thehost from './thehost'
  import exclusive from './exclusive'
  import recommendedmv from './recommendedmv'
  import  Recommendtheplaylist from './Recommendtheplaylist'
  import looklive from './looklive'

  export default {
        name: "personality",
      components:{
        shuffling,
        thehost,
        exclusive,
        recommendedmv,
        Recommendtheplaylist,
        looklive

      }
    }
</script>

<style scoped>

</style>
