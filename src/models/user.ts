import {
	Model,
	Column,
	Table,
	CreatedAt,
	UpdatedAt
} from 'sequelize-typescript';

@Table
export class User extends Model<User> {
    @Column
    userName!: string;

    @CreatedAt
    createdAt!: Date;

    @UpdatedAt
    updatedAt!: Date;
}
