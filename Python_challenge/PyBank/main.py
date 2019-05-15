import os
import csv

rawdata=os.path.join('budget_data.csv')

totalmonths = 0
profit_loss = 0
maxvalue, minvalue = [] , []
#totalmonths = int(x[0])
#profit_loss = int(x[1])


with open(rawdata, 'r') as csvfile:
    
    csvreader = csv.reader(csvfile, delimiter=',')
    
    header = next(csvreader)

    
    for row in csvreader : 
        totalmonths += 1
        profit_loss += int(row[1])
        minvalue.append(float(row[1]))
        maxvalue.append(float(row[1]))
        
        #maxvalue = max(int(profit_loss))
       

print("total months:", totalmonths)
print("profit total:",profit_loss)
print("avearge total",profit_loss/totalmonths)
print("min value",min(minvalue))
print("max value:",max(maxvalue))



test = os.path.join("pybanktest.txt")

with open(test, 'w' , newline= '') as csvfile:

    csvwriter = csv.writer(csvfile, delimiter=',')

    csvwriter.writerow(["total Months:",totalmonths])
    csvwriter.writerow(["Profit total:",profit_loss])
    csvwriter.writerow(["Avearge Per Month:",profit_loss/totalmonths])
    csvwriter.writerow(["min value:",min(minvalue)])
    csvwriter.writerow(["max value:",max(maxvalue)])