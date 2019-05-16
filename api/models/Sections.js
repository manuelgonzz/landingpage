module.exports = {
    attributes: {
        quote: { type: "json" },
        paragraphOne: { type: "string" },
        paragraphTwo: { type: "string" },
        tag: { type: "string" },
        pricing: { type: "string" },
        stacks: { type: "json", columnType: "array" }
    }
};
