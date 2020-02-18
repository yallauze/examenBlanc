import { Component, OnInit } from '@angular/core';
import { Chaussure } from 'src/app/models/chaussure';
import { ChaussureService } from 'src/app/services/chaussure.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  public isLoading: boolean;
  public chaussureAfficher: Chaussure;
  constructor(private _chaussureService: ChaussureService, private _activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.isLoading = true;
    this._chaussureService.getChaussureById(+this._activatedRoute.snapshot.paramMap.get('id')).subscribe(data => {
      this.chaussureAfficher = data;
      this.isLoading = false;
    });
  }

}
