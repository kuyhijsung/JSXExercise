function App() {
  return (
    <div>
      <Tweet
        name="Andy Sung"
        username="kuyhijsung"
        date={new Date().toDateString()}
        message="Test message 123."
      />
      <Tweet
        name="Random User 1"
        username="rand1"
        date={new Date().toDateString()}
        message="Test Test Test 123."
      />
      <Tweet
        name="Random User 2"
        username="rand2"
        date={new Date().toDateString()}
        message="Test Test Test 321."
      />
    </div>
  );
}   