import { Component, OnInit } from '@angular/core';
// import { EntryService, EntryWithUser } from 'src/app/services/entry.service';
import { EntryService } from 'src/app/services/entry.service';
import { EntryWithUser } from 'src/app/models/entry-with-user';

@Component({
  selector: 'app-all-entries',
  templateUrl: './all-entries.component.html',
  styleUrls: ['./all-entries.component.css']
})
export class AllEntriesComponent implements OnInit {
  entries: EntryWithUser[] = [];

  constructor( private entryService: EntryService ){}

  ngOnInit(): void {
    this.entryService.getEntries().subscribe((data) => {
      this.entries = data;
    });
  }


}
