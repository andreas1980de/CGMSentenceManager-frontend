import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Sentence} from "../common/sentence";

@Injectable()
export class DataService{

  constructor(private readonly http: HttpClient) {
  }

  public getData(){
    return this.http.get<Array<Sentence>>(`http://localhost:8080/data/getData`);
  }

  public updateSentence(sentence: Sentence) {
    this.http.put(`http://localhost:8080/data/changeSentence/`, sentence).subscribe();
  }

}
