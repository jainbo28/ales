const router = require('express').Router();
const { app } = require('apico/server.js');
const mysql = require('mysql2');

/** Declare routes for Router */

// http://localhost:3000/coach/add
router.post('/add', function(req, res) {
    let { firstName, lastName, email, typeTrening, idclient } = req.body; // Добавили idClient для связи с клиентом
    // Create a pool
    const pool = mysql.createPool({
        host: 'localhost',
        user: 'root',
        password: 'yeb123456',
        database: 'ales'
    });

    // insert into coach using body object. Use callbacks to handle errors
    pool.query('INSERT INTO coach (firstName, lastName, email, typeTrening, idclient) VALUES(?,?,?,?,?)',
        [firstName, lastName, email, typeTrening, idclient], // Вставляем idClient в запрос
        (err, result) => {
            // Close the pool
            pool.end();

            if (err) res.json(err);

            res.json(result);
        });
});

// Create a prefix for tasks routes
app.use('/coach', router);
