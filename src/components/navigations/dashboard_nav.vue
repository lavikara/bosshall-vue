<template>
    <header class="header">
        <div class="logo">
            <img src="../../assets/logo.png" alt="">
            <p>{{routeName}}</p>
        </div>
        <nav>
            <ul class="nav__ul1">
                <router-link to="/dashboard">Home</router-link>
                <router-link to="/channel">My channel</router-link>
                <li>My Broadcast</li>
                <li>Ads</li>
            </ul>
            <ul class="nav__ul2">
                <li>
                    <img class="nav__ul2__img" src="../../assets/img/Search.png" alt="">
                </li>
                <li id="userImage">
                    <img   src="../../assets/img/Avatar.png" alt="">
                </li>
                <li>
                    <img id="arrow" src="../../assets/img/arrowdown.png" alt="">
                </li>
            </ul>
        </nav>
    </header>
</template>

<script>
export default {
    data(){
        return{

        }
    },
    computed:{
        routeName(){
            return this.$route.name
        }
    }
}
</script>

<style scoped>
.header{
    height: 72px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 20px 0px 20px;
    
    
}

.logo{
    display: flex;align-items: center;
}

.logo img{
    margin-right: 20px;
    height: 36px;
    width: 36px;
}

.logo p{
    border-left: 1px solid black;
    padding-left: 20px;
    padding-right: 20px;
}

.header nav{
    display: flex;
    height: 100%;
    align-items: center;
}

.nav__ul1,.nav__ul2{
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style: none;
    
}

.nav__ul1 li,a{
    margin-right: 30px;
    font-size: 14px;
    cursor: pointer;
    text-decoration: none;
    color: black;
}

.nav__ul2 li{
    margin-right: 15px;
}

.nav__ul2__img{
    height: 20px;
    width: 20px;
   
}

#userImage{
    height: 30px; 
    width: 30px;
    border-radius: 100%;
    background: black;
    /* margin-right: 30px; */
}

#userImage img{
    height: 100%;
    width: 100%;
}

#arrow{
    height: 7px;
}
</style>