import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  checkInput(event: KeyboardEvent) {
    const char = '' + event.key;

    /**
     * Ist das Zeichen druckbar?
     * ESC, ENTER oder andere Funktionstasten sollten nicht blokiert werden.
     */
    const isPrintable = char.length === 1;

    // Regulärer Ausdruck für eine Zahl, Minus, Plus, Punkt oder Komma
    const regex = /[0-9+\-\.,]/gi;

    // Druckbares Zeichen und nicht erlaubt?
    if (isPrintable && !char.match(regex)) {
      console.log('Nicht erlaubtes Zeichen: "' + char + '"');
      event.preventDefault();
    }
  }

  checkPlz(event: KeyboardEvent) {
    const char = '' + event.key;

    /**
     * Ist das Zeichen druckbar?
     * ESC, ENTER oder andere Funktionstasten sollten nicht blokiert werden.
     */
    const isPrintable = char.length === 1;

    // Regulärer Ausdruck für eine Zahl
    const regex = /[0-9]/gi;

    // Druckbares Zeichen und nicht erlaubt?
    if (isPrintable && !char.match(regex)) {
      event.preventDefault();
    }
  }
}
