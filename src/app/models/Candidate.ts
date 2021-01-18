import { User } from "./User"

export class Candidate {
    key: string
    name: String
    email: String
    no: Number
    uid: string
    profile_image: String = "default.jpg"
    about: string
    content: string
    website: string
    place: string
    linkedin: string
    cretedAt: any
    updatedAt: any
    alarm: Date
    alarmNote: string
    user: User
    accepted: []
}