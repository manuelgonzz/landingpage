module.exports = {
    attributes: {
        name: { type: "string" },
        description: { type: "string" },
        tag: { type: "string" },
        pictures: { type: "json", columnType: "array" },
        pricing: { type: "string" },
        stacks: { type: "json", columnType: "array" }
    }
};
