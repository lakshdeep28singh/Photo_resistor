let lightValue = 0
let pitch = 0
let volume = 0
let tilt = 0

basic.showIcon(IconNames.EighthNote)
basic.pause(1000)
basic.clearScreen()

basic.forever(function () {

    lightValue = pins.analogReadPin(AnalogPin.P0)


    pitch = Math.map(lightValue, 0, 1023, 80, 5000)

    
    tilt = input.acceleration(Dimension.Y)

    
    volume = Math.map(tilt, -1024, 1024, 0, 255)

    
    volume = Math.constrain(volume, 0, 255)

    
    music.setVolume(volume)

    
    music.playTone(pitch, music.beat(BeatFraction.Sixteenth))

})