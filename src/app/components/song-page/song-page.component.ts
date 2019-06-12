import { Component, OnInit } from '@angular/core';

var $: any;

@Component({
  selector: 'app-song-page',
  templateUrl: './song-page.component.html',
  styleUrls: ['./song-page.component.scss']
})
export class SongPageComponent implements OnInit {


  constructor() { }

  ngOnInit() {

  //   var octave = [
  //     "A",
  //     "Bb",
  //     "B",
  //     "C",
  //     "C#",
  //     "D",
  //     "Eb",
  //     "E",
  //     "F",
  //     "F#",
  //     "G",
  //     "G#"
  //   ];
  //   var $body,
  //     $original,
  //     $result,
  //     $transpose;

  //   $().ready(function () {
  //     $original = $("#original");
  //     $transpose = $("#transpose");
  //     $result = $("#result");

  //     $original.bind("change keyup", function () {
  //       update(this.value);
  //     }).one("focus", function () {
  //       this.select();

  //       $(this).one("mouseup", function (e) {
  //         e.preventDefault();
  //         return false;
  //       });
  //     });
  //     $("button.plus").click(function (e) {
  //       $transpose.val(parseInt($transpose.val()) + 1)
  //         .change();
  //       e.preventDefault();
  //       return false;
  //     });
  //     $("button.minus").click(function (e) {
  //       $transpose.val(parseInt($transpose.val()) - 1)
  //         .change();
  //       e.preventDefault();
  //       return false;
  //     });

  //     $("div.left label").one("mouseup", function (e) {
  //       e.preventDefault();
  //       return false;
  //     });

  //     $transpose.bind("change keyup", function () {
  //       if (this.value > 6) this.value = parseInt(this.value) - 12;
  //       if (this.value < -6) this.value = parseInt(this.value) + 12;

  //       update($original.val(), parseInt(this.value));
  //     });

  //     $("#button-fullscreen").click(function () {
  //       $("body").toggleClass("fullscreen");
  //     });

  //     update();
  //   });

  //   function update(text, trans) {
  //     // read lines
  //     if (!text) text = $original.val();
  //     if (!trans) {
  //       trans = parseInt($transpose.val());
  //       if (!trans) trans = 0;
  //     }

  //     var lines = text.split("\n");

  //     for (var i = 0; i < lines.length; i++) {
  //       // check if line contains cords only:
  //       var isChordLine = false;
  //       var checkLine = (" " + lines[i] + " ").replace(/[^a-wy-zA-WY-ZÄäÖöÜüß ]/g, ' ').replace(/\//g, ' ').replace(/\b[AaBbCcDdEeFfGg][b]?[#]?[m]?[a]?[j]?[d]?[d]?[1-9]?[?=\s\/]/g, '').replace(/\s/g, '');
  //       if (checkLine === "") {
  //         isChordLine = true;
  //         // transpose
  //         lines[i] = lines[i].replace(/[\s\/]([abcdefg])/g, normalizeMol).replace(/(A|B|C|D|E|F|G)([b]|[#])?/g, function (chord, tone, mod) {
  //           var newChord = transpose(chord, trans);
  //           //console.log("transpose:" + chord + " by " + trans + " = " + newChord);
  //           return newChord;
  //         });
  //       }
  //       else {
  //         //console.log("LINE " + i + ": not a chord line");
  //       }
  //       lines[i] = lines[i].replace(/\s/g, "&nbsp;") + "<br>";
  //       // fill whitespaces
  //       if (isChordLine) {
  //         lines[i] = '<div class="chord-line">' + lines[i].replace(/\s/g, "&nbsp;") + '</div>';
  //       } else {
  //         lines[i] = '<div class="lyric-line">' + lines[i].replace(/\s/g, "&nbsp;") + '</div>';
  //       }
  //     }

  //     $result.html(lines.join(''));
  //     $original.height($result.height());
  //   }

  //   function normalizeMol(match) {
  //     return match.toUpperCase() + "m";
  //   }

  //   function transpose(chord, transpose) {
  //     var mod;
  //     if (chord.length > 1) {
  //       mod = chord.substr(1, 1);
  //       chord = chord.substr(0, 1);
  //     }

  //     var chordNr = parseInt(octave.indexOf(chord));
  //     if (chordNr >= 0) {
  //       chordNr += parseInt(transpose);
  //       if (mod == "#") chordNr += 1;
  //       if (mod == "b") chordNr -= 1;

  //       if (chordNr < 0) chordNr = chordNr + 12;
  //       if (chordNr >= 12) chordNr = chordNr % 12;

  //       return octave[chordNr];
  //     }
  //     return false;
  //   }


  }
}
