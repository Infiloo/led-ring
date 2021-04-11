def on_button_pressed_a():
    global Mode, i, richtung, farbe
    if Mode < 3:
        Mode += 1
        i = 0
        richtung = 1
        farbe = 0
input.on_button_pressed(Button.A, on_button_pressed_a)

def Regenbogen():
    global i
    strip.show_rainbow(i + 1, i + 360)
    i = i + 10
    basic.pause(10)
def Pulse():
    global i, richtung, farbe
    if farbe == 0:
        strip.show_color(neopixel.rgb(i, 0, 0))
    elif farbe == 1:
        strip.show_color(neopixel.rgb(0, i, 0))
    elif farbe == 2:
        strip.show_color(neopixel.rgb(0, 0, i))
    elif farbe == 3:
        strip.show_color(neopixel.rgb(i, i, 0))
    elif farbe == 4:
        strip.show_color(neopixel.rgb(i, 0, i))
    elif farbe == 5:
        strip.show_color(neopixel.rgb(0, i, i))
    strip.show()
    basic.pause(10)
    if richtung == 1:
        i = i + 10
        if i >= 240:
            richtung = 0
    else:
        i = i - 10
        if i <= 10:
            richtung = 1
            farbe = randint(0, 5)

def on_button_pressed_b():
    global Mode, i, richtung, farbe
    if Mode > 0:
        Mode += -1
        i = 0
        richtung = 1
        farbe = 0
input.on_button_pressed(Button.B, on_button_pressed_b)

def off_time():
    basic.show_leds("""
        . . # . .
        . # # # .
        # . # . #
        # . . . #
        . # # # .
        """)
    strip.ease_brightness()
    strip.show()
def flakern():
    global i
    if i % 2 == 1:
        strip.show_color(neopixel.rgb(i, i, i))
    else:
        strip.show_color(neopixel.rgb(0, 0, 0))
    i += 1
    basic.pause(10)
farbe = 0
richtung = 0
i = 0
Mode = 0
strip: neopixel.Strip = None
strip = neopixel.create(DigitalPin.P0, 12, NeoPixelMode.RGB)
Mode = 0
i = 0
richtung = 1
farbe = 0

def on_forever():
    if Mode == 0:
        Regenbogen()
    elif Mode == 1:
        Pulse()
    elif Mode == 2:
        off_time()
    elif Mode == 3:
        flakern()
basic.forever(on_forever)
