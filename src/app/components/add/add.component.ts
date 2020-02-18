import { Component, OnInit } from '@angular/core';
import { ChaussureService } from 'src/app/services/chaussure.service';
import { Chaussure } from 'src/app/models/chaussure';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  public addMarques: string[];
  public addTypes: string[];
  public newChaussure: Chaussure;
  public horsplage: boolean;
  public maxValue: number = 48;
  public minValue: number = 34;
  constructor( private _chaussureService: ChaussureService, private _toastrService: ToastrService, private _router: Router) { }

  ngOnInit() {
    this.addMarques = this._chaussureService.marques;
    this.addTypes = this._chaussureService.types;
    this.newChaussure = new Chaussure(null, '', '', '', null, new Date());
    console.log(this.addMarques);
    console.log(this.addTypes);
  }

  onSubmit(){
    this._chaussureService.addChaussure(this.newChaussure).subscribe( data => {
      this._toastrService.success('Submitted!!');
      this._router.navigate(['/dashboard']);
    });
  }

  checkRange(p: number){
    if (p > this.maxValue || p < this.minValue) {
      this.horsplage = true;
    } else {
      this.horsplage = false;
    }
  }

}
