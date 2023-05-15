radio.onReceivedNumber(function on_received_number(receivedNumber: number) {
    
    I = receivedNumber
})
let v = 0
let I = 0
radio.setGroup(75)
I = 99
wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S0, 0)
basic.showString("R")
basic.forever(function on_forever() {
    
    if (I == 1) {
        if (v < 90) {
            v = v + 2
            basic.pause(100)
            wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S0, v)
        }
        
    } else if (I == 2) {
        if (v > 0) {
            v = v - 2
            basic.pause(100)
            wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S0, v)
        }
        
    }
    
    if (I == 3) {
        wuKong.setMotorSpeed(wuKong.MotorList.M2, 25)
    }
    
    if (I == 4) {
        wuKong.setMotorSpeed(wuKong.MotorList.M2, -35)
    }
    
    if (I == 5) {
        wuKong.setMotorSpeed(wuKong.MotorList.M2, -80)
    }
    
    if (I == 6) {
        wuKong.setMotorSpeed(wuKong.MotorList.M2, 80)
    }
    
    if (I == 0) {
        wuKong.stopAllMotor()
    }
    
})
