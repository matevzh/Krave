import { User } from "src/uporabniki/entity/user.entity";
import { Column, CreateDateColumn, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('farms')
export class Farm {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    name: string;
    @Column()
    location: string;
    @Column({ nullable: false })
    kmg_mid: string;
    @Column()
    province: string;
    @Column()
    postOffice: string;
    @CreateDateColumn()
    createdAt: Date;
    @UpdateDateColumn()
    updatedAt: Date;

    @OneToMany(() => User, (user) => user.farm)
    user: User[]
    
    @OneToOne(() => User, (user) => user.farm)
    owner: User;
    
}