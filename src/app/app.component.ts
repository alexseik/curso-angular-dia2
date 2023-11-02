import { Component, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { Candidate } from './models/candidate.model';
import { CandidateComponent } from './components/candidate/candidate.component';
import { CandidatesService } from './services/candidates.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'candidates-frontend';

  currentDate = new Date();

  @ViewChildren(CandidateComponent)
  private candidateComps!: CandidateComponent[];

  public candidatesLength: number = 0;

  selectedCandidate: Candidate | null = null;

  candidates: Candidate[] = [];

  get candidateName(): string {
    return this.selectedCandidate ? this.selectedCandidate.name : '';
  }

  get candidateExperience(): number {
    return this.selectedCandidate ? this.selectedCandidate.experience : 0;
  }

  set candidateExperience(experience: number) {
    if (this.selectedCandidate) {
      this.candidatesService.updateCandidate(
        Object.assign({}, this.selectedCandidate, { experience })
      );
      // const candidateIndex = this.candidates.findIndex(
      //   (c) => c.name === this.selectedCandidate?.name
      // );
      // if (candidateIndex > -1) {
      //   this.candidates[candidateIndex] = Object.assign(
      //     {},
      //     this.candidates[candidateIndex],
      //     { experience }
      //   );
      // }
    }
  }

  constructor(public candidatesService: CandidatesService) {}

  ngOnInit() {
    this.candidates = this.candidatesService.getCandidates();
    setTimeout(() => {
      this.candidatesLength =
        !!this.candidateComps && 'length' in this.candidateComps
          ? this.candidateComps.length
          : 0;
    });
  }

  // changeInput(event: Event) {
  //   this.candidateExperience = parseInt((event.target as any).value);
  // }

  selectCandidate(candidate: Candidate) {
    this.selectedCandidate = candidate;
  }

  trackById(index: number, item: Candidate) {
    return item.id;
  }

  doSortByExperience() {
    // this.candidates = this.sortByExperience(this.candidates);
    this.candidatesService.setSort('experience');
    // this.candidates = this.candidatesService.getCandidates();
  }

  doSortByName() {
    // this.candidates = this.sortByName(this.candidates);
    this.candidatesService.setSort('name');
    // this.candidates = this.candidatesService.getCandidates();
  }

  private sortByExperience(candidates: Candidate[]): Candidate[] {
    return candidates.sort(
      (a: Candidate, b: Candidate) => a.experience - b.experience
    );
  }

  private sortByName(candidates: Candidate[]): Candidate[] {
    return candidates.sort((a: Candidate, b: Candidate) =>
      a.name.localeCompare(b.name)
    );
  }
}
