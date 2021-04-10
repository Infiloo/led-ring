input.onButtonPressed(Button.A, function () {
    if (Mode < 1) {
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
    } else {
    	
    }
})
