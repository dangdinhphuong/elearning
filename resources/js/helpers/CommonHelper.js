import router from "@/router/index.js";
export function routerRdirectByName( routerName= '') {
    console.log('xin chào:',routerName)
    router.push({name: routerName});
}