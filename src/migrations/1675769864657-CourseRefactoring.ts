import {MigrationInterface, QueryRunner} from "typeorm";

export class CourseRefactoring1675769864657 implements MigrationInterface {
    //queryRunner nos permite criar query no BD
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `ALTER TABLE "courses" RENAME COLUMN "name" TO "course"`,
        )
    }
    //Método down desfaz a ultima alteração feita
    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `ALTER TABLE "courses" RENAME COLUMN "course" TO "name"`,
        )
    }

}
