const express = require("express");
const { urlController } = require("../controllers")

const router = express.Router();

router
  .get("/urls", urlController.getUrls)
  .get("/url/:id", urlController.getUrl)
  .post("/urls", urlController.createUrl)

exports.urlRoutes = router