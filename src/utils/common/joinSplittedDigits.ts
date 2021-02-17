// "12 345" => "12345"
let joinSplitedDigits: (string) => string;
joinSplitedDigits = (splittedNumberStr) => {
  return splittedNumberStr.replaceAll(' ', '');
};

export { joinSplitedDigits };
