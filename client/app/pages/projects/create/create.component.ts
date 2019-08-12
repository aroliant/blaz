import { Component, OnInit } from '@angular/core';
import { ProjectsService } from 'client/app/services/projects.service';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import { ToasterService } from 'client/app/components/toaster/toaster.service';

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

  constructor(private projectsService: ProjectsService, private toaster: ToasterService, private router: Router) { }

  ngOnInit() {
  }

  createProduct(){
    this.projectsService.createproject(this.project).subscribe((res:any)=>{
      if(res.success){
        this.toaster.success('Project created','')
        this.router.navigate(["/projects"]);
      }
    })
  }

}
