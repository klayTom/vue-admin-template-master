import request from '@/utils/request'

// es6 语法
export default{
    // 课程分类列表 
    getAllSubjectList() {
        return request({
            // current 代表当前页 limit 每页显示的数据 teacherQuery 查询条件
            url: `/edu/subject/getAllSubject`,
            method: 'get'
          })
    }
    
}
