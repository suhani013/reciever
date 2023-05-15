def on_received_number(receivedNumber):
    global I
    I = receivedNumber
radio.on_received_number(on_received_number)

v = 0
I = 0
radio.set_group(75)
I = 99
wuKong.set_servo_angle(wuKong.ServoTypeList._360, wuKong.ServoList.S0, 0)
basic.show_string("R")

def on_forever():
    global v
    if I == 1:
        if v < 90:
            v = v + 2
            basic.pause(100)
            wuKong.set_servo_angle(wuKong.ServoTypeList._360, wuKong.ServoList.S0, v)
    elif I == 2:
        if v > 0:
            v = v - 2
            basic.pause(100)
            wuKong.set_servo_angle(wuKong.ServoTypeList._360, wuKong.ServoList.S0, v)
    if I == 3:
        wuKong.set_motor_speed(wuKong.MotorList.M2, 25)
    if I == 4:
        wuKong.set_motor_speed(wuKong.MotorList.M2, -35)
    if I == 5:
        wuKong.set_motor_speed(wuKong.MotorList.M2, -80)
    if I == 6:
        wuKong.set_motor_speed(wuKong.MotorList.M2, 80)
    if I == 0:
        wuKong.stop_all_motor()
basic.forever(on_forever)
