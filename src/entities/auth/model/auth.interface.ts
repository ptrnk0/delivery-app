import { Dispatch, SetStateAction } from 'react'

export interface IUser {
  id: string
  email: string
  password: string
  name: string
  avatarPath: string
  favorite: any
}

export type TypeUserState = IUser | null

export interface IContext {
  user: TypeUserState
  setUser: Dispatch<SetStateAction<TypeUserState>>
}
