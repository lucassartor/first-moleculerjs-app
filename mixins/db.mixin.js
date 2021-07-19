"use strict";

const path = require("path");
const mkdir = require("mkdirp").sync;

const DbService = require("moleculer-db");

module.exports = function (collection) {
    mkdir(path.resolve("./data"));

    return {
        mixins: [DbService],
        adapter: new DbService.MemoryAdapter({ filename: `./data/${collection}.db` }),

        methods: {
            async entityChanged(type, json, ctx) {
                await this.clearCache();
                const eventName = `${this.name}.entity.${type}`;
                await this.broker.emit(eventName, {meta: ctx.meta, entity: json});
            }
        }
    };
};
