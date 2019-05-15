import os
import csv

rawdata=os.path.join('election_data.csv')

candidates = []
total_candidates=[]
candidates_perc = []
khan = 0
#O"\'"Tooley = 0
Correy = 0
Li = 0
#summaries = ([] for i in range(5))

with open(rawdata, 'r') as csvfile:
    
    csvreader = csv.reader(csvfile, delimiter=',')
    #sortedlist = sorted(data, key=operator.itemgetter(0))
   
    header = next(csvreader)
    num_rows = 0
    
    for row in csvreader : 
        num_rows += 1
        if row[2] == 'Khan':
            khan += 1
            #"O'Tooley"+= 1
        if row[2] == 'Correy':
            Correy += 1
        if row[2] == 'Li':
            Li += 1

        if row[2]  not in candidates:
            candidates.append(row[2])
    #Khan_average = Khan/num_rows

    

        
         
              
        



 
print("Total Votes:", num_rows)
print("All the candidates" ,*candidates, sep=',')
print("Khan total votes "+ str(khan))
print("Correy total votes "+ str(Correy))
print("Li total votes "+ str(Li))
#print("Khan total votes"+str("O'Tooley"))




test = os.path.join("polltest.txt")

with open(test, 'w' , newline= '') as csvfile:

    csvwriter = csv.writer(csvfile, delimiter=',')

    csvwriter.writerow(["total votes:",num_rows])
    csvwriter.writerow(["All the candidates" ,*candidates])
    csvwriter.writerow(["Correy total votes "+ str(Correy)])
    csvwriter.writerow(["Khan's total Votes ", str(khan)])
    csvwriter.writerow(["Li total Votes "+ str(Li)])
