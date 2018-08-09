import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/internal/Observable';
import { AngularFireDatabase } from 'angularfire2/database';
import {MatSnackBar} from '@angular/material';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';

const LOADING_IMAGE_URL = 'https://www.google.com/images/spin-32.gif';
const PROFILE_PLACEHOLDER_IMAGE_URL = '/assets/images/profile_placeholder.png';

@Component({
  selector: 'app-notification-chat',
  templateUrl: './notification-chat.component.html',
  styleUrls: ['./notification-chat.component.css']
})
export class NotificationChatComponent implements OnInit {

  user: Observable<firebase.User>;
  currentUser: firebase.User;
  messages: Observable<any[]>;
  profilePicStyles: {};
  topics = '';
  value = '';
  currentuID;
  selectedUser: string;
  selecteduID = this.currentuID;
  userIDs: Observable<any[]>;
  userRead: Observable<any[]>;

  constructor(public db: AngularFireDatabase, public afAuth: AngularFireAuth, public snackBar: MatSnackBar) {
    this.user = afAuth.authState;
    this.user.subscribe((user: firebase.User) => {
      console.log(user);
      this.currentUser = user;

      if (user) { // User is signed in!
        this.currentuID = firebase.auth().currentUser.uid;
        this.profilePicStyles = {
          'background-image':  `url(${this.currentUser.photoURL})`
        };

        // We load currently existing chat messages.
        this.userIDs = this.db.list<any>('/users/userIDs', ref => ref.limitToLast(12)).valueChanges();
        this.userIDs.subscribe((users) => {
          console.log('users');
          console.log(this.userIDs);
          // Calculate list of recently discussed topics
          const topicsMap = {};
          const topics = [];
          let hasEntities = false;
          users.forEach((messages) => {
            if (messages.entities) {
              for (const entity of messages.entities) {
                if (!topicsMap.hasOwnProperty(entity.name)) {
                  topicsMap[entity.name] = 0;
                }
                topicsMap[entity.name] += entity.salience;
                hasEntities = true;
              }
            }
          });
          if (hasEntities) {
            for (const name of Object.keys(topicsMap)) {
              topics.push({ name, score: topicsMap[name] });
            }
            topics.sort((a, b) => b.score - a.score);
            this.topics = topics.map((topic) => topic.name).join(', ');
          }
          // Make sure new message scroll into view
          setTimeout(() => {
            const messageList = document.getElementById('messages');
            messageList.scrollTop = messageList.scrollHeight;
            document.getElementById('message').focus();
          }, 500);
        });


        // We save the Firebase Messaging Device token and enable notifications.
        this.saveMessagingDeviceToken();
      } else { // User is signed out!
        this.profilePicStyles = {
          'background-image':  PROFILE_PLACEHOLDER_IMAGE_URL
        };
        this.topics = '';
      }
    });
  }
  onSelectionChange() {
    this.selecteduID = this.selectedUser;
    this.messages = this.db.list<any>('/messaging/' + this.currentuID + '/' + this.selecteduID, ref => ref.limitToLast(12)).valueChanges();
    console.log(this.selecteduID);
    console.log('asfpioahfpioasfuioasfuiobasuiolfbasuilfbasuilf');
    this.messages.subscribe((messages) => {
      console.log('messages');
      console.log(this.messages);
      // Calculate list of recently discussed topics
      const topicsMap = {};
      const topics = [];
      let hasEntities = false;
      messages.forEach((message) => {
        if (message.entities) {
          for (const entity of message.entities) {
            if (!topicsMap.hasOwnProperty(entity.name)) {
              topicsMap[entity.name] = 0;
            }
            topicsMap[entity.name] += entity.salience;
            hasEntities = true;
          }
        }
      });
      if (hasEntities) {
        for (const name of Object.keys(topicsMap)) {
          topics.push({ name, score: topicsMap[name] });
        }
        topics.sort((a, b) => b.score - a.score);
        this.topics = topics.map((topic) => topic.name).join(', ');
      }

      // Make sure new message scroll into view
      setTimeout(() => {
        const messageList = document.getElementById('messages');
        messageList.scrollTop = messageList.scrollHeight;
        document.getElementById('message').focus();
      }, 500);
    });
  }
  login() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  logout() {
    this.afAuth.auth.signOut();
  }

  // TODO: Refactor into text message form component
  update(value: string) {
    this.value = value;
  }

  // Returns true if user is signed-in. Otherwise false and displays a message.
  checkSignedInWithMessage() {
    // Return true if the user is signed in Firebase
    if (this.currentUser) {
      //      // if (this.currentUser = this.userRead)
      return true;
    }

    this.snackBar
      .open('You must sign-in first', 'Sign in', {
        duration: 5000
      })
      .onAction()
      .subscribe(() => this.login());

    return false;
  }

