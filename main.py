E = 0
D = 0
C = 0
B = 0
A = 0
A1 = 0
Brightness2 = 0
B1 = 0
C1 = 0
D1 = 0
E1 = 0
Number = 0
Brightness1 = 0
def ShowDigit():
    ShowTime = 0
    ClearTime = 0
    basic.clear_screen()
    basic.pause(ClearTime)
    basic.show_number(E)
    basic.pause(ShowTime)
    basic.clear_screen()
    basic.pause(ClearTime)
    basic.show_number(D)
    basic.pause(ShowTime)
    basic.clear_screen()
    basic.pause(ClearTime)
    basic.show_number(C)
    basic.pause(ShowTime)
    basic.clear_screen()
    basic.pause(ClearTime)
    basic.show_number(B)
    basic.pause(ShowTime)
    basic.clear_screen()
    basic.pause(ClearTime)
    basic.show_number(A)
    basic.pause(ShowTime)
    basic.clear_screen()
def ShowBar():
    global A1, A, B1, B, C1, C, D1, D, E1, E
    basic.clear_screen()
    basic.pause(250)
    if A > 5:
        led.plot(4, 0)
        A1 = A - 5
        A = A - 5
        for index in range(A1):
            led.plot_brightness(4, A, Brightness2)
            A += -1
    elif A == 5:
        led.plot(4, 0)
    elif A > 0:
        A1 = A
        for index2 in range(A1):
            led.plot_brightness(4, A, Brightness2)
            A += -1
    else:
        pass
    if B > 5:
        led.plot(3, 0)
        B1 = B - 5
        B = B - 5
        for index3 in range(B1):
            led.plot_brightness(3, B, Brightness2)
            B += -1
    elif B == 5:
        led.plot(3, 0)
    elif B > 0:
        B1 = B
        for index4 in range(B1):
            led.plot_brightness(3, B, Brightness2)
            B += -1
    else:
        pass
    if C > 5:
        led.plot(2, 0)
        C1 = C - 5
        C = C - 5
        for index5 in range(C1):
            led.plot_brightness(2, C, Brightness2)
            C += -1
    elif C == 5:
        led.plot(2, 0)
    elif C > 0:
        C1 = C
        for index6 in range(C1):
            led.plot_brightness(2, C, Brightness2)
            C += -1
    else:
        pass
    if D > 5:
        led.plot(1, 0)
        D1 = D - 5
        D = D - 5
        for index7 in range(D1):
            led.plot_brightness(1, D, Brightness2)
            D += -1
    elif D == 5:
        led.plot(1, 0)
    elif D > 0:
        D1 = D
        for index8 in range(D1):
            led.plot_brightness(1, D, Brightness2)
            D += -1
    else:
        pass
    if E > 5:
        led.plot(0, 0)
        E1 = E - 5
        E = E - 5
        for index9 in range(E1):
            led.plot_brightness(0, E, Brightness2)
            E += -1
    elif E == 5:
        led.plot(0, 0)
    elif E > 0:
        E1 = E
        for index10 in range(E1):
            led.plot_brightness(0, E, Brightness2)
            E += -1
    else:
        pass
def FindDigit():
    global A, B, C, D, E
    A = Number % 10
    B = Math.round((Number - A * 1) % 100 / 10)
    C = Math.round((Number - B * 10) % 1000 / 100)
    D = Math.round((Number - C * 100) % 10000 / 1000)
    E = Math.round((Number - D * 1000) % 100000 / 10000)

def on_forever():
    global Number, Brightness1, Brightness2
    Number = input.sound_level()
    Brightness1 = 255
    Brightness2 = 64
    basic.clear_screen()
    FindDigit()
    ShowBar()
    if input.sound_level() >= 64:
        music.play_tone(880, music.beat(BeatFraction.WHOLE))
    basic.pause(1000)
basic.forever(on_forever)
