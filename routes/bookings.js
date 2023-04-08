'use strict';

const express = require('express');
const router = express.Router();
const bookingsService = require('./bookings-service');

router.get('/', function (req, res) {
    bookingsService.getAll((err, bookings) => {
            if (err) {
                res.status(500).send({
                    msg: err
                });
            } else if (bookings.length == 0){
            	res.status(500).send({
                    msg: "No hay ninguna reserva"
                });
            } else {
                res.status(200).send(bookings);
            }
        }
    );
});

router.post('/', function (req, res) {
    let movie = req.body;
    bookingsService.add(movie, (err, movie) => {
            if (err) {
                res.status(500).send({
                    msg: err
                });
            } else if (movie.length != 0){
                res.status(201).send({
                    msg: '¡Reserva completada!'
                });
            }
        }
    );
});


router.delete('/', function (req, res) {
    bookingsService.removeAll((err) => {
        if (err) {
            res.status(500).send({
                msg: err
            });
        } else {
            res.status(200).send({
                msg: '¡Reserva eliminada!'
            });
        }
    });
});


router.get('/:_id', function (req, res) {
    let _id = req.params._id;
    bookingsService.get(_id, (err, movie) => {
            if (err) {
                res.status(500).send({
                	msg: err
            	});
            } else if (movie.length == 0){
            	res.status(500).send({
                    msg: "La reserva no existe"
                });
            } else {
                res.status(200).send(movie);
            }
        }
    );
});


router.put('/:_id', function (req, res) {
    const _id = req.params._id;
    const updatedMovie = req.body;
    bookingsService.update(_id, updatedMovie, (err, numUpdates) => {
        if (err) {
            res.status(500).send({
                msg: err
            });
	    } else if(numUpdates.modifiedCount === 0) {
            res.status(500).send({
                msg: "Reserva no actualizada"
            });
        } else {
            res.status(200).send({
                msg: '¡Reserva actualizada!'
            });
        }
    });
});

router.delete('/:_id', function (req, res) {
    const _id = req.params._id;
    bookingsService.remove(_id, (err) => {
        if (err) {
            res.status(500).send({
                msg: err
            });
        } else {
            res.status(200).send({
                msg: 'Reserva eliminada'
            });
        }
    });
});

module.exports = router;
