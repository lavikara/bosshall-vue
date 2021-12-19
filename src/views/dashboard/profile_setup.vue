<template>
    <form style="padding-bottom:50px">
        <div class="finish">
            <Finished :text="Finished" />
        </div>
        <div class="body">
            <section class="banner">
                <div class="banner__user">
                    <div><img src="../../assets/img/Avatar.png" alt=""></div>
                    <button>Upload</button>
                </div>
            </section>
            <section class="profile">
                <header>Profile Info</header>
                <div class="profile__form">
                    <section class="form__one">
                        <div>
                            <label for="Headlie">Headline</label>
                            <input placeholder="Aketsuki" type="text">
                        </div>
                        <div>
                            <label for="Headlie">Bio</label>
                            <textarea name=""></textarea>
                        </div>
                        <div>
                            <label for="Headlie">Fullname</label>
                            <input placeholder="Aketsuki" type="text">
                        </div>
                        <div>
                            <label for="Headlie">Email</label>
                            <input placeholder="Aketsuki" type="text">
                        </div>
                        <div>
                            <label for="Headlie">Country</label>
                            <input placeholder="Aketsuki" type="text">
                        </div>
                        <div>
                            <label for="Headlie">State</label>
                            <input placeholder="Aketsuki" type="text">
                        </div>
                        <div>
                            <label for="Headlie">Address</label>
                            <input placeholder="Aketsuki" type="text">
                        </div>
                    </section>
                </div>
                
            </section>
            
            <section class="interests">
                <header>Interests</header>
                <div class="interests__form">
                    <!-- <div>
                        <div>
                            <label for="">Fantasy premier league managers</label>
                            <input type="checkbox" name="" id="">
                        </div>
                        <div>
                            <label for="">Sports preview and review</label>
                        </div>
                    </div> -->
                </div>
            </section>
        </div>
    </form>
</template>

<script>
import Finished from '../../components/buttons/confirmation.vue'
export default {
    components:{
        Finished
    }
}
</script>

<style scoped>
.finish{
    padding: 20px 300px 20px 300px;
    border: 1px solid #E6E7E9;
    display: flex;
    align-items: center;
    justify-content: flex-end;
}

.finish button{
    float: right;
    background:#EF5350;
    border: none;
    color: white;
    font-weight: 600;
    width: 78px;
    border-radius: 3px;
    height: 32px;
}

.body{
    padding: 0px 300px 0px 300px;
   
}

.banner{
    height: 240px;
    width: 100%;
    background-image: url(../../assets/img/Rectangle.png);
    background-repeat: no-repeat;
    background-size: cover;
    margin-top: 50px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    padding: 20px;
}

.banner__user{
    display: flex;
    flex-direction: column;
    align-items: center;
}

.banner__user div{
    height: 100px;
    width:100px;
    /* background: black; */
    border-radius: 100%;
}

.banner__user button{
    width: 70px;
    height: 40px;
    margin-top: 10px;
    border-radius: 3px;
    border: none;
    color: #EF5350;
}



.profile{
    border: 1px solid #E6E7E9;
    margin-top:30px;
    padding: 20px;
    border-radius: 5px;
}
.profile__form{
    display: flex;
    justify-content: center;
}

.profile__form div{
    display: flex;
    align-items: center;
    /* background: green; */
    margin-bottom: 20px;
}


.profile__form label{
    margin-right: 10px;
    width: 100px;
    display: flex;
    justify-content: flex-end;
}

.profile__form  input{
   width : 400px;
   height: 40px;
   padding-left: 10px;
   border: 1px solid #bec1c7;
   border-radius: 3px;

}

.profile__form textarea{
    width: 400px;
    height: 100px;
    border: 1px solid #bec1c7;
    border-radius: 3px;
  
}

.interests{
    border: 1px solid #E6E7E9;
    margin-top:30px;
    padding: 20px;
    border-radius: 5px;
}

.interests__form{
    display: flex;
    justify-content: center;
}
</style>