  // TODO: Refactor into text message form component
  saveMessage(event: any, el: HTMLInputElement) {
    event.preventDefault();

    if (this.value && this.checkSignedInWithMessage()) {
      // Add a new message entry to the Firebase Database.
      const messages = this.db.list('/messaging/' + this.selecteduID + '/' + this.currentuID);
      const saveMessageSelf = this.db.list('/messaging/' + this.currentuID + '/' + this.selecteduID);
      const users = this.db.list('/users/userIDs');
      messages.push({
        name: this.currentUser.displayName,
        text: this.value,
        photoUrl: this.currentUser.photoURL || PROFILE_PLACEHOLDER_IMAGE_URL,
        userId: this.currentuID
      }).then(() => {
        // Clear message text field and SEND button state.
        el.value = '';
      }, (err) => {
        this.snackBar.open('Error writing new message to Firebase Database.', null, {
          duration: 5000
        });
        console.error(err);
      });
      users.push({
        name: this.currentUser.displayName,
        userId: this.currentuID
      }).then(() => {
        // Clear message text field and SEND button state.
        el.value = '';
      }, (err) => {
        this.snackBar.open('Error writing new message to Firebase Database.', null, {
          duration: 5000
        });
        console.error(err);
      });
      saveMessageSelf.push({
        name: this.currentUser.displayName,
        text: this.value,
        photoUrl: this.currentUser.photoURL || PROFILE_PLACEHOLDER_IMAGE_URL,
        userId: this.currentuID
      }).then(() => {
        // Clear message text field and SEND button state.
        el.value = '';
      }, (err) => {
        this.snackBar.open('Error writing new message to Firebase Database.', null, {
          duration: 5000
        });
        console.error(err);
      });
    }
  }

  // TODO: Refactor into image message form component
  saveImageMessage(event: any) {
    event.preventDefault();
    const file = event.target.files[0];

    // Clear the selection in the file picker input.
    const imageForm = <HTMLFormElement>document.getElementById('image-form');
    imageForm.reset();

    // Check if the file is an image.
    if (!file.type.match('image.*')) {
      this.snackBar.open('You can only share images', null, {
        duration: 5000
      });
      return;
    }

    // Check if the user is signed-in
    if (this.checkSignedInWithMessage()) {

      // We add a message with a loading icon that will get updated with the shared image.
      const messages = this.db.list('/messages');
      messages.push({
        name: this.currentUser.displayName,
        imageUrl: LOADING_IMAGE_URL,
        photoUrl: this.currentUser.photoURL || PROFILE_PLACEHOLDER_IMAGE_URL
      }).then((data) => {
        // Upload the image to Cloud Storage.
        const filePath = `${this.currentUser.uid}/${data.key}/${file.name}`;
        return firebase.storage().ref(filePath).put(file)
          .then((snapshot) => {
            // Get the file's Storage URI and update the chat message placeholder.
            const fullPath = snapshot.metadata.fullPath;
            const imageUrl = firebase.storage().ref(fullPath).toString();
            return firebase.storage().refFromURL(imageUrl).getMetadata();
          }).then((metadata) => {
            // TODO: Instead of saving the download URL, save the GCS URI and
            //       dynamically load the download URL when displaying the image
            //       message.
            return data.update({
              imageUrl: metadata.downloadURLs[0]
            });
          });
      }).then(console.log, (err) => {
        this.snackBar.open('There was an error uploading a file to Cloud Storage.', null, {
          duration: 5000
        });
        console.error(err);
      });
    }
  }

  // TODO: Refactor into image message form component
  onImageClick(event: any) {
    event.preventDefault();
    document.getElementById('mediaCapture').click();
  }

  // Saves the messaging device token to the datastore.
  saveMessagingDeviceToken() {
    return firebase.messaging().getToken()
      .then((currentToken) => {
        if (currentToken) {
          console.log('Got FCM device token:', currentToken);
          // Save the Device Token to the datastore.
          firebase.database()
            .ref('/fcmTokens')
            .child(currentToken)
            .set(this.currentUser.uid);
        } else {
          // Need to request permissions to show notifications.
          return this.requestNotificationsPermissions();
        }
      }).catch((err) => {
        this.snackBar.open('Unable to get messaging token.', null, {
          duration: 5000
        });
        console.error(err);
      });
  }

  // Requests permissions to show notifications.
  requestNotificationsPermissions() {
    console.log('Requesting notifications permission...');
    return firebase.messaging().requestPermission()
    // Notification permission granted.
      .then(() => this.saveMessagingDeviceToken())
      .catch((err) => {
        this.snackBar.open('Unable to get permission to notify.', null, {
          duration: 5000
        });
        console.error(err);
      });
  }
  ngOnInit() {
  }

}
