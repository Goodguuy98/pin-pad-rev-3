# Displays & regulates counter
def Counter_09():
    global Counter
    basic.show_number(Counter)
    # Ensures number stays between 0 and 9
    if Counter > 9:
        Counter = 0
    if Counter < 0:
        Counter = 9
# Subtracts one from input counter

def on_button_pressed_a():
    global Counter
    if Input == 1:
        Counter += -1
input.on_button_pressed(Button.A, on_button_pressed_a)

def Boot():
    global digits, Input
    radio.set_group(1)
    digits = []
    basic.show_string("Input")
    Input = 1
# Confirm your input

def on_button_pressed_ab():
    global Input
    if Input == 1:
        digits.append(Counter)
        Input = 0
    if Input == 2:
        basic.clear_screen()
        radio.send_string(PIN)
        basic.show_string("Sent!")
        Input = 6
input.on_button_pressed(Button.AB, on_button_pressed_ab)

# Outputs message recived via radio

def on_received_string(receivedString):
    global Input
    # Will only display if input = 6
    if Input == 6:
        for index in range(2):
            basic.show_string(receivedString)
    Input = 7
radio.on_received_string(on_received_string)

# Adds one to input counter

def on_button_pressed_b():
    global Counter
    if Input == 1:
        Counter += 1
input.on_button_pressed(Button.B, on_button_pressed_b)

# Displays and sets the digit
def Set_Code(Digit: number):
    for index2 in range(2):
        basic.clear_screen()
        basic.pause(250)
        basic.show_number(Counter)
# Resets Counter, updates stage of input
def Intermission():
    global Counter, Input
    basic.clear_screen()
    Counter = 0
    Input = 1
digits: List[number] = []
PIN = ""
Counter = 0
Input = 0
Boot()
for index3 in range(4):
    # Input Digits
    while Input == 1:
        Counter_09()
    Set_Code(Counter)
    Intermission()
Input = 2
for index4 in range(4):
    PIN = "" + PIN + "" + ("" + str(digits[index4]))
basic.show_string("Code: " + PIN)