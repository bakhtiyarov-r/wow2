import { Component, OnInit} from '@angular/core';
import { Response} from '@angular/http';
import { HttpService} from '../../http.service';
import {Task} from '../../task';
  
@Component({
    selector: 'task-app',
    styleUrls: ['/task.css'],
    templateUrl: '/task.html',
    providers: [HttpService]
})

export class TaskComponent implements OnInit { 

   tasks: Task[]=[];

   constructor(private httpService: HttpService){}

   ngOnInit(){
       this.httpService.getData()
          .subscribe((data: Response) => this.tasks=data.json().task);
        
   }
   
   getCount(count: any) {       
    
      return this.tasks.filter(v => v.status[count] == true).length;       
      
   }

   

}