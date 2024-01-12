# Dummy library

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

####This minimalist application serves as a practical playground for exploring the modern structure of Redux Toolkit. Engage with a collection of books, seamlessly search, toggle their read status, and delve into their comprehensive details on dedicated pages. Powered by Redux Toolkit and RTK Query, this mini-app is crafted in 100% TypeScript, showcasing a well-structured component architecture for enhanced customization, reusability, and robust prop typing.

## Simple structor expnation

#####The Application Has 3 Main Pages:

1-`/` (Home Page): This central hub showcases a comprehensive list of all available books. Users can effortlessly toggle the `Read` or `Unread` status of any book. Additionally, a handy search bar allows users to quickly locate books by their title. To explore the details of a specific book, navigate to the `/books/[bookId]` page.

2-`/myBooks` (My Books Page): This page displays a list of books that the user has marked as read. Users can also mark books as `unread` from this page and it will desepre from this list here you can search too.

3-`/books/[bookId]` (Book page) too show single selected book with more detils also you can togle read in here too

---

#####Technical Functionality Hint

######The application's core functionality is managed by **Redux Toolkit**, providing a centralized and organized approach to data handling and state management.

The application initially fetches a list of books using the `books-api-slice` from a REST API hosted by jsonplaceholder, retrieving a total of 25 book items.

On the home page `/`, the displayed list of books is dynamically filtered based on the user's **search** input, ensuring that only relevant books are shown . If the **search** input is empty, all books are displayed

Similarly, the `/myBooks` page filters the book list based on the user's **search** input and a separate **id array** holding the `IDs` of books that the user has marked as read.

When navigating to the `/books/[bookId]` page, the application extracts the book `ID` from the URL parameters. This `ID` is then utilized to trigger a separate endpoint within the `books-api-slice` specifically designed for retrieving a single book.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Deployed version on vercel

[Dummy library](http://localhost:3000) | https://dommy-library.vercel.app > use `vpn` if you from iran 😔
