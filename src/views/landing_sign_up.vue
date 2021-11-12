<template>
  <div>
      <div class="wrap">
          <div class="wrap__left">
              <LandingLeft />
          </div>
          <div class="wrap__right">
              <SignUpForm />
          </div>
      </div>
  </div>
</template>

<script>
import Nav from '../components/nav.vue'
import LandingLeft from '../components/landing_left.vue'
import SignUpForm from '../components/sign_up_comp.vue'



export default {
    components:{
        Nav,
        LandingLeft,
        SignUpForm
    },
    data(){
        return{}
           
    }
}
</script>

<style scoped >

.wrap{
    display: flex;
    height: 100vh;
    width: 100%;
    /* background: url(../assets/image.jpg); */
    background: linear-gradient( rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6) ), url(../assets/image.jpg);
    background-position: center;
    background-size: cover;
    /* filter: brightness(0.9); */
   
    /* background-repeat: no-repeat; */
}

.wrap__left{
    width: 60%;

}

.wrap__right{
    width: 40%;
}


</style>