import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'personalWebsite';
  Projects=[{
    name:"E-commerce Website",
    desc:"An E-commerce website includes online payment using Stripe",
    lang:" Spring Boot | Angular | MYSQL | JWT",
    link:"https://github.com/NesrineKata/SpringBootproject"
  },{
    name:" Travel Guide",
    desc:"A Traval Guide website",
    lang:" Asp.Net | SQLLITE",
    link:"https://github.com/NesrineKata/TravelGuideApp"
  },{
    name:"Employees Managment Plateform",
    desc:"A plateform enable employees to authenticate,upload data to AWS and display data from database",
    lang:" Express.js | Angular | MYSQL | AWS  | DOCKER | JWT",
    link:"https://bold-eclipse-1762.postman.co/workspace/workspaceEmployees~b94c1365-2d7a-4bda-8c61-f9d499737947/collection/10914291-4d8c59a8-2317-4cdb-b226-391bb3d7db7d"
  },{
    name:" timestamp-microservice",
    desc:"Timestamp microservice made on express js",
    lang:" Express.js",
    link:"https://github.com/NesrineKata/ProjectTimestamp"
  },{
    name:" urlshortener-microservice",
    desc:"Url shortener microservice made on express js",
    lang:" Express.js",
    link:"https://github.com/NesrineKata/url-shortener-microservice"
  },{
    name:"Personal Website",
    desc:"My Personal Website",
    lang:" Angular",
    link:"https://github.com/NesrineKata/personalwebsite.git"
  }
];
  Exp=[
    {
      name:"Remote internship as Backend developer at Prepense Media AB , Sweden",
      period:"July-August 2021",
      desc:`Build the databases from scratch,create API for employees and app users.
      Search algorithm. Data collection. Data scraping. User registration. Optimizing
      speed for media delivery`,
    },{
      name:"Internship at Dream Team, Tunisia",
      period:"Feb-May 2019",
      desc:`Create a video surveillance desktop application based on artificial 
      inteligence`
    },
    {
      name:"Internship at Karizma Technology, Tunisia",
      period:"Jul-Sep 2018",
      desc:`Create a mobile application to display menu for a restaurant.`
    }
  ];
  studies=[
     {
       name:"Computer Science Engineering at ",
       uni:"TEK-UP University, Tunisia",
       link:"https://tek-up.de/",
       period:"Sep 2019 - Present",
       desc:`AWS,Spring boot,Angular,Nodejs,Asp.net,Data Structures and 
       Algorithms and Agile Methodology .`
     },
     {
      name:`BSc Computer Science at `,
      link:"http://www.isimm.rnu.tn/public/",
      uni:"ISIMM University, Tunisia",
      period:"Graduated in 2019",
      desc:`Networking,OOP,Algorithms and data structures and Computer 
      Ethics.`
    }
  ]
  
}
