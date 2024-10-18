import jwt from "jsonwebtoken";
import UserModel from "../models/usermodel.js"; // Import your User model if needed

const adminAuthMiddleware = async (req, res, next) => {
    const { token } = req.headers; // Get the token from the headers
    if (!token) {
        return res.status(403).json({ success: false, message: "Not Authorized. Login Again." });
    }
    
    try {
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET); // Verify the token
        req.body.userId = decodedToken.id; // Store user ID in request body

        // Optionally, fetch the user from the database if needed
        const user = await UserModel.findById(decodedToken.id);
        if (!user) {
            return res.status(404).json({ success: false, message: "User not found." });
        }

        // Check if the user has admin privileges
        if (user.role !== 'admin') {
            return res.status(403).json({ success: false, message: "Access denied. Admins only." });
        }

        next(); // Proceed to the next middleware or route handler
    } catch (error) {
        console.error(error);
        return res.status(500).json({ success: false, message: "Error verifying token." });
    }
};

export default adminAuthMiddleware;
