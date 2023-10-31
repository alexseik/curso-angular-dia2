import { Component, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { Candidate } from './models/candidate.model';
import { CandidateComponent } from './components/candidate/candidate.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'candidates-frontend';

  @ViewChildren(CandidateComponent)
  private candidateComps!: CandidateComponent[];

  public candidatesLength: number = 0;

  candidates: Candidate[] = [
    {
      id: 1,
      name: 'José Pérez',
      age: 25,
      position: 'Desarrollador Junior',
      experience: 1,
      skills: ['Java', 'SQL'],
    },
    {
      id: 2,
      name: 'Paco López',
      age: 40,
      position: 'Desarrollador Senior',
      experience: 15,
      skills: ['Java', 'SQL', 'Oracle', 'PL/SQL', 'Cobol', 'C++'],
    },
    {
      id: 3,
      name: 'Mireia García',
      age: 30,
      position: 'Desarrolladora Intermedia',
      experience: 4,
      skills: ['Java', 'SQL', 'Oracle', 'PL/SQL', 'Cobol', 'C++'],
    },
  ];

  selectedCandidate: Candidate | null = null;

  get candidateName(): string {
    return this.selectedCandidate ? this.selectedCandidate.name : '';
  }

  get candidateExperience(): number {
    return this.selectedCandidate ? this.selectedCandidate.experience : 0;
  }

  set candidateExperience(experience: number) {
    if (this.selectedCandidate) {
      const candidateIndex = this.candidates.findIndex(
        (c) => c.name === this.selectedCandidate?.name
      );
      if (candidateIndex > -1) {
        this.candidates[candidateIndex] = Object.assign(
          {},
          this.candidates[candidateIndex],
          { experience }
        );
      }
    }
  }

  ngOnInit() {
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
    this.candidates = this.sortByExperience(this.candidates);
  }

  doSortByName() {
    this.candidates = this.sortByName(this.candidates);
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
