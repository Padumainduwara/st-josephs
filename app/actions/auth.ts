"use server";

import { cookies } from "next/headers";

export async function login(username: string, password: string) {
  const validUser = process.env.ADMIN_USERNAME;
  const validPass = process.env.ADMIN_PASSWORD;
  const secretToken = process.env.ADMIN_SECRET_TOKEN;

  // Check Credentials
  if (username === validUser && password === validPass) {
    // AWAIT IS ADDED HERE FOR NEXT.JS 15+
    const cookieStore = await cookies(); 
    
    // Set a highly secure HTTP-Only cookie
    cookieStore.set("admin_session", secretToken as string, {
      httpOnly: true, // Prevents JavaScript access (XSS protection)
      secure: process.env.NODE_ENV === "production", // HTTPS only in production
      sameSite: "strict", // CSRF protection
      maxAge: 60 * 60 * 24, // 1 Day expiry
      path: "/",
    });
    return { success: true };
  }

  return { success: false, message: "Invalid Username or Password!" };
}

export async function logout() {
  // AWAIT IS ADDED HERE FOR NEXT.JS 15+
  const cookieStore = await cookies();
  cookieStore.delete("admin_session");
}