const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Planet = require('../models/Planet.model');

exports.createPlanet = async (req, res) => {
    try {
        const planet = await Planet.create(req.body);
        res.status(200).json({
            success: true,
            message: 'Planet created successfully',
            data: planet
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }   
}

exports.getAllPlanets = async (req, res) => {
    try {
        const planets = await Planet.find();
        res.status(200).json({
            success: true,
            message: 'Planets fetched successfully',
            data: planets
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

exports.getPlanetById = async (req, res) => {
    try {
        const planet = await Planet.findById(req.params.id);
        if (!planet) {
            return res.status(404).json({ error: 'Planet not found' });
        }
        res.status(200).json({
            success: true,
            message: 'Planet fetched successfully',
            data: planet
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

exports.updatePlanet = async (req, res) => {
    try {
        const planet = await Planet.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!planet) {
            return res.status(404).json({ error: 'Planet not found' });
        }
        res.status(200).json({
            success: true,
            message: 'Planet updated successfully',
            data: planet
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}   

exports.deletePlanet = async (req, res) => {
    try {    
        const planet = await Planet.findByIdAndDelete(req.params.id);
        if (!planet) {
            return res.status(404).json({ error: 'Planet not found' });
        }
        res.status(200).json({
            success: true,
            message: 'Planet deleted successfully',
            data: planet
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}   