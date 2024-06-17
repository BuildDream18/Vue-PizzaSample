<template>
    <el-row class="center">
      <el-col :span="8">
      </el-col>
      <el-col :span="8">
        <h1>Choose topping</h1>
        <el-checkbox-group :max="6" v-model="checkList" @change="setToppingFunc">
          <div v-for="i in 10" :key="i" style="margin-top: 20px;">
            <el-checkbox :label="i" class="text-left">{{getToppingItems[i].text}} - {{getToppingItems[i].price?getToppingItems[i].price+"$":"Free"}}</el-checkbox>
          </div>
        </el-checkbox-group>
        
        <div style="margin-top: 20px;">
            <router-link :to="{ name: 'step1' }" tag="li"><el-button style="margin-right: 2rem" type="info">Back</el-button></router-link>
            <router-link :to="{ name: 'step3' }" tag="li"><el-button type="primary">Next</el-button></router-link>
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
                checkList: []
            }
        },
        computed: {
            ...mapGetters([
                'getToppingItems'
            ]),
        },
        methods: {
            ...mapMutations([
                'setTopping', 
            ]),
            setToppingFunc(){
                if(this.checkList.indexOf(8) > -1 && this.checkList.indexOf(10) > -1){
                    if(this.checkList.indexOf(8) > this.checkList.indexOf(10)){
                        this.checkList = this.checkList.filter(value => value !== 10)
                    }
                    else{
                        this.checkList = this.checkList.filter(value => value !== 8)
                    }
                }
                this.setTopping(this.checkList)
            }
        }
    }
</script>

<style scoped>
    .center{
        text-align: center;
        margin-top: 10%;
    }

    .text-left {
        width: 200px;
        text-align: left;
    }
</style>
