/* 
* @Author: TanZer.hanyu 
* @Date: 2019-05-10 15:28:08
* --- api配置项 ---
* */
const getTargetHost = (milieu) => {
    
    switch (milieu) {
        case 'test':
            return 'http://112.27.198.15:9832/api/v1.1/operation-management';
        case 'dev':
            return 'http://112.27.198.15:9832/api/v1';
        default:
            return milieu;
    }
};

export default {
    apiHost: getTargetHost(process.env.milieu), 
    api: {
        queryCount: "/mainOperationOrgController/queryDistrictCascode",
        login: "/upms-service/login/login"
    },

    // websocket地址
    wsHost: ""
}