<template>
    <div style="padding-bottom:50px">
        <div class="finish">
            <div class="create">
                <img src="" alt="">
                <p>Create channel</p>
            </div>
            <Finished text="Finished" />
        </div>
        <div class="body">
            <section class="channel">
                <header>Channel profile</header>
                <p class="channel__p">Setup your channels profile information</p>
                <div class="profile__form">
                    <section class="form__one">
                        <div>
                            <label for="Headlie">Channel name</label>
                            <input placeholder="Aketsuki" type="text">
                        </div>
                        <div id="radio">
                            <label for="Headlie">Channel type</label>
                            <input type="radio">
                            <p>Personal</p>
                            <input type="radio">
                            <p>Buisness</p>
                        </div>
                        <div>
                            <label for="Headlie">Timenzone</label>
                            <input placeholder="Aketsuki" type="text">
                        </div>
                        <div>
                            <label for="Headlie">Select country</label>
                            <input placeholder="Aketsuki" type="text">
                        </div>
                        <div>
                            <label for="Headlie">Address</label>
                            <input placeholder="Aketsuki" type="text">
                        </div>
                        <div>
                            <label for="Headlie">Working days</label>
                            <input placeholder="Aketsuki" type="text">
                        </div>
                        <div>
                            <label for="Headlie">Working time</label>
                            <input placeholder="Aketsuki" type="text">
                        </div>
                        <div>
                            <label for="Headlie">Tagline</label>
                            <input placeholder="Aketsuki" type="text">
                        </div>
                        <div>
                            <label for="Headlie">About your brand</label>
                            <textarea name="" id="" cols="30" rows="10"></textarea>
                        </div>
                        <div>
                            <label for="Headlie">Enter website link</label>
                            <input placeholder="Aketsuki" type="text">
                        </div>
                    </section>
                </div>    
            </section>
            <div class="save">
                <Finished text="Save" />
            </div>
        </div>
        <ConfirmModal />
    </div>
</template>

<script>
import Finished from '../../components/buttons/confirmation.vue'
import ConfirmModal from '../../components/modals/comfrimation_modal.vue'
export default {
    components:{ Finished, ConfirmModal }
}
</script>

<style scoped>
.finish{
    padding: 20px 300px 20px 300px;
    display: flex;
    justify-content: space-between;
    border: 1px solid #E6E7E9;
}

.create{
    display: flex;
    align-items: center;
}

.body{
    padding: 0px 300px 0px 300px;
}

.channel{
    border: 1px solid #E6E7E9;
    margin-top:30px;
    padding: 20px;
    border-radius: 5px;
}

.channel__p{
    
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    color: rgba(24, 24, 25, 0.42);
    margin-top: 10px;

}

.channel__form{
    display: flex;
    justify-content: center;
}



/* channel__form */
.profile__form{
    display: flex;
    justify-content: center;
}

.profile__form div{
    display: flex;
    align-items: center;
    /* background: green; */
    margin-bottom: 30px;
}


.profile__form label{
    margin-right: 10px;
    width: 150px;
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

#radio input{
    width: 20px;
    color: red;
    margin-right: 10px;
}

#radio p{
    margin-right: 10px;
}

.save{
    border: 1px solid #E6E7E9;
    padding: 20px;
    display: flex;
    justify-content: flex-end;
    
}


</style>