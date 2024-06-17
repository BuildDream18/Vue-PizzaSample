<template>
    <el-row class="center">
      <el-col :span="8">
      </el-col>
      <el-col :span="8">
        <h1>Fill the form</h1>
        <el-form :model="customer" label-width="120px" @change="setCustomerFunc">
          <el-form-item label="Name">
            <el-input v-model="customer.name"></el-input>
          </el-form-item>
          <el-form-item label="Address">
            <el-input v-model="customer.address"></el-input>
          </el-form-item>
          <el-form-item label="Phone">
            <el-input v-model="customer.phone"></el-input>
          </el-form-item>
        </el-form>

        <div style="margin-top: 20px;">
            <router-link :to="{ name: 'step2' }" tag="li"><el-button style="margin-right: 2rem" type="info">Back</el-button></router-link>
            <router-link :to="{ name: 'summary' }" tag="li"><el-button type="success">Order</el-button></router-link>
        </div>
      </el-col>
      <el-col :span="8">
      </el-col>
    </el-row>
</template>

<script>
    import { mapGetters, mapMutations } from 'vuex'

    export default {
        
        data() {
            return {
                customer: {
                    name: '',
                    phone: '',
                    address: ''
                }
            }
        },
        computed: {
            ...mapGetters([
                'getMenuItems'
            ]),
        },
        methods: {
            ...mapMutations([
                'setCustomer'
            ]),
            setCustomerFunc(){
                this.setCustomer(this.customer)
            }
        }
    }
</script>

<style scoped>
    .center{
        text-align: center;
        margin-top: 10%;
    }
</style>