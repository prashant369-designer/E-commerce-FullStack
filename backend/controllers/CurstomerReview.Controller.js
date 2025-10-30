const customerReview = require("../models/CustomerReview.models");

exports.createReview = async (req, res) => {
    try {
        const review = await customerReview.create(req.body);
        res.status(201).json(review);
    } catch (error) {
        console.error("Error creating review:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};

exports.getReviews = async (req, res) => {
    try {
        const reviews = await customerReview.find();
        res.status(200).json(reviews);
    } catch (error) {
        console.error("Error fetching reviews:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};

exports.getReviewsById = async (req, res) => {
    try {
        const review = await customerReview.findById(req.params.id);
        if (!review) {
            return res.status(404).json({ error: "Review not found" });
        }
        res.status(200).json(review);
    } catch (error) {
        console.error("Error fetching review:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};

exports.deleteReview = async (req, res) => {
    try {
        const deletedReview = await customerReview.findByIdAndDelete(req.params.id);
        if (!deletedReview) {
            return res.status(404).json({ error: "Review not found" });
        }
        res.status(200).json({ message: "Review deleted successfully" });
    } catch (error) {
        console.error("Error deleting review:", error);
        res.status(500).json({ error: "Internal server error" });
    }
}

exports.updateReview = async (req, res) => {
    try {
        const updatedReview = await customerReview.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedReview) {
            return res.status(404).json({ error: "Review not found" });
        }
        res.status(200).json(updatedReview);
    } catch (error) {
        console.error("Error updating review:", error);
        res.status(500).json({ error: "Internal server error" });
    }
}