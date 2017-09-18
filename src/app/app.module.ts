import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';
import {HttpModule} from '@angular/http';

import {AppComponent} from './templates/nav/app.component';
import {TaskComponent} from './templates/task/task.component';
import {BalanceComponent} from './templates/balance/balance.component';
import {CompanyComponent} from './templates/company/company.component';
import {FinanceComponent} from './templates/finance/finance.component';
import {StatisticComponent} from './templates/statistic/statistic.component';
import {FilterPipe} from './templates/task/filter.pipe';
import {NightPipe} from './templates/task/night.pipe';
import {PersonalPipe} from './templates/task/personal.pipe';
import {ImmediatePipe} from './templates/task/immediate.pipe';

const appRoutes: Routes =[
    
    { path: '', component: TaskComponent},
    { path: 'balance', component: BalanceComponent },
    { path: 'company', component: CompanyComponent },
    { path: 'finance', component: FinanceComponent },
    { path: 'statistic', component: StatisticComponent },
    { path: '**', redirectTo: 'balance'}
];
 
@NgModule({
    imports:[BrowserModule,  RouterModule.forRoot(appRoutes), HttpModule, FormsModule],
    declarations: [AppComponent, TaskComponent, BalanceComponent, CompanyComponent, FinanceComponent, StatisticComponent, FilterPipe, PersonalPipe, ImmediatePipe, NightPipe],
    bootstrap: [AppComponent]
})
export class AppModule{}