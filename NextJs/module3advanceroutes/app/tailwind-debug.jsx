// Temporary debug file: contains color utility classes so Tailwind's content
// scanner picks them up during development.
export default function TailwindDebug() {
  // This component is never rendered, it's only present so Tailwind's
  // content scanner picks up these utility class names during development.
  return (
    <div style={{display: 'none'}} className="bg-green-500 bg-blue-500 bg-red-500 text-white">
      debug
    </div>
  );
}

