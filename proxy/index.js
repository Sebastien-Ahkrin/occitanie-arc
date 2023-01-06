const Fastify = require("fastify");
const proxy = require("@fastify/http-proxy");
const cors = require("@fastify/cors");

const server = Fastify();

server.register(cors, { origin: true });
server.register(proxy, {
  upstream: "",
  prefix: "/api",
});

server.listen({ port: 3001 });
