import { Component, OnInit } from '@angular/core';
import { ProjectsService } from 'client/app/services/projects.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ProjectListComponent implements OnInit {

  projects : []

  constructor(private projectsService: ProjectsService) { }

  ngOnInit() {
    this.projectsService.getProjects().subscribe((res:any)=>{
      if(res.success){
        this.projects = res.projects;
      }
    })
  }

}
