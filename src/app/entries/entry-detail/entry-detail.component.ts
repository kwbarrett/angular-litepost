import { Component, OnInit } from '@angular/core';
import { EntryService } from 'src/app/services/entry.service';
import { ActivatedRoute } from '@angular/router';
import { EntryWithUser } from 'src/app/models/entry-with-user';

@Component({
  selector: 'app-entry-detail',
  templateUrl: './entry-detail.component.html',
  styleUrls: ['./entry-detail.component.css']
})
export class EntryDetailComponent implements OnInit {
  entry: EntryWithUser | undefined;


  constructor(
    private entryService: EntryService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const entryId = this.route.snapshot.paramMap.get('id');

    if (entryId) {
      this.entryService.getEntryByID( entryId ).subscribe(
        (data: EntryWithUser) => {
          this.entry = data;
        },
        (error) => {
          console.error('Error fetching entry details', error);
        }
      );
    }
  }

}
