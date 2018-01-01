import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ProdutoComponent } from './produto/produto.component';
import { TopoComponent } from './topo/topo.component';
import { OfertasComponent } from './ofertas/ofertas.component';
import { RodapeComponent } from './rodape/rodape.component';


@NgModule({
  declarations: [
    AppComponent,
    ProdutoComponent,
    TopoComponent,
    OfertasComponent,
    RodapeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
