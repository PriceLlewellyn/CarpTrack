import { pool } from "../libs/database.js";
import { comparePassword, hashPassword } from "../libs/index.js";


// Handle user signup
export const signupUser = async( req, res) => {
    try {
        // Extract user details from the request body
        const { firstName, email, password } = req.body;
        
        // Check if all required fields are provided
        if(!(firstName || email || password)) {
            return res.status(404).json({
                status: "failed",
                message: "Provide Required Fields!"
            });
        }

        // Check if a user with this email already exists
        const userExist = await pool.query({
            text: "SELECT EXISTS (SELECT * FROM tbluser WHERE email = $1)",
            values: [email]
        });


        if(userExist.rows[0].userExist) {
            return res.status(409).json({
                status: "failed",
                message: "Email Address already exists. Try login"
            });
        }

         // Hash the user's password before storing it
        const hashedPassword =  await hashPassword(password)

        // Insert the new user into the database
        const user = await pool.query({
            text: `INSERT INTO tbluser (firstname, email, password) VALUES ($1, $2, $3) RETURNING *`,
            values: [firstName, email, hashedPassword],
        });

        // Remove password from user object before sending response
        user.rows[0].password = undefined

            // Send success response with user info
            res.status(201).json({
                status: "success",
                message: "User account created successfully",
                user: user.rows[0],
            });

    } catch (error) {
        console.log(error);
        res.status(500).json({status: "failed", message: error.message});
    }
};

    // Handle user signin (login)
    export const signinUser = async( req, res) => {
        try {
            // Extract login credentials from request body
            const { email, password } = req.body;

                // Find user by email
                const result = await pool.query({
                    text: `SELECT * FROM tbluser WHERE email = $1`,
                    values: [email],
                });

                const user = result.rows[0];
                
                // If user not found, send error
                if (!user) {
                    return res.status(404).json({
                        status: "failed",
                        message: "Invalid email or passwword.",
                    });
                }

                // Compare provided password with stored hashed password
                const isMatch = await comparePassword(password, user?.password)

                // If password does not match, send error
                if(!isMatch) {
                    return res.status(404).json({
                        status: "failed",
                        message: "Invalid email or passwword.",
                    });
                }

                // Generate JWT token for authenticated user
                const token = createJWT(user.id)

                user.password = undefined

                // Send success response with user info and token
                res.status(200).json({
                    status: "Success",
                    message: "Login Successfully",
                    user,
                    token,
                });

        } catch (error) {
            console.log(error);
            res.status(500).json({status: "failed", message: error.message});
        }
    };

    // export const signinUser = async( req, res) => {
    //     try {
            
    //     } catch (error) {
    //         console.log(error);
    //         res.status(500).json({status: "failed", message: error.message});
    //     }
    // };