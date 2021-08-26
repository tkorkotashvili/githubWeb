import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-repository-contributors',
  templateUrl: './repository-contributors.component.html',
  styleUrls: ['./repository-contributors.component.scss']
})
export class RepositoryContributorsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private store: Store, private _router: Router) { }

  ngOnInit(): void {
  }

}
