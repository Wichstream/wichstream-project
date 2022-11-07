import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export default class User {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column({ type: "text", nullable: false })
  username!: string;

  @Column({ type: "text", nullable: false })
  email!: string;

  @Column({ type: "text", nullable: true })
  description!: string;

  @Column({ type: "text", nullable: true })
  contact!: string;

  @Column({ type: "text", nullable: true })
  country!: string;

  @Column({ type: "text", nullable: true })
  facebook!: string;

  @Column({ type: "text", nullable: true })
  twitter!: string;

  @Column({ type: "text", nullable: true })
  instagram!: string;

  @Column({ type: "text", nullable: false })
  password!: string;

  @Column({ type: "timestamptz", default: () => "CURRENT_TIMESTAMP" })
  date?: string;
}
