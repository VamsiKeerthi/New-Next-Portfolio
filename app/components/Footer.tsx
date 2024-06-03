export default function Footer() {
  return (
    <footer className="w-full text-gray-400 py-4 flex justify-center items-center font-secondary">
      <div className="text-center">
        <div>Vamsi Keerthi</div>
        <div className="normal-nums">
          @{new Date().getFullYear()} All Rights Reserved
        </div>
      </div>
    </footer>
  );
}
