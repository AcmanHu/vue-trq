<template>
    <div id="home">
        <div class="home">
            <v-header></v-header>

            <div class="home_content">
                <div class="left">
                     <Row>
                        <Col span="8">
                            <Menu >
                                <Submenu name="1">
                                    <template slot="title">
                                        <Icon type="ios-paper" />
                                        内容管理
                                    </template>
                                    <router-link to="/home/page1"><MenuItem name="1-1">申请须知</MenuItem></router-link>
                                    <router-link to="/home/page2"><MenuItem name="1-2">天然气安装业务申请表</MenuItem></router-link> 
                                    <router-link to="/home/page3"><MenuItem name="1-3">施工档案</MenuItem></router-link>
                                    <router-link to="/home/page4"><MenuItem name="1-4">天然气工程安装缴费单</MenuItem></router-link>
                                    <router-link to="/home/page5"><MenuItem name="1-5">天然气工程安装流程表</MenuItem></router-link>
                                    <router-link to="/home/page6"><MenuItem name="1-6">技术指标</MenuItem></router-link>
                                    <router-link to="/home/page7"><MenuItem name="1-7">交底纪要1</MenuItem></router-link>
                                    <router-link to="/home/page8"><MenuItem name="1-8">交底纪要2</MenuItem></router-link>
                                    <router-link to="/home/page9"><MenuItem name="1-9">设计变更</MenuItem></router-link>
                                    <router-link to="/home/page10"><MenuItem name="1-10">质检验收单（一）</MenuItem></router-link>
                                    <router-link to="/home/page11"><MenuItem name="1-11">质检验收单（二）</MenuItem></router-link>
                                    <router-link to="/home/page12"><MenuItem name="1-12">高层建筑供气档案</MenuItem></router-link>
                                    <router-link to="/home/page13"><MenuItem name="1-13">通气通知单1</MenuItem></router-link>
                                    <router-link to="/home/page14"><MenuItem name="1-14">管理站通气备案联</MenuItem></router-link>
                                    <router-link to="/home/page15"><MenuItem name="1-15">通气通知单2</MenuItem></router-link>
                                </Submenu>
                                
                                <Submenu name="3">
                                    <template slot="title">
                                        <Icon type="ios-stats" />
                                        信息查询
                                    </template>
                                    <!-- <MenuGroup title="使用">
                                        <MenuItem name="3-1">新增和启动</MenuItem>
                                        <MenuItem name="3-2">活跃分析</MenuItem>
                                        <MenuItem name="3-3">时段分析</MenuItem>
                                    </MenuGroup>
                                    <MenuGroup title="留存">
                                        <MenuItem name="3-4">用户留存</MenuItem>
                                        <MenuItem name="3-5">流失用户</MenuItem>
                                    </MenuGroup> -->
                                </Submenu>
                                
                                <Submenu name="2">
                                    <template slot="title">
                                        <Icon type="ios-people" />
                                        用户管理
                                    </template>
                                    <MenuItem @click="getdata()" name="2-1">新增用户</MenuItem>
                                    <MenuItem name="2-2">用户查询</MenuItem>
                                    <MenuItem name="2-3">删除用户</MenuItem>
                                </Submenu>

                            </Menu>
                        </Col>
                    </Row>
                </div>
                
                <div class="right">
                    <router-view></router-view>
                </div>
            </div>

        </div>
            <!-- <router-view></router-view> -->
    </div>
</template>

<script>
import Header from './public/Header.vue'

export default {
    data(){
        return{
            
        }
    },
    components:{
        'v-header':Header
    },
    methods:{
    },
}
</script>

<style lang="scss" scoped>
    #home{
        .home{
            .home_content{
                display: flex;
                .left{
                    width: 240px;
                    height: 100%;
                    a{
                        color: #515a6e;
                    }
                    // background: darkgoldenrod;
                }
                .right{
                    flex: 1;
                    height: 100%;
                    // background: darkcyan;
                }
            }
        }
        
    } 
</style>
