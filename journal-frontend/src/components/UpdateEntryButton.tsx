import { useState } from "react";

interface Props {
  entry: { id: number; name: string; content: string; created: string };
  onUpdate: (entry: {
    id: number;
    name: string;
    content: string;
    created: string;
  }) => void;
}

function UpdateEntryButton({ entry, onUpdate }: Props) {
  const [name, setName] = useState(entry.name);
  const [content, setContent] = useState(entry.content);
  const [date, setDate] = useState(entry.created);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    onUpdate({ id: entry.id, name, content, created: date });
  }

  return (
    <>
      <button
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target={"#updateEntryModal-" + entry.id}
      >
        Update
      </button>

      <div
        className="modal fade"
        id={`updateEntryModal-${entry.id}`}
        tabIndex={-1}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <form onSubmit={handleSubmit}>
              <div className="modal-header">
                <h5 className="modal-title">{entry.name}</h5>
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

export default UpdateEntryButton;
