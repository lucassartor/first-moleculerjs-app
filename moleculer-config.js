"use strict";

module.exports = {
    namespace: "main",
    transporter: null,
    logger: true,
    logLevel: "info",
    cacher: {
        type: "memory",
        options: {
            maxParamsLength: 100
        }
    },

    validator: true
};
