<template>
    <!-- 最外层div -->
    <div id="out_div">
        <div class="login_from_div">
            <div class="head_pic">
                <img src="../../assets/image/login/flower.png" style="display: inline-block;margin-top: 20px;"/>
                <div style="line-height: 60px;display: inline-block"> 用 户 登 录</div>
            </div>
            <el-form style="width:300px;" class="login_from" :model="loginForm">
                <el-form-item label="" prop="pass">
                    <el-input v-model="loginForm.username" autocomplete="off">
                        <i slot="prefix" class="el-input__icon el-icon-user-solid"></i>
                    </el-input>
                </el-form-item>
                <el-form-item label="">
                    <el-input type="password" v-model="loginForm.password" autocomplete="off">
                        <i slot="prefix" class="el-input__icon el-icon-lock"></i>
                    </el-input>
                </el-form-item>
                <el-form-item>
                    <el-button class="login_button" type="success" @click="submitForm('ruleForm')">登录</el-button>
                    <el-button class="login_button" @click="resetForm('ruleForm')">重置</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>

    export default {
        name: "Login",
        data() {
            return {
                loginForm: {
                    username: 'admin',
                    password: 'abc123'
                },
            }
        },
        methods: {
            submitForm() {
                alert('登录!');
            },
            resetForm() {
                this.loginForm.username = '';
                this.loginForm.password = '';
            }
        },
        mounted() {
            // 使背景图片填充
            const makeImgFill = function (domId) {
                const dom = document.getElementById(domId);
                const innerHeight = window.innerHeight;
                const innerWidth = window.innerWidth;
                dom.style.backgroundSize = innerWidth + 'px ' + innerHeight + 'px';
            };
            // 添加监听事件
            window.addEventListener("resize", () => {
                makeImgFill('out_div');
            });
            makeImgFill('out_div');
        }
    }
</script>

<style scoped>
    body, html {
        height: 100%;
        width: 100%;
    }

    /*最外层div*/
    #out_div {
        width: 100%;
        height: 100%;
        background: url("../../assets/image/login/cover_back.png") no-repeat;
        position: absolute;
        z-index: -1;
    }

    /*登录表单*/
    .login_from_div {
        /*border: 1px solid red;*/
        right: 10%;
        top: 45%;
        position: absolute;
    }

    /*登录按钮*/
    .login_button {
        width: 144px;
    }

    .head_pic {
        width: 300px;
        height: 60px;
        font-size: 30px;
        font-weight: bold;
        text-align: center;
    }
</style>
