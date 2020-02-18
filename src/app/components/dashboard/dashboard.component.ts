import { Component, OnInit } from '@angular/core';
import { Chaussure } from 'src/app/models/chaussure';
import { ChaussureService } from 'src/app/services/chaussure.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public chaussures: Chaussure[];
  public selectedChaussure: Chaussure;
  public isLoading: boolean;
  public nbRestant: number;
  constructor(private _chaussureService: ChaussureService, private _toastrService: ToastrService) { }

  ngOnInit() {
    this.isLoading = true;
    this._chaussureService.getChaussures().subscribe((data) => {
      this.chaussures = data;
      this.isLoading = false;
      this.nbRestant = this.chaussures.length;
    });

  }

  deleteChaussure(_chaussure: Chaussure) {
    this._chaussureService.deleteChaussure(_chaussure).subscribe(data => {
      this._chaussureService.getChaussures().subscribe((data) => {
        this.chaussures = data;
        this.nbRestant = this.chaussures.length;
        this._toastrService.success('Deleted!!');
      });
    });
  }




}
