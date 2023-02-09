import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { course } from "./course.entity";

@Entity('tags')
export class Tag {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    name: string;
    //Relação N p N
    @ManyToMany(() => course, (course: course) => course.tags)
    courses: course[];
}
