<template>
  <section class="landingLeft">
    <Nav />
    <div class="landingLeft__main">
      <h3>With Bosshall <br> Comes Greater <br> Media Experience.</h3>
      <p>Bosshalls allows radio presenters to display videos/pictures that represent the message of their entertainment, sports review shows during broadcast.</p>
    </div>
    <div class="explore">
      <p>Explore</p>
      <img src="../assets/explore_icon.png" alt="">
    </div>
  </section>
</template>

<script>

import Nav from '../components/nav.vue'

export default {
  components:{
    Nav
  }
}
</script>



<style scoped>


.landingLeft{
  /* background: red; */
  /* background: black; */

  width: 100%;
  height: 500px;

}

.landingLeft__main{
  padding-left: 100px;
  padding-top: 100px;
}

.landingLeft__main h3{
  font-size: 60px;
  margin-bottom: 30px;
  color: white;
  line-height: 73.14px;
  font-family: 'Montserrat', sans-serif;
}

.landingLeft__main p{
  color: white;
  font-size: 24px;
  line-height: 38px;
  width: 60%;
  font-weight: 400;
  font-family: 'Raleway', sans-serif;
}

.explore{
  padding-left:100px;
  display: flex;
  align-items: center;
  margin-top: 50px;
}

.explore p{
  color: #EF5350;
  margin-right: 10px;
  font-size: 16px;
  
}

.explore img{
  height: 20px;
  width: 20px;
}
</style>