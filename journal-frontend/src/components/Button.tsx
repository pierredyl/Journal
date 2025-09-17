interface Props {
  label: string;
  onClick?: () => void;
}

function Button({ label, onClick }: Props) {
  return (
    <button type="button" className="btn btn-primary btn-lg">
      {label}
    </button>
  );
}

export default Button;
