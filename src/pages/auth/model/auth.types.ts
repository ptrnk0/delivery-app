import { IUser } from '@/entities/auth'

export interface IAuthFormData extends Pick<IUser, 'email' | 'password'> {}
