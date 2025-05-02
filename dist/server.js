// server/server.ts
import * as Path2 from "node:path";
import express2 from "express";

// server/routes/blogRoutes.ts
import express from "express";

// server/db/knexfile.js
import * as Path from "node:path";
import * as URL from "node:url";
var __filename = URL.fileURLToPath(import.meta.url);
var __dirname = Path.dirname(__filename);
var knexfile_default = {
  development: {
    client: "sqlite3",
    useNullAsDefault: true,
    connection: {
      filename: Path.join(__dirname, "dev.sqlite3")
    },
    pool: {
      afterCreate: (conn, cb) => conn.run("PRAGMA foreign_keys = ON", cb)
    }
  },
  test: {
    client: "sqlite3",
    useNullAsDefault: true,
    connection: {
      filename: ":memory:"
    },
    migrations: {
      directory: Path.join(__dirname, "migrations")
    },
    seeds: {
      directory: Path.join(__dirname, "seeds")
    },
    pool: {
      afterCreate: (conn, cb) => conn.run("PRAGMA foreign_keys = ON", cb)
    }
  },
  production: {
    client: "sqlite3",
    useNullAsDefault: true,
    connection: {
      filename: "/app/storage/prod.sqlite3"
    },
    pool: {
      afterCreate: (conn, cb) => conn.run("PRAGMA foreign_keys = ON", cb)
    }
  }
};

// server/db/connection.ts
import knex from "knex";
var environment = process.env.NODE_ENV || "development";
var config = knexfile_default[environment];
var connection = knex(config);
var connection_default = connection;

// server/db/functions/blog-functions.ts
async function getAllBlogs() {
  try {
    const result = await connection_default("blog").select(
      "id",
      "name",
      "content"
    );
    return result;
  } catch (error) {
    console.error("failed to get all blogs", error);
    return null;
  }
}
async function getBlogById(id) {
  try {
    const result = await connection_default("blog").where("blog.id", id).select("id", "name", "content").first();
    return result;
  } catch (error) {
    console.error("failed to get blog", error);
    return null;
  }
}

// server/routes/blogRoutes.ts
var router = express.Router();
var blogRoutes_default = router;
router.get("/", async (req, res, next) => {
  try {
    const port2 = await getAllBlogs();
    res.json(port2);
  } catch (e) {
    next(e);
  }
});
router.get("/:id", async (req, res, next) => {
  const id = Number(req.params.id);
  try {
    const port2 = await getBlogById(id);
    res.json(port2);
  } catch (e) {
    next(e);
  }
});

// server/server.ts
var server = express2();
server.use(express2.json());
server.use("/api/v1/blog", blogRoutes_default);
if (process.env.NODE_ENV === "production") {
  server.use(express2.static(Path2.resolve("public")));
  server.use("/assets", express2.static(Path2.resolve("./dist/assets")));
  server.get("*", (req, res) => {
    res.sendFile(Path2.resolve("./dist/index.html"));
  });
}
var server_default = server;

// server/index.ts
var port = process.env.PORT || 3e3;
server_default.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
