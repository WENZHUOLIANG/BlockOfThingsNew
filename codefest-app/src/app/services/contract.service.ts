import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { RequestOptions, Headers } from "@angular/http";
import { HttpHeaders } from "@angular/common/http";
import { map } from "rxjs/operators";
 
@Injectable({
  providedIn: 'root',
})
 
export class ContractService {
 
  private url = "https://team3-tn6flb-api.azurewebsites.net/api/v1/contracts/10";
 
  constructor(private http: HttpClient) { }
 
  ngOnInit() {
  }
 
  getContract(): Observable<any>{
   
    const token: string = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IjdfWnVmMXR2a3dMeFlhSFMzcTZsVWpVWUlHdyIsImtpZCI6IjdfWnVmMXR2a3dMeFlhSFMzcTZsVWpVWUlHdyJ9.eyJhdWQiOiIwNTM3NWUzMS0xMzM4LTQ5NDUtYTNhOS0zYzYyYzQyYjAzMDkiLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC80YzU5NmFlOS1kODgwLTQ0NzgtYjAwZS1lMGRkNDM2OTdmZTEvIiwiaWF0IjoxNTMzMzEzNjI3LCJuYmYiOjE1MzMzMTM2MjcsImV4cCI6MTUzMzMxNzUyNywiYW1yIjpbIndpYSJdLCJlbWFpbCI6Ildlbi5MaWFuZ0B1c2Zvb2RzLmNvbSIsImZhbWlseV9uYW1lIjoiTGlhbmciLCJnaXZlbl9uYW1lIjoiV2VuIiwiaWRwIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvODMyYzZiYTktM2Y3OC00NWYzLWI0YjAtZDI4YzI4OTNjYThhLyIsImlwYWRkciI6IjEwNC4xMjkuMTk2LjIxMCIsIm5hbWUiOiJXZW4uTGlhbmdAdXNmb29kcy5jb20iLCJub25jZSI6ImVhNWQ2M2U1LWFmZGMtNDUwZS1iOTIzLTE0MmY3MjU4MjQyZCIsIm9pZCI6IjhkMDA1OTM0LTUxY2MtNGUwMC1iNTJmLWNiZmQ4NGY2OWMxZSIsInJvbGVzIjpbIkFkbWluaXN0cmF0b3IiXSwic3ViIjoiaXRKTGQ0RHMyMHVvVEVzRzBhY05URll6NGZDa1gtLURrU0lGRU9iN3pXWSIsInRpZCI6IjRjNTk2YWU5LWQ4ODAtNDQ3OC1iMDBlLWUwZGQ0MzY5N2ZlMSIsInVuaXF1ZV9uYW1lIjoiV2VuLkxpYW5nQHVzZm9vZHMuY29tIiwidXRpIjoibC14cFh2RHE0MDJJLUljQjEzc1RBQSIsInZlciI6IjEuMCJ9.f6egr3-CaDONAf0gg5kYj61hlhr9u0PORkmpPq5xfmzej9MGJMxVMVSijRa1CQb7411m6PaotNI80zgmG6hB2O_reEbSXLqlt-jr9TDoG0M6PQ1yhQhlA2QDimbYcMQ0TdZxVVWKRbFxXuAe_mlH1ZXxyy5JHWVv100S6Lqk5LO_TaaTrFBJ8WXpHQkvpqZmcfmSXCYhmwhgbmQfjyT0NyITIpjBVNz-ofdVcU-fA5UUD7SBsIFKUTa8C5c3EAewkuuL6h1lUMpHnpZfQ4sNzxq6JZICsb_S1Hc2_qOwfcwRUqXb69x18Aha1rSQLp6rcOE2MkpwGITKgGCxbMa92g";
   
    var headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    headers = headers.append('Authorization', `Bearer ${token}`);
    const httpOptions = {
      headers: headers
    }
    // const httpOptions = {
    //   headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    // };
    return this.http.get(this.url, httpOptions).pipe(
      map(data => data)
    );
  }
 
  handleEror(){
 
  }
 
}

 