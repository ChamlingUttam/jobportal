import type { User } from "../../types"

type shapeOfAuth = {
    user : User | null
    isAuthenticated : boolean,
    loading :boolean,
    error : string | null,
    authInitialized:boolean
}

export type {shapeOfAuth}