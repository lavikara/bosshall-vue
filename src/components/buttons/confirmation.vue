<template>
  <button class="button">{{text}}</button>
</template>

<script>
export default {
  props:{
    text:{
      type : String,
      required : true
    }
  },
  data(){
    return{

    }
  }
}
</script>

<style soped>
.button{
    background:#EF5350;
    border: none;
    color: white;
    font-weight: 600;
    width: 78px;
    border-radius: 3px;
    height: 32px;
}
</style>