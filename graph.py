import matplotlib.pyplot as plt

# Data
categories = ['Ram', 'Sid', 'Shyam', 'Joy', 'Mahi']
values = [12, 19, 3, 5, 2]

# Create a bar chart
plt.bar(categories, values, color='skyblue')

# Add title and labels
plt.title('Working hours')
plt.xlabel('hours')
plt.ylabel('Sales')

# Show the chart
plt.show()
