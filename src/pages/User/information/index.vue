<template>
    <div>
        <m-shelf title="账户资料">
            <div class="content">
                <div class="avatar-box">
                    <div class="img-box">
                        <img src="/static/images/logo.png" alt="">
                    </div>
                    <div class="r-box">
                        <h3>修改头像</h3>
                        <m-button text="更换头像"
                            classStyle="main-btn"
                            style="margin: 0;">
                        </m-button>
                    </div>
                </div>

                <div class="edit-avatar">
                    <m-shelf title="设置头像">
                        <span slot="right">
                            <span class="close" @click="editAvatarShow=false">
                                <svg t="1501234940517" class="icon" style="" viewBox="0 0 1024 1024" version="1.1"
                                    xmlns="http://www.w3.org/2000/svg" p-id="3014" xmlns:xlink="http://www.w3.org/1999/xlink"
                                    width="20" height="20">
                                        <path d="M941.576 184.248l-101.824-101.824L512 410.176 184.248 82.424 82.424 184.248 410.168 512l-327.744 327.752 101.824 101.824L512 613.824l327.752 327.752 101.824-101.824L613.832 512z" fill="#cdcdcd" p-id="3015">
                                        </path>
                                </svg>
                            </span>
                        </span>
                        <div slot="content" class="content">
                            <div class="edit-l">
                                <div style="width: 100px;height: 100px;border: 1px solid #ccc;margin-bottom: 20px;overflow: hidden;">
                                     <div class="show-preview"
                                        :style="{'width': previews.w + 'px','height': previews.h + 'px','overflow': 'hidden','zoom':option.zoom}">
                                        <div :style="previews.div">
                                            <img :src="option.img" :style="previews.img">
                                        </div>
                                    </div>
                                </div>
                                <div style="padding: 10px 0 ">头像预览</div>
                                <div class="btn">
                                    <a href="javascript:;">重新选择</a>
                                    <input type="file" value="上传头像" @change="upimg($event)">
                                </div>
                            </div>

                            <div class="edit-r">
                                <div>
                                    <div class="big" id="cropper-target" v-if="option.img">
                                        <vueCropper
                                            :img="option.img"
                                            @realTime="realTime"
                                            ref="cropper"
                                            :outputSize="example2.size"
                                            :info="example2.info"
                                            :canScale="example2.canScale"
                                            :autoCrop="example2.autoCrop"
                                            :autoCropWidth="example2.width"
                                            :autoCropHeight="example2.height"
                                            :fixed="example2.fixed">
                                        </vueCropper>
                                    </div>
                                </div>
                            </div>

                            <div class="bootom-btn pa">
                                <m-button style="width: 140px;height: 40px;line-height: 40px"
                                    text="取消"
                                    @btnClick="editAvatarShow=false">
                                </m-button>
                                <m-button style="width: 140px;height: 40px;line-height: 40px"
                                    text="确定"
                                    classStyle="main-btn"
                                    @btnClick="cropper">
                                </m-button>
                            </div>
                        </div>
                    </m-shelf>
                </div>
            </div>
        </m-shelf>
    </div>
</template>

<script>
    import MShelf from '/components/shelf'
    import MButton from '/components/button'
    import vueCropper from 'vue-cropper'

    export default {
        data() {
            return {
                editAvatarShow: false
            }
        },

        methods: {
            editAvatar() {

            },
            realTime() {
            }
        },
        components: {
            MShelf,
            MButton,
            vueCropper
        }
    }
</script>
