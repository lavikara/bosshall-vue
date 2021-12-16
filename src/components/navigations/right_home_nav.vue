<template>
    <nav class="nav">
      <ul>
        <router-link to="/signin">
            <li>SIGN IN</li>
        </router-link>
        <router-link to="/">
            <button>SIGN UP</button>
        </router-link>
        
      </ul>
    </nav>
</template>

<script>



export default {
  name: 'Right-home-navigation',
  components: {

  }
}
</script>

<style scoped>

.nav{
  padding-right: 100px;
  justify-content: flex-end;
  display: flex;
  align-items: center;
  height: 8vh;
    background: #FFFFFF;
}

.nav ul{
  list-style: none;  
  width: 40%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.nav ul li{
  color: #EF5350;
  font-size: 14px;


  cursor: pointer;
}


.nav ul button{
  width: 93px;
  height: 36px;
  border: 1px solid #EF5350;
  font-size: 14px;
  background: none;
  color: #EF5350;
  font-size: 14px;
  cursor : pointer
}

a{
    text-decoration :none
}
</style>
