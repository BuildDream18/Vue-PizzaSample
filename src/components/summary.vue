<template>
    <el-row class="center">
        <el-col :span="8">
        </el-col>
        <el-col :span="8">
            <el-form ref="form" :model="form" label-width="120px">
            <el-form-item label="Size">
                <el-label class="summary-content">{{getSizeItems[getSize].text}} - {{getSizeItems[getSize].price}}$</el-label>
            </el-form-item>
            <el-form-item label="Toppings">
                <el-label v-for="topping, i in getToppings" :key="i" class="summary-content">{{getToppingItems[topping].text}} - {{getToppingItems[topping].price}}$<br></el-label>
            </el-form-item>
            <el-form-item label="Name">
                <el-label class="summary-content">{{getCustomer.name}}</el-label>
            </el-form-item>
            <el-form-item label="Address">
                <el-label class="summary-content">{{getCustomer.address}}</el-label>
            </el-form-item>
            <el-form-item label="Phone">
                <el-label class="summary-content">{{getCustomer.phone}}</el-label>
            </el-form-item>

            <el-divider><i class="el-icon-star-on"></i></el-divider>

            <el-form-item label="Price">
                <el-label class="summary-content">{{totalPrice}}$</el-label>
            </el-form-item>
            <el-form-item label="VAT">
                <el-label class="summary-content">15 %</el-label>
            </el-form-item>
            <el-form-item label="Total">
                <el-label class="summary-content">{{(totalPrice*1.15).toFixed(2)}}$</el-label>
            </el-form-item>

            <el-divider><i class="el-icon-star-on"></i></el-divider>
            </el-form>

            <div style="margin-top: 20px;">
                <router-link :to="{ name: 'step1' }" tag="li"><el-button type="danger">Reorder</el-button></router-link>
            </div>
        </el-col>
        <el-col :span="8">
        </el-col>
    </el-row>
</template>

<script>
    import { mapGetters } from 'vuex'

    export default {
        
        data() {
            return {}
        },
        computed: {
            ...mapGetters([
                'getSize',
                'getSizeItems',
                'getToppings',
                'getToppingItems',
                'getCustomer',
            ]),
            totalPrice(){
                const toppings = this.getToppings.map(topping => {
                    return this.getToppingItems[topping].price
                })

                return this.getSizeItems[this.getSize].price + toppings.reduce((a, b) => a + b, 0)
            }
        },
        methods: {
            
        }
    }
</script>

<style scoped>
    .center{
        text-align: center;
        margin-top: 10%;
    }

  .summary-content {
    font-size:18px; 
    font-weight:bold;
  }
</style>