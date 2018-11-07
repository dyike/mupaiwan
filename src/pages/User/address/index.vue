<template>
    <div>
        <m-shelf title="收货地址">
            <span slot="right">
                <m-button text="添加新地址" style="margin: 0" @btnClick="update()"></m-button>
            </span>
            <div slot="content">
                <div v-if="true">
                    <div class="address-item">
                        <div class="name">namemamamammama</div>
                        <div class="address-msg">jeidaoodoodo streetName</div>
                        <div class="telephone">dianhua akddjvfev</div>
                        <div class="defalut">
                            <a @click="changeDef(item)"
                                href="javascript:;"
                                v-text="默认地址"
                                class="defalut-address"></a>
                        </div>
                        <div class="operation">
                            <a href="javascript:;" @click="update(item)">修改</a>
                            <a href="javascript:;">删除</a>
                        </div>
                    </div>
                </div>
                <div v-else>
                    <div style="padding: 80px 0;text-align: center">
                        <div style="font-size: 20px">你还未添加收货地址</div>
                        <div style="margin: 20px;">
                            <m-button text="添加新地址"></m-button>
                        </div>
                    </div>
                </div>
            </div>
        </m-shelf>
        <m-popup :open="popupOpen" @close='popupOpen=false' :title="popupTitle">
            <div slot="content" class="md">
                <div>
                    <input type="text" placeholder="收货人姓名" v-model="msg.userName">
                </div>
                <div>
                    <input type="number" placeholder="手机号码" v-model="msg.tel">
                </div>
                <div>
                    <input type="text" placeholder="收货地址" v-model="msg.streetName">
                </div>
                <div>
                    <span><input type="checkbox" v-model="msg.isDefault" style="margin-right: 5px;">设为默认</span>
                </div>
                <m-button text='保存'
                          class="btn"
                          :classStyle="btnHighlight?'main-btn':'disabled-btn'"
                          @btnClick="save({addressId:msg.addressId,userName:msg.userName,tel:msg.tel,streetName:msg.streetName,isDefault:msg.isDefault})">
                </m-button>
            </div>
        </m-popup>
    </div>

</template>

<script>
    import MShelf from '/components/shelf'
    import MButton from '/components/button'
    import MPopup from '/components/popup'

    export default {
        data() {
            return {
                addressList: [],
                popupOpen: false,
                popupTitle: '管理收货地址',
                msg: {
                    addressId: '',
                    userName: '',
                    tel: '',
                    streetName: '',
                    isDefault: false
                }
            }
        },
        methods: {
            update() {

            }
        },
        computed: {
            btnHighlight() {
                let msg = this.msg
                return msg.userName && msg.tel && msg.streetName
            }
        },
        components: {
            MShelf,
            MButton,
            MPopup
        }
    }
</script>

<style lang="scss" scoped>
    .address-item {
        display: flex;
        align-items: center;
        height: 115px;
        text-align: center;
        .name {
            width: 106px;
        }
        .address-msg {
            flex: 1;
        }
        .telephone {
            width: 160px;
        }
        .default {
            width: 80px;
            > a {
                text-align: center;
            }
        }
        .operation {
            width: 135px;
            a {
                padding: 10px 5px;
            }
        }
        &:hover {
            .default > a {
                display: block;
            }
        }
    }

    .address-item + .address-item {
        border-top: 1px solid #CFCFCF;
    }

    .default-address {
        color: #626262;
        display: block;
        pointer-events: none;
        cursor: default;
    }
    .md {
        > div {
            text-align: left;
            margin-bottom: 15px;
            > input {
                width: 100%;
                height: 50px;
                font-size: 18px;
                padding: 10px 20px;
                border: 1px solid #ccc;
                border-radius: 8px;
                box-shadow: 0 3px 5px -4px rgba(0, 0, 0, .4) inset, -1px 0 3px -2px rgba(0, 0, 0, .1) inset;
                line-height: 46px;
            }
        }
    }
    .btn {
        margin: 0;
        width: 100%;
        height: 50px;
        font-size: 14px;
        line-height: 48px;
    }
</style>




