input.onButtonPressed(Button.A, function () {
    if (Mode < 1) {
        Mode += 1
    }
})
function Regenbogen () {
    strip.showRainbow(i + 1, i + 360)
    i = i + 10
    basic.pause(10)
}
function Pulse () {
    strip.showColor(neopixel.rgb(i, i, i))
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
        }
    }
}
input.onButtonPressed(Button.B, function () {
    if (Mode > 0) {
        Mode += -1
    }
})
let richtung = 0
let i = 0
let Mode = 0
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P0, 12, NeoPixelMode.RGB)
Mode = 0
i = 0
richtung = 1
basic.forever(function () {
    if (Mode == 0) {
        Regenbogen()
    } else if (Mode == 1) {
        Pulse()
    } else {
    	
    }
})
