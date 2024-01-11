import BooksList from "@/components/Home_page/BooksList";

export default function Home() {
  return (
    <section className="text-first_text_color max-w-1320 mx-auto">
      <h1 className="text-first_text_color text-center capitalize py-4 text-4xl">
        all books
      </h1>
      <BooksList />
    </section>
  );
}
