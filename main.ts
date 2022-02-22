radio.setGroup(2)
basic.showLeds(`
    . . # . .
    . . # . .
    . . . . .
    . . # . .
    . . # # #
    `)
basic.forever(function () {
    led.plot(2, 2)
    led.unplot(2, 2)
    if (input.rotation(Rotation.Roll) >= 0) {
        radio.sendValue("leftf", Math.round(Math.map(Math.constrain(input.rotation(Rotation.Roll), 0, 90), 0, 90, 90, 180)))
    } else {
        radio.sendValue("leftr", Math.round(Math.map(Math.constrain(input.rotation(Rotation.Roll), -90, 0), 0, -90, 0, 89)))
    }
})
