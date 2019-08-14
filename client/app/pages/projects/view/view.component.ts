import { Component, OnInit } from '@angular/core';
import { ProjectsService } from 'client/app/services/projects.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ProjectViewComponent implements OnInit {

  project = {
    projectLabels: [],
    projectName: '',
    projectDescription: ''
  };
  projectID: string;
  apps = [];

  constructor(private projectsService: ProjectsService, private route: ActivatedRoute) { }

  ngOnInit() {

    this.route.params.subscribe((data) => {
      this.projectID = data.projectID;
      this.projectsService.getProject(this.projectID).subscribe((res: any) => {
        if (res.success) {
          this.project = res.project;
          this.apps = res.apps;
        }
      });
    });

  }

}
