const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const port = process.env.PORT || 3000;
const {
  routeAccounts,
  routeItems,
  routeCart,
  routeOrder,
  routeTransactions,
} = require("./routers/router");
