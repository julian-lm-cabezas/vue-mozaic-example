<template>
  <div id="navbar-title"> My App </div>
  <div id="navbar" class="ml-flexy">
    <div class="nav-info">
      <img src="@/assets/images/logo-lm.png">
      <h3>Order List</h3>
    </div>
    <div class="user-info">
      <div class="user-detail">
        <label>{{user.name}}</label>
        <label>{{user.ldap}}</label>
      </div>        
      <m-icon name="AccountCustomerCollaborator32"/>
    </div>
  </div>
  <div class="ml-container ml-container--fluid">
    <filters/>
    <order-table/>
  </div>
</template>

<script setup>
import {onBeforeMount, reactive} from 'vue'
import Filters from '@/components/Filters.vue'
import OrderTable from '@/components/OrderTable.vue'
import * as AuthService from '@/services/auth'

const user = reactive({ldap:'',name:''})

onBeforeMount(async ()=>{
    let userAuth = await AuthService.getUser()
    Object.keys(user).forEach(k=> user[k]= userAuth[k])
})
</script>
<style lang="scss" scoped>
#navbar-title{
  width: 100%;
  text-align: center;
  background: #333;
  font-size: 1.1rem;
  line-height: 1.5rem;
  font-weight: bold;
  color: white;
}
#navbar{
  width: 100%;
  background: white;
  box-shadow: $box-shadow;
  height: 3rem;
  line-height: 3rem;
  justify-content: space-between;
  img{
    margin-left: .25rem;
    height: 3rem;
  }
  .nav-info {
    display: flex;
    flex-direction: row;
    h3{
      color: $green;
      margin-top: 0;
      margin-left: .5rem;

    }
  }
  .user-info{
    display: flex;
    flex-direction: row;
    vertical-align: middle;
    color: $green;
    .user-detail{
      display: flex;
      flex-direction: column;
      line-height: 1.4rem

    }
  }
}
</style>
