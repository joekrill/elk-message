enum KeypadKey {
  None = 0, // or a user code was sent from a keypad.
  Star = 11, // *
  Pound = 12, // #
  F1 = 13,
  F2 = 14,
  F3 = 15,
  F4 = 16,
  Stay = 17,
  Exit = 18,
  Chime = 19,
  Bypass = 20,
  Elk = 21,
  Down = 22,
  Up = 23,
  Right = 24,
  Left = 25,
  F6 = 26,
  F7 = 27,
  Data = 28 // Data was entered, this acts as a carriage return
}

export default KeypadKey;
