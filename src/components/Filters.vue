<template>
    <div class="box filters mu-p-100">
        <m-heading :size="'s'" :underline="true" :lineHeightXS="true">
            <m-icon name="DisplayFilter24"/>Filtros
        </m-heading>
        <m-field  id="orderNumber" label="Nº pedido">
            <m-text-input id="orderNumberInput" v-model="filters.orderNumber" :size="'s'"/>
        </m-field>
        <m-field  id="storeNumber" label="Tienda" class="mu-mt-100">
            <m-select id="storeNumberSelect" v-model="filters.storeNumber" :options="stores" :size="'s'"/>
        </m-field>
    </div>
</template>
<script setup>
import {defineProps, ref} from 'vue'

let filters = defineProps(['filters'])

let stores = ref([
    {text: 'Madrid Barajas', value:1},
    {text: 'Madrid Sanse', value:2}
])

</script>
<style lang="scss" scoped>
.filters{
    display: flex;
    flex-direction: column;
}
</style>
