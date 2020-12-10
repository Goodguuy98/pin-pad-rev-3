// Displays & regulates counter
function Counter_09 () {
    basic.showNumber(Counter)
    // Ensures number stays between 0 and 9
    if (Counter > 9) {
        Counter = 0
    }
    if (Counter < 0) {
        Counter = 9
    }
}
// Subtracts one from input counter
input.onButtonPressed(Button.A, function () {
    if (Input == 1) {
        Counter += -1
    }
})
function Boot () {
    radio.setGroup(1)
    digits = []
    basic.showString("Input")
    Input = 1
}
// Confirm your input
input.onButtonPressed(Button.AB, function () {
    if (Input == 1) {
        digits.push(Counter)
        Input = 0
    }
    if (Input == 2) {
        Input = 0
        basic.clearScreen()
        radio.sendString(PIN)
        basic.showString("Sent!")
        Input = 0
    }
})
// Outputs message recived via radio
radio.onReceivedString(function (receivedString) {
    // Will only display if input = 6
    if (Input == 3) {
        for (let index = 0; index < 2; index++) {
            basic.clearScreen()
            basic.pause(250)
            basic.showString("!")
        }
        for (let index = 0; index < 2; index++) {
            basic.showString(receivedString)
        }
    }
})
// Adds one to input counter
input.onButtonPressed(Button.B, function () {
    if (Input == 1) {
        Counter += 1
    }
})
// Displays and sets the digit
function Set_Code (Digit: number) {
    for (let index = 0; index < 2; index++) {
        basic.clearScreen()
        basic.pause(250)
        basic.showNumber(Counter)
    }
}
// Resets Counter, updates stage of input
function Intermission () {
    basic.clearScreen()
    Counter = 0
    Input = 1
}
let digits: number[] = []
let PIN = ""
let Counter = 0
let Input = 0
Boot()
for (let index = 0; index < 4; index++) {
    // Input Digits
    while (Input == 1) {
        Counter_09()
    }
    Set_Code(Counter)
    Intermission()
}
Input = 2
for (let index4 = 0; index4 <= 3; index4++) {
    PIN = "" + PIN + "" + ("" + digits[index4])
}
while (Input == 2) {
    basic.showString("Code: " + PIN)
}
