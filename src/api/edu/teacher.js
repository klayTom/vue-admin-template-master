import request from '@/utils/request'

// es6 语法
export default{
    // 讲师列表 (条件查询分页)
    getPageTeacherCondtition(current,limit,teacherQuery) {
        return request({
            // current 代表当前页 limit 每页显示的数据 teacherQuery 查询条件
            url: `/edu/teacher/pageTeacherCondition/${current}/${limit}`,
            method: 'post',
            data: teacherQuery
          })
    },
    // 删除讲师记录
    deleteTeacherById(id) {
        return request({
            url: `/edu/teacher/${id}`,
            method: 'delete'
          })
    },
    // 新增讲师
    addTeacher(teacher) {
        return request({
            url: `/edu/teacher/addTeacher`,
            method: 'post',
            data: teacher
          })
    },
    // 查询讲师
    getTeacherById(id) {
        return request({
            url: `/edu/teacher/getTeacher/${id}`,
            method: 'get'
          })
    },
    // 修改方法
    updateTeacher(teacher) {
        return request({
            url: `/edu/teacher/updateTeacher`,
            method: 'post',
            data: teacher
          })
    }
    
}

// export function getList(params) {
//   return request({
//     url: '/table/list',
//     method: 'get',
//     params
//   })
// }