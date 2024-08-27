import { EntitySchema } from 'typeorm';

export default new EntitySchema({
  name: "User",
  tableName: "users",
  columns: {
    id: {
      primary: true,
      type: "int",
      generated: true,
    },
    type: {
      type: "enum",
      enum: ["STARTUP", "PARCEIRO", "VISITANTE"],
      nullable: false,
    },
    register_code: {
      type: "varchar",
      nullable: true,
      default: "",
    },
    full_name: {
      type: "varchar",
      nullable: false,
    },
    email: {
      type: "varchar",
      nullable: false,
    },
    phone: {
      type: "varchar",
      nullable: false,
    },
    tax_id: {
      type: "varchar",
      nullable: false,
    },
    birthday: {
      type: "date",
      nullable: false,
    },
    gender: {
      type: "enum",
      enum: ["MASCULINO", "FEMININO", "NAO_INFORMAR"],
      nullable: false,
    },
    where_from: {
      type: "enum",
      enum: ["GOOGLE", "FACEBOOK", "INSTAGRAM", "LINKEDIN", "SITE", "INDICACAO", "OUTROS"],
      nullable: false,
    },
    newsletter: {
      type: "boolean",
      nullable: false,
    },
  },
});
