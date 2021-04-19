def on_button_pressed_a():
    global Mode, i, richtung, farbe
    if Mode < 4:
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
def kreisel():
    global i
    strip.show_color(neopixel.colors(NeoPixelColors.BLACK))
    if i == 0:
        r1.show_color(neopixel.colors(NeoPixelColors.RED))
        r13.show_color(neopixel.colors(NeoPixelColors.RED))
        r25.show_color(neopixel.colors(NeoPixelColors.RED))
    elif i == 1:
        r2.show_color(neopixel.colors(NeoPixelColors.ORANGE))
        r14.show_color(neopixel.colors(NeoPixelColors.ORANGE))
        r26.show_color(neopixel.colors(NeoPixelColors.ORANGE))
    elif i == 2:
        r3.show_color(neopixel.colors(NeoPixelColors.YELLOW))
        r15.show_color(neopixel.colors(NeoPixelColors.YELLOW))
        r27.show_color(neopixel.colors(NeoPixelColors.YELLOW))
    elif i == 3:
        r4.show_color(neopixel.colors(NeoPixelColors.GREEN))
        r16.show_color(neopixel.colors(NeoPixelColors.GREEN))
        r28.show_color(neopixel.colors(NeoPixelColors.GREEN))
    elif i == 4:
        r5.show_color(neopixel.colors(NeoPixelColors.BLUE))
        r17.show_color(neopixel.colors(NeoPixelColors.BLUE))
        r29.show_color(neopixel.colors(NeoPixelColors.BLUE))
    elif i == 5:
        r6.show_color(neopixel.colors(NeoPixelColors.INDIGO))
        r18.show_color(neopixel.colors(NeoPixelColors.INDIGO))
        r30.show_color(neopixel.colors(NeoPixelColors.INDIGO))
    elif i == 6:
        r7.show_color(neopixel.colors(NeoPixelColors.VIOLET))
        r19.show_color(neopixel.colors(NeoPixelColors.VIOLET))
        r31.show_color(neopixel.colors(NeoPixelColors.VIOLET))
    elif i == 7:
        r8.show_color(neopixel.colors(NeoPixelColors.PURPLE))
        r20.show_color(neopixel.colors(NeoPixelColors.PURPLE))
        r32.show_color(neopixel.colors(NeoPixelColors.PURPLE))
    elif i == 8:
        r9.show_color(neopixel.colors(NeoPixelColors.ORANGE))
        r21.show_color(neopixel.colors(NeoPixelColors.ORANGE))
        r33.show_color(neopixel.colors(NeoPixelColors.ORANGE))
    elif i == 9:
        r10.show_color(neopixel.colors(NeoPixelColors.YELLOW))
        r22.show_color(neopixel.colors(NeoPixelColors.YELLOW))
        r34.show_color(neopixel.colors(NeoPixelColors.YELLOW))
    elif i == 10:
        r11.show_color(neopixel.colors(NeoPixelColors.GREEN))
        r23.show_color(neopixel.colors(NeoPixelColors.GREEN))
        r35.show_color(neopixel.colors(NeoPixelColors.GREEN))
    elif i == 11:
        r12.show_color(neopixel.colors(NeoPixelColors.BLUE))
        r24.show_color(neopixel.colors(NeoPixelColors.BLUE))
        r36.show_color(neopixel.colors(NeoPixelColors.BLUE))
    if i < 11:
        i += 1
    else:
        i = 0
    basic.pause(10)

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
r12: neopixel.Strip = None
r11: neopixel.Strip = None
r10: neopixel.Strip = None
r9: neopixel.Strip = None
r8: neopixel.Strip = None
r7: neopixel.Strip = None
r6: neopixel.Strip = None
r5: neopixel.Strip = None
r4: neopixel.Strip = None
r3: neopixel.Strip = None
r2: neopixel.Strip = None
r1: neopixel.Strip = None
strip: neopixel.Strip = None
strip = neopixel.create(DigitalPin.P0, 36, NeoPixelMode.RGB)
r1 = strip.range(0, 1)
r2 = strip.range(1, 1)
r3 = strip.range(2, 1)
r4 = strip.range(3, 1)
r5 = strip.range(4, 1)
r6 = strip.range(5, 1)
r7 = strip.range(6, 1)
r8 = strip.range(7, 1)
r9 = strip.range(8, 1)
r10 = strip.range(9, 1)
r11 = strip.range(10, 1)
r12 = strip.range(11, 1)
r13 = strip.range(12, 1)
r14 = strip.range(13, 1)
r15 = strip.range(14, 1)
r16 = strip.range(15, 1)
r17 = strip.range(16, 1)
r18 = strip.range(17, 1)
r19 = strip.range(18, 1)
r20 = strip.range(19, 1)
r21 = strip.range(20, 1)
r22 = strip.range(21, 1)
r23 = strip.range(22, 1)
r24 = strip.range(23, 1)
r25 = strip.range(24, 1)
r26 = strip.range(25, 1)
r27 = strip.range(26, 1)
r28 = strip.range(27, 1)
r29 = strip.range(28, 1)
r30 = strip.range(29, 1)
r31 = strip.range(30, 1)
r32 = strip.range(31, 1)
r33 = strip.range(32, 1)
r34 = strip.range(33, 1)
r35 = strip.range(34, 1)
r36 = strip.range(35, 1)
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
    elif Mode == 4:
        kreisel()
basic.forever(on_forever)
