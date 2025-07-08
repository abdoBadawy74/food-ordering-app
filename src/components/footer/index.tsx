

export default function Footer() {
  return (
    <footer className="bg-gray-200 text-black py-4 text-center">
      <p className="text-sm">
        &copy; {new Date().getFullYear()} Abdulrahman Badawy. All rights
        reserved.
      </p>
      <p className="text-xs mt-2">
        Built with ❤️ using Next.js and Tailwind CSS
      </p>
    </footer>
  );
}
