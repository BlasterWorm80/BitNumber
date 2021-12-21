function ShowDigit () {
    let ShowTime = 0
    let ClearTime = 0
    basic.clearScreen()
    basic.pause(ClearTime)
    basic.showNumber(E)
    basic.pause(ShowTime)
    basic.clearScreen()
    basic.pause(ClearTime)
    basic.showNumber(D)
    basic.pause(ShowTime)
    basic.clearScreen()
    basic.pause(ClearTime)
    basic.showNumber(C)
    basic.pause(ShowTime)
    basic.clearScreen()
    basic.pause(ClearTime)
    basic.showNumber(B)
    basic.pause(ShowTime)
    basic.clearScreen()
    basic.pause(ClearTime)
    basic.showNumber(A)
    basic.pause(ShowTime)
    basic.clearScreen()
}
function ShowBar () {
    basic.clearScreen()
    basic.pause(250)
    if (A > 5) {
        led.plot(4, 0)
        A1 = A - 5
        A = A - 5
        for (let index = 0; index < A1; index++) {
            led.plotBrightness(4, A, Brightness2)
            A += -1
        }
    } else if (A == 5) {
        led.plot(4, 0)
    } else if (A > 0) {
        A1 = A
        for (let index = 0; index < A1; index++) {
            led.plotBrightness(4, A, Brightness2)
            A += -1
        }
    } else {
    	
    }
    if (B > 5) {
        led.plot(3, 0)
        B1 = B - 5
        B = B - 5
        for (let index = 0; index < B1; index++) {
            led.plotBrightness(3, B, Brightness2)
            B += -1
        }
    } else if (B == 5) {
        led.plot(3, 0)
    } else if (B > 0) {
        B1 = B
        for (let index = 0; index < B1; index++) {
            led.plotBrightness(3, B, Brightness2)
            B += -1
        }
    } else {
    	
    }
    if (C > 5) {
        led.plot(2, 0)
        C1 = C - 5
        C = C - 5
        for (let index = 0; index < C1; index++) {
            led.plotBrightness(2, C, Brightness2)
            C += -1
        }
    } else if (C == 5) {
        led.plot(2, 0)
    } else if (C > 0) {
        C1 = C
        for (let index = 0; index < C1; index++) {
            led.plotBrightness(2, C, Brightness2)
            C += -1
        }
    } else {
    	
    }
    if (D > 5) {
        led.plot(1, 0)
        D1 = D - 5
        D = D - 5
        for (let index = 0; index < D1; index++) {
            led.plotBrightness(1, D, Brightness2)
            D += -1
        }
    } else if (D == 5) {
        led.plot(1, 0)
    } else if (D > 0) {
        D1 = D
        for (let index = 0; index < D1; index++) {
            led.plotBrightness(1, D, Brightness2)
            D += -1
        }
    } else {
    	
    }
    if (E > 5) {
        led.plot(0, 0)
        E1 = E - 5
        E = E - 5
        for (let index = 0; index < E1; index++) {
            led.plotBrightness(0, E, Brightness2)
            E += -1
        }
    } else if (E == 5) {
        led.plot(0, 0)
    } else if (E > 0) {
        E1 = E
        for (let index = 0; index < E1; index++) {
            led.plotBrightness(0, E, Brightness2)
            E += -1
        }
    } else {
    	
    }
}
input.onButtonPressed(Button.A, function () {
    Threshold += -8
    basic.showNumber(Threshold)
    basic.clearScreen()
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(Threshold)
    Threshold = 64
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    Threshold += 8
    basic.showNumber(Threshold)
    basic.clearScreen()
})
function FindDigit () {
    A = Number2 % 10
    B = Math.round((Number2 - A * 1) % 100 / 10)
    C = Math.round((Number2 - B * 10) % 1000 / 100)
    D = Math.round((Number2 - C * 100) % 10000 / 1000)
    E = Math.round((Number2 - D * 1000) % 100000 / 10000)
}
let Brightness1 = 0
let Number2 = 0
let E1 = 0
let D1 = 0
let C1 = 0
let B1 = 0
let Brightness2 = 0
let A1 = 0
let A = 0
let B = 0
let C = 0
let D = 0
let E = 0
let Threshold = 0
Threshold = 64
basic.forever(function () {
    Number2 = input.soundLevel()
    Brightness1 = 255
    Brightness2 = 64
    basic.clearScreen()
    FindDigit()
    ShowBar()
    if (input.soundLevel() >= Threshold) {
        music.playTone(880, music.beat(BeatFraction.Whole))
    }
    basic.pause(1000)
})
