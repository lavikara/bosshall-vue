<template>
    <nav class="nav">
        <div class="logoLinks">
            <div class="logo">
              <img src="../../assets/logo.png" alt="">
            </div>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>FAQ</li>
            </ul>
        </div>
    </nav>
</template>

<script scoped>
export default {

}
</script>

<style scoped>
.nav{
    height: 80px;
    width: 100%;
    padding: 0px 100px 0px 100px;
    display: flex;
    justify-content: space-between;
    
}

.logoLinks{
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: space-between;
    width: 35%;
}

.logoLinks ul{
    display: flex;
    justify-content: space-between;
    list-style: none;
    width: 70%;
}

.logoLinks ul li{
    color: white;
    font-size: 14px;
    cursor: pointer;
}

.logoLinks ul li:hover{
    color: #EF5350;

}

.logo img{
    height: 36px;
    width: 36px;
}

.nav__reg{
    color: white;
    height: 100%;
    display: flex;
    align-items: center;
    list-style: none;
    width: 15%;
    justify-content: space-between;
}

.nav__reg  li{
    font-size: 14px;
}
</style>