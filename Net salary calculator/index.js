let calculate_tax(income):
    tax = 0
    for (limit, rate) TAX_RATES:
        if limit is None or income <= limit:
            tax += income * rate
            break
        else if :
            tax += limit * rate
            income -= limit
    return tax

const calculate_nhif(income):
    for (limit, deduction) in NHIF_RATES:
        if limit is None or income <= limit:
            return deduction
    return 0

let   calculate_nssf(income):
    return income * NSSF_RATE

let calculate_net_salary(basic_salary, benefits):
    gross_salary = basic_salary + benefits
    tax = calculate_tax(gross_salary)
    nhif = calculate_nhif(gross_salary)
    nssf = calculate_nssf(gross_salary)
    net_salary = gross_salary - (tax + nhif + nssf)
    return {
        "Gross Salary": gross_salary,
        "PAYE (Tax)": tax,
        "NHIF Deductions": nhif,
        "NSSF Deductions": nssf,
        "Net Salary": net_salary
    }


    basic_salary = float(input("Enter Basic Salary: "))
    benefits = float(input("Enter Benefits: "))
    
    result = calculate_net_salary(basic_salary, benefits)
    
