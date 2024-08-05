document.getElementById('bmiForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get values from inputs
    let weight = parseFloat(document.getElementById('weight').value);
    let height = parseFloat(document.getElementById('height').value) / 100; // Convert cm to meters
    
    // Calculate BMI
    let bmi = weight / (height * height);
    
    // Display result
    let resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `Your BMI is: ${bmi.toFixed(1)}`;
  });
  