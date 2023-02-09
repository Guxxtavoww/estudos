import { PartialType } from "@nestjs/mapped-types";
import { IsString } from "class-validator";
import { CreateCourseDto } from "../create-course.dto/create-course.dto";

export class UpdateCourseDto extends PartialType(CreateCourseDto) {}
