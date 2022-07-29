import request from '@/utils/request'

// es6 语法
export default{
    addCourseInfo(courseInfo) {
        return request({
            url: `/edu/course/addCourse`,
            method: 'post',
            data: courseInfo
          })
    },

    getListTeacher() {
        return request({
            url: `/edu/teacher/findAll`,
            method: 'get'
          })
    },

    //3.根据id 查询课程基本信息
    getCourseInfo(id) {
        return request({
            url: `/edu/course/getCourseInfo/${id}`,
            method: 'get'
          })
    },

    //4.修改课程信息
    updateCourseInfo(courseInfo) {
        return request({
            url: '/edu/course/updateCourseInfo',
            method: 'post',
            data: courseInfo
          })
    },

     //5.根据id查询课程确认信息
    getPublishCourseInfo(id){
        return request({
            url: '/edu/course/getCoursePublishVo/'+id,
            method: 'get'
        })
    },

    //6. 最终发布课程
    publishCourse(id) {
        return request({
            url: '/edu/course/publishCourse/'+id,
            method: 'post'
        })
    },

    //7. 查询所有课程
    findAll() {
        return request({
            url: '/edu/course/findAll/',
            method: 'get'
        })
    },

    //8. 条件查询课程并分页
    pageCourseCondition(current,limit,courseQuery) {
        return request({
            url: `/edu/course/pageCourseCondition/${current}/${limit}`,
            method: 'post',
            data: courseQuery
        })
    }
    
}
