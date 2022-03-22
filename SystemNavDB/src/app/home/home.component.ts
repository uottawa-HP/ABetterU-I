import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../authentication.service';
import {Router, NavigationEnd} from '@angular/router';
import { filter } from 'rxjs/operators';
import { ConfigService } from '../config.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private AuthService: AuthenticationService, private c: ConfigService) {
    // this.router.events
    //   .pipe(filter((rs): rs is NavigationEnd => rs instanceof NavigationEnd))
    //   .subscribe(event => {
    //     if (
    //       event.id === 1 &&
    //       event.url === event.urlAfterRedirects
    //     ) {
    //       this.router.navigateByUrl('/home', { skipLocationChange: true }).then(() => {
    //       this.router.navigate(['/home']);
    //       });
    //     }
    //   })




  }

  ngOnInit(): void {
    this.c.getData().subscribe(data => {
      console.warn(data);
    });
  }


  // async refresh(): Promise<void> {
  //   this.router.navigateByUrl('/home', { skipLocationChange: true }).then(() => {
  //   this.router.navigate(['/home']);
  //   });
  // }

  async logout(): Promise<boolean> {
    return await this.AuthService.logout();

  }




}
