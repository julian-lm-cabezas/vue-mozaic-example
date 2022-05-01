<template>
  <div id="navbar-title"> My App <span class="mu-pl-050">v1.0.0</span> </div>
  <div id="navbar" class="ml-flexy">
    <div class="nav-info mu-ml-100">
      <img src="@/assets/images/logo-lm.png">
      <h3>Order List</h3>
    </div>
    <div class="user-info mu-mr-100">
      <div class="user-detail">
        <label>{{user.name}}</label>
        <label>{{user.ldap}}</label>
      </div>        
      <m-icon name="AccountCustomerCollaborator32"/>
    </div>
  </div>
  <div class="ml-container ml-container--fluid">
    <div class="ml-flexy ml-flexy--gutter mu-mt-200">
      <div class="ml-flexy__col ml-flexy__col--2of6">
        <filters/>
      </div>
      <div class="ml-flexy__col ml-flexy__col--2of3">
        <order-table/>
      </div>
    </div>
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

  span{
    font-size: .7rem;
    color:$lime;
  }
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
