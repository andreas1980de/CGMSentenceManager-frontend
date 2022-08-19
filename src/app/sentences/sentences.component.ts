import {Component, OnInit} from '@angular/core';
import {Sentence} from "../common/sentence";
import {DataService} from "../services/data.service";

@Component({
  selector: 'app-sentences',
  templateUrl: './sentences.component.html',
  styleUrls: ['./sentences.component.scss']
})
export class SentencesComponent implements OnInit {

  sentences!: Array<Sentence>;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getData().subscribe(data => {
      this.sentences = data;
    });
  }

}
