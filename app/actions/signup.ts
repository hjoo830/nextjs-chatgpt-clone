'use server';

import bcrypt from 'bcryptjs';
import { getUserByEmail } from '../data/user';
import { SignUpSchema } from '../schemas/auth';
import db from '@/db';
import { user } from '@/db/schema';
import { redirect } from 'next/navigation';

export const signUp = async (_: unknown, formData: FormData) => {
  const validatedFields = SignUpSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    password: formData.get('password'),
  });

  if (!validatedFields.success) {
    return {
      errorMessage: '잘못된 입력값이 있습니다.',
    };
  }

  const { email, name, password } = validatedFields.data;

  try {
    const existingUser = await getUserByEmail(email);

    if (existingUser) {
      return {
        errorMessage: '이미 존재하는 사용자 입니다.',
      };
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await db.insert(user).values({ name, email, password: hashedPassword });
  } catch (error) {
    console.error('error', error);
    return { errorMessage: '문제가 발생했습니다.' };
  }
  redirect('/login');
};
