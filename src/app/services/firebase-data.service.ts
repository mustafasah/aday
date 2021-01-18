import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth'
import { User } from '../models/User';
import { Candidate } from '../models/Candidate';

@Injectable({
  providedIn: 'root'
})

export class FirebaseDataService {

  private dbCandidate = '/candidates'
  private dbUser = '/users'

  candidateRef: AngularFireList<Candidate>
  userRef: AngularFireList<User>

  constructor(private db: AngularFireDatabase,private afAuth: AngularFireAuth) {
    this.candidateRef = db.list(this.dbCandidate);
    this.userRef = db.list(this.dbUser)
  }


  currentUser=async()=>await this.afAuth.currentUser

  adminCheck=async()=>(await this.afAuth.currentUser).getIdTokenResult()

  getAllCandidates(): AngularFireList<Candidate> {
   return this.candidateRef
  }

  createCandidate(Candidate: Candidate) {
    return this.candidateRef.push(Candidate)
  }

  updateCandidate(candidate: Candidate): Promise<void> {
    return this.candidateRef.update(candidate.key, candidate)
  }

  updateUser(key: string, value: User): Promise<void> {
    return this.userRef.update(key, value)
  }

  delete(key: string): Promise<void> {
    return this.candidateRef.remove(key)
  }

  deleteAll(): Promise<void> {
    return this.candidateRef.remove()
  }

  login(email: string, password: string) {
    return this.afAuth.signInWithEmailAndPassword(email, password)
  }

  logOut(): Promise<void> {
    return this.afAuth.signOut()
  }

  register(user: User) {
    return this.afAuth.createUserWithEmailAndPassword(user.email, user.password)
  }

  addUser(user: User):any {
    return this.userRef.push(user)
  }

  getUserByUidFromDb(uid: string) {
    return this.db.list("/users", q => q.orderByChild("uid").equalTo(uid))
  }

  listComingCandidates(): AngularFireList<any> {
    return this.db.list("/candidates", c => c.orderByChild("alarm").startAt(new Date().toJSON()) )
  }

  listEndedCandidates(): AngularFireList<any> {
    return this.db.list("/candidates", c => c.orderByChild("alarm").endAt(new Date().toJSON()) )
  }

  getCandidateByKey(key: string) {
    return this.db.object("/candidates/" + key)
  }


}
