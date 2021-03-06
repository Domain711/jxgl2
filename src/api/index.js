import * as common from './modules/common'
import * as user from './modules/user'
import * as role from './modules/role'
import * as menu from './modules/menu'
import * as log from './modules/log'
import * as config from './modules/config'
import * as oss from './modules/oss'
import * as teachers from './modules/teachers'
import * as grade from './modules/grade'
import * as teacherass from './modules/teacherass'
import * as exam from './modules/exam'
import * as testplan from './modules/testplan'
import * as course from './modules/course'
import * as questiontype from './modules/questiontype'
import * as question from './modules/question'
import * as college from './modules/college'
import * as major from './modules/major'
import * as students from './modules/students'
import * as schedule from './modules/schedule'

export default {
  common,     // 公共
  user,       // 管理员管理
  role,       // 角色管理
  menu,       // 菜单管理
  log,        // 系统日志
  config,     // 参数管理
  oss,        // 文件服务
  teachers,        // 教师信息管理
  grade,        // 班级信息管理
  teacherass,        // 教师评价信息管理
  exam,        // 考试成绩信息管理
  testplan,        // 考试计划管理
  course,        // 课程信息管理
  questiontype,        // 题库类型管理
  question,        // 题库信息管理
  college,        // 学院信息管理
  major,        // 专业信息管理
  students,        // 学生信息管理
  schedule    // 定时任务
}
