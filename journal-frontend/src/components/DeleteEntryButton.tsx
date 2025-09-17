interface Props {
  onDelete: (entry: { id: number }) => void;
  entry: { id: number };
}

function DeleteEntryButton({ onDelete, entry }: Props) {
  return (
    <button
      type="button"
      className="btn btn-danger"
      onClick={() => onDelete(entry)}
    >
      Delete
    </button>
  );
}

export default DeleteEntryButton;
