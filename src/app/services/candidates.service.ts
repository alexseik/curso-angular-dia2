import { Injectable } from '@angular/core';
import { Candidate } from '../models/candidate.model';

@Injectable({
  providedIn: 'root',
})
export class CandidatesService {
  private sort = 'experience'; // experience, name, etc
  // private sortDirection = 'asc'; // asc,desc

  private candidates: Candidate[] = [
    {
      id: 1,
      name: 'josé    pérez',
      age: 25,
      position: 'Desarrollador Junior',
      experience: 1,
      salary: 20000,
      skills: ['Java', 'SQL'],
    },
    {
      id: 2,
      name: 'Mireia García',
      age: 40,
      position: 'Desarrollador Senior',
      experience: 15,
      salary: 40000,
      skills: ['Java', 'SQL', 'Oracle', 'PL/SQL', 'Cobol', 'C++'],
    },
    {
      id: 3,
      name: 'Paco López',
      age: 30,
      position: 'Desarrolladora Intermedia',
      experience: 4,
      salary: 30000,
      skills: ['Java', 'SQL', 'Oracle', 'PL/SQL', 'Cobol', 'C++'],
    },
  ];

  constructor() {}

  getCandidates() {
    return this.candidates.sort((a: Candidate, b: Candidate) => {
      if (this.sort === 'experience') {
        return a.experience - b.experience;
      } else {
        return a.name.localeCompare(b.name);
      }
    });
  }

  updateCandidate(candidate: Candidate) {
    const candidateIndex = this.candidates.findIndex(
      (c) => c.id === candidate.id
    );
    if (candidateIndex > -1) {
      this.candidates[candidateIndex] = Object.assign(
        {},
        this.candidates[candidateIndex],
        candidate
      );
    }
  }

  setSort(sort: 'experience' | 'name') {
    this.sort = sort;
  }
}
