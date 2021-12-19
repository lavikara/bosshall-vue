<template>
    <div class="dashboard">
        <img src="../../assets/img/channel.png" alt="">
        <h3>Create your channel</h3>
        <p>Sharing content and reaching a wider range of <br > audience is just a click away</p>
        <button>Create channel</button>
    </div>
</template>

<script>
export default {

}
</script>

<style>
.dashboard{
    height: 90vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;   
}

.dashboard h3{
    margin-top: 20px;
    margin-bottom: 20px;
    font-size: 24px;
    font-family: 'Montserrat', sans-serif;
}

.dashboard p {
    text-align: center;
    font-weight: 400;
    line-height: 20px;
}

.dashboard button{
    width: 148px;
    height: 47px;
    border-radius: 3px;
    border:none;
    background: #EF5350;
    color: white;
    font-weight: 600;
    margin-top: 30px;
    cursor: pointer;
    transition: 0.5s;
}

.dashboard button:hover{
  opacity: .8;
}
</style>