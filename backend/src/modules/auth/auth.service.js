import { db } from "../../db/index.js";
import { users } from "../../schema/users.js";
import { eq } from "drizzle-orm";
import bcrypt from "bcrypt";


export const register = async (userData) => {
  const { name, email, password } = userData;


  // 1. Check if user already exists
  const existingUser = await db
    .select()
    .from(users)
    .where(eq(users.email, email));


  if (existingUser.length > 0) {
    throw new Error("Email already exists");
  }


  // 2. Hash password
  const hashedPassword = await bcrypt.hash(password, 10);


  // 3. Insert new user
  const newUser = await db
    .insert(users)
    .values({
      name,
      email,
      password: hashedPassword,
    })
    .returning({
      id: users.id,
      name: users.name,
      email: users.email,
      role: users.role,
    });


  // 4. Return created user
  return newUser[0];
};