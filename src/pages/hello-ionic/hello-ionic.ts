import { Component } from '@angular/core';
import { FingerprintAIO } from '@ionic-native/fingerprint-aio';

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {
  constructor(private faio: FingerprintAIO) {

  }

  ionViewDidLoad(){
    this.faio.show({
      clientId: 'Fingerprint-Test',
      clientSecret: 'password', //Only necessary for Android
      disableBackup:true,  //Only for Android(optional)
      localizedFallbackTitle: 'Use Pin', //Only for iOS
      localizedReason: 'Please authenticate' //Only for iOS
    })
    .then((result: any) => console.log(result))
    .catch((error: any) => console.log(error));
  }


}
