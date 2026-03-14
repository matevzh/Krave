import { TypeOrmModule } from "@nestjs/typeorm";
import { Farm } from "./entities/farm.entity";
import { Module } from "@nestjs/common";
import { UsersModule } from "src/uporabniki/users.module";
import { FarmsController } from "./farm.controller";
import { FarmService } from "./farm.service";

@Module({
    imports: [TypeOrmModule.forFeature([Farm]), UsersModule],
    controllers: [FarmsController],
    providers: [FarmService]
})

export class FarmsModule {}