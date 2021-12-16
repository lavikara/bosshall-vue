<template>
  <div class="confirmEmail">
    <div class="confirmEmail__left">
      
    </div>
    <div class="confirmEmail__right">
      <h3>Thanks for registring with us.</h3>
      <p>To confirm your email address, tap the button in the email we sent to abc@xyz.com</p>
      <img src="../../assets/img/nomessage.png" alt="">
      <button>Welcome to Bosshalls</button>
      <p></p>
    </div>
  </div>
</template>

<script>



export default {
  name : "ConfirmEmail",
  components : {

  }
}
</script>

<style>

.confirmEmail{

  height:100vh;
  display: flex;
}

.confirmEmail__left{
  width: 50%;
  height: 100%;
  background-image: url(../../assets/image.jpg);
  background-position: center;
  background-size: 100% 100%;
}

.confirmEmail__right{
  height: 100%;
  width:50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
 
}

.confirmEmail__right p{
  width: 50%;
  text-align: center;
  margin-top: 30px;
  line-height: 24px;
  font-size: 16px;
  font-weight: 400;
  font-family: 'Raleway', sans-serif;
}

.confirmEmail__right h3{
  font-family: 'Montserrat', sans-serif;
  font-size: 24px;
  color: #216583;
}

.confirmEmail__right button {
  width :352px;
  height:54px;
  background: #ef5350;
  border: none;
  color:white;
  border-radius: 4px;
  cursor: pointer;
  transition: 0.5s;
}

.confirmEmail__right button:hover{
  opacity: .8;
}
</style>