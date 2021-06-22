describe('Springboard suggested tests', function() {
  function getCurrentUIValues() {
    return {
      amount: +5000,
      years: +5,
      rate: +1,
    }
  }

  it('should calculate the monthly rate correctly', function () {
    expect(calculateMonthlyPayment(getCurrentUIValues())).toBe('85.47');
  });
  
  
  it("should return a result with 2 decimal places", function() {
    expect(calculateMonthlyPayment(getCurrentUIValues())).toBeCloseTo('85.47');
  });
});
