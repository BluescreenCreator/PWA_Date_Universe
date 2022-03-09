import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { SwPush, SwUpdate } from '@angular/service-worker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Date Universe';

  constructor(
    swUpdate: SwUpdate,
    private swPush: SwPush,
    private httpClient: HttpClient
  ) {
    swUpdate.available.subscribe(() => {
      if (confirm('Updates available, do you want to update your Date List?')) {
        location.reload();
      }
    });
  }

  async subscribe() {
    const subscription = await this.swPush.requestSubscription({
      serverPublicKey:
        'BLI8zF79Z1kCQq72RgzYs0WtQ0ojY3XCqPwmgcNP-8LJIeXRep9sv6h41hErJDewrm3WDbFMPyyPhYO7-ClXabQ',
    });

    await this.httpClient
      .post('http://localhost:3030/push', subscription.toJSON())
      .toPromise();
  }
}
