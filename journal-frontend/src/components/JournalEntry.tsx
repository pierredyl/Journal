import DeleteEntryButton from "./DeleteEntryButton";
import UpdateEntryButton from "./UpdateEntryButton";

interface JournalEntryInterface {
  id: number;
  name: string;
  content: string;
  created: string;
}

interface Props {
  entry: JournalEntryInterface;
  onDelete: (entry: { id: number }) => void;
  onUpdate: (entry: JournalEntryInterface) => void;
}

function JournalEntry({ entry, onDelete, onUpdate }: Props) {
  return (
    <>
      {/* Journal Entry Button */}
      <div className="list-group-item list-group-item-action p-1 text-start">
        <div className="d-flex w-100 justify-content-between">
          <h5 className="mb-1">{entry.name}</h5>
          <small>{entry.created}</small>
        </div>
        <div
          className="d-flex align-items-end flex-column gap-2"
          style={{ width: "auto" }}
        >
          <DeleteEntryButton entry={entry} onDelete={onDelete} />
          <UpdateEntryButton entry={entry} onUpdate={onUpdate} />
        </div>
        <div style={{ maxWidth: "1024px" }}>
          <p className="mb-1 text-truncate">{entry.content}</p>
        </div>
      </div>
    </>
  );
}

export default JournalEntry;
