import { Component } from '@angular/core';

@Component({
  selector: 'app-palindrome',
  templateUrl: './palindrome.component.html',
  styleUrls: ['./palindrome.component.css'],
})
export class PalindromeComponent {
  text: string = '';
  message: string = 'Digite algo para verificar!';
  array: String[] = [];
  auxText : String = '';
  img: string = '../assets/img/unknown.png';

  specialWords: string[] = ['papyrus', 'toriel', 'frisk'];

  checkPalind() {
    if (this.text.trim() === '') {
      this.resetState();
      return;
    }

    const cleanText = this.normalizeText(this.text);

    // Verifica se é uma palavra especial (Papyrus, Toriel, Frisk)
    if (this.specialWords.includes(cleanText)) {
      this.showSpecialMessage();
      return;
    }

    const reversedText = cleanText.split('').reverse().join('');

    if (cleanText === reversedText) {
      this.img = '../assets/img/yes.png';
      this.message = ' É um palíndromo! ';
    } else {
      this.img = '../assets/img/no.png';
      this.message = ' Não é um palíndromo! ';
    }
  }

  normalizeText(text: string): string {
    return text
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9]/gi, '');
  }

  resetState() {
    this.img = '../assets/img/unknown.png';
    this.message = 'Digite algo para verificar!';
  }

  // Exibe mensagem especial se for "Papyrus", "Toriel" ou "Frisk"
  showSpecialMessage() {
    this.img = '../assets/img/feliz.png';
    this.message =
      '🎉 Eu tentei criar um palíndromo sobre matemática, mas no final só deu zero à esquerda!';
  }
}
