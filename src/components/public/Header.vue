<template>
    <div id="header">
        <div class="header">
           <Menu mode="horizontal"  active-name="1">
                <MenuItem name="1">
                    <Icon type="ios-paper" />
                    内容管理
                </MenuItem>
                <MenuItem name="2">
                    <Icon type="ios-people" />
                    信息查询
                </MenuItem>
                <Submenu name="3">
                    <template slot="title">
                        <Icon type="ios-stats" />
                        用户管理
                    </template>
                    <MenuGroup title="管理">
                        <MenuItem name="3-1">新增用户</MenuItem>
                        <MenuItem name="3-2">用户查询</MenuItem>
                        <MenuItem name="3-3">删除用户</MenuItem>
                    </MenuGroup>
                </Submenu>
                <div class="userinfo">
                    <span style="color:#2d8cf1;" @click="login()">{{info}}</span>
                    <span>|</span>
                    <span style="color:red;" @click="cleardata()">退出登陆</span>
                </div>
                
            </Menu>
        </div>
    </div>
</template>

<script>
import storage from '../../model/storage.js'
export default {
    data(){
        return{
            info:'登陆',
        }
    },
    methods:{
        login(){
            var data = storage.get('userinfo');
            if(data){
                this.info = '登陆成功！欢迎！';
            } else{
                this.info = '请登录';
                this.$router.push({path:'/login'});
            }
        },
        
        cleardata(){
            storage.remove('userinfo');
            this.$router.push({path:'/login'});

        }
    },
    mounted(){
        this.login();
    }
}
</script>

<style lang="scss">
    #header{
        .header{
            .userinfo{
                text-align: right;
                margin-right: 20px;
                span{
                    cursor: pointer;
                }
            }
        }
    }

</style>
