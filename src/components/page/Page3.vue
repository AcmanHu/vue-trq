<template>
    <div id="page3">
        <div class="page3">
            <div class="content">
                <div class="cot1">
                    <h2>重庆燃气集团股份有限公司渝中分公司</h2>
                    <h2>天然气安装工程施工方案</h2>
                </div>
                <div class="cot2">
                   <img src="../../assets/cqrq_logo.png" alt="重庆燃气正在加载。。。">
                </div>
                 <div class="cot3">
                     <div class="input_info">
                        <div class="inp1">
                            <span>设计图号：</span>
                            <input type="text" v-model="test1">
                        </div>
                        <div class="inp1">
                            <span>工程编号：</span>
                            <input type="text" v-model="test2">
                        </div>
                        <div class="inp1">
                            <span>工程名称：</span>
                            <input type="text" v-model="test3">
                        </div>
                        <div class="inp1">
                            <span>工程地址：</span>
                            <input type="text" v-model="test4">
                        </div>

                     </div>
                </div>
                <div class="updata">
                    <Button type="success" @click="updata()">修改</Button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            test1:'',
            test2:'',
            test3:'',
            test4:'',
        }
    },
    methods:{
        getData(){
            var api = 'http://120.79.174.88/gasweb/public/index.php/constructfile';
            this.$http.get(api).then((response)=>{
                this.test1 = response.data[0].con_designchart_id;
                this.test2 = response.data[0].con_project_id;
                this.test3 = response.data[0].con_project_name;
                this.test4 = response.data[0].con_project_address;
            },(err)=>{
                console.log(err)
            })
        },
        updata(){
            var api = 'http://120.79.174.88/gasweb/public/index.php/constructfile';
            var data = {
                con_designchart_id:this.test1,
                con_project_id:this.test2,
                con_project_name:this.test3,
                con_project_address:this.test4
            }
            var jsondata = JSON.stringify(data);
            this.$http.post(api,{
                constructfile_main:jsondata
            }).then((response)=>{
                this.getData();
            },(err)=>{
                console.log(err)
            })
        }
    },
    mounted(){
        this.getData()
    }
}
</script>

<style lang="scss" scoped>
    .page3{
        font-size: 16px;
        .content{
            width: 40%;
            height: 800px;
            margin: 20px auto;
            border: 1px solid black;
            padding: 20px;
            
            .cot1{
                padding-top: 60px;
                h2{
                    color:black;
                    text-align: center;
                    &:last-child{
                        margin-top: 30px;
                    }
                }
            }
            .cot2{
                text-align: center;
                margin-top: 60px;
               img{
                   width: 280px;
               }
            }
            .cot3{
                margin-top: 40px;
                .input_info{
                    .inp1{
                        height: 50px;
                        text-align: center;
                        line-height: 50px;
                        span{
                            color: black;
                            font-weight: bold;
                            display: inline-block;
                            font-size: 22px;
                        }
                        input{
                            padding: 0;
                            height: 30px;
                            width: 300px;
                            font-weight: bold;
                            border: 0;
                            position: relative;
                            top: -4px;
                            outline: none;
                            background: none;
                            border-bottom: 2px solid black;
                            display: inline-block;

                        }
                    }
                }
            }
            .updata{
                text-align: right;
                padding-top: 30px;
            }
        }
    }
</style>
