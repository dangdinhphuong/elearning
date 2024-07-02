<template>
            <div v-if="goToBack" class="_back-btn_k7irp_16" title="Rời khỏi đây"
                v-on:click="routerRdirectByName(goToBack)">
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-left"
                    class="svg-inline--fa fa-chevron-left _icon_k7irp_26" role="img" xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 320 512">
                    <path fill="currentColor"
                        d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z">
                    </path>
                </svg>
            </div>
            <a :class="classLogo" href="/">
                <img src="https://fullstack.edu.vn/assets/f8-icon-lV2rGpF0.png" alt="F8">
            </a>
            <div :class="classTitle">{{ title }}</div>
</template>

<script lang="jsx" setup>
import { ref } from "vue";
import { routerRdirectByName } from "@/helpers/CommonHelper.js";
const props = defineProps({
    title: {
            type: String,
            default: ""
    },
    goToBack: {
            type: String,
            default: null
    },
    classLogo: {
            type: String,
            default: ''
    },
    classTitle: {
            type: String,
            default: ''
    }
});
</script>
