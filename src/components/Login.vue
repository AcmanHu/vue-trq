<template>
    <div id="login">
        <div class="login">

            <div class="center-login">
                <span class="heading">用户登录</span>
                <form class="form-horizontal">
                    <div class="form-group">
                        <Input v-model="username" icon="ios-key-outline" placeholder="用户名或电子邮件" style=" width: 90%" />
                    </div>
                    <div class="form-group help">
                        <Input type="password" v-model="password" icon="ios-lock-outline" placeholder="密码" style="width: 90%" />
                    </div>
                    <div class="form-group">
                        <div class="main-checkbox">
                            <Checkbox v-model="single">记住密码</Checkbox>
                            <Button @click="login()" type="info">登陆</Button>
                        </div>
                    </div>
                </form>
            </div>

        </div>
    </div>
</template>

<script>
import storage from '../model/storage.js';
export default {
    data(){
        return{
            single:false,
            username:'admin',
            password:'123456'
        }
    },
    components:{
       
    },
    methods:{
        login(){
            var user = this.username;
            var psw = this.password;
            var data = {
                username:user,
                password:psw
            }
            storage.set("userinfo",data);
            this.$router.push({path:'/home'});
        }
    }
}
</script>

<style lang="scss" scoped>
#login{
    height: 100%;
    background: #00b4ef;
    .login{
        padding-top: 10%;
        .center-login{
            width: 600px;
            height: 400px;
            border: 1px solid navajowhite;
            text-align: center;
            margin: 0 auto;
            background: #fff;
            border-radius:10px; 
            .heading{
                font-size: 30px;
                font-weight: bold;
                display: block;
                color: #000;
                margin: 20px 0;
            }
            .form-horizontal{
                width: 100%;
                margin-top: 50px;
               
                .form-group{
                    width: 100%;
                    height: 100px;
                    line-height: 100px;
                    &:last-child{
                        line-height: 0;
                    }
                }
            }   
        }
    }
}


</style>    
