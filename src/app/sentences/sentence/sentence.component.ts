import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Sentence} from "../../common/sentence";
import {DataService} from "../../services/data.service";

@Component({
  selector: 'app-sentence',
  templateUrl: './sentence.component.html',
  styleUrls: ['./sentence.component.css']
})
export class SentenceComponent implements OnInit {

  @Input() data?: Sentence;

  formGroup!: FormGroup;

  constructor(
    private readonly formBuilder: FormBuilder,
    private dataService: DataService
  ) { }

  ngOnInit(): void {
    this.createForm();
  }

  private createForm() {
    this.formGroup = this.formBuilder.group({
      'id': this.data?.id,
      'n': this.data?.n,
      's': this.data?.s,
      'v': this.data?.v,
      'o': this.data?.o
    });
  }

  sendValue() {
    this.dataService.updateSentence(this.formGroup.value);
  }

}
