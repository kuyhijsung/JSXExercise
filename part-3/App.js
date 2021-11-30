function App() {
  return (
    <div>
      <Person
        name="Andy"
        age={23}
        hobbies={["reading", "games", "coding"]}
      />
      <Person name="Lily" age={22} hobbies={["piano", "violin", "drawing"]} />
      <Person
        name="Marc"
        age={15}
        hobbies={["studying", "running"]}
      />
      <Person
        name="Emma"
        age={4}
        hobbies={["eating", "dolls", "singing"]}
      />
    </div>
  );
}