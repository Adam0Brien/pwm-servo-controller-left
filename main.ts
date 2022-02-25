radio.setGroup(2)
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
        radio.sendValue("left", Math.round(Math.map(Math.constrain(input.rotation(Rotation.Roll), -90, 90), 0, 90, 90, 110)))
    }
})
basic.forever(function () {
    radio.setGroup(2)
    radio.sendNumber(1)
})
