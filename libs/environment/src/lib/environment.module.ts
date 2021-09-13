import { NgModule, ModuleWithProviders } from '@angular/core';
import { FRUTAS_ENVIRONMENT } from './frutas.token';
import { FrutasEnvironment } from "./frutas.model";


@NgModule({})
export class EnvironmentModule {
  static withEnvironment(environment: FrutasEnvironment): ModuleWithProviders<EnvironmentModule> {
    return {
      ngModule: EnvironmentModule,
      providers: [
        {
          provide: FRUTAS_ENVIRONMENT,
          useValue: environment
        }
      ]
    }
  }
}
