import express, { Router } from "express";

const router = express.Router();

router.post("/register", createUser);
