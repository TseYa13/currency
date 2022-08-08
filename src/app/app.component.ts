import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from './models/product';
import {products as data} from './data/products';
import { RouterStateSnapshot } from '@angular/router';
import { NgClass, NgIf } from '@angular/common';
import { outputAst } from '@angular/compiler';
import { __core_private_testing_placeholder__ } from '@angular/core/testing';
import { __values } from 'tslib';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  
})


export class AppComponent  {
  title = 'currency';
  products : IProduct[] = data
  isCollapsed : boolean = false;
  isCollapsed1 : boolean = false;
  isCollapsed2 : boolean = false;
  
  
  output = document.querySelector('#output') as any;
  text = document.querySelector('#text') ;
  input = document.getElementById('#input') as any ;
  

   

  constructor(){
  }
  
  toggleCollapse() {
    this.isCollapsed = !this.isCollapsed;
    this.isCollapsed1 = false;
    this.isCollapsed2 = false;
    ;
    
  
  }
  toggleCollapse1() {
    this.isCollapsed1 = !this.isCollapsed1;
    this.isCollapsed2 = false;
    this.isCollapsed = false;

  }
  toggleCollapse2() {
  this.isCollapsed2 = !this.isCollapsed2;
  this.isCollapsed = false;
    this.isCollapsed1 = false;
}

 isChange(){
    console.log(this.products[1].buy / this.input);
  
 }

}
