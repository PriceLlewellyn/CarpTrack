import express from "express";
import { PrismaClient } from './src/generated/prisma/index.js'

const prisma = new PrismaClient();
const app = express();

//json
app.use(express.json());

//cors
app.use((req, res, next) => {
    res.setheader('Access-Control-Allow-Origin', `*`);
    res.setheader('Access-Control-Allow-Methods', `GET, POST, PUT, DELETE`);
    res.setheader('Access-Control-Allow-Headers', `Content-Type`);
    next();
});


//test api
app.get('/test', (req, res) => {
    try {
        res.status(200).json({ message: 'API is working' });
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
});

//get all users
app.get('/users', async (req, res) => {
    try {
        const users = await prisma.user.findMany();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
});

//get user by id
app.get('/users/:id', async (req, res) => {
    try {
        const user = await prisma.user.findUnique({
            where: {
                id: number(req.params.id),
            },
        });
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
});

//creat user
app.post('/users', async (req, res) => {
    try {
        const user = await prisma.user.create({
            data: {
                name: req.body.name,
                email: req.body.email
            },
        });
        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
});

//update user
app.put('/users/:id', async (req, res) => {
    try {
        const user = await prisma.user.update({
            where: {
                id: Number(req.params.id),
            },
            data: {
                name: req.body.name,
                email: req.body.email
            },
        });
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
});

//delete user
app.delete('/users/:id', async (req, res) => {
    try {
        const user = await prisma.user.delete({
            where: {
                id: number(req.params.id),
            },
        });
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
});

//start server
const PORT = process.nextTick.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));