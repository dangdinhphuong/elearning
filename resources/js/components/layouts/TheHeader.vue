<template>
    <div class="_wrapper_vdbp4_1" id="header">
        <h1 class="_logo_vdbp4_38">
            <logo-and-title :title="title" classLogo="_logo_vdbp4_38" classTitle="_subTitle_vdbp4_58">
            </logo-and-title>
        </h1>
        <div class="_body_vdbp4_82 d-flex-center">
            <div>
                <div class="_wrapper_15ttk_1 d-flex-center" aria-expanded="false">
                    <div class="_searchIcon_15ttk_23"></div><input class="_input_15ttk_39" spellcheck="false"
                        placeholder="Tìm kiếm khóa học, bài viết, video, ..." value="">
                </div>
            </div>
        </div>
        <div class="_actions_vdbp4_99">
            <div id="navbar-actions-portal">
            </div><button class="_loginBtn_vdbp4_145 ">Đăng
                ký</button><button class="_registerBtn_vdbp4_146" >Đăng nhập</button>
        </div>
    </div>

</template>

<script lang="jsx" setup>
import { ref } from "vue";
import LogoAndTitle from "@/components/layouts/LogoAndTitle.vue";

const title = ref('Học Lập Trình Để Đi Làm');
</script>
