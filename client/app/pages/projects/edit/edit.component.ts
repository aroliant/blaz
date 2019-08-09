import { Component, OnInit } from '@angular/core';
import { ProjectsService } from 'client/app/services/projects.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class ProjectEditComponent implements OnInit {

  constructor(private projectsService: ProjectsService,private route: ActivatedRoute) { }

  project: {}
  id

  ngOnInit() {
    this.route.params.subscribe((data) => {
      this.id = data.id
      this.projectsService.getProject(data.id).subscribe((res:any) => {
        if(res.success){
          this.project = res.project;
        }
      })
    })
  }

  

}
