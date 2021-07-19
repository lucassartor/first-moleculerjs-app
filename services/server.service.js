"use strict";

const ApiGateway = require("moleculer-web");

module.exports = {
    name: "server",

    mixins: [ApiGateway],

    settings: {
        port: 3000,

        routes: [{
            path: "/api",

            aliases: {
                "GET users": "users.list",
                "POST users": "users.create",
            }
        }]
    },
}
