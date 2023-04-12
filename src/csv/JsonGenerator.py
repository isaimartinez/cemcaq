import csv
import json

# Open the CSV file for reading
with open('best_results.csv', 'r') as csvfile:
    # Create a CSV reader object
    reader = csv.DictReader(csvfile)

    # Create an empty dictionary to store the nested JSON objects
    data_by_location = {
        'CAP': {},
        'COR': {},
        'EPG': {},
        'FEO': {}
    }

    # Iterate over each row in the CSV file
    for row in reader:
        # Extract the required fields from the row
        dateTime = row['Date_Time']
        location = row['Location']
        label = row['Label']
        actual = float(row['Actual'])
        predict = float(row['Predict'])
        score = float(row['Score'])
        print(dateTime)
        # Create a JSON object with the required structure
        obj = {
            'actual': actual,
            'predict': predict,
            'score': score,
            'datetime': dateTime
        }

        # Add the JSON object to the appropriate list based on the location and label
        if label in data_by_location[location]:
            data_by_location[location][label].append(obj)
        else:
            data_by_location[location][label] = [obj]

    # Convert the nested dictionary to the required format
    data = []
    for location, labels in data_by_location.items():
        loc_obj = {location: []}
        for label, objs in labels.items():
            label_obj = {label: objs}
            loc_obj[location].append(label_obj)
        data.append(loc_obj)

# Write the JSON output to a file
with open('output.json', 'w') as outfile:
    json.dump(data, outfile, indent=4)

print('JSON output written to output.json')
