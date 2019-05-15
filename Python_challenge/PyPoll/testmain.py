import os
import csv

rawdata=os.path.join('election_data.csv')

candidates = []
total_candidates=[]
candidates_perc = []
candidates_total = []
#summaries = ([] for i in range(5))

with open(rawdata, 'r') as csvfile:
    
    csvreader = csv.reader(csvfile, delimiter=',')
    #sortedlist = sorted(data, key=operator.itemgetter(0))
   
    header = next(csvreader)
    num_rows = 0
    
    for row in csvreader : 
            num_rows += 1
        if  column in row:
        row=="khan":
            candidates.append(row[2])
    #if row not in candidates :
            
    #if row[2] this not in candidates: 
           #candidates.append[2]
   



 
print("Total Votes:", num_rows)
print(candidates)


