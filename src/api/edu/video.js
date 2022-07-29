import request from '@/utils/request'
export default {
   
    //定义查询后端的APi方法

    //添加小节
    addVideo(video){
        return request({
            url: '/edu/video/addVideo',
            method: 'post',
            data: video
        })
    },

    //根据id查询小节
    getVideoById(videoId){
        return request({
            url: '/edu/video/getVideo/'+videoId,
            method: 'get'
        })   
    },

    updateVideo(video){
        return request({
            url: '/edu/video/updateVideo',
            method: 'post',
            data: video
        })
    },

    //删除小节
    deleteVedioById(videoId){
        return request({
            url: '/edu/video/'+videoId,
            method: 'delete'
        })   
    },
}