import { useState } from "react";

interface Props {
  onSave: (entry: { name: string; content: string; date: string }) => void;
}

function AddEntryButton({ onSave }: Props) {
  const [name, setName] = useState("");
  const [content, setContent] = useState("");
  const [date, setDate] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    onSave({ name, content, date });
    setName("");
    setContent("");
    setDate("");
  }

  return (
    <>
      <button
        className="btn btn-primary btn-lg"
        data-bs-toggle="modal"
        data-bs-target="#addEntryModal"
      >
        Add Entry
      </button>

      <div className="modal fade" id="addEntryModal" tabIndex={-1}>
        <div className="modal-dialog">
          <div className="modal-content">
            <form onSubmit={handleSubmit}>
              <div className="modal-header">
                <h5 className="modal-title">New Journal Entry</h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                ></button>
              </div>
              <div className="modal-body">
                <input
                  type="text"
                  className="form-control mb-2"
                  placeholder="Entry Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
                <textarea
                  className="form-control mb-2"
                  placeholder="Content"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  required
                />
                <input
                  type="date"
                  className="form-control"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  required
                />
              </div>
              <div className="modal-footer">
                <button className="btn btn-secondary" data-bs-dismiss="modal">
                  Cancel
                </button>
                <button
                  type="submit"
                  className="btn btn-primary"
                  data-bs-dismiss="modal"
                >
                  Save Entry
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddEntryButton;
