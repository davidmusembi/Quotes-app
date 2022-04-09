import { Component, OnInit } from '@angular/core';
import { Quotes } from 'src/app/models/quotes';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

   quotes:Quotes[]=[
        new Quotes('Programming is not about what you know; it is about what you can figure out.','Chris Pine','David Musembi', new Date(2022,3,9),0,0),
        new Quotes('The only way to learn a new programming language is by writing programs in it.','Dennis Ritchie','David Musembi',new Date(2022,1,9),0,0),
        new Quotes('Sometimes it is better to leave something alone, to pause, and that is very true of programming.','Joyce Wheeler', 'David Musembi',new Date(2021,4,9),0,0),
        new Quotes('Testing leads to failure, and failure leads to understanding.',' Burt Rutan', 'Brian Musembi',new Date(2022,4,9),0,0),
        new Quotes('The best error message is the one that never shows up.','homas Fuchs','David Musembi',new Date(2022,4,9),0,0),
        new Quotes('The most damaging phrase in the language is.. it is always been done this way','Grace Hopper', 'David Musembi',new Date(2022,4,9),0,0),
    ]
    
    //function for ading a new quote
    addNewQuote(quote: any) {
       
        this.quotes.push(quote)
      }

    //function for toggling small text
    
    toggleDetails(index: number):void {
        
        this.quotes[index].showDetails = !this.quotes[index].showDetails;
      }  

    //function for deleting quote

    deletingQuote(deleteQuote: any, index: any){
        if(deleteQuote){
            let toDelete =confirm("Are you sure you want to delete this quote?")

            if(toDelete){
                this.quotes.splice(index,1)
            }
        }
    }

    //function for getting the quote with the highest upvotes
    // initialValue:number
    // newValue:number
    // counter:number
    
    // highlightHighest(){

    //    this.initialValue=0
    //    this.newValue=0

    //    for (this.counter=0; this.counter<this.quotes.length; this.counter++){
    //        this.newValue =this.quotes[this.counter].upVote;

    //        if(this.newValue > this.initialValue){
    //            this.initialValue =this.newValue
    //        }
    //        return this.initialValue
    //    }


    // }
    
    highlightHighest() {
        
        let quotesUpvote = []
        let highestUpVote: number
        for (let j = 0; j < this.quotes.length; j++) {
          quotesUpvote.push(this.quotes[j].upVote)
        }
        
            //The sort callback has to return

            // a negative number if a < b
            // 0 if a === b
            // a positive number if a > b

        quotesUpvote.sort(function (a, b) {
            //if b>a then b-a>0 and will return a positive number
          return b - a
        })
        highestUpVote = quotesUpvote[0]
        return highestUpVote;
      }
    
  constructor() { }

  ngOnInit(): void {
  }

}
