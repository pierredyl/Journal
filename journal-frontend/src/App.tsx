import Button from "./components/Button";
import JournalEntry from "./components/JournalEntry";
import { useEffect, useState } from "react";
import AddEntryButton from "./components/AddEntryButton";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

interface JournalEntryInterface {
  id: number;
  name: string;
  content: string;
  created: string;
}

function App() {
  const [entries, setEntries] = useState<JournalEntryInterface[]>([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/JournalEntry/").then((response) =>
      response.json().then((data) => setEntries(data))
    );
  }, []);

  async function handleSave(entry: {
    name: string;
    content: string;
    date: string;
  }) {
    const response = await fetch("http://localhost:8080/api/JournalEntry/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(entry),
    });

    if (!response.ok) {
      console.error("Failed to save entry");
    }

    const saved: JournalEntryInterface = await response.json();

    setEntries((prevEntries) => [...prevEntries, saved]);
  }

  async function handleDelete(entry: { id: number }) {
    const response = await fetch(
      `http://localhost:8080/api/JournalEntry/${entry.id}`,
      {
        method: "DELETE",
      }
    );

    if (response.ok) {
      setEntries((prevEntries) => prevEntries.filter((e) => e.id !== entry.id));
    }
  }

  async function handleUpdate(entry: {
    id: number;
    name: string;
    content: string;
    created: string;
  }) {
    const response = await fetch(
      `http://localhost:8080/api/JournalEntry/${entry.id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(entry),
      }
    );
  }

  return (
    <>
      <div className="d-flex" style={{ height: "100vh" }}>
        {/* Sidebar */}
        <div className="w-25 bg-secondary d-flex flex-column justify-content-center align-items-center gap-5">
          <AddEntryButton onSave={handleSave} />
        </div>

        {/* Main Content */}
        <div className="container bg-light my-auto p-3">
          <div className="d-flex gap-5 flex-column">
            {entries.map((entry) => (
              <JournalEntry
                key={entry.id}
                entry={entry}
                onDelete={handleDelete}
                onUpdate={handleUpdate}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
