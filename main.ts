let i = 0
let strip = neopixel.create(DigitalPin.P0, 12, NeoPixelMode.RGB)
basic.forever(function () {
    strip.showRainbow(i + 1, i + 360)
    i = i + 10
    basic.pause(10)
})
