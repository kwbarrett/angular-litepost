import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllEntriesComponent } from './entries/all-entries/all-entries.component';
import { EntryDetailComponent } from './entries/entry-detail/entry-detail.component';

const routes: Routes = [
  { path: '', component: AllEntriesComponent },
  { path: 'entry/:id', component: EntryDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
