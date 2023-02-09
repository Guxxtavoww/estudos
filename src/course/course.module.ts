import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CourseController } from './course.controller';
import { CourseService } from './course.service';
import { course } from './entities/course.entity';
import { Tag } from './entities/tag.entity';

@Module({
    imports: [TypeOrmModule.forFeature([course, Tag])],
    controllers: [CourseController],
    providers: [CourseService],
})
export class CourseModule {}
