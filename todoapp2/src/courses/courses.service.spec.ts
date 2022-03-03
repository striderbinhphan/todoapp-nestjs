import { Test } from "@nestjs/testing"
import { CoursesService } from "./courses.service"
import { CourseRepository } from "./respositories/course.repository"
const mockCoursesRepository = () => ({
  getFilterCourses: jest.fn(),
  findOne: jest.fn()
});

describe("course service testing",  () => {
  let coursesService: CoursesService
  let courseRepository
  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        CoursesService,
        { provide: CourseRepository, useFactory: mockCoursesRepository }
      ],
    }).compile()

    coursesService = module.get(CoursesService);
    courseRepository = module.get(CourseRepository);
  })
  describe("get all course testing", ()=>{
    it('get all course', async ()=>{
      courseRepository.getFilterCourses.mockResolvedValue('somevalue');
      const result = await coursesService.filterCourses({});
      expect(result).toEqual('somevalue');
    })
  })
  describe("get single course testing", ()=>{
    it('get single course with id', async ()=>{
      courseRepository.findOne.mockResolvedValue('somevalue');
      const result = await coursesService.findOne('someId');
      expect(result).toEqual('somevalue');
    })
  })
})