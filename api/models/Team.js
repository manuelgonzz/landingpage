module.exports = {
    attributes: {
        greeting: { type: "string" },
        postGreeting: { type: "string" },
        name: { type: "string" },
        role: { type: "string" },
        picture: { type: "string" },
        socials: { type: "json", columnType: "array" }
    }
};
