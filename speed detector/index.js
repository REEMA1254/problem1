 let calculate_demerit_points (speed)
    speed_limit = 70
    demerit_points = 0
  console.log (speed)
    if speed(65) < 70: 
    print ("Ok")
    else:
        demerit_points = (speed - speed_limit) // 5
        if demerit_points > 12:
        print ("License suspended")
        else print  (f"Points: {demerit_points}")

    speed = int(input(" 65(km/h): "))
    calculate_demerit_points(speed)