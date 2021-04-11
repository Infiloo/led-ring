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
    basic.pause(10)
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
    basic.pause(10)
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
input.onButtonPressed(Button.B, function () {
    if (Mode > 0) {
        Mode += -1
        i = 0
        richtung = 1
        farbe = 0
    }
})
function neigug () {
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
}
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
    basic.pause(10)
}
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
let farbe = 0
let richtung = 0
let i = 0
let Mode = 0
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P0, 12, NeoPixelMode.RGB)
Mode = 0
i = 0
richtung = 1
farbe = 0
basic.forever(function () {
    if (Mode == 0) {
        Regenbogen()
    } else if (Mode == 1) {
        Pulse()
    } else if (Mode == 2) {
        off_time()
    } else if (Mode == 3) {
        flakern()
    } else if (Mode == 4) {
        neigug()
    }
})
