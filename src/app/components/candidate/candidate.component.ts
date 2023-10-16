import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  Component,
  DoCheck,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
  ViewEncapsulation,
} from '@angular/core';
import { Candidate } from '../../models/candidate.model';

@Component({
  selector: 'app-candidate',
  templateUrl: './candidate.component.html',
  styleUrls: ['./candidate.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CandidateComponent
  implements
    OnChanges,
    OnInit,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewChecked,
    OnDestroy
{
  @Input()
  set candidate(candidate: Candidate) {
    this._candidate = candidate;
    const index = candidate.name.indexOf(' ');
    if (index < 0) {
      throw new Error('The name does not contain a space');
    }
    this.name = candidate.name.slice(0, index + 1);
    this.surname = candidate.name.slice(index) + 1;
    this.cssClasses = {
      animate: false,
      'candidate-card': true,
      senior: candidate.experience < 3,
      junior: candidate.experience > 5,
    };
    this.colorStyle = candidate.experience <= 5 ? 'black' : 'white';
  }
  get candidate() {
    return this._candidate;
  }

  @Output() select = new EventEmitter<Candidate>();

  public name: string = '';
  public surname: string = '';
  public cssClasses: any = {};
  public colorStyle: string = '';
  private _candidate!: Candidate;

  ngOnChanges(changes: SimpleChanges) {
    let log: string = '';
    for (const propName in changes) {
      const changedProp = changes[propName];
      console.log({ changedProp });
      const to = JSON.stringify(changedProp.currentValue);
      if (changedProp.isFirstChange()) {
        log = `Initial value of ${propName} set to ${to}`;
      } else {
        const from = JSON.stringify(changedProp.previousValue);
        log = `${propName} changed from ${from} to ${to}`;
      }
    }
    console.log('OnChanges', log);
  }
  ngOnInit(): void {
    console.log('OnInit', { candidate: this.candidate });
  }
  ngDoCheck(): void {
    console.log('DoCheck');
  }
  ngAfterContentInit(): void {
    console.log('AfterContentInit');
  }
  ngAfterContentChecked(): void {
    console.log('AfterContentChecked');
  }
  ngAfterViewChecked(): void {
    console.log('AfterViewChecked');
  }
  ngOnDestroy(): void {
    console.log('OnDestroy');
  }

  doEdit = () => {
    this.select.emit(this.candidate);
    this.cssClasses.animate = true;
    setTimeout(() => {
      this.cssClasses.animate = false;
    }, 750);
  };
}
