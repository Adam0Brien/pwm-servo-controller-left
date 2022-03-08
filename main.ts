radio.setGroup(1)
basic.showLeds(`
    . . # . .
    . . # . .
    . . # . .
    . . # . .
    . . # # #
    `)
basic.forever(function () {
    led.plot(2, 2)
    led.unplot(2, 2)
    if (input.rotation(Rotation.Pitch) < 50 && input.rotation(Rotation.Pitch) > -50) {
        radio.sendValue("left", Math.round(Math.map(Math.constrain(input.rotation(Rotation.Roll), -90, 90), 0, 90, 90, 120)))
        serial.writeLine("" + (Math.round(Math.map(Math.constrain(input.rotation(Rotation.Roll), -90, 90), 0, 90, 90, 120))))
        radio.sendNumber(1)
    }
})
