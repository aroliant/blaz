import { Component, OnInit } from '@angular/core';
import { ProjectsService } from 'client/app/services/projects.service';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class ProjectCreateComponent implements OnInit {

  project = {
    projectName: "",
    projectDescription: "",
    createdBy: "123"
  }

  constructor(private projectsService: ProjectsService,private router: Router) { }

  ngOnInit() {
  }

  createProduct(){
    this.projectsService.createproject(this.project).subscribe((res:any)=>{
      if(res.success){
        alert("Project Created");
        this.router.navigate(["/projects"]);
      }
    })
  }

}
