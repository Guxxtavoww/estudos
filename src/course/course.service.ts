import { 
    HttpException, 
    HttpStatus, 
    Injectable, 
    NotFoundException 
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCourseDto } from './dto/create-course.dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto/update-course.dto';
import { course } from './entities/course.entity';
import { Tag } from './entities/tag.entity';

@Injectable()
export class CourseService {
    constructor(
        @InjectRepository(course)
        private readonly courseRepository: Repository<course>,
        // Injeção de Dep da entitade Tag
        @InjectRepository(Tag)
        private readonly tagRepository: Repository<Tag>,
    ){}

    //Método para traser todos os registros do DB
    findAll() {
        return this.courseRepository.find({
            relations: ['tags'],
        });
    };

    //Filtro
    findOne(id: string) {
        const course = this.courseRepository.findOne(id, {
            relations: ['tags'],
        });

        if (!course) {
            throw new NotFoundException(`Course ${id} not found`);
        };
        return course;
    };

    //Post
    async createCourse(createCourseDto: CreateCourseDto) {
        //Método que prepara o OBJ a ser salvo
        const tags = await Promise.all(
            createCourseDto.tags.map(name => this.preloadTagByName(name)),
        );
        const course = this.courseRepository.create({
            ...createCourseDto,
            tags,
        });
        //Método que salva os dados no DB
        return this.courseRepository.save(course);
    }

    async updateCourse(id: string, updateCourseDto: UpdateCourseDto) {
        const tags = updateCourseDto.tags && (
            await Promise.all(
                updateCourseDto.tags.map(name => this.preloadTagByName(name)),
            )
        )
        //Método que carrega os dados que serão alterados
        const course = await this.courseRepository.preload({
            id: +id,
            ...updateCourseDto,
            tags,
        });
        
        if (!course) {
            throw new NotFoundException(`Course ${id} not found`);
        }

        return this.courseRepository.save(course);

    };

    //DELETE
    async removeCourse(id: string) {
        const course = await this.courseRepository.findOne(id);

         if (!course) {
            throw new NotFoundException(`Course ${id} not found`);
        }

        return this.courseRepository.remove(course);
    };

    //Metodo para verificar se exist tag, se não ouver tag 
    //será criada
    private async preloadTagByName(name: string): Promise<Tag> {
        const tag = await this.tagRepository.findOne({ name });

        if (tag) {
            return tag;
        }

        return this.tagRepository.create({ name });
    };
}
