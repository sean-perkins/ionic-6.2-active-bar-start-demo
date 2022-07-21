import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  value = 0;

  emoji = '';

  ngOnInit() {
    this.setEmoji();
  }

  onRangeChange(newValue: number) {
    this.value = newValue;
    this.setEmoji();
  }

  pinFormatter(value) {
    return `${value} C\u00B0`;
  }

  private setEmoji() {
    if (this.value > 50) {
      this.emoji = '☠️';
    } else if (this.value > 30) {
      this.emoji = '🥵';
    } else if (this.value > 0) {
      this.emoji = '😶';
    } else if (this.value < -50) {
      this.emoji = '🧊';
    } else if (this.value <= 0) {
      this.emoji = '🥶';
    }
  }

}
