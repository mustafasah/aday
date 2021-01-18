import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Candidate } from 'src/app/models/Candidate';
import { FirebaseDataService } from 'src/app/services/firebase-data.service';

@Component({
  selector: 'app-solo-candidate',
  templateUrl: './solo-candidate.component.html',
  styleUrls: ['./solo-candidate.component.scss']
})
export class SoloCandidateComponent implements OnInit {

  constructor(
    public router: Router,
    private activateRoute:ActivatedRoute, 
    private firebaseService:FirebaseDataService, 
    private toastr: ToastrService) { }

  candidate: Candidate
  isClicked: boolean = false

  ngOnInit(): void {
    this.activateRoute.params.subscribe(params=>{
      this.firebaseService.getCandidateByKey(params.key).snapshotChanges().subscribe(res => {
        const y = { ...res.payload.toJSON(), key: res.key }
        this.candidate = (y as Candidate)
      })
    })
  }

  clicled(){
    if (this.isClicked) {
      this.isClicked = false
    }else {
      this.isClicked = true
    }
  }

  save(){
    this.candidate.updatedAt = new Date().toJSON()
    this.firebaseService.updateCandidate(this.candidate).then(res => {
      this.toastr.success('<span class="tim-icons icon-bell-55" [data-notify]="icon"></span><b>Başarılı!</b> Profil Güncellendi.', '', {
        disableTimeOut: false,
        closeButton: true,
        enableHtml: true,
        toastClass: "alert alert-success alert-with-icon",
        positionClass: 'toast-' + "top" + '-' +  "center"
      })
    })
  }

  candidateDelete(){
    this.router.navigate(['/'])
    this.firebaseService.delete(this.candidate.key).then(res=>{
      this.toastr.success('<span class="tim-icons icon-bell-55" [data-notify]="icon"></span><b>Başarılı!</b> Profil Güncellendi.', '', {
        disableTimeOut: false,
        closeButton: true,
        enableHtml: true,
        toastClass: "alert alert-success alert-with-icon",
        positionClass: 'toast-' + "top" + '-' +  "center"
      })
    })
  }

}
