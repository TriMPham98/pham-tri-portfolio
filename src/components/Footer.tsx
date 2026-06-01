export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="p-4 text-center bg-black bg-opacity-50 backdrop-blur-sm">
      <p className="text-white text-sm md:text-base">
        © {currentYear} Tri Pham. All rights reserved.
      </p>
    </footer>
  );
}
