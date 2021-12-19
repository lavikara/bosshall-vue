<template>
    <div>
        <div class="confirmation">
            <header>
                <img src="../../assets/img/Vector.png" alt="">
                <p>Confimation</p>
            </header>
            <div class="message">
                <p>This channel will be publicly available to users on bosshalls. Do you really want to continue?</p>
            </div>
            <div class="buttons">
                <Button text="Continue" />
            </div>
        </div>
    </div>
</template>

<script>

import Button from '../buttons/confirmation.vue'

export default {
    components:{ Button }
}
</script>

<style scoped>
.confirmation{
    height: 224px;
    width: 480px;
    background: #FFFFFF;
    border: 1px solid #E6E7E9;
    position: absolute;
    top: 50%;left: 50%;
    transform: translate(-50%,-50%);
    border-radius: 5px;
    
}

.confirmation header{
    height: 73px;
    border-bottom: 1px solid #E6E7E9;;
    display: flex;
    align-items: center;
    padding-left: 20px;

}

.confirmation header img{
    margin-right: 10px;
}

.confirmation header p{
    
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: 22px;
    letter-spacing: 0px;
    text-align: left;
    font-family: 'Montserrat', sans-serif;

}

.message{
    height: 78px;
    padding-left: 20px;
    padding-right: 20px;
    display: flex;
    align-items: center;
    line-height: 30px;
    border-bottom: 1px solid #E6E7E9;;
}

.message p{
    font-size: 14px;
    /* font-family: 'Montserrat', sans-serif; */
}

.buttons{
    height: 73px;
    display: flex;
    align-items: center;
}

.buttons{
    display: flex;
    justify-content: flex-end;
    padding-left: 20px;
    padding-right: 20px;
}

</style>