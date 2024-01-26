import { CommonModule,  } from '@angular/common';


import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MenuIviComponent } from 'src/app/header';
import { ConsumoApiService } from 'src/app/service/consumo-api.service';

@Component({
  selector: 'app-pre-cadastro',
  templateUrl: './pre-cadastro.component.html',
  styleUrls: ['./pre-cadastro.component.scss'],
  standalone: true,
  imports: [CommonModule, MenuIviComponent, ReactiveFormsModule]
})
export class PreCadastroComponent implements OnInit {

  tituloSH6 = ['Modulo Projeto', 'Modulo Preparação', 'Modulo Construção', 'Pré Cadastro'];
  formulario!: FormGroup;
  developer: any[] = [];
  estado: any[] = [];
  cidade: any[] = [];
  utility: any[] = [];
  constructor(private formBuilder: FormBuilder, private consumoApi: ConsumoApiService){}

  

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      id: ['', Validators.required],
      status: ['', Validators.required],
      LastUpdate: ['', Validators.required],
      ProjectDEV: ['', Validators.required],
      Developer: [ '', Validators.required],
      ProjectIVI: ['', Validators.required],
      State: [FormArray, Validators.required],
      City: [FormArray, Validators.required],
      Utility: [FormArray, Validators.required],
      InstalCAkWAC: [ null, [Validators.required, Validators.pattern(/^-?\d*(\.\d+)?$/)]],
      InstalCAKWdc: ['', Validators.required],
      ParecerAcesso: ['', Validators.required]
   });
   this.developerGET();
   this.pegarEstado();
   this.pegarCidade();
   this.getUtility();
  }


  developerGET(): void {
    this.consumoApi.getDeveloper().subscribe({
      next: (res) => {
        this.developer = res;
        console.log(this.developer, 'Desenvolvedor')
     },
      error: (err) =>{ 
       console.log(err, 'traz erro?')
     }
    })
  }
  

   
  pegarEstado(){
    this.consumoApi.getState().subscribe({
      next: (res) => {
        this.estado = res;
        console.log(this.estado, 'qual o estado??')
      },
      error: (error) => {
        console.log(error)
      }
    });
  }

  pegarCidade(){
    this.consumoApi.getCities().subscribe({
      next: (res) => {
        this.cidade = res;
        console.log(this.cidade, 'qual a cidade');
      },
      error: (error) => {
        console.log(error);
      }
    })
  }

  getUtility(){
    this.consumoApi.getUtility().subscribe({
      next: (res) => {
        this.utility = res;
        console.log(res);
      },
      error: (error) => {
        console.log(error);
      }
    })
  }
   
}
