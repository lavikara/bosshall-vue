<template>
  <div class="signUp">
    <div class="signUp__main">
      <h3>Get started Now</h3>
      <p class="para">Signup to see moments from your favorite football,movie review shows as they go live on radio</p>
      <form class="form">
        <div class="form__box">
          <input placeholder="todimoon@gmail.com" type="text">
          <img src="../../assets/Vector.png" alt="">
        </div>
        <div class="form__box">
          <input placeholder="************" type="password">
          <!-- <img src="../assets/Vector.png" alt=""> -->
        </div>
        <div class="form__select">
          <input type="checkbox">
          <p>I accept <span >terms and conditions</span></p>
        </div>
        <button class="form__button">Sign up</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>

.signUp{
  width: 100%;
  background: #ffffff;
  height: 92vh;

}



.signUp__main{
  padding-top: 100px;
  /* padding-right: 100px; */
  display: flex;
  flex-direction:column;
  align-items:center;
}

.signUp__main h3{
  text-align: center;
  color: #216583;
  font-family: 'Montserrat', sans-serif;
  font-size: 24px

;
}

.para{
  font-size: 16px;
  line-height: 24px;
  width: 50%;
  text-align: center;
  margin-top: 10px;
  font-family: 'Raleway', sans-serif;
}

.form{
  width: 60%;
  height: 300px;
  margin-top: 20px;

}

.form__box{
  max-width: 100%;
  height: 50px;
  border: 2px solid #6666663D;
  display: flex;
  align-items: center;
  position: relative;
  margin-bottom: 20px;
  padding-right: 12px;
  border-radius: 4px;
}

.form__box input{
  width: 100%;
  border: none;
  outline: none;
 
   padding: 10px;
  /* height: 100%;  */
  color: black;
  /* position: absolute; */
  padding: 12px;
 
  /* border: 2px solid #6666663D; */
}

.form__box img{
  height: 16px;
  width: 20px;
}

.form__select{
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.form__select input{
  height: 22px;
  width: 22px;
  margin-right: 10px;
  
  
}

.form__select p{
  font-size: 12px;
  
}
.form__select span{
  color: #EF5350;
}

.form__button{
  width: 100%;
  padding: 12px;
  background: #EF5350;
  font-weight: 700;
  font-size: 14px;
  color: white;
  font-weight: 700;
  border: none;
  border-radius: 4px;
  height: 54px;
  cursor: pointer;
  box-shadow: 0px 4px 4px rgba(50, 50, 71, 0.08),0px 4px 8px rgba(50, 50, 71, 0.06);
  transition: 0.5s;
}

.form__button:hover{
  opacity: .8;
}
</style>
