import { Component, OnInit } from '@angular/core';
import { ProjectsService } from 'client/app/services/projects.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ProjectViewComponent implements OnInit {

  project : {}
  id: String

  constructor(private projectsService: ProjectsService,private route: ActivatedRoute) { }

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
