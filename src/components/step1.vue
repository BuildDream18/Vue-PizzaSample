<template>
    <div class="row center">
        <h1>Select Pizza</h1>
        <el-row>
            <el-col :span="8"></el-col>
            <el-col :span="8">
                <el-radio-group v-model="radio">
                    <div v-for="i in 4" :key="i" style="margin-top: 20px;">
                        <el-radio :label="i" class="text-left">{{getSizeItems[i].text}} - {{getSizeItems[i].price}}$</el-radio>
                    </div>
                </el-radio-group>

                <div style="margin-top: 20px;">
                    <router-link :to="{ name: 'step1' }" tag="li"><el-button style="margin-right: 2rem" type="info">Back</el-button></router-link>
                    <router-link :to="{ name: 'step2' }" tag="li"><el-button type="primary">Next</el-button></router-link>
                </div>
            </el-col>
            <el-col :span="8"></el-col>
        </el-row>
    </div>
</template>

<script>
    import { mapGetters, mapMutations } from 'vuex'

    export default {
        
        data() {
            return {
                radio: 1
            }
        },
        computed: {
            ...mapGetters([
                'getSize',
                'getSizeItems'
            ]),
        },
        methods: {
            ...mapMutations([
                'setSize',
            ]),
            setSizeFunc(value){
                this.setSize(value)
            },
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