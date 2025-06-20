import { Component } from '@angular/core';
@Component({
 selector: 'app-tab3',
 templateUrl: 'tab3.page.html',
 styleUrls: ['tab3.page.scss'],
 standalone: false,
})
export class Tab3Page {
 student = {
 name: 'Ikaro Dantas Totia Silva',
 email: 'ikarototia@gmail.com',
 curso: 'Análise e Desenvolvimento de Sistemas',
 };
 constructor() {}
}
