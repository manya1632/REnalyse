"use server";

import prisma from "@/lib/prisma";
import bcrypt from "bcrypt";
import { redirect } from "next/navigation";

export async function registerUser(formData: FormData) {
  const firstName = formData.get("firstName") as string;
  const lastName = formData.get("lastName") as string;
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const role = formData.get("role") as string; // 'doctor' | 'user' | 'worker'
  
  // Conditional fields
  const registrationNumber = formData.get("registrationNumber") as string | null;
  const institution = formData.get("institution") as string | null;

  if (!email || !password) return { error: "Missing fields" };

  const hashedPassword = await bcrypt.hash(password, 12);

  try {
    await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        firstName,
        lastName,
        // Map frontend role to Prisma Enum
        role: role === 'doctor' ? 'DOCTOR' : role === 'worker' ? 'WORKER' : 'PATIENT',
        registrationNumber,
        institution,
      },
    });
    console.log("🚀 User created successfully:");
  } catch (error: any) {
    if (error.code === 'P2002') return { error: "Email already registered." };
    return { error: "Something went wrong. Please try again." };
  }

  redirect("/login");
}