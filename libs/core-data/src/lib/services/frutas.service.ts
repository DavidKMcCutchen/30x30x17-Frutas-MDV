import { Inject, Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Fruta } from "@frutas/api-interfaces";
import { FrutasEnvironment, FRUTAS_ENVIRONMENT } from "@frutas/environment";


@Injectable({
  providedIn: 'root'
})
export class FrutasService {
  model = 'frutas';

  constructor(
    private httpClient: HttpClient,
    @Inject(FRUTAS_ENVIRONMENT) private environment: FrutasEnvironment
  ) {}

  all() {
    return this.httpClient.get<Fruta[]>(this.getUrl())
  };

  find(frutaId: string) {
    return this.httpClient.get<Fruta>(this.getUrlById(frutaId))
  };

  create(frutas: Fruta) {
    return this.httpClient.post<Fruta>(this.getUrl(), frutas)
  };

  update(frutas: Fruta) {
    return this.httpClient.patch<Fruta>(this.getUrlById(frutas.id), frutas)
  };

  delete({ id }: Fruta) {
    return this.httpClient.delete<Fruta>(this.getUrlById(id))
  };

  private getUrl() {
    return `${this.environment.apiUrl}${this.model}`
  };

  private getUrlById(id) {
    return `${this.getUrl()}/${id}`
  };
}
