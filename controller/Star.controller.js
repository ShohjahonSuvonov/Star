const Star = require('../models/Star.model');

exports.createStar = async (req, res) => {
    try {
        const star = await Star.create(req.body);
        res.status(200).json({
            success: true,
            message: 'Star created successfully',
            data: star
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }   
}

exports.getAllStars = async (req, res) => {
    try {
        const stars = await Star.find();
        res.status(200).json({
            success: true,
            message: 'Stars fetched successfully',
            data: stars
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

exports.getStarById = async (req, res) => {
    try {
        const star = await Star.findById(req.params.id);
        if (!star) {
            return res.status(404).json({ error: 'Star not found' });
        }
        res.status(200).json({
            success: true,
            message: 'Star fetched successfully',
            data: star
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

exports.updateStar = async (req, res) => {
    try {
        const star = await Star.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!star) {
            return res.status(404).json({ error: 'Star not found' });
        }
        res.status(200).json({
            success: true,
            message: 'Star updated successfully',
            data: star
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}   

exports.deleteStar = async (req, res) => {
    try {    
        const star = await Star.findByIdAndDelete(req.params.id);
        if (!star) {
            return res.status(404).json({ error: 'Star not found' });
        }
        res.status(200).json({
            success: true,
            message: 'Star deleted successfully',
            data: star
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}   
