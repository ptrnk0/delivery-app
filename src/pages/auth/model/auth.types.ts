import { IUser } from '@/entities/session'

export interface IAuthFormData extends Pick<IUser, 'email' | 'password'> {}
