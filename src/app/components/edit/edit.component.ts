import { Component, OnInit } from '@angular/core';
import { ChaussureService } from 'src/app/services/chaussure.service';
import { Chaussure } from 'src/app/models/chaussure';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  public editChaussure: Chaussure;
  public editMarques: string[];
  public editTypes: string[];
  public isLoading: boolean;
  public horsplage: boolean;
  public maxValue: number = 48;
  public minValue: number = 34;

  constructor(private _chaussureService: ChaussureService, private _activatedRoute: ActivatedRoute, private _toastrService: ToastrService, private _router: Router) { }

  ngOnInit() {
    this.editMarques = this._chaussureService.marques;
    this.editTypes = this._chaussureService.types;
    this.isLoading = true;
    this._chaussureService.getChaussureById(+this._activatedRoute.snapshot.paramMap.get('id')).subscribe( data => {
      this.editChaussure = data;
      this.isLoading = false;
    });
  }

  onSubmit(){
    this._chaussureService.updateChaussure(this.editChaussure).subscribe(data => {
      this._toastrService.success('Modification is well Submitted!!');
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
