// Create Emoji Project

function toEmoticon(emoji) {
    switch (emoji) {
      case "shrug":
        return '|_{"}_|';
      case "smiley face":
        return ":)";
      case "frowny face":
        return ":(";
      case "winky face":
        return ";)";
      case "heart":
        return "<3";
        break;
      default:
        return "|_(* ~ *)_|";
    }
  }
  console.log(toEmoticon('shrug'))