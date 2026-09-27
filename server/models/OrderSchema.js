const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
    const: createOrder = async (req, res) => {
        try {
        } catch (err) {
            console.log(err);
            res.status(500).json({
                success: false,
                message: "some error ocured!",
            });
        }
    }
});
exports.OrderSchema = OrderSchema;
