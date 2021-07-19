"use strict";

const {MoleculerClientError} = require("moleculer").Errors;

const bcrypt = require("bcryptjs");

const DbService = require("../mixins/db.mixin");

module.exports = {
    name: "users",

    mixins: [DbService("users")],

    settings: {

        rest: "/",

        fields: ["_id", "username", "email"],

        entityValidator: {
            username: {
                type: "string",
                min: 2,
            },
            password: {
                type: "string",
                min: 6,
            },
            email: {
                type: "email"
            },
            age: {
                type: "number",
                min: 1,
                max: 99,
                optional: true
            }
        },
    },

    actions: {
        create: {
            rest: "POST /users",

            params: {
                username: {
                    type: "string",
                },
                password: {
                    type: "string",
                },
                email: {
                    type: "email",
                },
                age: {
                    type: "number",
                }
            },

            async handler(ctx) {
                let entity = ctx.params;

                await this.validateEntity(entity);

                if (entity.username) {
                    const found = await this.adapter.findOne({username: entity.username});
                    if (found)
                        throw new MoleculerClientError("Usuário já existe!", 422, "", [{
                            message: "username already exists"
                        }]);
                }

                if (entity.email) {
                    const found = await this.adapter.findOne({email: entity.email});
                    if (found)
                        throw new MoleculerClientError("Email já existe!", 422, "", [{
                            message: "email already exists"
                        }]);
                }

                entity.password = bcrypt.hashSync(entity.password, 10);
                entity.createdAt = new Date();

                const doc = await this.adapter.insert(entity);
                const user = await this.transformDocuments(ctx, {}, doc);
                await this.entityChanged("created", user, ctx);
                return user;
            },
        },

        list: {
            rest: "GET /users"
        },
    },
}
