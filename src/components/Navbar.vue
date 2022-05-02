<template>
    <div class="bar">
        <div class="rombus" :class="{'active': menuActive}" @click="menuActive=!menuActive">
        <m-icon name="ControlCross48" class="icon-close" v-if="menuActive"/>
        <img src="@/assets/images/logo-lm.png" v-if="!menuActive">
        </div>
        <div class="fix top" :class="{'active': menuActive}"></div>
        <div class="fix bottom" :class="{'active': menuActive}"> </div>
        <transition name="accord">
            <div class="menu" v-if="menuActive">
                <div class="menu-item selected"><div class="menu-icon"/><span class="mu-ml-075">Order list</span></div>
                <div class="menu-item"><div class="menu-icon"/><span class="mu-ml-075">Order form</span></div>
            </div>
        </transition>
        <div class="titles">
            <label>My App <span>v1.0.0</span></label>
            <label>Order list</label>
        </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
let menuActive = ref(false)
</script>
<style lang="scss" scoped>
.bar{
  height: 5rem;
  width: 100%;
  vertical-align: middle;
  display: flex;
  flex-direction: row;

  .rombus{
    width: 4rem;
    height:4rem;
    margin-top: 1rem;
    margin-left: 1.5rem;
    background: white;
    transform: rotate(45deg);
    box-shadow: 0 0 2px rgba(100,100,100,.5);
    transition: all 1.6s ease-in-out;
    &.active{
      transform: rotate(765deg);
      background-color: $lighter-green;
      
    }

    img{
      transform: rotate(-45deg);
      height: 3rem;
      margin-top:.2rem;
    }
    .icon-close{
      transform: rotate(-45deg);
      margin-top:.5rem;
      margin-left:.5rem;
    }
  }
   .fix{
      position: absolute;
      width: 2rem;
      height:2rem;
      background: $dark-green;
      transform: rotate(45deg);
      z-index: -1;
      &.active{
        animation: hide-temp 1.7s ease;
      }
      &.top{
       top: -1rem;
       left: 2.5rem;
      }
      &.bottom{
        left: 2.5rem;
        top: 4.5rem;
        font-weight: bold;
      }
    }
}

.titles{
  width: calc(100% - 10rem);
  margin-left: 1rem;
  height: 6rem;
  display: flex;
  flex-direction: column;
  label{
    height: 1.9rem;
    padding-top: 1rem;
    line-height: 1.6rem;
    font-size: 1.1rem;
    margin-bottom: 0;
    span{
      font-size: .8rem;
      color:#666;
      font-weight: bold;
      font-style: italic;
    }
    &:first-of-type{
      color:$green;
      border-bottom: 3px solid #DDD;
    }
    &:last-of-type{
      padding-top: .25rem;
      font-size: 1.4rem;
      font-weight: bold;
      color:$dark-green;
    }
  }
}

@keyframes hide-temp {
 
  0% { background: transparent;}
  90% { background: transparent;}
  100% {background: $dark-green;}
}

.menu{
    position: fixed;
    top: 7rem;
    left: .5rem;
    font-size: 1.1rem;
    font-weight: lighter;
    background: rgba(235,235,235, .6);
    border-radius: 4px;
    z-index: 100;
    .menu-item{
        padding: 1rem;
        display: flex;
        flex-direction: row;
        cursor: pointer;

        &:hover{
            filter: brightness(95%);
        }

        .menu-icon{
            width: .8rem;
            height: .8rem;
            border: 2px solid $green;
            transform: rotate(45deg);
        }

        &:not(:last-child){
            border-bottom: 1px solid #CCC;
        }

        &.selected{
            color:$green;
            font-weight: normal;
            .menu-icon{
                background: $green;
            }
        }
    }
}

.accord-enter-active,
.accord-leave-active {
  transform-origin: top;
  transition: all .7s ease-out;
  transform: scaleY(1);
}

.accord-enter-from,
.accord-leave-to {
  transform-origin: top;
  transform: scaleY(0);
}
</style>
