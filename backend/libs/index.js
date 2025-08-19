import bcrypt from "bcrypt";
import JWT from "jsonwebtoken";

// Hash a plain text password
export const hashPassword = async (userValue) => {
    // Generate a salt with 10 rounds
    const salt = await bcrypt.genSalt(10);

    // Hash the password using the salt
    const hashedPassword = await bcrypt.hash(userValue, salt);

    return hashedPassword;
};

// Compare a plain password with a hashed password
export const comparePassword = async(userPassword, password) => {
    try {
        // Check if userPassword matches the hashed password
        const isMatch = await bcrypt.compare(userPassword, password);

        return isMatch;
    } catch (error) {
        console.log(error)
    }
};

// Create a JSON Web Token for a user ID
export const creatJWT = (id) => {
    return JWT.sign(
        {
        userId: id,                 // Payload containing user ID
        },
         process.env.JWT_SECRET,    // Secret key for signing the token
        {
        expires: "1d",              // Token expires in 1 day
        }
    );
};