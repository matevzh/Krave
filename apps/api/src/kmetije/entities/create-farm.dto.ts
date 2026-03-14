import { IsArray, IsOptional, IsString } from "class-validator";
import { User } from "src/uporabniki/entity/user.entity";

export class CreateFarmDto {
    @IsString()
    name: string;
    @IsString()
    location: string;
    @IsString()
    kmg_mid: string;
    @IsString()
    province: string;
    @IsString()
    postOffice: string;
    @IsOptional()
    @IsArray()
    user: User[];
    @IsOptional()
    owner: User;
}