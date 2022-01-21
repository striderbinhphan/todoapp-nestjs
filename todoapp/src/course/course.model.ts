export interface CourseInterface{
    courseId: number, 
    courseName: string,
    courseStatus: CourseStatus
}
enum CourseStatus{
    DONE='Done',
    UN_DONE='UnDone',
}