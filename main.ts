input.onButtonPressed(Button.A, function () {
    if (Mode < 4) {
        Mode += 1
        i = 0
        richtung = 1
        farbe = 0
    }
})
function Regenbogen () {
    strip.showRainbow(i + 1, i + 360)
    i = i + 10
    basic.pause(warte)
}
function Pulse () {
    if (farbe == 0) {
        strip.showColor(neopixel.rgb(i, 0, 0))
    } else if (farbe == 1) {
        strip.showColor(neopixel.rgb(0, i, 0))
    } else if (farbe == 2) {
        strip.showColor(neopixel.rgb(0, 0, i))
    } else if (farbe == 3) {
        strip.showColor(neopixel.rgb(i, i, 0))
    } else if (farbe == 4) {
        strip.showColor(neopixel.rgb(i, 0, i))
    } else if (farbe == 5) {
        strip.showColor(neopixel.rgb(0, i, i))
    }
    strip.show()
    basic.pause(warte)
    if (richtung == 1) {
        i = i + 10
        if (i >= 240) {
            richtung = 0
        }
    } else {
        i = i - 10
        if (i <= 10) {
            richtung = 1
            farbe = randint(0, 5)
        }
    }
}
function kreisel () {
    strip.showColor(neopixel.colors(NeoPixelColors.Black))
    if (i == 0) {
        r1.showColor(neopixel.colors(NeoPixelColors.Red))
        r13.showColor(neopixel.colors(NeoPixelColors.Red))
        r25.showColor(neopixel.colors(NeoPixelColors.Red))
    } else if (i == 1) {
        r2.showColor(neopixel.colors(NeoPixelColors.Orange))
        r14.showColor(neopixel.colors(NeoPixelColors.Orange))
        r26.showColor(neopixel.colors(NeoPixelColors.Orange))
    } else if (i == 2) {
        r3.showColor(neopixel.colors(NeoPixelColors.Yellow))
        r15.showColor(neopixel.colors(NeoPixelColors.Yellow))
        r27.showColor(neopixel.colors(NeoPixelColors.Yellow))
    } else if (i == 3) {
        r4.showColor(neopixel.colors(NeoPixelColors.Green))
        r16.showColor(neopixel.colors(NeoPixelColors.Green))
        r28.showColor(neopixel.colors(NeoPixelColors.Green))
    } else if (i == 4) {
        r5.showColor(neopixel.colors(NeoPixelColors.Blue))
        r17.showColor(neopixel.colors(NeoPixelColors.Blue))
        r29.showColor(neopixel.colors(NeoPixelColors.Blue))
    } else if (i == 5) {
        r6.showColor(neopixel.colors(NeoPixelColors.Indigo))
        r18.showColor(neopixel.colors(NeoPixelColors.Indigo))
        r30.showColor(neopixel.colors(NeoPixelColors.Indigo))
    } else if (i == 6) {
        r7.showColor(neopixel.colors(NeoPixelColors.Violet))
        r19.showColor(neopixel.colors(NeoPixelColors.Violet))
        r31.showColor(neopixel.colors(NeoPixelColors.Violet))
    } else if (i == 7) {
        r8.showColor(neopixel.colors(NeoPixelColors.Purple))
        r20.showColor(neopixel.colors(NeoPixelColors.Purple))
        r32.showColor(neopixel.colors(NeoPixelColors.Purple))
    } else if (i == 8) {
        r9.showColor(neopixel.colors(NeoPixelColors.Orange))
        r21.showColor(neopixel.colors(NeoPixelColors.Orange))
        r33.showColor(neopixel.colors(NeoPixelColors.Orange))
    } else if (i == 9) {
        r10.showColor(neopixel.colors(NeoPixelColors.Yellow))
        r22.showColor(neopixel.colors(NeoPixelColors.Yellow))
        r34.showColor(neopixel.colors(NeoPixelColors.Yellow))
    } else if (i == 10) {
        r11.showColor(neopixel.colors(NeoPixelColors.Green))
        r23.showColor(neopixel.colors(NeoPixelColors.Green))
        r35.showColor(neopixel.colors(NeoPixelColors.Green))
    } else if (i == 11) {
        r12.showColor(neopixel.colors(NeoPixelColors.Blue))
        r24.showColor(neopixel.colors(NeoPixelColors.Blue))
        r36.showColor(neopixel.colors(NeoPixelColors.Blue))
    }
    if (i < 11) {
        i += 1
    } else {
        i = 0
    }
    basic.pause(warte)
}
input.onButtonPressed(Button.B, function () {
    if (Mode > 0) {
        Mode += -1
        i = 0
        richtung = 1
        farbe = 0
    }
})
function off_time () {
    basic.showLeds(`
        . . # . .
        . # # # .
        # . # . #
        # . . . #
        . # # # .
        `)
    strip.easeBrightness()
    strip.show()
}
function flakern () {
    if (i % 2 == 1) {
        strip.showColor(neopixel.rgb(i, i, i))
    } else {
        strip.showColor(neopixel.rgb(0, 0, 0))
    }
    i += 1
    basic.pause(warte)
}
let warte = 0
let farbe = 0
let richtung = 0
let i = 0
let Mode = 0
let r36: neopixel.Strip = null
let r35: neopixel.Strip = null
let r34: neopixel.Strip = null
let r33: neopixel.Strip = null
let r32: neopixel.Strip = null
let r31: neopixel.Strip = null
let r30: neopixel.Strip = null
let r29: neopixel.Strip = null
let r28: neopixel.Strip = null
let r27: neopixel.Strip = null
let r26: neopixel.Strip = null
let r25: neopixel.Strip = null
let r24: neopixel.Strip = null
let r23: neopixel.Strip = null
let r22: neopixel.Strip = null
let r21: neopixel.Strip = null
let r20: neopixel.Strip = null
let r19: neopixel.Strip = null
let r18: neopixel.Strip = null
let r17: neopixel.Strip = null
let r16: neopixel.Strip = null
let r15: neopixel.Strip = null
let r14: neopixel.Strip = null
let r13: neopixel.Strip = null
let r12: neopixel.Strip = null
let r11: neopixel.Strip = null
let r10: neopixel.Strip = null
let r9: neopixel.Strip = null
let r8: neopixel.Strip = null
let r7: neopixel.Strip = null
let r6: neopixel.Strip = null
let r5: neopixel.Strip = null
let r4: neopixel.Strip = null
let r3: neopixel.Strip = null
let r2: neopixel.Strip = null
let r1: neopixel.Strip = null
let strip: neopixel.Strip = null
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
basic.forever(function () {
    warte = pins.analogReadPin(AnalogPin.P2)
    if (Mode == 0) {
        Regenbogen()
    } else if (Mode == 1) {
        Pulse()
    } else if (Mode == 2) {
        off_time()
    } else if (Mode == 3) {
        flakern()
    } else if (Mode == 4) {
        kreisel()
    }
})
