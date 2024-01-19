<template>
    <div class="m1">
   <div class="main">
    <div class="prop"><div class="img1">
    <img :src="flagdata[props.country]" alt="Flag" />
</div>
        
   <h1> name:{{ props.name }} </h1> <h1>phonenumber:{{ props.phonenumber }}</h1></div>

</div>
</div>
</template>
<script setup>
// import {ref} from 'vue'
const props = defineProps({
    name:String,
    phonenumber:String,
    country:String

})
let flagdata = {
    INDIA : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBDRlSi1vKe9b6bN3Bbdic6JWxtOWVETkqtg&usqp=CAU",
    EGYPT:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_Egypt.svg/1024px-Flag_of_Egypt.svg.png",
    PAKISTAN:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Flag_of_Pakistan.svg/320px-Flag_of_Pakistan.svg.png",
    USA:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_HIqOHKP-uKR7zj8hXM_9pJjrvY3NAapkNll3N4E2h5nz63USC5Aanvq8MPSzxsYYVSQ&usqp=CAU"
}


</script>
<style>
.prop {
    border:solid 2px rgb(93, 60, 10);
    width:300px;
    height: 300px;
}
.img1 img{
    width:100px;
    height:100px;

}
.main{
    display:flex;
    justify-content: grid-row-end;
}
.m1{
    display: flex;
}</style>
