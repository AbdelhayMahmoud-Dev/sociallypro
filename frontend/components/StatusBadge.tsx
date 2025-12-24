export default function StatusBadge({ status }: { status: string }) {
  const colors: any = {
    PENDING: "bg-yellow-500/20 text-yellow-400",
    IN_PROGRESS: "bg-blue-500/20 text-blue-400",
    COMPLETED: "bg-green-500/20 text-green-400",
    CANCELED: "bg-red-500/20 text-red-400",
  };

  return (
    <span className={`px-3 py-1 rounded-full text-sm ${colors[status]}`}>
      {status}
    </span>
  );
}
