<template>
    <div class="login v2">
        <div class="wrapper">
            <div class="dialog dialog-shadow" style="display: block; margin-top: -362px;">
                <div class="title">
                    <h4>xxxxx登陆</h4>
                </div>
                <div class="content" v-if="loginPage">
                    <ul class="common-form">
                        <li class="username border-1p">
                            <div class="input">
                                <input type="text" placeholder="账号">
                            </div>
                        </li>
                        <li>
                            <div class="input">
                                <input type="text" placeholder="密码">
                            </div>
                        </li>
                        <li style="text-align: right" class="pr">
                            <span class="pa" style="top: 0;left: 0;color: #d44d44">xxxx错误信息</span>
                            <a href="javascript:;" style="padding: 0 5px">注册 Smartisan ID</a>
                        </li>
                    </ul>
                    <div>
                        <m-button text="登陆"
                                  :classStyle="'main-btn'"
                                  @btnClick="login"
                                  style="margin: 0;width: 100%;height: 48px;font-size: 18px;line-height: 48px"></m-button>
                    </div>
                </div>
                <div class="registered" v-else>
                    <h4>注册 xxxxxx ID</h4>
                    <div class="content" style="margin-top: 20px;">
                        <ul class="common-form">
                            <li class="username border-1p">
                                <div class="input">
                                    <input type="text"
                                        placeholder="账号"
                                        >
                                </div>
                            </li>
                            <li>
                                <div class="input">
                                    <input type="password"
                                         placeholder="密码">
                                </div>
                            </li>
                            <li>
                                <div class="input">
                                    <input type="password"
                                         placeholder="重复密码">
                                </div>
                            </li>
                        </ul>
                        <div>
                            <m-button
                                :classStyle="'main-btn'"
                                text="注册"
                                style="margin: 0;width: 100%;height: 48px;font-size: 18px;line-height: 48px"
                                @btnClick="regist">
                            </m-button>
                        </div>
                        <ul class="common-form pr">
                            <li class="pa" style="left: 0;top: 0;margin: 0;color: #d44d44">xxxx错误信息</li>
                            <li style="text-align: center;line-height: 48px;margin-bottom: 0;">
                                <span>如果您已拥有 Smartisan ID，则可在此</span>
                                <a href="javascript:;"
                                   style="margin: 0 5px"
                                   @click="loginPage=true">登陆</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <m-footer></m-footer>
    </div>
</template>

<script src="./login.js"></script>

<style lang="scss" src="./login.scss"></style>